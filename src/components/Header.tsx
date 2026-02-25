"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-navy text-white/80 text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span>📍 {COMPANY.address}</span>
            <span>✉️ {COMPANY.email}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={COMPANY.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Facebook</a>
            <a href={COMPANY.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Instagram</a>
            <a href={COMPANY.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">LinkedIn</a>
            <a href={COMPANY.social.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">YouTube</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5"
            : "bg-white"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center group-hover:bg-navy-light transition-colors">
                <span className="text-gold font-bold text-xl">KB</span>
              </div>
              <div className="hidden sm:block">
                <span className="block text-navy font-bold text-xl leading-tight tracking-tight">
                  KRISH
                </span>
                <span className="block text-gold-dark text-xs font-semibold tracking-[0.25em] uppercase">
                  Builders
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                    pathname === link.href
                      ? "text-gold-dark bg-gold/10"
                      : "text-gray-700 hover:text-navy hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${COMPANY.phone}`}
                className="hidden md:flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:shadow-lg"
              >
                <Phone size={16} />
                {COMPANY.phone}
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-navy hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-100 bg-white overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? "text-gold-dark bg-gold/10"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-100">
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="flex items-center justify-center gap-2 bg-navy text-white px-5 py-3 rounded-lg text-sm font-semibold"
                  >
                    <Phone size={16} />
                    Call Us: {COMPANY.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
