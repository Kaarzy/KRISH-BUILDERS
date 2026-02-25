import Link from "next/link";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  ArrowUpRight,
} from "lucide-react";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-gold font-bold text-xl">KB</span>
              </div>
              <div>
                <span className="block text-white font-bold text-xl leading-tight">
                  KRISH
                </span>
                <span className="block text-gold text-xs font-semibold tracking-[0.25em] uppercase">
                  Builders
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {COMPANY.description}
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, href: COMPANY.social.facebook },
                { icon: Instagram, href: COMPANY.social.instagram },
                { icon: Linkedin, href: COMPANY.social.linkedin },
                { icon: Youtube, href: COMPANY.social.youtube },
                { icon: Twitter, href: COMPANY.social.twitter },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-gold/20 hover:text-gold rounded-lg flex items-center justify-center transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-semibold text-sm uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold text-sm transition-colors flex items-center gap-1 group"
                  >
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-gold font-semibold text-sm uppercase tracking-wider mb-6">
              Our Projects
            </h3>
            <ul className="space-y-3">
              {[
                "Krish Towers",
                "Krish Residency",
                "Krish Paradise",
                "Krish Elite",
                "Krish Heights",
                "Krish Grandeur",
              ].map((project) => (
                <li key={project}>
                  <Link
                    href={`/projects/${project.toLowerCase().replace(/ /g, "-")}`}
                    className="text-white/60 hover:text-gold text-sm transition-colors flex items-center gap-1 group"
                  >
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {project}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gold font-semibold text-sm uppercase tracking-wider mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm">{COMPANY.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center gap-3 text-white/60 hover:text-gold text-sm transition-colors"
                >
                  <Phone size={18} className="text-gold flex-shrink-0" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 text-white/60 hover:text-gold text-sm transition-colors"
                >
                  <Mail size={18} className="text-gold flex-shrink-0" />
                  {COMPANY.email}
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <h4 className="text-white font-medium text-sm mb-3">Newsletter</h4>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-white/40 text-sm">
            <Link href="/privacy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold transition-colors">
              Terms of Service
            </Link>
            <span>RERA Registered</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
