import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mortgage Calculator Pro - Calculate Your Monthly Payment",
  description:
    "Free mortgage calculator. Calculate your monthly mortgage payment, compare loan types, and find the best rates. No registration required.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow-sm border-b border-gray-200">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <a href="/" className="text-xl font-bold text-blue-600">
                🏠 Mortgage Calculator Pro
              </a>
              <div className="flex gap-6 text-sm font-medium text-gray-700">
                <a href="/" className="hover:text-blue-600 transition-colors">
                  Calculator
                </a>
                <a href="/blog" className="hover:text-blue-600 transition-colors">
                  Blog
                </a>
              </div>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-900 text-gray-400 py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Mortgage Calculator Pro. All rights reserved.</p>
            <p className="mt-2">Free mortgage calculations. No registration required.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
