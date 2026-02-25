export interface Testimonial {
  name: string;
  project: string;
  designation: string;
  text: string;
  rating: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Rajesh Sharma",
    project: "Krish Towers",
    designation: "IT Director",
    text: "Moving into Krish Towers was the best decision we made. The quality of construction, attention to detail, and the amenities are truly world-class. Our family has found the perfect home.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    name: "Priya Reddy",
    project: "Krish Residency",
    designation: "Healthcare Professional",
    text: "What impressed me most was Krish Builders' transparency throughout the process. They delivered exactly what was promised, on time. The community here at Krish Residency is wonderful.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    name: "Venkat Rao",
    project: "Krish Paradise",
    designation: "Business Owner",
    text: "As someone who has invested in multiple properties, I can confidently say Krish Paradise stands apart. The luxury finishes, the sky lounge, and the impeccable service make it truly paradise.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    name: "Anitha Krishnamurthy",
    project: "Krish Elite",
    designation: "Professor",
    text: "The green spaces and child-friendly environment at Krish Elite are exceptional. My children love the play areas and the entire township feels like a self-sustaining community.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    name: "Srinivas Gupta",
    project: "Krish Heights",
    designation: "Tech Entrepreneur",
    text: "The smart home features in Krish Heights are ahead of their time. Being able to control everything from my phone, the EV charging, the co-working space — it's built for the future.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    name: "Meera Joshi",
    project: "Krish Grandeur",
    designation: "Interior Designer",
    text: "As a design professional, I'm incredibly particular about construction quality. Krish Grandeur exceeded my expectations in every way — the finishes, proportions, and craftsmanship are flawless.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
  },
];
