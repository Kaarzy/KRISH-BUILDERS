import { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { COMPANY, IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Krish Builders. Visit our office in Jubilee Hills, Hyderabad or reach out via phone, email, or WhatsApp for enquiries.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.contact}
            alt="Contact Krish Builders"
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
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-3 mb-4">
              Contact Us
            </h1>
            <p className="text-white/70 text-lg max-w-2xl">
              We&apos;d love to hear from you. Whether you&apos;re looking for your dream home or
              have questions about our projects, our team is ready to assist.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <AnimatedSection direction="left">
                <h2 className="text-2xl font-bold text-navy mb-6">
                  Reach Out to Us
                </h2>
                <div className="section-divider mb-8" />

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin size={22} className="text-gold-dark" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-1">Visit Our Office</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {COMPANY.address}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone size={22} className="text-gold-dark" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-1">Call Us</h3>
                      <a
                        href={`tel:${COMPANY.phone}`}
                        className="text-gray-600 text-sm hover:text-gold transition-colors"
                      >
                        {COMPANY.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail size={22} className="text-gold-dark" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-1">Email Us</h3>
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="text-gray-600 text-sm hover:text-gold transition-colors"
                      >
                        {COMPANY.email}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock size={22} className="text-gold-dark" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-1">Office Hours</h3>
                      <p className="text-gray-600 text-sm">
                        Mon — Sat: 9:00 AM — 7:00 PM
                        <br />
                        Sunday: By appointment only
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-8 rounded-xl overflow-hidden border border-gray-200 h-[250px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3888.907769281229!2d77.77300271191712!3d12.913649118263354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU0JzUwLjMiTiA3N8KwNDYnMTYuOSJF!5e0!3m2!1sen!2sin!4v1772023070214!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Krish Builders Office Location"
                  />
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="right">
                <div className="bg-gray-50 rounded-2xl p-8 sm:p-10">
                  <h2 className="text-2xl font-bold text-navy mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below and our team will respond within 24 hours.
                  </p>
                  <ContactForm />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
