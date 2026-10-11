"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { services } from "@/content/services";
import { Button } from "./ui/Button";

type Status = "idle" | "sending" | "sent" | "error";

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
          source,
          page: typeof window !== "undefined" ? window.location.pathname : "",
        }),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !json.ok) throw new Error(json.error || "Could not send");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send");
      setStatus("error");
    }
  }

  const dark = tone === "dark";
  const label = `block text-[0.72rem] font-semibold uppercase tracking-[0.08em] ${dark ? "text-white/70" : "text-ink-mute"}`;

  if (status === "sent") {
    return (
      <div className={`rounded-card p-5 ${dark ? "bg-white/10" : "bg-mist"}`} role="status">
        <p className="font-display text-[1.25rem] font-bold">Thanks, we got it.</p>
        <p className={`mt-2 ${dark ? "text-white/80" : "text-ink-soft"}`}>
          {site.callbackPromise}. If it is urgent, call <a href={site.phoneHref} className="underline">{site.phone}</a>.
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
          <textarea id={`${source}-message`} name="message" rows={4} className="field mt-1.5" placeholder="What needs doing, roughly how big it is, and when you would like to start. Photos help: you can text them to us after." />
        </div>
      )}
      <div className={`flex flex-col gap-3 sm:flex-row sm:items-center ${compact ? "" : "sm:col-span-2"}`}>
        <Button variant="tan" disabled={status === "sending"} className="w-full sm:w-auto">
          {status === "sending" ? "Sending..." : "Request a free estimate"}
        </Button>
        <p className={`text-[0.85rem] ${dark ? "text-white/60" : "text-ink-mute"}`}>No obligation. We reply during work hours, Monday to Friday.</p>
      </div>
      {status === "error" && (
        <p className={`text-[0.95rem] text-danger ${compact ? "" : "sm:col-span-2"}`} role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
