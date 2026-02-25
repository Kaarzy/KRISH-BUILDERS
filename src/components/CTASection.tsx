"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { COMPANY, IMAGES } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.cta}
          alt="Luxury apartment interior"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Start Your Journey
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
              Your Dream Home Awaits
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
              Whether you&apos;re looking for a premium apartment in our completed
              projects or want to explore our upcoming developments, we&apos;re here to
              help you find your perfect home.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy px-8 py-4 rounded-lg text-base font-semibold transition-all hover:shadow-xl hover:shadow-gold/20"
              >
                Book a Free Consultation
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <a
                href={`tel:${COMPANY.phone}`}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg text-base font-semibold transition-all"
              >
                <Phone size={18} />
                Call Us Now
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
