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
};

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

  if (!lead.name || lead.phone.replace(/\D/g, "").length < 10) {
    return NextResponse.json({ ok: false, error: "Name and phone are required" }, { status: 422 });
  }

  const subject = `Estimate request: ${lead.service || "project"} in ${lead.town || "PA"} (${lead.name})`;

  // Web3Forms delivers the email. Without a key the lead is only logged (local development).
  const key = process.env.WEB3FORMS_KEY;
  if (key) {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: key,
        subject,
        from_name: "D&E Mako website",
        name: lead.name,
        phone: lead.phone,
        email: lead.email || undefined,
        town: lead.town,
        service: lead.service,
        message: lead.message,
        page: `${site.url}${lead.page}`,
        source: lead.source,
      }),
    });
    if (!res.ok) {
      console.error("web3forms failed", res.status, await res.text());
      return NextResponse.json({ ok: false, error: "Could not send right now. Please call us." }, { status: 502 });
    }
  } else {
    console.log("[lead]", subject, JSON.stringify(lead));
  }

  return NextResponse.json({ ok: true });
}
