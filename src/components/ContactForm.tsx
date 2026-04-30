"use client";

import { useState } from "react";

const projectTypes = ["Roofing", "Skylight / atrium", "Façade", "Carport / canopy", "Walkway", "Greenhouse", "Other"];
const areas = ["Under 200 m²", "200–1,000 m²", "1,000–5,000 m²", "5,000+ m²", "Not yet known"];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "", firm: "", email: "", phone: "",
    type: projectTypes[0], area: areas[0], message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, message: `${form.message}\n\nFirm: ${form.firm}\nArea: ${form.area}` }),
      });
      if (!res.ok) {
        const d = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(d.error ?? "Could not send brief");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="border border-[#d9d6cc] bg-[#fafaf7] p-10 lg:p-12">
        <p className="label text-[#4a4a47]">Brief received</p>
        <h2 className="mt-4 font-display text-3xl lg:text-4xl text-[#111110]">Thank you.</h2>
        <p className="mt-4 text-[#4a4a47] leading-relaxed">
          A Coxwell engineer will respond to your brief within 24 hours, usually sooner. For urgent matters,
          email <a className="underline underline-offset-4" href="mailto:specify@coxwell.in">specify@coxwell.in</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-[#d9d6cc] bg-[#fafaf7] p-8 lg:p-10 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Full name" name="name" required value={form.name} onChange={handleChange} />
        <Field label="Practice / firm" name="firm" value={form.firm} onChange={handleChange} />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Email" name="email" type="email" required value={form.email} onChange={handleChange} />
        <Field label="Phone" name="phone" value={form.phone} onChange={handleChange} />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <SelectField label="Project type" name="type" value={form.type} onChange={handleChange} options={projectTypes} />
        <SelectField label="Approx. area" name="area" value={form.area} onChange={handleChange} options={areas} />
      </div>
      <div>
        <label className="label text-[#4a4a47] block mb-2">Brief</label>
        <textarea
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Project type, location, timeline, daylight goals…"
          className="w-full bg-white border border-[#d9d6cc] px-4 py-3 text-[#111110] placeholder-[#4a4a47] focus:outline-none focus:border-[#111110] resize-none"
        />
      </div>
      {error && <p className="text-sm text-red-700 border border-red-200 bg-red-50 px-3 py-2">{error}</p>}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
        <p className="text-xs text-[#4a4a47] max-w-md">
          By submitting, you agree to receive a single response from Coxwell engineering. We don&apos;t add briefs to a marketing list.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="px-6 py-3 rounded-full bg-[#111110] text-[#fafaf7] text-sm hover:bg-[#4a4a47] disabled:opacity-50 transition-colors"
        >
          {submitting ? "Sending…" : "Send brief"}
        </button>
      </div>
    </form>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="label text-[#4a4a47] block mb-2">{label}</label>
      <input
        {...props}
        className="w-full bg-white border border-[#d9d6cc] px-4 py-3 text-[#111110] placeholder-[#4a4a47] focus:outline-none focus:border-[#111110]"
      />
    </div>
  );
}

function SelectField({
  label, options, ...props
}: { label: string; options: string[] } & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div>
      <label className="label text-[#4a4a47] block mb-2">{label}</label>
      <select
        {...props}
        className="w-full bg-white border border-[#d9d6cc] px-4 py-3 text-[#111110] focus:outline-none focus:border-[#111110]"
      >
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
