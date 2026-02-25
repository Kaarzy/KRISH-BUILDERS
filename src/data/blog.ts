export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "krish-grandeur-wins-best-luxury-project",
    title: "Krish Grandeur Wins 'Best Luxury Residential Project 2024'",
    excerpt:
      "We're thrilled to announce that Krish Grandeur has been awarded the prestigious 'Best Luxury Residential Project' at the Hyderabad Real Estate Awards 2024.",
    category: "Awards",
    date: "2024-12-15",
    readTime: "3 min",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    author: "Krish Builders",
  },
  {
    slug: "why-hyderabad-best-city-real-estate",
    title: "Why Hyderabad Is India's Hottest Real Estate Market in 2025",
    excerpt:
      "With booming IT sector, excellent infrastructure, and affordable pricing compared to metros, Hyderabad continues to attract homebuyers and investors alike.",
    category: "Industry Insights",
    date: "2025-01-20",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1582407947092-50b8c1b0e26e?w=800&q=80",
    author: "Krish Builders",
  },
  {
    slug: "krish-serenity-construction-milestone",
    title: "Krish Serenity Achieves Structural Completion Milestone",
    excerpt:
      "We're proud to announce that Krish Serenity in Tellapur has achieved its structural completion, marking a significant milestone toward the expected 2027 delivery.",
    category: "Project Updates",
    date: "2025-02-10",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    author: "Krish Builders",
  },
  {
    slug: "smart-homes-future-living",
    title: "Smart Homes: How Technology Is Transforming Residential Living",
    excerpt:
      "From IoT integration to AI-powered building management, discover how Krish Builders is at the forefront of the smart home revolution in Indian real estate.",
    category: "Innovation",
    date: "2025-02-01",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    author: "Krish Builders",
  },
  {
    slug: "guide-buying-first-apartment-hyderabad",
    title: "The Complete Guide to Buying Your First Apartment in Hyderabad",
    excerpt:
      "Everything first-time homebuyers need to know — from choosing the right location and checking RERA registration to understanding home loan options.",
    category: "Buying Guide",
    date: "2024-11-05",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    author: "Krish Builders",
  },
  {
    slug: "sustainability-in-construction",
    title: "Building Green: Our Commitment to Sustainable Construction",
    excerpt:
      "Learn about Krish Builders' green building initiatives, from IGBC certification to solar integration and zero-waste management across all our projects.",
    category: "Sustainability",
    date: "2024-10-15",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1518005068251-37900150dfca?w=800&q=80",
    author: "Krish Builders",
  },
];
