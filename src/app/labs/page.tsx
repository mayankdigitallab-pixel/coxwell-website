import type { Metadata } from "next";
import Link from "next/link";
import { ElevenLabsWidget } from "@/components/labs/ElevenLabsWidget";

export const metadata: Metadata = {
  title: "Labs — Coxwell",
  description:
    "Talk to our AI — ask about products, specs, pricing, or start a project brief.",
};

export default function LabsPage() {
  return (
    <>
      <section className="pagehead">
        <div className="container">
          <div className="crumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Labs</span>
          </div>
          <div className="head-grid">
            <h1>AI assistant.</h1>
            <p className="lead">
              Voice-first. Ask about our polycarbonate systems, technical
              specifications, pricing, or start a project brief — all in a
              single conversation.
            </p>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <ElevenLabsWidget />

          <p
            style={{
              marginTop: 24,
              fontSize: 12,
              color: "var(--fg-3)",
              lineHeight: 1.5,
            }}
          >
            Requires microphone access. Conversations are processed by
            ElevenLabs and are not stored by Coxwell.
          </p>
        </div>
      </section>
    </>
  );
}
