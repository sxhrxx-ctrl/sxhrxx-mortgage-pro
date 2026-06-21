"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calculator,
  RefreshCw,
  DollarSign,
  Shield,
  BookOpen,
  ClipboardList,
  UserPlus,
  TrendingUp,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

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

const resources = [
  {
    icon: BookOpen,
    title: "Mortgage Basics",
    description:
      "Learn the fundamentals of mortgages including down payments, interest rates, loan types, and the home buying process.",
    href: "/blog",
  },
  {
    icon: ClipboardList,
    title: "Loan Types Guide",
    description:
      "A detailed comparison of FHA, conventional, VA, and USDA loans — find the right mortgage for your situation.",
    href: "/blog",
  },
  {
    icon: UserPlus,
    title: "First-Time Buyer Guide",
    description:
      "A step-by-step guide for first-time homebuyers covering everything from saving for a down payment to closing day.",
    href: "/blog",
  },
  {
    icon: TrendingUp,
    title: "Mortgage Rates Explained",
    description:
      "Understand how mortgage rates work, what affects them, and how to lock in the best rate for your loan.",
    href: "/blog",
  },
];

const faqs = [
  {
    question: "What is PMI and how do I avoid it?",
    answer:
      "PMI (Private Mortgage Insurance) is an additional monthly fee required by lenders when you put down less than 20% on a conventional loan. It protects the lender if you default. To avoid PMI, make a down payment of 20% or more. Once your loan balance reaches 80% of the home's original value, you can request cancellation from your lender.",
  },
  {
    question: "How much house can I afford?",
    answer:
      "A common rule of thumb is that you can afford a home worth 2-3 times your gross annual income. However, the exact amount depends on your debts, down payment, credit score, interest rate, and other financial obligations. Use our Affordability Calculator to get a personalized estimate based on your specific situation.",
  },
  {
    question: "Should I refinance my mortgage?",
    answer:
      "Consider refinancing when interest rates have dropped at least 0.5-1% below your current rate, you want to switch from an adjustable-rate to a fixed-rate mortgage, or you want to shorten your loan term. Make sure to calculate the break-even point — the time it takes for the monthly savings to exceed the closing costs of refinancing.",
  },
];

export default function ResourcesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
            Mortgage Resources — Tools, Guides &amp; Calculators
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
            Your one-stop hub for all our calculator tools and educational
            resources. Whether you&apos;re planning to buy, refinance, or just
            exploring your options, we&apos;ve got you covered.
          </p>
        </div>
      </section>

      {/* Calculator Tools Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-3">
          Calculator Tools
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Free, accurate calculators to help you plan your mortgage decisions.
        </p>
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
                <span className="inline-block mt-4 text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                  Open Calculator →
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Educational Resources Section */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-3">
            Educational Resources
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Expert guides to help you understand every aspect of the mortgage
            process.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <Link
                  key={resource.title}
                  href={resource.href}
                  className="group bg-gray-50 rounded-xl border border-gray-200 p-6 hover:shadow-md hover:border-blue-300 transition-all"
                >
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
                    <Icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {resource.description}
                  </p>
                  <span className="inline-block mt-4 text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                    Read Guide →
                  </span>
                </Link>
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
          Answers to the most common mortgage questions we hear every day.
        </p>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                <h3 className="text-base font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" />
              </summary>
              <div className="px-6 pb-4">
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
