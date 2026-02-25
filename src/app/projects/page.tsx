import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Building2, ArrowUpRight, Filter } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { projects } from "@/data/projects";
import ProjectsFilter from "./ProjectsFilter";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Explore Krish Builders' portfolio of 6 completed landmark high-rise residential projects and 2 ongoing developments across Hyderabad.",
};

export default function ProjectsPage() {
  const completed = projects.filter((p) => p.status === "completed");
  const ongoing = projects.filter((p) => p.status === "ongoing");

  return (
    <>
      {/* Page Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="Krish Builders Projects"
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
              Our Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-3 mb-4">
              Our Projects
            </h1>
            <p className="text-white/70 text-lg max-w-2xl">
              6 completed landmarks. 2 ambitious ongoing developments. Each one a testament
              to our commitment to excellence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ProjectsFilter projects={projects} />
        </div>
      </section>
    </>
  );
}
