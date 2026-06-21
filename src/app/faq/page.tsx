"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSection {
  title: string;
  items: FaqItem[];
}

const faqData: FaqSection[] = [
  {
    title: "General Mortgage Questions",
    items: [
      {
        question: "What is a mortgage?",
        answer:
          "A mortgage is a loan used to purchase real estate. The property itself serves as collateral, and you repay the loan over a set term (typically 15 or 30 years) with monthly payments that include principal, interest, taxes, and insurance.",
      },
      {
        question: "How do I qualify for a mortgage?",
        answer:
          "To qualify for a mortgage, lenders evaluate your credit score, debt-to-income ratio (DTI), employment history, and down payment. Generally, you'll need a credit score of at least 620, a DTI below 43%, and stable income documentation.",
      },
      {
        question: "What credit score do I need?",
        answer:
          "For a conventional loan, a credit score of 620 or higher is typically required. FHA loans may accept scores as low as 580 (or even 500 with a 10% down payment). VA loans don't have a strict minimum but most lenders prefer 620+. Higher scores qualify you for better interest rates.",
      },
      {
        question: "How much down payment is required?",
        answer:
          "Down payments vary by loan type: conventional loans typically require 3–20%, FHA loans require as little as 3.5%, and VA/USDA loans may require 0% down. A 20% down payment helps you avoid private mortgage insurance (PMI) on conventional loans.",
      },
    ],
  },
  {
    title: "About Our Calculator",
    items: [
      {
        question: "How accurate is this mortgage calculator?",
        answer:
          "Our calculator provides highly accurate estimates based on the standard amortization formula. It calculates principal and interest payments precisely. For a complete picture, we recommend also accounting for property taxes, homeowners insurance, and any HOA fees specific to your area.",
      },
      {
        question: "Does this calculator include taxes and insurance?",
        answer:
          "Yes! Our calculator includes fields for annual property tax and annual homeowners insurance. These are factored into your total monthly payment estimate. You can adjust these values based on your local tax rates and insurance quotes to get a more accurate picture.",
      },
      {
        question: "Can I use this calculator for FHA/VA loans?",
        answer:
          "Absolutely. You can use our calculator for any loan type, including FHA, VA, USDA, and conventional loans. Simply enter your loan amount, interest rate, and term. For FHA loans, remember to account for the upfront mortgage insurance premium (UFMIP) and monthly MIP in your total costs.",
      },
    ],
  },
  {
    title: "PMI & Refinancing",
    items: [
      {
        question: "What is PMI and how do I avoid it?",
        answer:
          "PMI (Private Mortgage Insurance) is an additional monthly fee required when your down payment is less than 20% of the home's value. You can avoid PMI by: (1) putting 20% down, (2) choosing a VA loan (no PMI required), (3) using a piggyback loan (80/10/10 structure), or (4) requesting PMI cancellation once you reach 20% equity.",
      },
      {
        question: "When should I refinance my mortgage?",
        answer:
          "Consider refinancing when: (1) current interest rates are at least 0.5–1% lower than your existing rate, (2) you plan to stay in the home long enough to recoup closing costs, (3) you want to switch from an adjustable-rate to a fixed-rate mortgage, or (4) you need to tap into home equity for major expenses.",
      },
      {
        question: "How do I calculate my break-even point?",
        answer:
          "To calculate your refinance break-even point: divide your total closing costs by your monthly savings from the new loan. For example, if closing costs are $4,000 and you save $200/month, your break-even is 20 months. If you plan to stay in the home longer than that, refinancing makes financial sense.",
      },
    ],
  },
];

function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden bg-white"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <span className="text-base font-semibold text-gray-900 pr-4">
              {item.question}
            </span>
            <span
              className={`text-blue-600 text-xl flex-shrink-0 transition-transform duration-200 ${
                openIndex === index ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              openIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <p className="px-5 pb-4 text-gray-600 leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function FaqPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Everything you need to know about mortgages, our calculator, and
            managing your home loan. Find answers to the most common questions
            below.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-12">
          {faqData.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
                {section.title}
              </h2>
              <FaqAccordion items={section.items} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8 sm:p-10">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Try our free mortgage calculator to see your personalized payment
            estimate.
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
          >
            Try Calculator Free
          </a>
        </div>
      </section>
    </div>
  );
}
