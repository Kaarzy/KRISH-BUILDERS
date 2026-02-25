import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Building2,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { COMPANY, IMAGES } from "@/lib/constants";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Krish Builders — Hyderabad's trusted construction company with 15+ years of excellence in building premium high-rise residential apartments.",
};

export default function AboutPage() {
  const milestones = [
    { year: "2010", title: "Founded", desc: "Krish Builders established in Hyderabad with a vision to redefine residential construction." },
    { year: "2014", title: "First Landmark", desc: "Delivered Krish Towers — our first 25-storey high-rise in Gachibowli." },
    { year: "2016", title: "Expanding Horizons", desc: "Krish Residency delivered in Kondapur, establishing our presence in the IT corridor." },
    { year: "2018", title: "Ultra-Luxury Debut", desc: "Krish Paradise set new benchmarks in luxury living with 30 floors of opulence." },
    { year: "2020", title: "Township Vision", desc: "Krish Elite — our first integrated township with 420 units and 70% green spaces." },
    { year: "2022", title: "Smart Living Pioneer", desc: "Krish Heights introduced IoT-enabled smart homes to Hyderabad's residential market." },
    { year: "2024", title: "Crown Jewel", desc: "Krish Grandeur — 35-storey architectural marvel in the Financial District." },
    { year: "2025", title: "Building the Future", desc: "2 ongoing mega-projects: Krish Serenity (Tellapur) & Krish Zenith (Kokapet)." },
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.about}
            alt="About Krish Builders"
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
              Our Story
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-3 mb-4">
              About Krish Builders
            </h1>
            <p className="text-white/70 text-lg max-w-2xl">
              15+ years of building trust, delivering dreams, and shaping Hyderabad&apos;s skyline
              with iconic residential landmarks.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <Image
                  src={IMAGES.aboutTeam}
                  alt="Krish Builders team"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-lg object-cover w-full h-[450px]"
                />
                <div className="absolute -bottom-6 -left-6 bg-gold text-navy p-6 rounded-2xl shadow-xl">
                  <div className="text-4xl font-bold">Since</div>
                  <div className="text-5xl font-bold">2010</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mt-3 mb-6">
                Building Hyderabad&apos;s Skyline, One Landmark at a Time
              </h2>
              <div className="section-divider mb-8" />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2010 by <strong className="text-navy">Krishna Chaitanya</strong>,
                  Krish Builders was born from a simple yet powerful vision: to create homes
                  that people don&apos;t just live in, but love living in.
                </p>
                <p>
                  Starting with our first landmark project in Gachibowli, we&apos;ve grown to
                  become one of Hyderabad&apos;s most respected names in premium high-rise
                  residential construction. Our journey of 15+ years has been marked by
                  an unwavering commitment to quality, innovation, and customer satisfaction.
                </p>
                <p>
                  Today, with 6 completed projects, 10,000+ happy families, and 2 ambitious
                  ongoing developments, we continue to push the boundaries of what&apos;s
                  possible in residential construction.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                Our Foundation
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mt-3 mb-4">
                Vision, Mission & Values
              </h2>
              <div className="section-divider mx-auto" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: "Our Vision",
                text: "To be South India's most trusted and admired residential construction company, known for creating living spaces that inspire generations.",
                color: "bg-blue-50",
              },
              {
                icon: Target,
                title: "Our Mission",
                text: "To deliver world-class residential apartments that exceed expectations in quality, design, and value — on time, every time. Building homes that families are proud to call their own.",
                color: "bg-amber-50",
              },
              {
                icon: Heart,
                title: "Our Values",
                text: "Integrity in every transaction. Quality in every brick. Innovation in every design. Sustainability in every decision. Customer satisfaction in every interaction.",
                color: "bg-green-50",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className={`${item.color} rounded-2xl p-8 h-full border border-gray-100`}>
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm">
                    <item.icon size={24} className="text-navy" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                Our Journey
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mt-3 mb-4">
                Milestones That Define Us
              </h2>
              <div className="section-divider mx-auto" />
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Center Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200" />

            <div className="space-y-8 md:space-y-0">
              {milestones.map((milestone, i) => (
                <AnimatedSection
                  key={i}
                  delay={i * 0.1}
                  direction={i % 2 === 0 ? "left" : "right"}
                >
                  <div
                    className={`md:flex items-center gap-8 mb-8 ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`md:w-1/2 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                      <div className="bg-gray-50 rounded-xl p-6 inline-block">
                        <span className="text-gold font-bold text-lg">{milestone.year}</span>
                        <h3 className="text-navy font-bold text-lg mt-1">{milestone.title}</h3>
                        <p className="text-gray-600 text-sm mt-2">{milestone.desc}</p>
                      </div>
                    </div>
                    {/* Center dot */}
                    <div className="hidden md:flex w-4 h-4 bg-gold rounded-full border-4 border-white shadow-md z-10 flex-shrink-0" />
                    <div className="md:w-1/2" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
                The Team Behind Your Dreams
              </h2>
              <div className="section-divider mx-auto" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all">
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-white font-bold text-lg">{member.name}</h3>
                    <p className="text-gold text-sm mb-3">{member.role}</p>
                    <p className="text-white/60 text-sm leading-relaxed line-clamp-3">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-navy/70 text-lg mb-8 max-w-2xl mx-auto">
              Join 10,000+ families who chose Krish Builders. Let&apos;s build your future together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy-light transition-all"
              >
                View Our Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-navy px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
