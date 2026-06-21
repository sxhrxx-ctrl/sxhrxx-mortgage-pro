import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Calculate Your Mortgage
            <br />
            <span className="text-blue-200">Payment Instantly</span>
          </h1>

          {/* Social Proof Badges */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm mt-4">
            <span className="bg-white/10 text-white px-3 py-1 rounded-full">
              🏠 500K+ 月计算量
            </span>
            <span className="bg-white/10 text-white px-3 py-1 rounded-full">
              ✅ 100% 免费
            </span>
            <span className="bg-white/10 text-white px-3 py-1 rounded-full">
              ⭐ 无需注册
            </span>
          </div>

          <p className="mt-6 text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
            Get accurate monthly mortgage payments, compare loan types, and find
            the best rates — all in seconds.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#calculator"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-blue-50 transition-colors"
            >
              Try Calculator Free
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Read Mortgage Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
          Mortgage Payment Calculator
        </h2>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8">
          <CalculatorForm />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
            Why Use Our Calculator?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon="⚡"
              title="Instant Results"
              description="Get your monthly payment calculated in real-time as you type."
            />
            <FeatureCard
              icon="📊"
              title="Full Breakdown"
              description="See principal, interest, taxes, and insurance in detail."
            />
            <FeatureCard
              icon="🔒"
              title="Private & Secure"
              description="No registration required. Your data never leaves your browser."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Ready to Explore Mortgage Options?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Browse our blog for expert advice on loan types, market trends, and
          money-saving tips.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
        >
          Browse All Articles
        </Link>
      </section>
    </div>
  );
}

function CalculatorForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label
          htmlFor="homePrice"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Home Price
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            $
          </span>
          <input
            type="number"
            id="homePrice"
            placeholder="400,000"
            className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="downPayment"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Down Payment
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              $
            </span>
            <input
              type="number"
              id="downPayment"
              placeholder="80,000"
              className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="downPercent"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            or Percentage
          </label>
          <div className="relative">
            <input
              type="number"
              id="downPercent"
              placeholder="20"
              className="w-full pl-4 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
              %
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="interestRate"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Interest Rate
          </label>
          <div className="relative">
            <input
              type="number"
              id="interestRate"
              step="0.01"
              placeholder="6.5"
              className="w-full pl-4 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
              %
            </span>
          </div>
        </div>
        <div>
          <label
            htmlFor="loanTerm"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Loan Term
          </label>
          <select
            id="loanTerm"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 bg-white"
          >
            <option value="30">30 Years</option>
            <option value="20">20 Years</option>
            <option value="15">15 Years</option>
            <option value="10">10 Years</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3.5 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors text-lg"
      >
        Calculate Payment
      </button>
    </form>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
