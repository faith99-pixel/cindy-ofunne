import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-secondary font-bold text-sm">CO</span>
              </div>
              <span className="font-bold">Cindy Okosun</span>
            </Link>
            <p className="text-gray-400">
              Strategic leader transforming complexity into clarity and results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-primary transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/resume"
                  className="hover:text-primary transition-colors"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Get in Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p>
                <a
                  href="mailto:cindyokosun@yahoo.com"
                  className="hover:text-primary transition-colors"
                >
                  cindyokosun@yahoo.com
                </a>
              </p>
              {/* <p className="text-gray-400">437-774-8847</p> */}
              <a
                href="https://linkedin.com/in/cindyokosun"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Cindy Okosun. All Rights Reserved. | Crafted with
            precision and passion.
          </p>
        </div>
      </div>
    </footer>
  );
}
