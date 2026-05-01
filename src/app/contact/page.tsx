import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Coxwell",
  description: "Send your brief. Engineering response within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pagehead">
        <div className="container">
          <div className="crumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </div>
          <div className="head-grid">
            <h1>Start a project.</h1>
            <p className="lead">
              Send us your brief — drawings, area, application, and a target date. Our engineering
              team will respond with a scoped quote within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 64 }} className="contact-grid">
            <div className="stack" style={{ gap: 32 }}>
              <div>
                <span className="eyebrow">Engineering enquiries</span>
                <p style={{ fontFamily: "var(--font-display)", fontSize: 24, lineHeight: 1.2, margin: "8px 0 0" }}>
                  specify@coxwell.in
                </p>
                <p style={{ color: "var(--fg-2)", fontSize: 14, margin: "4px 0 0" }}>
                  Architects, contractors, MEP. Response within 24h.
                </p>
              </div>
              <div>
                <span className="eyebrow">Distributor enquiries</span>
                <p style={{ fontFamily: "var(--font-display)", fontSize: 24, lineHeight: 1.2, margin: "8px 0 0" }}>
                  partners@coxwell.in
                </p>
                <p style={{ color: "var(--fg-2)", fontSize: 14, margin: "4px 0 0" }}>
                  Apply to become a Coxwell distributor.
                </p>
              </div>
              <div>
                <span className="eyebrow">Press</span>
                <p style={{ fontFamily: "var(--font-display)", fontSize: 24, lineHeight: 1.2, margin: "8px 0 0" }}>
                  press@coxwell.in
                </p>
              </div>
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: 32, marginTop: 8 }}>
                <span className="eyebrow">Headquarters</span>
                <p style={{ margin: "10px 0 0", fontSize: 15, lineHeight: 1.45, color: "var(--fg-2)" }}>
                  Coxwell Global Pvt. Ltd.
                  <br />
                  1005, Level 10, JMD Regent Square,
                  <br />
                  Mehrauli Gurgaon Road,
                  <br />
                  Gurgaon‑122002, Haryana
                </p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <style>{`@media (max-width:920px){ .contact-grid { grid-template-columns: 1fr !important; } }`}</style>
    </>
  );
}

