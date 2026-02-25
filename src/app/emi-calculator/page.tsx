import { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Calculator,
  TrendingDown,
  ShieldCheck,
  Clock,
  Phone,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import EMICalculator from "@/components/EMICalculator";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "EMI Calculator — Home Loan EMI Calculator",
  description:
    "Calculate your home loan EMI instantly with our free EMI calculator. Plan your dream home purchase with Krish Builders.",
  openGraph: {
    title: "EMI Calculator | Krish Builders",
    description:
      "Calculate your home loan EMI instantly. Plan your dream home purchase with Krish Builders, Hyderabad.",
  },
};

const tips = [
  {
    icon: TrendingDown,
    title: "Compare Interest Rates",
    description:
      "Different banks offer different rates. Compare at least 3-4 banks before finalizing your home loan to get the best deal.",
  },
  {
    icon: ShieldCheck,
    title: "Maintain Good Credit Score",
    description:
      "A CIBIL score above 750 can help you get lower interest rates, saving lakhs over the loan tenure.",
  },
  {
    icon: Clock,
    title: "Choose Tenure Wisely",
    description:
      "Longer tenure means lower EMI but higher total interest. Shorter tenure saves money in the long run.",
  },
  {
    icon: Calculator,
    title: "Plan for Down Payment",
    description:
      "Banks typically finance 75-90% of property value. Plan your down payment (10-25%) well in advance.",
  },
];

const banks = [
  { name: "State Bank of India", rate: "8.50% - 9.65%" },
  { name: "HDFC Bank", rate: "8.70% - 9.60%" },
  { name: "ICICI Bank", rate: "8.75% - 9.50%" },
  { name: "Bank of Baroda", rate: "8.40% - 10.65%" },
  { name: "Punjab National Bank", rate: "8.45% - 10.25%" },
  { name: "Axis Bank", rate: "8.75% - 13.30%" },
];

export default function EMICalculatorPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-sm mb-8">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-gold">EMI Calculator</span>
          </div>

          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                Financial Planning Tool
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-3 mb-6">
                Home Loan <span className="text-gold">EMI Calculator</span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed">
                Plan your home purchase with confidence. Calculate your monthly EMI,
                total interest, and total payment instantly. Adjust the loan amount, 
                interest rate, and tenure to find the perfect plan for your budget.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Calculator */}
            <AnimatedSection direction="left">
              <EMICalculator />
            </AnimatedSection>

            {/* Info Panel */}
            <AnimatedSection direction="right">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4">
                    How is EMI Calculated?
                  </h2>
                  <div className="section-divider mb-6" />
                  <p className="text-gray-600 leading-relaxed mb-4">
                    EMI (Equated Monthly Installment) is calculated using the following formula:
                  </p>
                  <div className="bg-navy rounded-xl p-6 text-center mb-4">
                    <p className="text-gold font-mono text-lg">
                      EMI = P × r × (1 + r)<sup>n</sup> / ((1 + r)<sup>n</sup> - 1)
                    </p>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong className="text-navy">P</strong> = Principal loan amount</p>
                    <p><strong className="text-navy">r</strong> = Monthly interest rate (annual rate / 12 / 100)</p>
                    <p><strong className="text-navy">n</strong> = Total number of monthly installments (tenure in years × 12)</p>
                  </div>
                </div>

                {/* Current Bank Rates */}
                <div>
                  <h3 className="text-lg font-bold text-navy mb-4">
                    Current Home Loan Rates (Indicative)
                  </h3>
                  <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-navy text-white">
                          <th className="text-left py-3 px-4 font-semibold">Bank</th>
                          <th className="text-right py-3 px-4 font-semibold">Interest Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        {banks.map((bank, i) => (
                          <tr
                            key={bank.name}
                            className={`border-b border-gray-100 ${
                              i % 2 === 0 ? "bg-white" : "bg-gray-50"
                            }`}
                          >
                            <td className="py-3 px-4 text-gray-700">{bank.name}</td>
                            <td className="py-3 px-4 text-right text-navy font-semibold">
                              {bank.rate}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-400 text-xs mt-2">
                    * Rates are indicative and subject to change. Please check with 
                    respective banks for latest rates.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                Expert Advice
              </span>
              <h2 className="text-3xl font-bold text-navy mt-3 mb-4">
                Home Loan Tips
              </h2>
              <div className="section-divider mx-auto" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, i) => (
              <AnimatedSection key={tip.title} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all h-full">
                  <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center mb-4">
                    <tip.icon size={24} className="text-gold" />
                  </div>
                  <h3 className="text-navy font-bold text-lg mb-2">{tip.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Need Help?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-6">
              Our Team Can Help You Get the Best Loan
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              We have tie-ups with major banks and can help you secure competitive
              interest rates. Talk to our financial advisors today.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold px-8 py-4 rounded-xl transition-all"
              >
                Contact Our Team
              </Link>
              <a
                href={`tel:${COMPANY.phone}`}
                className="inline-flex items-center gap-2 border-2 border-white/20 hover:border-gold text-white hover:text-gold font-bold px-8 py-4 rounded-xl transition-all"
              >
                <Phone size={18} />
                {COMPANY.phone}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
