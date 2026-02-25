"use client";

export default function NewsletterForm() {
  return (
    <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="Your email"
        className="flex-1 bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-gold/50 transition-colors"
      />
      <button
        type="submit"
        className="bg-gold hover:bg-gold-dark text-navy px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors"
      >
        Join
      </button>
    </form>
  );
}
