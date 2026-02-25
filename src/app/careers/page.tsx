import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  MapPin,
  Users,
  Heart,
  TrendingUp,
  GraduationCap,
  Send,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Krish Builders — Hyderabad's leading construction company. Explore career opportunities and be part of a team that builds landmarks.",
};

const openPositions = [
  {
    title: "Senior Structural Engineer",
    department: "Engineering",
    location: "Hyderabad",
    type: "Full-time",
    experience: "8-12 years",
  },
  {
    title: "Project Manager — Construction",
    department: "Project Management",
    location: "Hyderabad",
    type: "Full-time",
    experience: "10+ years",
  },
  {
    title: "Interior Design Lead",
    department: "Design",
    location: "Hyderabad",
    type: "Full-time",
    experience: "6-10 years",
  },
  {
    title: "Digital Marketing Manager",
    department: "Marketing",
    location: "Hyderabad",
    type: "Full-time",
    experience: "5-8 years",
  },
  {
    title: "Sales Executive — Real Estate",
    department: "Sales",
    location: "Hyderabad",
    type: "Full-time",
    experience: "3-5 years",
  },
  {
    title: "Site Supervisor",
    department: "Construction",
    location: "Hyderabad",
    type: "Full-time",
    experience: "5-8 years",
  },
];

const perks = [
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    desc: "Clear career progression paths and leadership development programs.",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    desc: "Comprehensive health insurance for you and your family.",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    desc: "Sponsored certifications, workshops, and industry conferences.",
  },
  {
    icon: Users,
    title: "Team Culture",
    desc: "Collaborative environment with team outings and celebrations.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            alt="Careers at Krish Builders"
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
              Join Our Team
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-3 mb-4">
              Build Your Career With Us
            </h1>
            <p className="text-white/70 text-lg max-w-2xl">
              Be part of a team that builds Hyderabad&apos;s iconic landmarks. We&apos;re always
              looking for passionate individuals who share our commitment to excellence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                Why Krish Builders
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mt-3 mb-4">
                Why Build Your Career Here?
              </h2>
              <div className="section-divider mx-auto mb-6" />
              <p className="text-gray-600 max-w-2xl mx-auto">
                At Krish Builders, we believe our people are our greatest asset. We foster a
                culture of innovation, respect, and continuous growth.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-center group p-6 bg-gray-50 rounded-2xl hover:bg-gold/5 transition-colors">
                  <div className="w-14 h-14 mx-auto mb-4 bg-navy/5 group-hover:bg-gold/10 rounded-xl flex items-center justify-center transition-colors">
                    <perk.icon
                      size={24}
                      className="text-navy group-hover:text-gold transition-colors"
                    />
                  </div>
                  <h3 className="text-navy font-bold mb-2">{perk.title}</h3>
                  <p className="text-gray-600 text-sm">{perk.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                Open Positions
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mt-3 mb-4">
                Current Opportunities
              </h2>
              <div className="section-divider mx-auto" />
            </div>
          </AnimatedSection>

          <div className="space-y-4 max-w-4xl mx-auto">
            {openPositions.map((position, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all group flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-navy font-bold text-lg group-hover:text-gold-dark transition-colors">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Briefcase size={14} />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {position.location}
                      </span>
                      <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">
                        {position.type}
                      </span>
                      <span className="text-xs text-gray-400">
                        {position.experience}
                      </span>
                    </div>
                  </div>
                  <a
                    href={`mailto:careers@krishbuilders.com?subject=Application for ${position.title}`}
                    className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all flex-shrink-0"
                  >
                    <Send size={14} />
                    Apply Now
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Don&apos;t see a role that fits? We&apos;re always open to exceptional talent.
              </p>
              <a
                href="mailto:careers@krishbuilders.com?subject=General Application"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Send Your Resume
                <Send size={16} />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
