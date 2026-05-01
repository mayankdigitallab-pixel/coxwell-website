"use client";

import Link from "next/link";

export function StickyLead() {
  return (
    <div className="leadbar">
      <div className="leadbar-text">
        <strong>Have a project to spec?</strong>
        <span>Engineering response within 24h</span>
      </div>
      <Link className="btn btn-sm" href="/contact">
        Get a quote →
      </Link>
    </div>
  );
}

