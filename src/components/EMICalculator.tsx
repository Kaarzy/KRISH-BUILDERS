"use client";

import { useState, useCallback } from "react";
import { Calculator, IndianRupee, Percent, CalendarDays } from "lucide-react";

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const calculateEMI = useCallback(() => {
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenure * 12;

    if (r === 0) return P / n;

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  }, [loanAmount, interestRate, tenure]);

  const emi = calculateEMI();
  const totalPayment = emi * tenure * 12;
  const totalInterest = totalPayment - loanAmount;

  const formatCurrency = (num: number) => {
    if (num >= 10000000) return `₹${(num / 10000000).toFixed(2)} Cr`;
    if (num >= 100000) return `₹${(num / 100000).toFixed(2)} L`;
    return `₹${num.toLocaleString("en-IN")}`;
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center">
          <Calculator size={20} className="text-gold-dark" />
        </div>
        <h3 className="text-xl font-bold text-navy">EMI Calculator</h3>
      </div>

      <div className="space-y-6">
        {/* Loan Amount */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
              <IndianRupee size={14} /> Loan Amount
            </label>
            <span className="text-sm font-semibold text-navy">
              {formatCurrency(loanAmount)}
            </span>
          </div>
          <input
            type="range"
            min={500000}
            max={50000000}
            step={100000}
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>₹5L</span>
            <span>₹5Cr</span>
          </div>
        </div>

        {/* Interest Rate */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
              <Percent size={14} /> Interest Rate
            </label>
            <span className="text-sm font-semibold text-navy">{interestRate}%</span>
          </div>
          <input
            type="range"
            min={5}
            max={15}
            step={0.1}
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>5%</span>
            <span>15%</span>
          </div>
        </div>

        {/* Tenure */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
              <CalendarDays size={14} /> Loan Tenure
            </label>
            <span className="text-sm font-semibold text-navy">{tenure} Years</span>
          </div>
          <input
            type="range"
            min={1}
            max={30}
            step={1}
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>1 Yr</span>
            <span>30 Yrs</span>
          </div>
        </div>

        {/* Results */}
        <div className="bg-navy rounded-xl p-6 text-center">
          <div className="text-white/60 text-sm mb-1">Your Monthly EMI</div>
          <div className="text-gold text-3xl sm:text-4xl font-bold mb-4 counter-number">
            ₹{emi.toLocaleString("en-IN")}
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
            <div>
              <div className="text-white/50 text-xs mb-1">Total Interest</div>
              <div className="text-white font-semibold text-sm">
                {formatCurrency(totalInterest)}
              </div>
            </div>
            <div>
              <div className="text-white/50 text-xs mb-1">Total Payment</div>
              <div className="text-white font-semibold text-sm">
                {formatCurrency(totalPayment)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-400 text-xs mt-4 text-center">
        * This is an indicative calculation. Actual EMI may vary based on your bank&apos;s terms.
      </p>
    </div>
  );
}
