"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navigation() {
   const [isOpen, setIsOpen] = useState(false);
   const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-0 lg:px-0">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-sm">CO</span>
            </div>
            <span className="font-bold text-secondary hidden sm:inline group-hover:text-primary transition-colors">
              Cindy Okosun
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
              href="mailto:cindyokosun@yahoo.com"
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
                className={`h-0.5 bg-primary group-hover:bg-primary transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              />
              <span
                className={`h-0.5 bg-primary group-hover:bg-primary transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 bg-primary group-hover:bg-primary transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden fixed left-0 top-16 w-full h-[calc(100vh-64px)] bg-gray-900 backdrop-blur-md border-t border-gray-700/50 flex flex-col pt-8 animate-fade-in-up z-40 shadow-lg">
            <div className="space-y-1 flex-1">
              {[
                { label: "About", href: "/"},
                { label: "Projects", href: "/portfolio"},
                { label: "Resume", href: "/resume" },
              ].map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 rounded-xl transition-all duration-300 font-medium text-xl group relative overflow-hidden ${
                    pathname === item.href
                      ? "text-primary"
                      : "text-white/90 hover:text-white"
                  }`}
                  style={{
                    animation: `slideDown 0.5s ease-out ${index * 100}ms backwards`,
                  }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span className={`text-lg transition-all duration-300 ${
                      pathname === item.href 
                        ? "scale-110" 
                        : "group-hover:scale-110 group-hover:rotate-12"
                    }`}>
                      {/* {item.emoji} */}
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {item.label}
                    </span>
                    {pathname === item.href && (
                      <span className="ml-auto text-primary">•</span>
                    )}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              ))}
            </div>
            <a
              href="mailto:cindyokosun@yahoo.com"
              className="block w-[90%] mx-auto px-6 py-4 bg-gradient-to-r from-primary to-orange-600 text-white rounded-2xl font-semibold text-center hover:shadow-lg transition-all duration-300 mb-24"
              style={{
                animation: `slideDown 0.4s ease-out 240ms backwards, breathing 2.5s ease-in-out 240ms infinite`,
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
        @keyframes breathing {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(255, 87, 34, 0.7);
          }
          50% {
            transform: scale(1.02);
            box-shadow: 0 0 0 8px rgba(255, 87, 34, 0);
          }
        }
      `}</style>
    </nav>
  );
}