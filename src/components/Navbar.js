"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconSearch } from "@/components/Icons";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full bg-[#FBF8F3]/98 backdrop-blur-md border-b border-[#EADFC9] px-4 sm:px-6 lg:px-16 flex items-center justify-between transition-all ${
          scrolled ? "py-3 shadow-md min-h-[72px]" : "py-4 sm:py-5 shadow-sm min-h-[80px] sm:min-h-[88px]"
        }`}
      >
        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-lg hover:bg-[#EADFC9]/50 transition-colors"
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          <span
            className={`block w-5 h-[2px] bg-[#1B4341] rounded-full transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[3px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-[#1B4341] rounded-full transition-all duration-300 mt-[4px] ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-[#1B4341] rounded-full transition-all duration-300 mt-[4px] ${
              mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""
            }`}
          />
        </button>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-[10px] lg:text-xs font-bold tracking-[0.18em] uppercase text-[#444]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-1 transition-colors ${
                isActive(link.href)
                  ? "text-black font-extrabold border-b-2 border-[#1B4341]"
                  : "hover:text-black"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Center Brand Logo */}
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-wider text-[#1B4341] hover:opacity-85 transition-opacity"
          >
            <span className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-[#1B4341] text-[#FBF8F3] flex items-center justify-center text-sm sm:text-base lg:text-lg font-serif shadow-inner">
              ✿
            </span>
            <span>Eglanto</span>
          </Link>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-3 sm:gap-5">
          <button
            className="p-2 text-zinc-700 hover:text-black transition-colors"
            title="Search"
            id="search-toggle"
          >
            <IconSearch className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <a
            href="/contact"
            className="hidden sm:flex items-center gap-2 bg-[#1B4341] text-white px-4 md:px-6 lg:px-8 py-2.5 md:py-3 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-[#122D2B] transition-all shadow-md transform hover:-translate-y-0.5"
            id="cta-consultation"
          >
            <span className="whitespace-nowrap">Book Consultation</span>
          </a>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-[280px] bg-[#FBF8F3] shadow-2xl transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-[#EADFC9]">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-serif font-bold text-[#1B4341]"
            onClick={() => setMobileOpen(false)}
          >
            <span className="w-7 h-7 rounded-full bg-[#1B4341] text-[#FBF8F3] flex items-center justify-center text-xs font-serif">
              ✿
            </span>
            <span>Eglanto</span>
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#EADFC9]/60 transition-colors text-[#1B4341]"
            aria-label="Close menu"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Mobile Nav Links */}
        <nav className="flex flex-col px-5 py-6 gap-1">
          {links.map((link, idx) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 ${
                isActive(link.href)
                  ? "bg-[#1B4341] text-white shadow-md"
                  : "text-[#333] hover:bg-[#EADFC9]/40 hover:text-[#1B4341]"
              }`}
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${
                isActive(link.href) ? "bg-white" : "bg-[#1B4341]/30"
              }`} />
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile CTA */}
        <div className="px-5 mt-4">
          <a
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-[#1B4341] text-white px-5 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#122D2B] transition-all shadow-md"
          >
            Book Consultation
          </a>
        </div>

        {/* Decorative accent */}
        <div className="absolute bottom-8 left-5 right-5">
          <div className="border-t border-[#EADFC9] pt-5">
            <p className="text-[10px] uppercase tracking-widest text-[#999] text-center">
              Ethical Luxury Since 1970
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
