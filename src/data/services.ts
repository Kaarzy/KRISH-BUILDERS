export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
  image: string;
}

export const services: Service[] = [
  {
    title: "High-Rise Residential Construction",
    description:
      "Our core expertise lies in designing and constructing premium high-rise residential apartments. From 20 to 40+ floors, we have the engineering prowess and experience to build skyward with confidence.",
    icon: "Building2",
    features: [
      "Structural engineering excellence",
      "Seismic-resistant design",
      "Premium material sourcing",
      "International quality standards",
      "Advanced construction technology",
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    title: "Luxury Interior Finishing",
    description:
      "Every Krish home is a masterpiece of interior design. We use imported fixtures, premium materials, and work with renowned interior consultants to deliver spaces that exude luxury and sophistication.",
    icon: "Palette",
    features: [
      "Imported Italian marble & tiles",
      "Designer modular kitchens",
      "Premium CP & sanitary fittings",
      "Hardwood & engineered flooring",
      "Custom lighting design",
    ],
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
  },
  {
    title: "Smart Home Integration",
    description:
      "We integrate cutting-edge IoT and smart home technology into our apartments, enabling residents to control lighting, climate, security, and entertainment with a tap on their smartphone.",
    icon: "Cpu",
    features: [
      "IoT-enabled home automation",
      "Voice-controlled systems",
      "Smart security & surveillance",
      "Energy management systems",
      "Integrated building management",
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
  },
  {
    title: "Sustainable Green Building",
    description:
      "Sustainability is at the heart of our construction philosophy. Our projects incorporate green building practices, renewable energy, water recycling, and eco-friendly materials.",
    icon: "Leaf",
    features: [
      "IGBC / LEED certification",
      "Solar power integration",
      "Rainwater harvesting",
      "Sewage treatment plants",
      "Energy-efficient design",
    ],
    image: "https://images.unsplash.com/photo-1518005068251-37900150dfca?w=800&q=80",
  },
  {
    title: "Township & Community Planning",
    description:
      "Beyond individual buildings, we design integrated townships with comprehensive amenities, green spaces, commercial zones, and community facilities for a holistic living experience.",
    icon: "MapPin",
    features: [
      "Master planning & design",
      "Community amenity design",
      "Landscape architecture",
      "Traffic & infrastructure planning",
      "Commercial space integration",
    ],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    title: "Property Management & After-Sales",
    description:
      "Our relationship with homeowners extends well beyond handover. We provide comprehensive property management and after-sales support to ensure your home remains in pristine condition.",
    icon: "HeadphonesIcon",
    features: [
      "Dedicated maintenance team",
      "24/7 helpdesk support",
      "Annual maintenance contracts",
      "Community management",
      "Warranty & defect rectification",
    ],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  },
];
