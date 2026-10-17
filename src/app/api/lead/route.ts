import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type Lead = {
  name?: string;
  phone?: string;
  email?: string;
  town?: string;
  service?: string;
  message?: string;
  source?: string;
  page?: string;
  company?: string;
  photos?: unknown;
};

// The form shrinks photos to ~1400 px JPEGs; anything else or anything bigger is dropped.
const MAX_PHOTOS = 6;
const MAX_PHOTO_B64 = 1_400_000;
const JPEG_PREFIX = "data:image/jpeg;base64,";

function photosFrom(v: unknown): string[] {
  if (!Array.isArray(v)) return [];
  return v
    .filter((p): p is string => typeof p === "string" && p.startsWith(JPEG_PREFIX))
    .map((p) => p.slice(JPEG_PREFIX.length))
    .filter((b64) => b64.length <= MAX_PHOTO_B64 && /^[A-Za-z0-9+/=]+$/.test(b64))
    .slice(0, MAX_PHOTOS);
}

const clean = (v: unknown, max = 500) => (typeof v === "string" ? v.replace(/[<>]/g, "").trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Lead;
  try {
    body = (await req.json()) as Lead;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: bots fill the hidden company field. Pretend success.
  if (clean(body.company, 10)) return NextResponse.json({ ok: true });

  const lead = {
    name: clean(body.name, 120),
    phone: clean(body.phone, 40),
    email: clean(body.email, 160),
    town: clean(body.town, 80),
    service: clean(body.service, 80),
    message: clean(body.message, 2000),
    source: clean(body.source, 60),
    page: clean(body.page, 200),
  };
  const photos = photosFrom(body.photos);

  if (!lead.name || lead.phone.replace(/\D/g, "").length < 10) {
    return NextResponse.json({ ok: false, error: "Name and phone are required" }, { status: 422 });
  }

  const kind = photos.length ? "Photo quote" : "Estimate request";
  const subject = `${kind}: ${lead.service || "project"} in ${lead.town || "PA"} (${lead.name})`;

  // Resend delivers the email. Without a key the lead is only logged (local development).
  // RESEND_FROM needs a domain verified in Resend; onboarding@resend.dev only reaches the account owner.
  const key = process.env.RESEND_API_KEY;
  if (key) {
    const text = [
      `Name: ${lead.name}`,
      `Phone: ${lead.phone}`,
      `Email: ${lead.email || "-"}`,
      `Town: ${lead.town || "-"}`,
      `Service: ${lead.service || "-"}`,
      "",
      lead.message || "(no message)",
      "",
      `Page: ${site.url}${lead.page}`,
      `Source: ${lead.source || "-"}`,
      `Photos: ${photos.length ? `${photos.length} attached` : "none"}`,
    ].join("\n");
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
      body: JSON.stringify({
        from: process.env.RESEND_FROM || "D&E Mako website <onboarding@resend.dev>",
        to: [process.env.LEAD_TO || site.email],
        reply_to: lead.email || undefined,
        subject,
        text,
        attachments: photos.length ? photos.map((content, i) => ({ filename: `photo-${i + 1}.jpg`, content })) : undefined,
      }),
    });
    if (!res.ok) {
      console.error("resend failed", res.status, await res.text());
      return NextResponse.json({ ok: false, error: "Could not send right now. Please call us." }, { status: 502 });
    }
  } else {
    console.log("[lead]", subject, JSON.stringify({ ...lead, photos: photos.length }));
  }

  return NextResponse.json({ ok: true });
}
