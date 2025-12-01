"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  company: string;
  period: string;
  role: string;
  tags: string[];
  description: string;
  impact: string[];
  methodologies: string[];
  icon: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Plus Infrastructure Upgrade & Enterprise Risk Management",
    company: "Infrastructure Ontario",
    period: "Sept 2024 - Nov 2025",
    role: "Senior IT Project Manager",
    tags: [
      "Infrastructure",
      "Risk Management",
      "Enterprise Systems",
      "Leadership",
    ],
    description:
      "Led successful deployment of Portfolio Plus infrastructure upgrade, implementation of Enterprise Risk Management (GRC) tool, and ServiceNow platform across the organization. Coached a team of 6 project managers while implementing continuous learning initiatives.",
    impact: [
      "Enhanced QA process by 15%",
      "Improved overall testing practices",
      "Seamless system execution and alignment",
      "Coached team of 6 project managers",
    ],
    methodologies: ["Strategic Planning", "Agile", "Risk Management"],
    icon: "🏗️",
  },
  {
    id: 2,
    title: "HRIS Implementation - UKG (Ultimate Kronos Group)",
    company: "Arnprior Regional Health",
    period: "Jul 2023 - Sept 2024",
    role: "HRIS Project Manager (Contract)",
    tags: ["HRIS", "Change Management", "Healthcare", "Implementation"],
    description:
      "Set up Change Management Board and Steering Committee, leading end-to-end implementation of UKG for 3,000 employees across the regional healthcare system. Directed cross-functional teams ensuring timely delivery and adherence to quality standards.",
    impact: [
      "Project completion 20% ahead of schedule",
      "15% increase in overall efficiency",
      "20% improvement in testing turnaround time",
      "Robust quality assurance measures implemented",
    ],
    methodologies: ["Change Management", "Waterfall", "Quality Assurance"],
    icon: "🏥",
  },
  {
    id: 3,
    title: "EPMO Transformation & Strategic Portfolio Management",
    company: "Equifax",
    period: "Oct 2022 - May 2023",
    role: "Senior Project Manager, EPMO",
    tags: ["EPMO", "Program Management", "Transformation", "Strategy"],
    description:
      "Program-level oversight and associate directorship of three PMs on EPMO transformation programs. Designed and executed complex strategic portfolio of programs with proactive risk remediation.",
    impact: [
      "Risk remedies proactively implemented",
      "8% improvement in stakeholder communication",
      "Strategic initiative tracking and execution",
      "Junior PM mentoring and guidance",
    ],
    methodologies: ["Portfolio Management", "Risk Management", "Leadership"],
    icon: "📊",
  },
  {
    id: 4,
    title: "Cloud Migration, Infrastructure Upgrade & Digital Transformation",
    company: "Toronto Pearson Airport (via Wipro)",
    period: "Jan 2022 - Aug 2022",
    role: "Project Manager",
    tags: ["Cloud", "IT Infrastructure", "Digital Transformation", "Airport"],
    description:
      "Managed multiple IT Programs including Cloud migration, Infrastructure upgrade, PSRN and enhancement initiatives. Successfully delivered Phase 1 of E-EVIDS program while recruiting scarce skills and optimizing resource planning.",
    impact: [
      "Phase 1 E-EVIDS delivered in 5 months",
      "Resource planning improved significantly",
      "Scarce skills recruited within 2 months",
      "Rigorous testing across SIT, UAT, BAT phases",
    ],
    methodologies: [
      "Agile",
      "Cloud Technologies (AWS, Azure)",
      "Integration Testing",
    ],
    icon: "☁️",
  },
  {
    id: 5,
    title: "Capital Project Expansion & Budget Management",
    company: "GoWrench Inc",
    period: "Jun 2021 - Jan 2022",
    role: "Senior Project Manager",
    tags: ["Capital Projects", "Budget", "Engineering", "Planning"],
    description:
      "Efficiently planned, directed and managed overall control and coordination of key capital project expansion initiatives. Improved project management policies and artifacts while optimizing vendor performance.",
    impact: [
      "Enhanced project management practices",
      "Comprehensive budget planning and forecasting",
      "Vendor performance optimization",
      "Capital expenditure process streamlined",
    ],
    methodologies: ["Financial Management", "Process Improvement"],
    icon: "💼",
  },
  {
    id: 6,
    title: "Network Operations Centre Setup & IT Remote Management Solutions",
    company: "American Tower Corporation",
    period: "Apr 2015 - Sep 2021",
    role: "Supervisor, Projects & NOC",
    tags: ["Network Operations", "Infrastructure", "Team Building", "Process"],
    description:
      "Led team growth from startup to 100+ staff managing critical 24x7 environments. Implemented RMS projects across 4,752 live sites while developing IT policies and procedures. Achieved 85% success rate through efficient scheduling and stakeholder management.",
    impact: [
      "Success rate increased from 50% to 85%",
      "Team scaled from 5 to 100+ members",
      "55% vendor performance improvement",
      "Automated theft incident reporting system",
    ],
    methodologies: ["Team Leadership", "Process Development", "Automation"],
    icon: "🌐",
  },
];

export default function Portfolio() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredProjects = selectedTag
    ? projects.filter((project) => project.tags.includes(selectedTag))
    : projects;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSelectedTag(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <main className="pt-16 relative" style={{
      backgroundImage: "url('/images/cindy_img.jpg')",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundPosition: "center top",
    }}>
      {/* Portfolio Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/80 to-black/75 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 z-0"></div>
        
        <div className="relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in-up">
              <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
                My <span className="text-primary">Projects</span>
              </h1>
              <p className="text-base sm:text-xl text-white max-w-3xl mx-auto">
                From cloud migrations to enterprise transformations, explore how I&apos;ve delivered measurable impact across industries.
              </p>
            </div>



            {/* Projects Grid - Simplified Cards */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  }}
                >
                  <Link
                    href={`/portfolio/project/${project.id}`}
                    className="group h-full block"
                  >
                  <div className="backdrop-blur-md bg-white/15 border border-white/30 rounded-2xl p-6 sm:p-8 hover:bg-white/25 hover:border-primary shadow-lg shadow-primary/20 transition-all duration-300 h-full flex flex-col justify-between group-hover:scale-105">
                    {/* Icon & Company */}
                    <div>
                      <div className="text-5xl sm:text-6xl mb-3 transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 animate-float">{project.icon}</div>
                      <p className="text-sm sm:text-base font-semibold text-primary mb-2 group-hover:text-orange-300 transition-colors duration-300">
                        {project.company}
                      </p>
                      <p className="text-xs sm:text-sm text-white font-medium mb-2">{project.role}</p>
                      <p className="text-xs sm:text-sm text-white">{project.period}</p>
                    </div>

                    {/* Title */}
                    <div className="my-4 sm:my-6">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 line-clamp-2 transition-colors duration-300 group-hover:text-primary">
                        {project.title}
                      </h3>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-white text-xs sm:text-sm font-medium rounded-full border border-primary/20 animate-scale-in transition-all hover:border-primary/50"
                          style={{
                            animationDelay: `${tagIndex * 50}ms`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <p className="text-sm sm:text-base font-semibold text-primary group-hover:text-orange-300 transition-all duration-300 flex items-center gap-2">
                      View Details
                      <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                    </p>
                    </div>
                    </Link>
                    </motion.div>
                    ))}
                    </motion.div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <p className="text-2xl text-white mb-6">
                  No projects found for the selected filter.
                </p>
                <button
                  onClick={() => setSelectedTag(null)}
                  className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-orange-600 transition-all duration-300 font-medium hover:scale-105"
                >
                  View All Projects
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/80 to-black/75 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 z-0"></div>
        
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 animate-fade-in-up">
              Ready to Work Together?
            </h2>
            <p className="text-base sm:text-xl text-white mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              Let&rsquo;s discuss how my experience can help your organization succeed.
            </p>
            <a
              href="mailto:cindyofunne@yahoo.com"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
