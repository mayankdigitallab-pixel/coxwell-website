"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Applications", href: "#applications" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Specifications", href: "#specifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src={scrolled ? "/images/Logo-png-1536x442.png" : "/images/Logo-white-01-1536x443.png"}
              alt="Coxwell Logo"
              width={160}
              height={46}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-amber-500 ${
                  scrolled ? "text-slate-700" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 px-5 py-2.5 rounded-full bg-amber-500 text-white text-sm font-semibold hover:bg-amber-600 transition-colors"
            >
              Get a Quote
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-2 rounded-md ${scrolled ? "text-slate-700" : "text-white"}`}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 text-slate-700 font-medium rounded-lg hover:bg-slate-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block mt-2 px-3 py-2.5 text-center rounded-full bg-amber-500 text-white font-semibold"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
