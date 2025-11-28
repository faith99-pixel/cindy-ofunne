"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-16 relative" style={{
      backgroundImage: "url('/images/cindy_img.jpg')",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundPosition: "center top",
    }}>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Gradient Overlays for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-transparent to-black/80 z-0"></div>

        {/* Content - Positioned over background */}
        <div className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 py-20">
            <div className="text-center animate-fade-in-up">
              <p className="text-primary font-bold text-sm sm:text-base mb-4 sm:mb-6 tracking-widest uppercase">
                Strategic Leader &amp; Transformation Expert
              </p>
              
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-tight text-white">
                Cindy{" "}
                <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                  Ofunne
                </span>
              </h1>

              {/* Credentials Badge */}
              <div className="mb-8 sm:mb-12 inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary/20 to-orange-600/20 border border-primary/50 rounded-full backdrop-blur-md hover:border-primary transition-all duration-300">
                <span className="text-lg sm:text-xl">🏅</span>
                <span className="text-sm sm:text-base font-semibold bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                  PMP<sup>®</sup> • SCM<sup>®</sup> • MBA
                </span>
              </div>

              <p className="text-lg sm:text-xl lg:text-2xl text-white mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto">
                Highly accomplished professional specializing in strategic IT portfolio and project leadership, STEAM education advocacy, and transformational business coaching.
              </p>

              {/* Quick Stats - Responsive Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-14 max-w-3xl mx-auto">
                {[
                  { number: "15+", label: "Years" },
                  { number: "200+", label: "Teams Led" },
                  { number: "6+", label: "Industries" },
                  { number: "50+", label: "Projects" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="p-4 sm:p-5 backdrop-blur-md bg-white/20 border border-white/40 rounded-xl hover:bg-white/30 hover:border-primary/60 transition-all duration-300 animate-fade-in-up group hover:shadow-lg"
                    style={{
                      animationDelay: `${(index + 2) * 100}ms`,
                    }}
                  >
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary group-hover:text-orange-300 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-200 group-hover:text-white transition-colors duration-300 mt-2">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Link
                  href="/portfolio"
                  className="px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-primary to-orange-600 text-secondary font-bold rounded-2xl hover:shadow-2xl transition-all duration-300 shadow-lg hover:scale-105 group text-sm sm:text-base whitespace-nowrap"
                >
                  <span className="flex items-center justify-center gap-2">
                    View My Work
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </span>
                </Link>
                <a
                  href="mailto:cindyofunne@yahoo.com"
                  className="px-6 sm:px-10 py-3 sm:py-4 border-2 border-primary text-primary hover:bg-primary hover:text-secondary rounded-2xl transition-all duration-300 font-semibold hover:scale-105 text-sm sm:text-base whitespace-nowrap"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-transparent to-black/80 z-0"></div>
        
        <div className="relative z-10">
         <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              Career &amp; <span className="text-primary">Expertise</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Left Column */}
            <div className="animate-fade-in-up">
              <div className="backdrop-blur-md bg-white/40 border border-white/40 rounded-2xl p-8 hover:bg-white/60 transition-all duration-300">
                <h3 className="sm:text-2xl text-[18px] font-bold text-secondary mb-4">📚 Education & Credentials</h3>
                <ul className="space-y-3 text-secondary">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span><strong>MBA</strong> - Finance & Investment specialization</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span><strong>Bachelor of Science</strong> - Computer Science</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span><strong>Postgraduate Diploma</strong> - Project Management (with Distinction)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span><strong>Doctorate (In Progress)</strong> - Business Administration</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <div className="backdrop-blur-md bg-white/40 border border-white/40 rounded-2xl p-8 hover:bg-white/60 transition-all duration-300">
                <h3 className="sm:text-2xl text-[18px] font-bold text-secondary mb-4 text-nowrap">🏆 Key Roles & Achievements</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">→</span>
                    <span><strong className="text-secondary">PME Academy Founder</strong> <span className="text-secondary">- Training next-generation project managers</span></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">→</span>
                    <span><strong className="text-secondary">Book Author</strong> <span className="text-secondary">- &quot;Mastering ERP Projects&quot; guide</span></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">→</span>
                    <span><strong className="text-secondary">STEAM Advocate</strong> <span className="text-secondary">- Women in technology mentor</span></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">→</span>
                    <span><strong className="text-secondary">Board Director</strong> <span className="text-secondary">- Multiple community organizations</span></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <h3 className="text-2xl sm:text-4xl font-bold text-primary mb-6 animate-slide-up">🎓 Professional Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "PMP®",
                "Scrum Certified Master",
                "ITIL Certified",
                "PMI-CPMAI",
              ].map((cert, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md bg-white/30 border border-white/40 rounded-xl p-4 text-center hover:bg-white/50 hover:border-primary/50 transition-all duration-300 animate-scale-in hover:shadow-lg hover:shadow-primary/20"
                  style={{
                    animationDelay: `${(index + 1) * 50}ms`,
                  }}
                >
                  <p className="font-semibold text-secondary">{cert}</p>
                </div>
              ))}
            </div>
          </div>
          </div>
          </div>
          </section>

          {/* Framework Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50 z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-transparent to-black/80 z-0"></div>
            
            <div className="relative z-10">
             <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">
              <span className="text-white">My Approach: The</span>{" "}
              <span className="text-primary">DRIVE Framework</span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              A proven methodology for transforming complex challenges into
              structured, measurable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                letter: "D",
                title: "Define",
                description:
                  "Establish clear scope, objectives, and success metrics through strategic planning and stakeholder alignment.",
              },
              {
                letter: "R",
                title: "Refine",
                description:
                  "Iteratively optimize strategies, processes, and solutions through continuous feedback and improvement cycles.",
              },
              {
                letter: "I",
                title: "Innovate",
                description:
                  "Implement digital transformation initiatives, cloud migration, and modern tools to enhance operational excellence.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative p-8 backdrop-blur-md bg-white/40 border border-white/40 rounded-2xl hover:bg-white/60 hover:border-primary/50 transition-all duration-300 hover:shadow-xl animate-fade-in-up hover:scale-105"
                style={{
                  animationDelay: `${(index + 1) * 100}ms`,
                }}
              >
                <div className="text-5xl font-bold text-primary mb-4 opacity-60 group-hover:opacity-100 transform transition-transform duration-300">
                   {item.letter}
                 </div>
                <h3 className="text-2xl font-bold text-secondary mb-3">
                  {item.title}
                </h3>
                <p className="text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                letter: "V",
                title: "Validate",
                description:
                  "Ensure continuous quality, robust testing, and comprehensive risk management throughout project lifecycle.",
              },
              {
                letter: "E",
                title: "Execute",
                description:
                  "Deliver with precision through meticulous planning, resource optimization, and agile methodology implementation.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative p-8 backdrop-blur-md bg-white/40 border border-white/40 rounded-2xl hover:bg-white/60 hover:border-primary/50 transition-all duration-300 hover:shadow-xl animate-fade-in-up hover:scale-105"
                style={{
                  animationDelay: `${(index + 4) * 100}ms`,
                }}
              >
                <div className="text-5xl font-bold text-primary mb-4 opacity-60 group-hover:opacity-100 transform transition-transform duration-300">
                   {item.letter}
                 </div>
                 <h3 className="text-2xl font-bold text-secondary mb-3">
                   {item.title}
                </h3>
                <p className="text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        </div>
        </section>

        {/* Publications & Books Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Publications &amp; <span className="text-primary">Thought Leadership</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Sharing insights, expertise, and practical frameworks with the global community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Book */}
            <div className="group animate-fade-in-up p-8 backdrop-blur-md bg-white/15 border border-white/30 rounded-2xl hover:bg-white/25 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105">
              <div className="mb-6 text-6xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-float">
                📖
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">Mastering ERP Projects</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                A comprehensive guide to successful ERP implementation featuring real-world case studies and proven strategies for enterprise resource planning.
              </p>
              <a
                href="https://books.google.ca/books/about/Mastering_Erp_Projects.html?id=-eFg0QEACAAJ&redir_esc=y"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-orange-400 font-semibold transition-all group-hover:translate-x-2"
              >
                View on Google Books →
              </a>
            </div>

            {/* LinkedIn Articles */}
            <div className="group animate-fade-in-up p-8 backdrop-blur-md bg-white/15 border border-white/30 rounded-2xl hover:bg-white/25 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105" style={{ animationDelay: "100ms" }}>
              <div className="mb-6 text-6xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-float" style={{ animationDelay: "0.3s" }}>
                📝
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">LinkedIn Articles</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Regular insights on project management, digital transformation, organizational leadership, and career development in the modern workplace.
              </p>
              <a
                href="https://www.linkedin.com/in/cindyofunne/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-orange-400 font-semibold transition-all group-hover:translate-x-2"
              >
                Read on LinkedIn →
              </a>
            </div>

            {/* PME Academy */}
            <div className="group animate-fade-in-up p-8 backdrop-blur-md bg-white/15 border border-white/30 rounded-2xl hover:bg-white/25 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105" style={{ animationDelay: "200ms" }}>
              <div className="mb-6 text-6xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-float" style={{ animationDelay: "0.6s" }}>
                🎓
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">PME Academy</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Founder and mentor of the Project Management Expert Academy, dedicated to training and developing the next generation of PM professionals.
              </p>
              <a
                href="https://www.linkedin.com/in/cindyofunne/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-orange-400 font-semibold transition-all group-hover:translate-x-2"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-transparent to-black/80 z-0"></div>
        
        <div className="relative z-10">
         <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Awards &amp; <span className="text-primary">Recognition</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                award: "Woman of Distinction",
                org: "YWCA",
                year: "2025",
                icon: "👩",
              },
              {
                award: "Business Elite 40 Under 40",
                org: "Canada",
                year: "2025",
                icon: "🌟",
              },
              {
                award: "Best PM Award",
                org: "GTAA Projects, Wipro",
                year: "2022",
                icon: "🏆",
              },
              {
                award: "Exceptional Performer",
                org: "American Tower Corporation",
                year: "2015-2017",
                icon: "⭐",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group animate-fade-in-up backdrop-blur-md bg-gradient-to-r from-primary/10 to-orange-600/10 border border-white/40 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105 hover:bg-gradient-to-r hover:from-primary/20 hover:to-orange-600/20"
                style={{
                  animationDelay: `${(index + 1) * 100}ms`,
                }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>{item.icon}</span>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300">
                      {item.award}
                    </h4>
                    <p className="text-primary font-semibold text-sm mb-2">
                      {item.org}
                    </p>
                    <p className="text-white text-sm">{item.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
          </div>
          </section>

          {/* CTA Section */}
          <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative">
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50 z-0 shadow-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-transparent to-black/80 z-0"></div>
            
            <div className="relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-fade-in-up" style={{ animationDelay: "0ms" }}>
                Ready to Transform Your Next Project?
              </h2>
              <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                Let&rsquo;s discuss how I can help you navigate complexity and
                deliver excellence.
              </p>
              <a
                href="mailto:cindyofunne@yahoo.com"
                className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: "200ms" }}
              >
                Start the Conversation
              </a>
            </div>
            </div>
          </section>
    </main>
  );
}
