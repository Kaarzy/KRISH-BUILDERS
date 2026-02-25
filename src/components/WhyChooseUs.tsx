"use client";

import Image from "next/image";
import { Shield, Clock, Eye, Award, Leaf, HeartHandshake } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { IMAGES } from "@/lib/constants";

const reasons = [
  {
    icon: Shield,
    title: "Uncompromising Quality",
    description:
      "Every brick, every beam, every finish is held to the highest international standards. We use only premium materials and employ rigorous quality checks.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "We understand the value of your time and investment. All 6 of our completed projects were delivered on or before the promised date.",
  },
  {
    icon: Eye,
    title: "Complete Transparency",
    description:
      "From RERA registration to construction updates, we maintain complete transparency. Track your project's progress anytime, anywhere.",
  },
  {
    icon: Award,
    title: "Award-Winning Design",
    description:
      "Our projects are designed by internationally acclaimed architects. Each building is an architectural statement that stands the test of time.",
  },
  {
    icon: Leaf,
    title: "Sustainable Building",
    description:
      "Green building isn't optional — it's fundamental. Our projects feature solar power, water recycling, and IGBC certification.",
  },
  {
    icon: HeartHandshake,
    title: "Customer First",
    description:
      "10,000+ happy families are proof of our customer-first philosophy. Our relationship doesn't end at handover — it begins there.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={IMAGES.whyUs}
                  alt="Krish Builders construction quality"
                  width={600}
                  height={700}
                  className="object-cover w-full h-[500px]"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-navy text-white p-6 rounded-2xl shadow-xl max-w-[240px]">
                <div className="text-gold text-4xl font-bold mb-1">100%</div>
                <div className="text-white/80 text-sm">
                  On-time delivery track record across all projects
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right - Content */}
          <div>
            <AnimatedSection direction="right">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                Why Krish Builders
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mt-3 mb-4">
                Built on Trust. Defined by Quality.
              </h2>
              <div className="section-divider mb-8" />
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason, i) => (
                <AnimatedSection key={i} delay={i * 0.1} direction="right">
                  <div className="group">
                    <div className="w-12 h-12 bg-navy/5 group-hover:bg-gold/10 rounded-xl flex items-center justify-center mb-3 transition-colors">
                      <reason.icon
                        size={22}
                        className="text-navy group-hover:text-gold transition-colors"
                      />
                    </div>
                    <h3 className="text-navy font-bold mb-1">{reason.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
