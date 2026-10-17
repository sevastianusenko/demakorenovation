"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { services } from "@/content/services";
import { Button } from "./ui/Button";

type Status = "idle" | "sending" | "sent" | "error";
type Shot = { id: string; name: string; data: string };

// Vercel caps a request at 4.5 MB, so photos are shrunk in the browser before they are sent.
const MAX_PHOTOS = 6;
const MAX_SIDE = 1400;

async function shrink(file: File): Promise<string> {
  const bmp = await createImageBitmap(file);
  const scale = Math.min(1, MAX_SIDE / Math.max(bmp.width, bmp.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bmp.width * scale);
  canvas.height = Math.round(bmp.height * scale);
  canvas.getContext("2d")!.drawImage(bmp, 0, 0, canvas.width, canvas.height);
  bmp.close();
  return canvas.toDataURL("image/jpeg", 0.75);
}

export function LeadForm({
  source = "site",
  defaultService,
  tone = "light",
  compact = false,
}: {
  source?: string;
  defaultService?: string;
  tone?: "light" | "dark";
  compact?: boolean;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [shots, setShots] = useState<Shot[]>([]);
  const [reading, setReading] = useState(false);

  async function onPhotos(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.currentTarget;
    const files = Array.from(input.files ?? []).slice(0, MAX_PHOTOS - shots.length);
    input.value = "";
    if (!files.length) return;
    setReading(true);
    const added: Shot[] = [];
    const failed: string[] = [];
    for (const f of files) {
      try {
        added.push({ id: `${f.name}-${f.size}-${f.lastModified}`, name: f.name, data: await shrink(f) });
      } catch {
        failed.push(f.name);
      }
    }
    setShots((prev) => [...prev, ...added.filter((a) => !prev.some((p) => p.id === a.id))].slice(0, MAX_PHOTOS));
    setReading(false);
    if (failed.length) {
      setError(`Could not open ${failed.join(", ")}. Try a JPG or PNG, or text it to us at ${site.phone}.`);
      setStatus("error");
    } else if (status === "error") {
      setStatus("idle");
      setError("");
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const phone = String(data.get("phone") || "");
    if (phone.replace(/\D/g, "").length < 10) {
      setError("Add a phone number with the area code so we can call you back.");
      setStatus("error");
      return;
    }
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/lead/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone,
          email: data.get("email"),
          town: data.get("town"),
          service: data.get("service"),
          message: data.get("message"),
          company: data.get("company"),
          photos: shots.map((s) => s.data),
          source,
          page: typeof window !== "undefined" ? window.location.pathname : "",
        }),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !json.ok) throw new Error(json.error || "Could not send");
      setStatus("sent");
      setShots([]);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send");
      setStatus("error");
    }
  }

  const dark = tone === "dark";
  const label = `block text-[0.72rem] font-semibold uppercase tracking-[0.08em] ${dark ? "text-white/70" : "text-ink-mute"}`;
  const hint = `text-[0.85rem] ${dark ? "text-white/60" : "text-ink-mute"}`;

  if (status === "sent") {
    return (
      <div className={`rounded-card p-5 ${dark ? "bg-white/10" : "bg-mist"}`} role="status">
        <p className="font-display text-[1.25rem] font-bold">Thanks, we got it.</p>
        <p className={`mt-2 ${dark ? "text-white/80" : "text-ink-soft"}`}>
          {site.callbackPromise}. If you sent photos, we will reply with a rough price range. If it is urgent, call{" "}
          <a href={site.phoneHref} className="underline">
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"} ${dark ? "on-dark" : ""}`} noValidate>
      <div className="hidden" aria-hidden="true">
        <label>
          Company <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div>
        <label htmlFor={`${source}-name`} className={label}>
          Name
        </label>
        <input id={`${source}-name`} name="name" required autoComplete="name" className="field mt-1.5" placeholder="Your name" />
      </div>
      <div>
        <label htmlFor={`${source}-phone`} className={label}>
          Phone
        </label>
        <input id={`${source}-phone`} name="phone" type="tel" required autoComplete="tel" inputMode="tel" className="field mt-1.5" placeholder="(717) 555-0100" />
      </div>
      {!compact && (
        <>
          <div>
            <label htmlFor={`${source}-email`} className={label}>
              Email (optional)
            </label>
            <input id={`${source}-email`} name="email" type="email" autoComplete="email" className="field mt-1.5" placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor={`${source}-town`} className={label}>
              Town
            </label>
            <input id={`${source}-town`} name="town" autoComplete="address-level2" className="field mt-1.5" placeholder="Ephrata, Lititz, Wayne, Media..." />
          </div>
        </>
      )}
      <div className={compact ? "" : "sm:col-span-2"}>
        <label htmlFor={`${source}-service`} className={label}>
          What do you need done?
        </label>
        <select id={`${source}-service`} name="service" defaultValue={defaultService ?? ""} className="field mt-1.5">
          <option value="">Pick one (optional)</option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Something else">Something else</option>
        </select>
      </div>
      {!compact && (
        <div className="sm:col-span-2">
          <label htmlFor={`${source}-message`} className={label}>
            Tell us about the project
          </label>
          <textarea id={`${source}-message`} name="message" rows={4} className="field mt-1.5" placeholder="What needs doing, roughly how big it is, and when you would like to start." />
        </div>
      )}
      <div className={compact ? "" : "sm:col-span-2"}>
        <p className={label} id={`${source}-photos-label`}>
          Photos for a ballpark price (optional)
        </p>
        <div className="mt-1.5 flex flex-wrap items-center gap-3">
          {shots.map((s, i) => (
            <div key={s.id} className="relative h-16 w-16 overflow-hidden rounded-lg border border-ink/10 bg-night/10">
              {/* eslint-disable-next-line @next/next/no-img-element -- local data URL preview */}
              <img src={s.data} alt={`Photo ${i + 1}: ${s.name}`} className="h-full w-full object-cover" />
              <button
                type="button"
                onClick={() => setShots((prev) => prev.filter((p) => p.id !== s.id))}
                className="absolute right-0.5 top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-night/80 text-[0.9rem] leading-none text-white hover:bg-night"
                aria-label={`Remove photo ${i + 1}`}
              >
                ×
              </button>
            </div>
          ))}
          {shots.length < MAX_PHOTOS && (
            <label
              className={`flex h-16 cursor-pointer items-center gap-2 rounded-lg border-2 border-dashed px-4 text-[0.92rem] font-semibold focus-within:outline focus-within:outline-3 focus-within:outline-tan ${
                dark ? "border-white/30 text-white hover:border-beige" : "border-ink/25 text-ink hover:border-tan"
              }`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 8h3l2-3h6l2 3h3v11H4z" />
                <circle cx="12" cy="13" r="3.5" />
              </svg>
              {reading ? "Adding..." : shots.length ? "Add more" : "Add photos"}
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={onPhotos}
                disabled={reading}
                className="sr-only"
                aria-labelledby={`${source}-photos-label`}
              />
            </label>
          )}
        </div>
        <p className={`mt-2 ${hint}`}>
          Up to {MAX_PHOTOS}. One wide shot of the whole wall or room, plus close-ups of the problem spots. We reply with a rough range; the written price comes after a free visit.
        </p>
      </div>
      <div className={`flex flex-col gap-3 sm:flex-row sm:items-center ${compact ? "" : "sm:col-span-2"}`}>
        <Button variant="tan" disabled={status === "sending" || reading} className="w-full sm:w-auto">
          {status === "sending" ? "Sending..." : shots.length ? "Get my ballpark price" : "Request a free estimate"}
        </Button>
        <p className={hint}>No obligation. We reply during work hours, Monday to Friday.</p>
      </div>
      {status === "error" && (
        <p className={`text-[0.95rem] text-danger ${compact ? "" : "sm:col-span-2"}`} role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
