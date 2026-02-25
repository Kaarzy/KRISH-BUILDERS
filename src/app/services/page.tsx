import { Metadata } from "next";
import Image from "next/image";
import {
  Building2,
  Palette,
  Cpu,
  Leaf,
  MapPin,
  Headphones,
  Check,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { services } from "@/data/services";
import { IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Discover Krish Builders' comprehensive construction services — from high-rise residential construction to smart home integration and sustainable green building.",
};

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Building2,
  Palette,
  Cpu,
  Leaf,
  MapPin,
  HeadphonesIcon: Headphones,
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.services}
            alt="Krish Builders Services"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <AnimatedSection>
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              What We Do
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-3 mb-4">
              Our Services
            </h1>
            <p className="text-white/70 text-lg max-w-2xl">
              End-to-end construction expertise, from architectural design to property
              management — delivering excellence at every stage.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-24">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Building2;
              const isEven = i % 2 === 0;

              return (
                <div
                  key={i}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? "lg:direction-rtl" : ""
                  }`}
                >
                  <AnimatedSection
                    direction={isEven ? "left" : "right"}
                    className={!isEven ? "lg:order-2" : ""}
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-lg h-[400px]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </AnimatedSection>

                  <AnimatedSection
                    direction={isEven ? "right" : "left"}
                    className={!isEven ? "lg:order-1" : ""}
                  >
                    <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-5">
                      <Icon size={28} className="text-gold-dark" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check size={14} className="text-green-600" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </AnimatedSection>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                Our Process
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
                How We Build Excellence
              </h2>
              <div className="section-divider mx-auto" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Planning & Design",
                desc: "Comprehensive architectural planning with international design consultants and structural engineers.",
              },
              {
                step: "02",
                title: "Approvals & Compliance",
                desc: "Complete RERA registration, environmental clearances, and regulatory approvals before ground-breaking.",
              },
              {
                step: "03",
                title: "Construction Excellence",
                desc: "State-of-the-art construction technology, premium materials, and rigorous quality control at every stage.",
              },
              {
                step: "04",
                title: "Handover & Beyond",
                desc: "Meticulous handover process followed by comprehensive after-sales support and property management.",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all group">
                  <div className="text-gold text-5xl font-bold mb-4 opacity-30 group-hover:opacity-100 transition-opacity">
                    {item.step}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Let&apos;s Build Something Extraordinary
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Ready to explore our projects or discuss your dream home? Our team is here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                View Our Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
