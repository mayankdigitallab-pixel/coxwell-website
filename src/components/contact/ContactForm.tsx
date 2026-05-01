"use client";

import { useState } from "react";

type FormState = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  area: string;
  brief: string;
  website: string; // honeypot
};

const DEFAULTS: FormState = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  projectType: "Roofing",
  area: "Under 200 m²",
  brief: "",
  website: "",
};

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [v, setV] = useState<FormState>(DEFAULTS);

  const set = (k: keyof FormState, val: string) => setV((prev) => ({ ...prev, [k]: val }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/zoho/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(v),
      });
      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || "Failed to submit.");
      }
      setSent(true);
      setV(DEFAULTS);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  if (sent) {
    return (
      <div
        style={{
          gridColumn: "1/-1",
          padding: 32,
          background: "#fff",
          border: "1px solid var(--accent-tint-100, var(--cox-orange-100))",
          borderLeft: "3px solid var(--accent)",
        }}
      >
        <span className="eyebrow" style={{ color: "var(--accent)" }}>
          Sent
        </span>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 500, margin: "10px 0 8px" }}>
          Brief received.
        </h3>
        <p style={{ color: "var(--fg-2)", fontSize: 15, margin: 0 }}>
          Our engineering team will respond within 24 hours with a scoped quote.
        </p>
      </div>
    );
  }

  return (
    <form
      style={{
        background: "var(--cox-gray-50)",
        padding: "40px clamp(28px, 4vw, 48px)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px 16px",
      }}
      onSubmit={submit}
    >
      <div className="field" style={{ display: "none" }}>
        <label>Website</label>
        <input value={v.website} onChange={(e) => set("website", e.target.value)} />
      </div>

      <div className="field">
        <label>Full name</label>
        <input value={v.fullName} onChange={(e) => set("fullName", e.target.value)} placeholder="Aman Mehta" required />
      </div>
      <div className="field">
        <label>Practice / firm</label>
        <input value={v.company} onChange={(e) => set("company", e.target.value)} placeholder="Studio Placeholder" />
      </div>
      <div className="field">
        <label>Email</label>
        <input value={v.email} onChange={(e) => set("email", e.target.value)} type="email" placeholder="aman@studio.in" required />
      </div>
      <div className="field">
        <label>Phone</label>
        <input value={v.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+91 …" />
      </div>
      <div className="field">
        <label>Project type</label>
        <select value={v.projectType} onChange={(e) => set("projectType", e.target.value)}>
          <option>Roofing</option>
          <option>Skylight / atrium</option>
          <option>Façade</option>
          <option>Carport / canopy</option>
          <option>Walkway</option>
          <option>Greenhouse</option>
          <option>Other</option>
        </select>
      </div>
      <div className="field">
        <label>Approximate area</label>
        <select value={v.area} onChange={(e) => set("area", e.target.value)}>
          <option>Under 200 m²</option>
          <option>200–1,000 m²</option>
          <option>1,000–5,000 m²</option>
          <option>5,000+ m²</option>
          <option>Not yet known</option>
        </select>
      </div>
      <div className="field" style={{ gridColumn: "1/-1" }}>
        <label>Brief</label>
        <textarea value={v.brief} onChange={(e) => set("brief", e.target.value)} placeholder="Site, target dates, drawings (we can pick up over email after this), specification challenges…" />
      </div>

      {error && (
        <div style={{ gridColumn: "1/-1", padding: 14, background: "#fff", border: "1px solid var(--border)", color: "var(--fg-2)" }}>
          <strong style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}>Couldn&apos;t submit.</strong>{" "}
          <span>{error}</span>
        </div>
      )}

      <div className="field" style={{ gridColumn: "1/-1" }}>
        <button className="btn btn-primary btn-lg" type="submit" disabled={submitting}>
          {submitting ? "Sending…" : "Send brief →"}
        </button>
      </div>
      <span className="b2" style={{ gridColumn: "1/-1", color: "var(--fg-3)", fontSize: 12, marginTop: -8 }}>
        By submitting, you agree to receive a single response from Coxwell engineering. We don&apos;t add briefs to a marketing list.
      </span>
    </form>
  );
}

