"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calculator,
  RefreshCw,
  DollarSign,
  Shield,
  BookOpen,
  Home,
  Scale,
  Award,
  TrendingUp,
  UserPlus,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a good credit score for a mortgage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A credit score of 740 or above is generally considered excellent for a mortgage and will qualify you for the best interest rates. Scores between 700-739 are still good and will get you competitive rates. With a score of 620-699, you may still qualify but will likely pay higher interest rates. Below 620, it becomes more difficult to get a conventional loan, though FHA loans may accept scores as low as 580 with a 3.5% down payment.",
      },
    },
    {
      "@type": "Question",
      name: "How much down payment do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The down payment depends on the loan type. Conventional loans typically require 3-20% down. FHA loans require as little as 3.5% with a credit score of 580 or higher. VA loans and USDA loans may require no down payment at all for eligible borrowers. A 20% down payment is ideal because it eliminates the need for Private Mortgage Insurance (PMI), which can add hundreds of dollars to your monthly payment.",
      },
    },
    {
      "@type": "Question",
      name: "What is PMI and can I remove it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PMI (Private Mortgage Insurance) is an additional monthly fee required by lenders when you put down less than 20% on a conventional loan. It protects the lender if you default on the loan. Yes, PMI can be removed! Once your loan balance reaches 80% of the home's original value, you can request cancellation from your lender. PMI is automatically cancelled when your loan balance reaches 78% of the original value. For FHA loans, mortgage insurance typically lasts the life of the loan unless you put down 10% or more.",
      },
    },
    {
      "@type": "Question",
      name: "Should I choose a 15-year or 30-year mortgage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 15-year mortgage has higher monthly payments but you'll pay significantly less in interest over the life of the loan and build equity faster. A 30-year mortgage has lower monthly payments, giving you more flexibility, but you'll pay more in total interest. The best choice depends on your financial situation: if you can comfortably afford the higher payments, a 15-year loan saves you money long-term. If you need lower payments for cash flow flexibility, a 30-year loan may be better. You can always make extra payments on a 30-year loan to pay it off faster.",
      },
    },
    {
      "@type": "Question",
      name: "When should I refinance my mortgage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Consider refinancing when: 1) Interest rates have dropped at least 0.5-1% below your current rate, 2) You want to switch from an adjustable-rate to a fixed-rate mortgage for stability, 3) You want to shorten your loan term (e.g., from 30-year to 15-year), 4) You have enough equity to eliminate PMI, or 5) You need to cash out equity for home improvements or debt consolidation. Make sure to calculate the break-even point — the time it takes for the monthly savings to exceed the closing costs of refinancing.",
      },
    },
  ],
};

const calculators = [
  {
    icon: Calculator,
    title: "Mortgage Calculator",
    description:
      "Calculate your monthly mortgage payment including principal, interest, taxes, and insurance.",
    href: "/",
  },
  {
    icon: RefreshCw,
    title: "Refinance Calculator",
    description:
      "See how much you could save by refinancing your current mortgage at today's rates.",
    href: "/refinance",
  },
  {
    icon: DollarSign,
    title: "Affordability Calculator",
    description:
      "Find out how much house you can afford based on your income, debts, and down payment.",
    href: "/affordability",
  },
  {
    icon: Shield,
    title: "PMI Calculator",
    description:
      "Estimate your Private Mortgage Insurance costs and see when you can remove PMI.",
    href: "/pmi-calculator",
  },
];

const guides = [
  {
    icon: BookOpen,
    title: "Mortgage Basics",
    description:
      "Learn the fundamentals of mortgages including down payments, interest rates, loan types, and the home buying process.",
    topics: ["Down Payments", "Interest Rates", "Loan Types"],
  },
  {
    icon: Shield,
    title: "PMI Insurance",
    description:
      "Understand what Private Mortgage Insurance is, how much it costs, and the steps to remove it from your loan.",
    topics: ["What is PMI?", "PMI Costs", "How to Cancel PMI"],
  },
  {
    icon: Scale,
    title: "FHA vs Conventional",
    description:
      "A detailed comparison of FHA and conventional loans including requirements, pros, cons, and which is right for you.",
    topics: ["Requirements", "Down Payment", "Credit Score"],
  },
  {
    icon: Award,
    title: "VA Loans",
    description:
      "Everything veterans and active military need to know about VA loans, eligibility requirements, and benefits.",
    topics: ["Eligibility", "Benefits", "How to Apply"],
  },
  {
    icon: TrendingUp,
    title: "Refinancing",
    description:
      "A comprehensive guide to refinancing your mortgage — when it makes sense, costs involved, and how to get started.",
    topics: ["When to Refinance", "Costs", "Break-Even Analysis"],
  },
  {
    icon: UserPlus,
    title: "First-Time Buyer",
    description:
      "A step-by-step guide for first-time homebuyers covering everything from saving for a down payment to closing day.",
    topics: ["Saving for Down Payment", "Pre-Approval", "Closing Process"],
  },
];

const faqs = [
  {
    question: "What is a good credit score for a mortgage?",
    answer:
      "A credit score of 740 or above is generally considered excellent for a mortgage and will qualify you for the best interest rates. Scores between 700-739 are still good and will get you competitive rates. With a score of 620-699, you may still qualify but will likely pay higher interest rates. Below 620, it becomes more difficult to get a conventional loan, though FHA loans may accept scores as low as 580 with a 3.5% down payment.",
  },
  {
    question: "How much down payment do I need?",
    answer:
      "The down payment depends on the loan type. Conventional loans typically require 3-20% down. FHA loans require as little as 3.5% with a credit score of 580 or higher. VA loans and USDA loans may require no down payment at all for eligible borrowers. A 20% down payment is ideal because it eliminates the need for Private Mortgage Insurance (PMI), which can add hundreds of dollars to your monthly payment.",
  },
  {
    question: "What is PMI and can I remove it?",
    answer:
      "PMI (Private Mortgage Insurance) is an additional monthly fee required by lenders when you put down less than 20% on a conventional loan. It protects the lender if you default on the loan. Yes, PMI can be removed! Once your loan balance reaches 80% of the home's original value, you can request cancellation from your lender. PMI is automatically cancelled when your loan balance reaches 78% of the original value. For FHA loans, mortgage insurance typically lasts the life of the loan unless you put down 10% or more.",
  },
  {
    question: "Should I choose a 15-year or 30-year mortgage?",
    answer:
      "A 15-year mortgage has higher monthly payments but you'll pay significantly less in interest over the life of the loan and build equity faster. A 30-year mortgage has lower monthly payments, giving you more flexibility, but you'll pay more in total interest. The best choice depends on your financial situation: if you can comfortably afford the higher payments, a 15-year loan saves you money long-term. If you need lower payments for cash flow flexibility, a 30-year loan may be better. You can always make extra payments on a 30-year loan to pay it off faster.",
  },
  {
    question: "When should I refinance my mortgage?",
    answer:
      "Consider refinancing when: 1) Interest rates have dropped at least 0.5-1% below your current rate, 2) You want to switch from an adjustable-rate to a fixed-rate mortgage for stability, 3) You want to shorten your loan term (e.g., from 30-year to 15-year), 4) You have enough equity to eliminate PMI, or 5) You need to cash out equity for home improvements or debt consolidation. Make sure to calculate the break-even point — the time it takes for the monthly savings to exceed the closing costs of refinancing.",
  },
];

export default function ResourcesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
              Mortgage Resources &amp; Guides
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
              Free tools, calculators, and expert guides to help you make
              confident mortgage decisions. Whether you&apos;re buying your
              first home or refinancing, we&apos;ve got you covered.
            </p>
          </div>
        </section>

        {/* Calculator Tools Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
            Free Mortgage Calculators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {calculators.map((calc) => {
              const Icon = calc.icon;
              return (
                <Link
                  key={calc.title}
                  href={calc.href}
                  className="group bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-blue-300 transition-all"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {calc.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {calc.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Learning Resources Section */}
        <section className="bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-3">
              Learning Resources
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Everything you need to know about mortgages, from the basics to
              advanced strategies.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.map((guide) => {
                const Icon = guide.icon;
                return (
                  <div
                    key={guide.title}
                    className="bg-gray-50 rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {guide.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {guide.topics.map((topic) => (
                        <span
                          key={topic}
                          className="text-xs bg-white text-gray-600 px-2.5 py-1 rounded-full border border-gray-200"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Get answers to the most common mortgage questions.
          </p>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-base font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Calculate Your Mortgage?
            </h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Use our free mortgage calculator to get an instant estimate of your
              monthly payment.
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-blue-50 transition-colors"
            >
              <Home className="w-5 h-5 mr-2" />
              Try the Calculator
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
