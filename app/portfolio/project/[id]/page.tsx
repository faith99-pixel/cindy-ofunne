"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

interface Project {
  id: number;
  title: string;
  company: string;
  period: string;
  tags: string[];
  description: string;
  impact: string[];
  methodologies: string[];
  image: string;
  fullDescription: string;
  requirements: string[];
  challenges: string[];
  approach: string;
  solution: string[];
  results: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Plus Infrastructure Upgrade & Enterprise Risk Management",
    company: "Infrastructure Ontario",
    period: "Sept 2024 - Nov 2025",
    image: "/images/cindy_project.jpg",
    tags: [
      "Infrastructure",
      "Risk Management",
      "Enterprise Systems",
      "Leadership",
    ],
    description:
      "Led successful deployment of Portfolio Plus infrastructure upgrade, implementation of Enterprise Risk Management (GRC) tool, and ServiceNow platform across the organization. Coached a team of 6 project managers while implementing continuous learning initiatives.",
    fullDescription:
      "Infrastructure Ontario faced significant obstacles modernizing its project portfolio management across 12+ departments. The organization struggled with legacy systems preventing visibility, inconsistent risk management practices, and workflow inefficiencies. Without integrated solutions, stakeholders operated in silos and project managers lacked unified frameworks to manage complex initiatives.",
    requirements: [
      "Modernize project portfolio management across 12+ departments",
      "Implement enterprise-wide GRC tool for risk compliance",
      "Deploy ServiceNow platform for workflow automation",
      "Train and coach 6 project managers on new systems",
      "Ensure zero critical incidents during migration",
    ],
    challenges: [
      "Managing complex multi-system integration across legacy platforms",
      "Coordinating stakeholder alignment among diverse business units",
      "Ensuring minimal disruption to ongoing operations during migration",
      "Building team capacity through intensive training programs",
    ],
    approach:
      "Phased rollout with stakeholder engagement. Strategic Planning governance combined with Agile execution. Risk mitigation at each implementation phase.",
    solution: [
      "Deployed Portfolio Plus with seamless integration to existing systems",
      "Implemented GRC tool with automated compliance monitoring",
      "Integrated ServiceNow for unified workflow and incident management",
      "Conducted weekly coaching sessions for project managers",
      "Created standardized documentation and training modules",
    ],
    impact: [
      "Enhanced QA process by 15%",
      "Improved overall testing practices",
      "Seamless system execution and alignment",
      "Coached team of 6 project managers",
    ],
    methodologies: ["Strategic Planning", "Agile", "Risk Management"],
    results: [
      "Successfully deployed across entire organization with zero critical incidents",
      "Achieved 99.8% system uptime in first quarter",
      "Training completion rate: 100% within 6 weeks",
      "ROI achieved 3 months ahead of projections",
    ],
  },
  {
    id: 2,
    title: "HRIS Implementation - UKG (Ultimate Kronos Group)",
    company: "Arnprior Regional Health",
    period: "Jul 2023 - Sept 2024",
    image: "/images/cindy_1.jpg",
    tags: ["HRIS", "Change Management", "Healthcare", "Implementation"],
    description:
      "Set up Change Management Board and Steering Committee, leading end-to-end implementation of UKG for 3,000 employees across the regional healthcare system. Directed cross-functional teams ensuring timely delivery and adherence to quality standards.",
    fullDescription:
      "Arnprior Regional Health faced critical challenges implementing a new HRIS system while maintaining uninterrupted patient care across multiple facilities. The organization struggled with legacy system data integrity, coordinating schedules with clinical staff, and ensuring minimal disruption to healthcare operations. Complex compliance requirements, training demands for 3,000 employees, and tight integration timelines created significant implementation pressure.",
    requirements: [
      "Onboard 3,000 employees across multiple healthcare facilities",
      "Migrate legacy HRIS data with 99.9% accuracy",
      "Implement workforce scheduling optimization",
      "Deploy benefits administration system",
      "Maintain patient care continuity during implementation",
    ],
    challenges: [
      "Managing healthcare compliance during system transition",
      "Coordinating with clinical staff while maintaining patient care continuity",
      "Data migration from legacy systems with high accuracy requirements",
      "Scheduling implementation around healthcare operations",
    ],
    approach:
      "Governance via Change Management Board and Steering Committee. Phased rollout with dedicated clinical and administrative liaisons. Role-based training programs.",
    solution: [
      "Deployed UKG platform with phased implementation across facilities",
      "Executed data migration with 99.97% accuracy validation",
      "Implemented workforce scheduling optimization module",
      "Integrated benefits administration with payroll system",
      "Conducted role-based training for all 3,000 employees",
    ],
    impact: [
      "Project completion 20% ahead of schedule",
      "15% increase in overall efficiency",
      "20% improvement in testing turnaround time",
      "Robust quality assurance measures implemented",
    ],
    methodologies: ["Change Management", "Waterfall", "Quality Assurance"],
    results: [
      "3,000 employees onboarded without operational disruption",
      "Payroll accuracy improved to 99.97%",
      "Self-service capabilities reduced HR ticket volume by 40%",
      "Employee satisfaction with new system: 92%",
    ],
  },
  {
    id: 3,
    title: "EPMO Transformation & Strategic Portfolio Management",
    company: "Equifax",
    period: "Oct 2022 - May 2023",
    image: "/images/cindy_project.jpg",
    tags: ["EPMO", "Program Management", "Transformation", "Strategy"],
    description:
      "Program-level oversight and associate directorship of three PMs on EPMO transformation programs. Designed and executed complex strategic portfolio of programs with proactive risk remediation.",
    fullDescription:
      "Equifax's EPMO faced structural challenges in its complex matrix organization. Diverse project methodologies created inconsistency across programs, stakeholder expectations remained misaligned across executive levels, and multiple concurrent initiatives strained resources and visibility. The organization needed unified governance while maintaining flexibility across distinct business units and competing priorities.",
    requirements: [
      "Establish EPMO governance in matrix organization",
      "Direct 3 project managers across multiple programs",
      "Design program management framework",
      "Integrate diverse PM methodologies",
      "Manage stakeholder expectations across executive leadership",
    ],
    challenges: [
      "Establishing governance in a complex matrix organization",
      "Integrating diverse program methodologies",
      "Managing stakeholder expectations across executive leadership",
      "Maintaining momentum across multiple concurrent programs",
    ],
    approach:
      "EPMO governance with clear decision-making frameworks. Portfolio Management methodology with embedded Risk Management. Executive steering committee with stakeholder representatives.",
    solution: [
      "Designed and implemented EPMO governance framework",
      "Mentored 3 project managers on strategic portfolio management",
      "Created program visibility dashboards for executive tracking",
      "Implemented proactive risk remediation processes",
      "Established communication cadence with stakeholders",
    ],
    impact: [
      "Risk remedies proactively implemented",
      "8% improvement in stakeholder communication",
      "Strategic initiative tracking and execution",
      "Junior PM mentoring and guidance",
    ],
    methodologies: ["Portfolio Management", "Risk Management", "Leadership"],
    results: [
      "All programs delivered on schedule and within budget",
      "Stakeholder satisfaction increased from 72% to 89%",
      "Program visibility dashboards adopted company-wide",
      "3 junior PMs advanced to senior roles",
    ],
  },
  {
    id: 4,
    title: "Cloud Migration, Infrastructure Upgrade & Digital Transformation",
    company: "Toronto Pearson Airport (via Wipro)",
    period: "Jan 2022 - Aug 2022",
    image: "/images/cindy_1.jpg",
    tags: ["Cloud", "IT Infrastructure", "Digital Transformation", "Airport"],
    description:
      "Managed multiple IT Programs including Cloud migration, Infrastructure upgrade, PSRN and enhancement initiatives. Successfully delivered Phase 1 of E-EVIDS program while recruiting scarce skills and optimizing resource planning.",
    fullDescription:
      "Toronto Pearson Airport faced unprecedented challenges modernizing its IT infrastructure while managing critical passenger operations supporting 1.8M annual travelers. The organization battled legacy system dependencies preventing cloud adoption, specialized skill shortages in AWS/Azure expertise, and strict regulatory compliance requirements. Any service interruption risked operational disruption, making risk mitigation and phased implementation essential across multiple concurrent programs.",
    requirements: [
      "Migrate legacy infrastructure to AWS/Azure cloud",
      "Deploy E-EVIDS system supporting 1.8M annual passengers",
      "Maintain zero airport operation downtime during migration",
      "Recruit AWS/Azure specialized expertise",
      "Ensure PSRN regulatory compliance throughout",
    ],
    challenges: [
      "Conducting cloud migration without disrupting airport operations",
      "Recruiting specialized AWS/Azure expertise in competitive market",
      "Coordinating multiple IT teams across vendor boundaries",
      "Managing regulatory compliance requirements (PSRN standards)",
    ],
    approach:
      "Agile methodology with phased cloud migration. Parallel work streams for infrastructure and E-EVIDS. Vendor coordination framework with escalation procedures. Specialized skills recruitment strategy.",
    solution: [
      "Migrated infrastructure to AWS/Azure with zero downtime",
      "Successfully delivered E-EVIDS Phase 1 in 5 months",
      "Recruited AWS/Azure specialists within 2 months",
      "Implemented rigorous testing across SIT, UAT, BAT phases",
      "Established vendor coordination and governance",
    ],
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
    results: [
      "Cloud infrastructure cost reduced by 28%",
      "System uptime improved from 94% to 99.5%",
      "E-EVIDS Phase 1 supporting 1.8M annual passengers",
      "Team retention during migration: 96%",
    ],
  },
  {
    id: 5,
    title: "Capital Project Expansion & Budget Management",
    company: "GoWrench Inc",
    period: "Jun 2021 - Jan 2022",
    image: "/images/cindy_project.jpg",
    tags: ["Capital Projects", "Budget", "Engineering", "Planning"],
    description:
      "Efficiently planned, directed and managed overall control and coordination of key capital project expansion initiatives. Improved project management policies and artifacts while optimizing vendor performance.",
    fullDescription:
      "GoWrench Inc struggled to control escalating costs across concurrent capital expansion projects amid volatile material costs and supply chain disruptions. The organization lacked standardized project management practices, faced inconsistent vendor performance across multiple sites, and operated without predictive financial forecasting. Budget variances and documentation gaps threatened project timelines and profitability targets.",
    requirements: [
      "Execute multiple concurrent capital projects",
      "Maintain budget control within fixed allocations",
      "Coordinate vendors across multiple sites",
      "Establish standardized PM methodologies",
      "Optimize financial forecasting and planning",
    ],
    challenges: [
      "Managing fixed budgets with escalating material costs",
      "Coordinating vendor performance across multiple sites",
      "Ensuring project schedule adherence with supply chain disruptions",
      "Maintaining documentation and compliance standards",
    ],
    approach:
      "Financial Management framework with quarterly forecasting. Standardized PM artifacts and processes. Vendor performance management with quarterly reviews. Budget tracking and variance analysis.",
    solution: [
      "Designed and implemented standardized PM methodologies",
      "Created financial forecasting models for budget control",
      "Established vendor performance management system",
      "Implemented comprehensive budget tracking processes",
      "Developed escalation procedures for budget variances",
    ],
    impact: [
      "Enhanced project management practices",
      "Comprehensive budget planning and forecasting",
      "Vendor performance optimization",
      "Capital expenditure process streamlined",
    ],
    methodologies: ["Financial Management", "Process Improvement"],
    results: [
      "Capital expenditure variance reduced from 12% to 3.2%",
      "Average project delivery time improved by 15%",
      "Vendor cost optimization: 8% savings achieved",
      "Project documentation standardization: 100% compliance",
    ],
  },
  {
    id: 6,
    title: "Network Operations Centre Setup & IT Remote Management Solutions",
    company: "American Tower Corporation",
    period: "Apr 2015 - Sep 2021",
    image: "/images/cindy_1.jpg",
    tags: ["Network Operations", "Infrastructure", "Team Building", "Process"],
    description:
      "Led team growth from startup to 100+ staff managing critical 24x7 environments. Implemented RMS projects across 4,752 live sites while developing IT policies and procedures. Achieved 85% success rate through efficient scheduling and stakeholder management.",
    fullDescription:
      "American Tower Corporation faced massive operational challenges scaling a Network Operations Centre from minimal staff to manage 24/7 operations across 4,752 live tower sites. The organization struggled with rapid team scaling while maintaining quality standards, coordinating global time zone coverage, and implementing new Remote Management Systems across legacy infrastructure. Incident response delays and high initial failure rates threatened service reliability and customer satisfaction.",
    requirements: [
      "Build NOC from scratch with 5 team members",
      "Scale to 100+ staff supporting 4,752 live sites",
      "Implement RMS across all tower sites",
      "Develop IT policies and procedures",
      "Achieve 24/7 operational capability across time zones",
    ],
    challenges: [
      "Rapidly scaling operations while maintaining quality standards",
      "Managing 24/7 operations across time zones",
      "Implementing new technology across legacy infrastructure",
      "Reducing incident response time while expanding service scope",
    ],
    approach:
      "Built NOC from inception with structured team development plan. Implemented Team Leadership framework for rapid scaling. Created process documentation and automation systems. Established vendor management framework for RMS implementation across all sites.",
    solution: [
      "Built NOC from 5 to 100+ staff with structured hiring plan",
      "Implemented RMS across 4,752 live tower sites",
      "Developed comprehensive IT policies and procedures",
      "Created automated theft incident reporting system",
      "Established 24/7 operational capacity across time zones",
    ],
    impact: [
      "Success rate increased from 50% to 85%",
      "Team scaled from 5 to 100+ members",
      "55% vendor performance improvement",
      "Automated theft incident reporting system",
    ],
    methodologies: ["Team Leadership", "Process Development", "Automation"],
    results: [
      "NOC handled 50,000+ incidents annually with 85% first-contact resolution",
      "System uptime across portfolio: 99.2%",
      "Employee retention rate: 89% (industry average: 65%)",
      "Cost per incident managed: 32% reduction",
    ],
  },
];

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const projectId = parseInt(params.id as string);

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-secondary mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The project you&rsquo;re looking for doesn&rsquo;t exist.
          </p>
          <Link
            href="/portfolio"
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            Back to Portfolio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-16 relative" style={{
      backgroundImage: "url('/images/cindy_img.jpg')",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundPosition: "center top",
    }}>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-transparent to-black/80 z-0"></div>

      <div className="relative z-10 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Header with Back Button */}
        <div className="max-w-5xl mx-auto mb-8">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-white hover:text-primary font-semibold transition-colors mb-8 mt-8"
          >
            <span>←</span> Back to Portfolio
          </button>
        </div>

        <article className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="mb-12 animate-fade-in-up">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl sm:text-5xl font-bold text-white mb-3">
                  {project.title}
                </h1>
                <p className="text-xl text-primary font-semibold">
                  {project.company}
                </p>
              </div>
              <div className="text-base sm:text-lg font-semibold text-white bg-primary/30 px-4 py-2 rounded-lg sm:whitespace-nowrap border border-primary/50 w-fit">
                {project.period}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-primary/30 text-white rounded-full text-sm font-medium border border-primary/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Project Overview Section */}
          <section className="mb-12 animate-fade-in-up">
            <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
            <p className="text-lg text-white/90 leading-relaxed">
              {project.description}
            </p>
          </section>

          {/* Results Section - Visual Metrics */}
          <section className="mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
              <span className="text-3xl animate-float">📊</span>
              The Results
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.results.map((result, index) => {
                // Parse results to extract metrics and descriptions
                const parts = result.split(':');
                const metric = parts[0].trim();
                const description = parts[1]?.trim() || '';

                return (
                  <div
                    key={index}
                    className="w-full p-4 bg-white/15 border border-white/30 rounded-xl hover:shadow-lg hover:shadow-primary/20"
                    style={{
                      animationDelay: `${index * 75}ms`,
                    }}
                  >
                    <h3 className="text-primary font-bold text-base mb-3 tracking-wider hover:text-orange-300 transition-colors duration-300">
                      {metric.split(/(\d+[%]?)/)[0]?.trim()}
                    </h3>
                    <p className="text-2xl font-bold text-white mb-3 transform transition-transform duration-300">
                      {metric.match(/\d+[%]?/)?.[0] || metric}
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed hover:text-white/90 transition-colors duration-300">
                      {description || metric}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Approach & Solution Grid */}
          <div className="grid sm:grid-cols-2 gap-8 mb-12 animate-fade-in-up">
            {/* Approach Section */}
            <section className="transition-transform duration-300 p-4">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                <span className="w-3 h-3 bg-primary rounded-full animate-pulse-slow"></span>
                Approach
              </h2>
              <p className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">
                {project.approach}
              </p>
            </section>

            {/* Solution Section */}
            <section className="transition-transform duration-300 p-4">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                <span className="w-3 h-3 bg-primary rounded-full animate-pulse-slow"></span>
                Solution
              </h2>
              <ul className="space-y-3">
                {project.solution.map((item, i) => (
                  <li key={i} className="text-white/90 flex gap-3 hover:text-white duration-300 group-hover:translate-x-2 transition-transform">
                    <span className="text-primary font-bold flex-shrink-0 transform group-hover:scale-125 transition-transform duration-300">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Methodologies Section */}
          <section className="mb-12 animate-fade-in-up group">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
              <span className="w-3 h-3 bg-primary rounded-full animate-pulse-slow"></span>
              Methodologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.methodologies.map((method, index) => (
                <span
                  key={method}
                  className="px-4 py-2 bg-primary/30 text-white rounded-lg font-medium border border-primary/50 animate-scale-in hover:bg-primary/50 hover:scale-110 transition-all duration-300"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {method}
                </span>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 p-8 sm:p-12 bg-white/10 border border-primary/30 rounded-xl text-white text-center animate-fade-in-up group hover:bg-white/15 hover:border-primary/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30">
            <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
              Ready to Discuss Similar Projects?
            </h2>
            <p className="text-lg text-white/85 mb-8 max-w-2xl mx-auto group-hover:text-white/95 transition-colors duration-300">
              I&apos;d love to explore how my experience can help with your
              organization&apos;s transformation goals.
            </p>
            <a
              href="mailto:cindyofunne@yahoo.com?subject=Project Discussion"
              className="inline-block px-8 py-4 bg-primary text-white hover:bg-orange-600 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50 animate-float"
            >
              Schedule a Consultation
            </a>
          </section>

          {/* Related Projects */}
          <section className="mt-16 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-white mb-8 text-center animate-slide-up">
              Other Projects
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {projects
                .filter((p) => p.id !== projectId)
                .slice(0, 3)
                .map((relatedProject, index) => (
                  <Link
                    key={relatedProject.id}
                    href={`/portfolio/project/${relatedProject.id}`}
                    className="p-6 border-2 border-primary/30 rounded-lg hover:border-primary hover:bg-white/10 transition-all group animate-fade-in-up hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                    style={{
                      animationDelay: `${(index + 1) * 100}ms`,
                    }}
                  >
                    <h3 className="font-bold text-white group-hover:text-primary transition-colors line-clamp-2 mb-2">
                      {relatedProject.title}
                    </h3>
                    <p className="text-sm text-white/70 mb-3 group-hover:text-white/90 transition-colors">
                      {relatedProject.company}
                    </p>
                    <p className="text-primary font-semibold text-sm group-hover:translate-x-2 transition-transform group-hover:text-orange-300">
                      View Project →
                    </p>
                  </Link>
                ))}
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
