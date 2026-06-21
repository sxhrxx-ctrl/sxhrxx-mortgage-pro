import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Mortgage Rates Hit New Low: What It Means for Buyers",
    excerpt:
      "Explore the latest trends in mortgage rates and how falling rates impact your monthly payments and purchasing power.",
    category: "Rates & Markets",
    date: "2026-06-15",
    readTime: "5 min read",
    slug: "mortgage-rates-new-low",
  },
  {
    id: 2,
    title: "First-Time Buyer's Complete Guide to Getting a Mortgage",
    excerpt:
      "Everything first-time homebuyers need to know about the mortgage process, from pre-approval to closing day.",
    category: "First-Time Buyers",
    date: "2026-06-12",
    readTime: "8 min read",
    slug: "first-time-buyer-guide",
  },
  {
    id: 3,
    title: "Fixed-Rate vs. Adjustable-Rate Mortgages: Which Is Right for You?",
    excerpt:
      "A detailed comparison of fixed-rate and adjustable-rate mortgages to help you choose the best loan type for your situation.",
    category: "Loan Types",
    date: "2026-06-10",
    readTime: "6 min read",
    slug: "fixed-vs-arm",
  },
  {
    id: 4,
    title: "10 Proven ways to Save Money on Your Mortgage",
    excerpt:
      "Discover practical strategies to reduce your interest costs and pay off your mortgage faster.",
    category: "Money Saving Tips",
    date: "2026-06-08",
    readTime: "7 min read",
    slug: "save-money-mortgage",
  },
  {
    id: 5,
    title: "Understanding Mortgage Basics: A Beginner's Guide",
    excerpt:
      "Learn the fundamental concepts of mortgages including principal, interest, taxes, and insurance.",
    category: "Mortgage Basics",
    date: "2026-06-05",
    readTime: "6 min read",
    slug: "mortgage-basics-guide",
  },
  {
    id: 6,
    title: "Rent vs. Buy: Is It Better to Buy a Home Right Now?",
    excerpt:
      "An in-depth analysis comparing the costs of renting versus buying a home in today's market.",
    category: "Rent vs Buy",
    date: "2026-06-03",
    readTime: "9 min read",
    slug: "rent-vs-buy-analysis",
  },
  {
    id: 7,
    title: "FHA Loans Explained: Requirements, Limits, and Benefits",
    excerpt:
      "Everything you need to know about FHA loans, including eligibility requirements and how to apply.",
    category: "FHA & VA Loans",
    date: "2026-06-01",
    readTime: "7 min read",
    slug: "fha-loans-explained",
  },
  {
    id: 8,
    title: "VA Loans: The Ultimate Guide for Veterans and Service Members",
    excerpt:
      "A comprehensive guide to VA loans, including eligibility, benefits, and the application process for veterans.",
    category: "FHA & VA Loans",
    date: "2026-05-28",
    readTime: "8 min read",
    slug: "va-loans-guide",
  },
  {
    id: 9,
    title: "How to Compare Mortgage Offers and Find the Best Deal",
    excerpt:
      "Learn how to evaluate and compare multiple mortgage offers to ensure you get the best rate and terms.",
    category: "First-Time Buyers",
    date: "2026-05-25",
    readTime: "5 min read",
    slug: "compare-mortgage-offers",
  },
];

const CATEGORIES = [
  "All",
  "Rates & Markets",
  "First-Time Buyers",
  "Loan Types",
  "Money Saving Tips",
  "Mortgage Basics",
  "Rent vs Buy",
  "FHA & VA Loans",
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Mortgage Blog
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Expert advice, market insights, and tips to help you make smarter
            mortgage decisions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <CategoryButton key={cat} label={cat} />
          ))}
        </div>

        {/* Blog Post Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function CategoryButton({ label }: { label: string }) {
  const isAll = label === "All";
  return (
    <button
      type="button"
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
        isAll
          ? "bg-blue-600 text-white"
          : "bg-white text-gray-700 border border-gray-300 hover:border-blue-400 hover:text-blue-600"
      }`}
    >
      {label}
    </button>
  );
}
