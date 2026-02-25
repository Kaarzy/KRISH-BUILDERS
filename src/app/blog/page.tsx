import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog & News",
  description:
    "Stay updated with Krish Builders' latest news, project updates, industry insights, and home buying guides.",
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <>
      {/* Page Hero */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center bg-navy">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <AnimatedSection>
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Blog & News
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-3 mb-4">
              Insights & Updates
            </h1>
            <p className="text-white/70 text-lg max-w-2xl">
              Industry insights, project updates, and expert advice from the team at Krish Builders.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">
                    {featured.category}
                  </span>
                  <span className="text-gray-400 text-sm flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(featured.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4 leading-tight">
                  {featured.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm flex items-center gap-1">
                    <Clock size={14} />
                    {featured.readTime} read
                  </span>
                  <span className="group inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors">
                    Read More
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-navy mb-8">Latest Articles</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.1}>
                <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-navy text-xs font-bold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-gray-400 text-sm mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={13} />
                        {new Date(post.date).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={13} />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-navy group-hover:text-gold-dark transition-colors mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="group/link inline-flex items-center gap-1 text-sm text-navy font-semibold hover:text-gold transition-colors">
                      Read More
                      <ArrowRight
                        size={14}
                        className="group-hover/link:translate-x-1 transition-transform"
                      />
                    </span>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
