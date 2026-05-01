"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, ChevronDown } from "lucide-react";

const products = [
  { name: "Multicell", href: "/products#multicell" },
  { name: "Prism", href: "/products#prism" },
  { name: "Vivid", href: "/products#vivid" },
  { name: "Snapwall", href: "/products#snapwall" },
  { name: "X-Fix", href: "/products#xfix" },
  { name: "Static", href: "/products#static" },
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
        scrolled ? "bg-black/95 backdrop-blur" : "bg-black"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/Logo-white-01.png"
              alt="Coxwell"
              width={120}
              height={40}
              className="h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Products with dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-white hover:text-[#e03d22] transition-colors">
                Products <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-0 mt-2 w-[420px] bg-white text-black rounded-xl shadow-2xl p-6 hidden group-hover:block z-50">
                <div className="grid grid-cols-2 gap-3">
                  {products.map((p) => (
                    <Link
                      key={p.name}
                      href={p.href}
                      className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-800 hover:text-[#e03d22]"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#e03d22] shrink-0" />
                      {p.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Link href="/products" className="text-sm font-semibold text-[#e03d22] hover:underline">
                    View all products →
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/applications" className="text-sm font-medium text-white hover:text-[#e03d22] transition-colors">
              Applications
            </Link>
            <Link href="/projects" className="text-sm font-medium text-white hover:text-[#e03d22] transition-colors">
              Projects
            </Link>
            <Link href="/about" className="text-sm font-medium text-white hover:text-[#e03d22] transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-white hover:text-[#e03d22] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-white hover:text-[#e03d22] transition-colors">
              <Search size={18} />
            </button>
            <Link
              href="/contact"
              className="bg-[#e03d22] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#c32d19] transition-colors"
            >
              Get demo with us
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-white"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-black">
          <div className="px-6 py-4 space-y-1">
            <Link href="/products" onClick={() => setOpen(false)} className="block py-2.5 text-white text-sm">Products</Link>
            <Link href="/applications" onClick={() => setOpen(false)} className="block py-2.5 text-white text-sm">Applications</Link>
            <Link href="/projects" onClick={() => setOpen(false)} className="block py-2.5 text-white text-sm">Projects</Link>
            <Link href="/about" onClick={() => setOpen(false)} className="block py-2.5 text-white text-sm">About</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="block py-2.5 text-white text-sm">Contact</Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block mt-3 px-5 py-2.5 text-center rounded-full bg-[#e03d22] text-white text-sm font-semibold"
            >
              Get demo with us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
