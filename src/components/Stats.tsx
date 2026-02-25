"use client";

import { useRef, useEffect, useState } from "react";
import { Building2, Users, Calendar, Ruler } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

function Counter({ end, suffix = "", prefix = "", duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return (
    <span ref={ref} className="counter-number">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const stats = [
    {
      icon: Calendar,
      value: 15,
      suffix: "+",
      label: "Years of Excellence",
      description: "Building trust since 2010",
    },
    {
      icon: Building2,
      value: 6,
      suffix: "",
      label: "Projects Delivered",
      description: "Iconic landmarks across Hyderabad",
    },
    {
      icon: Users,
      value: 10000,
      suffix: "+",
      label: "Happy Families",
      description: "Homes filled with joy",
    },
    {
      icon: Ruler,
      value: 45,
      suffix: "L+",
      label: "Sq.Ft Delivered",
      description: "Of premium living spaces",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-navy/5 group-hover:bg-gold/10 rounded-2xl flex items-center justify-center transition-colors">
                  <stat.icon className="text-navy group-hover:text-gold transition-colors" size={28} />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-navy mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-800 font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-500 text-sm">{stat.description}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
