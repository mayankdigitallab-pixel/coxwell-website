"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const offices = [
  { city: "Gurgaon", address: "DLF Cyber City, Sector 24, Gurugram, Haryana 122002" },
  { city: "Delhi", address: "Connaught Place, New Delhi 110001" },
  { city: "Bengaluru", address: "UB City, Vittal Mallya Road, Bengaluru 560001" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", type: "Roofing" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest">
              Contact Us
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold leading-tight">
              Start Your Project with Coxwell
            </h2>
            <p className="mt-6 text-slate-400 text-lg leading-relaxed">
              Get a free consultation and quote for your roofing or façade project. Our team of
              experts will recommend the right system for your specific needs.
            </p>

            <div className="mt-10 space-y-6">
              {offices.map((o) => (
                <div key={o.city} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-amber-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{o.city}</div>
                    <div className="text-slate-400 text-sm mt-0.5">{o.address}</div>
                  </div>
                </div>
              ))}

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-amber-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">Email</div>
                  <a href="mailto:hello@coxwell.in" className="text-amber-400 text-sm hover:underline">
                    hello@coxwell.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
                  <Send size={28} className="text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-slate-400">
                  We&apos;ve received your enquiry and will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-6">Get a Free Quote</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-400 mb-1.5">Full Name</label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-1.5">Phone</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-1.5">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-1.5">Project Type</label>
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400"
                  >
                    {["Roofing", "Skylight", "Atrium", "Façade", "Carport", "Canopy", "Greenhouse", "Other"].map((t) => (
                      <option key={t} value={t} className="bg-slate-800">{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-1.5">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  Send Enquiry <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
