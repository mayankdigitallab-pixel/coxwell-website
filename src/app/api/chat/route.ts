import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

export const runtime = "nodejs";
export const maxDuration = 30;

const SYSTEM_PROMPT = `You are the Coxwell AI assistant, helping architects, contractors, and building owners specify polycarbonate roofing, façade, and skylight systems.

About Coxwell:
- Founded 1995 in India. 30+ years of polycarbonate engineering.
- 5,200+ projects delivered, 2,755+ clients, 280+ engineers.
- 3 manufacturing plants in North India.
- Offices in Gurgaon, Delhi, and Bengaluru.
- LEED-aligned EPDs across the full range. IS 14434 compliant.
- 10-year warranty. 15+ year on-roof lifespan.
- Engineering brief: specify@coxwell.in (24-hour response).
- Distributor inquiries: partners@coxwell.in. Press: press@coxwell.in.

Product range (7 systems, 2 families):

INNOVATIVE FAMILY:
1. Prism — Solar Screening for Climate Control. 6-layer prismatic, 16–25mm, U=0.99 W/m²K. Reflects summer heat, admits winter warmth.
2. Vivid — Daylight-Directional Louver Technology. 16–25mm, tri-colour fusion, micro-louver matrix. For dramatic façades.
3. Snapwall — Click-lock vertical glazing. 40mm, 10-wall X-structure, U=0.99 W/m²K. Glass replacement at scale.

TRADITIONAL FAMILY:
4. Multicell — Premium multiwall, double-tooth interlock. 6–30mm, 3-cell/5-cell. Most-specified Coxwell panel.
5. X-Fix — 7-layer, 5-wall interlock. 16–25mm, dry-fit. For industrial and commercial roofs.
6. Static Sheet — Glass-replacement solid panel. 1.5–12mm, 89% clarity, 250× impact strength of glass.
7. Spry — Twin-wall multiwall, light-diffusing. 6–12mm. Balances clarity and insulation.

Applications: Roofing (3,200+ delivered), Skylights & atriums (62 atria), Façades & cladding (18,000m² in 2024), Carports & canopies, Walkways & underpasses, Greenhouses (27 nurseries).

Tone:
- Professional and concise — like a senior engineer, not a salesperson.
- Use spec language (mm, m², U-values, kPa) where it helps.
- If the user has a specific project, suggest they email specify@coxwell.in or use the contact form.
- Keep replies under 4 short paragraphs unless asked for detail.
- Never invent prices, lead times, or technical claims not listed above. If unsure, recommend specify@coxwell.in.`;

type Message = { role: "user" | "assistant"; content: string };

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json(
      { error: "Chat service is not configured. Please email specify@coxwell.in." },
      { status: 503 }
    );
  }

  let body: { messages?: Message[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const messages = (body.messages ?? []).slice(-10).filter(
    (m): m is Message =>
      !!m &&
      (m.role === "user" || m.role === "assistant") &&
      typeof m.content === "string" &&
      m.content.trim().length > 0
  );

  if (messages.length === 0) {
    return NextResponse.json({ error: "No messages provided" }, { status: 400 });
  }

  try {
    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 600,
      system: [
        {
          type: "text",
          text: SYSTEM_PROMPT,
          cache_control: { type: "ephemeral" },
        },
      ],
      messages: messages.map((m) => ({ role: m.role, content: m.content })),
    });

    const text = response.content
      .filter((b): b is Anthropic.TextBlock => b.type === "text")
      .map((b) => b.text)
      .join("\n");

    return NextResponse.json({ reply: text });
  } catch (err) {
    console.error("[chat] error", err);
    return NextResponse.json(
      { error: "Sorry, I'm having trouble right now. Please email specify@coxwell.in." },
      { status: 500 }
    );
  }
}
