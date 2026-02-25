"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Building2, ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.status === "completed").slice(0, 3);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Our Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mt-3 mb-4">
              Landmark Projects
            </h2>
            <div className="section-divider mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Every project we build is a testament to our commitment to quality,
              innovation, and the pursuit of architectural excellence.
            </p>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project, i) => (
            <AnimatedSection key={project.slug} delay={i * 0.15}>
              <Link
                href={`/projects/${project.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 overlay-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold text-navy text-xs font-bold px-3 py-1.5 rounded-full uppercase">
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <ArrowUpRight size={18} className="text-navy" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                    <MapPin size={14} />
                    {project.location}
                  </div>
                  <h3 className="text-xl font-bold text-navy group-hover:text-gold-dark transition-colors mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Building2 size={14} />
                        {project.floors} Floors
                      </span>
                      <span>{project.units} Units</span>
                    </div>
                    <span className="text-gold-dark font-semibold text-sm">{project.year}</span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* View All */}
        <AnimatedSection>
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-8 py-4 rounded-lg text-base font-semibold transition-all hover:shadow-lg"
            >
              View All Projects
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
