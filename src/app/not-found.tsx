import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <div className="text-8xl font-bold text-navy/10 mb-4">404</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let us help you
          find your way back.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-6 py-3 rounded-lg font-semibold transition-all"
          >
            <Home size={18} />
            Go to Homepage
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy px-6 py-3 rounded-lg font-semibold transition-all"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
