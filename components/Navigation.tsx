"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg"
          : "bg-white/40 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-0 lg:px-0">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-sm">CO</span>
            </div>
            <span className="font-bold text-secondary hidden sm:inline group-hover:text-primary transition-colors">
              Cindy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "About", href: "/" },
              { label: "Projects", href: "/portfolio" },
              { label: "Resume", href: "/resume" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-medium transition-colors duration-300 ${
                  pathname === item.href
                    ? "text-primary"
                    : "text-secondary hover:text-primary"
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-orange-600 animate-fade-in"></span>
                )}
              </Link>
            ))}
            <a
              href="mailto:cindyofunne@yahoo.com"
              className="px-6 py-2 bg-gradient-to-r from-primary to-orange-600 text-white rounded-2xl hover:shadow-lg transition-all duration-300 font-medium hover:scale-105"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 group"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-0.5 bg-secondary group-hover:bg-primary transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              />
              <span
                className={`h-0.5 bg-secondary group-hover:bg-primary transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 bg-secondary group-hover:bg-primary transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-2 animate-fade-in-up border-t border-gray-200/50">
            {[
              { label: "About", href: "/" },
              { label: "Projects", href: "/portfolio" },
              { label: "Resume", href: "/resume" },
            ].map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                  pathname === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-secondary hover:bg-gray-100"
                }`}
                style={{
                  animation: `slideDown 0.3s ease-out ${index * 50}ms backwards`,
                }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="mailto:cindyofunne@yahoo.com"
              className="block px-4 py-3 bg-gradient-to-r from-primary to-orange-600 text-white rounded-2xl font-medium text-center hover:shadow-lg transition-all duration-300 mt-2"
              style={{
                animation: `slideDown 0.3s ease-out 150ms backwards`,
              }}
            >
              Get in Touch
            </a>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}
