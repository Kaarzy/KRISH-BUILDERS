"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Building2, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";

interface ProjectsFilterProps {
  projects: Project[];
}

export default function ProjectsFilter({ projects }: ProjectsFilterProps) {
  const [filter, setFilter] = useState<"all" | "completed" | "ongoing">("all");

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.status === filter);

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-gray-100 rounded-xl p-1.5">
          {(["all", "completed", "ongoing"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                filter === tab
                  ? "bg-navy text-white shadow-sm"
                  : "text-gray-600 hover:text-navy"
              }`}
            >
              {tab === "all" ? "All Projects" : tab === "completed" ? "Completed" : "Ongoing"}
              <span className="ml-1.5 text-xs opacity-60">
                ({tab === "all" ? projects.length : projects.filter((p) => p.status === tab).length})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
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
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span
                      className={`text-xs font-bold px-3 py-1.5 rounded-full uppercase ${
                        project.status === "completed"
                          ? "bg-green-500 text-white"
                          : "bg-gold text-navy"
                      }`}
                    >
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
                  <p className="text-gray-500 text-sm mb-1">{project.type}</p>
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
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
