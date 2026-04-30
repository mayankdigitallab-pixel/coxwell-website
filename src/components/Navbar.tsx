"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/applications" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Specifications", href: "#specifications" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-[#fafaf7]/95 backdrop-blur border-b border-[#d9d6cc]" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-baseline gap-2">
            <span className="font-display text-2xl tracking-tight text-[#111110]">Coxwell</span>
            <span className="label text-[#4a4a47] hidden sm:inline">Est. 1995</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-[#111110] hover:text-[#4a4a47] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="text-sm text-[#111110] hover:underline underline-offset-4"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 rounded-full bg-[#111110] text-[#fafaf7] text-sm hover:bg-[#4a4a47] transition-colors"
            >
              Get a quote
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 -mr-2 text-[#111110]"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[#d9d6cc] bg-[#fafaf7]">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-[#111110]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block py-2.5 text-[#111110]"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block mt-2 px-4 py-2.5 text-center rounded-full bg-[#111110] text-[#fafaf7]"
            >
              Get a quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
