import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Building2,
  Home,
  Ruler,
  IndianRupee,
  Shield,
  ArrowLeft,
  Check,
  ChevronRight,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import EMICalculator from "@/components/EMICalculator";
import ContactForm from "@/components/ContactForm";
import ProjectActions from "@/components/ProjectActions";
import { projects, getProjectBySlug } from "@/data/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.name} — ${project.type}`,
    description: project.description,
    openGraph: {
      title: `${project.name} | Krish Builders`,
      description: project.description,
      images: [{ url: project.image, width: 1200, height: 630 }],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-end">
        <div className="absolute inset-0">
          <Image
            src={project.gallery[0]}
            alt={project.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pb-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/projects" className="hover:text-gold transition-colors">Projects</Link>
            <ChevronRight size={14} />
            <span className="text-gold">{project.name}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className={`text-xs font-bold px-3 py-1.5 rounded-full uppercase ${
                project.status === "completed"
                  ? "bg-green-500 text-white"
                  : "bg-gold text-navy"
              }`}
            >
              {project.status}
            </span>
            <span className="text-white/60 text-sm">{project.type}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3">
            {project.name}
          </h1>
          <div className="flex items-center gap-2 text-white/80">
            <MapPin size={18} className="text-gold" />
            <span className="text-lg">{project.location}</span>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-gray-100">
            {[
              { icon: Building2, label: "Floors", value: `${project.floors}` },
              { icon: Home, label: "Units", value: `${project.units}` },
              { icon: Ruler, label: "Area", value: project.area },
              { icon: IndianRupee, label: "Price Range", value: project.price },
              { icon: Shield, label: "RERA No.", value: project.rera },
            ].map((stat, i) => (
              <div key={i} className="py-6 px-6 text-center">
                <stat.icon size={20} className="text-gold mx-auto mb-2" />
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  {stat.label}
                </div>
                <div className="text-navy font-bold text-sm">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview + Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Description */}
            <AnimatedSection direction="left">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                Overview
              </span>
              <h2 className="text-3xl font-bold text-navy mt-3 mb-6">
                About {project.name}
              </h2>
              <div className="section-divider mb-8" />
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                {project.description}
              </p>

              {/* Highlights */}
              <h3 className="text-navy font-bold text-lg mb-4">Project Highlights</h3>
              <ul className="space-y-3">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-gold-dark" />
                    </div>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Download Brochure & Virtual Tour */}
              <ProjectActions
                projectName={project.name}
                brochureUrl={project.brochure}
                virtualTourUrl={project.virtualTourUrl}
              />
            </AnimatedSection>

            {/* Gallery */}
            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                {project.gallery.map((img, i) => (
                  <div
                    key={i}
                    className={`relative rounded-xl overflow-hidden ${
                      i === 0 ? "col-span-2 h-64" : "h-48"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${project.name} - Image ${i + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                Amenities
              </span>
              <h2 className="text-3xl font-bold text-navy mt-3 mb-4">
                World-Class Lifestyle Amenities
              </h2>
              <div className="section-divider mx-auto" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {project.amenities.map((amenity, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="bg-white rounded-xl p-5 text-center border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all group">
                  <div className="w-10 h-10 mx-auto mb-3 bg-navy/5 group-hover:bg-gold/10 rounded-lg flex items-center justify-center transition-colors">
                    <Check size={18} className="text-navy group-hover:text-gold transition-colors" />
                  </div>
                  <p className="text-gray-700 text-sm font-medium">{amenity}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Location Map + EMI Calculator + Contact */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* EMI Calculator */}
            <AnimatedSection direction="left">
              <EMICalculator />
            </AnimatedSection>

            {/* Enquiry Form */}
            <AnimatedSection direction="right">
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl font-bold text-navy mb-2">
                  Interested in {project.name}?
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Back to Projects */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-navy hover:text-gold transition-colors font-medium"
          >
            <ArrowLeft size={18} />
            Back to All Projects
          </Link>
        </div>
      </section>
    </>
  );
}
