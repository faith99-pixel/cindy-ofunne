"use client";

export default function Resume() {
  return (
    <main
      className="pt-16 relative"
      style={{
        backgroundImage: "url('/images/cindy_img.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-transparent to-black/80 z-0"></div>

      <div className="relative z-10 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header with Download Link */}
          <div className="text-center mb-16 pt-12 animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-2">
              Online Resume
            </h1>
            <a
              href="https://drive.google.com/file/d/1BX-d8YWLwwzqBc20XjkWKSRutT69sLwf/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 text-primary font-semibold hover:text-orange-400 transition-colors mb-8"
            >
              Download PDF Version
            </a>
          </div>

          {/* Name & Title */}
          <section className="mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-white mb-2">CINDY OFUNNE</h2>
            <p className="text-xl text-primary font-semibold mb-6">
              Senior-Level Strategic Leader | Director of Program Delivery
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-white/90 mb-8">
              <a
                href="mailto:cindyofunne@yahoo.com"
                className="hover:text-primary transition-colors"
              >
                cindyofunne@yahoo.com
              </a>
              {/* <span>437-774-8847</span> */}
              <span>Canada</span>
              <a
                href="https://linkedin.com/in/cindyofunne"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>
          </section>

          {/* Professional Summary */}
          <section className="mb-12 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-3 h-3 bg-primary rounded-full"></span>
              Professional Summary
            </h3>
            <p className="text-white/90 leading-relaxed mb-4">
              Highly skilled digital transformation leader and IT program management
              professional with over 15 years cognate experience in leadership; directing
              large scale and complex projects with a revenue of over CAD 1 billion with
              teams of 50 to 200 across the Finance-technology, IT, Consulting, Aviation,
              Telecommunications, Health verticals. A self-starter who thrives on challenges
              and champions change.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Directorship of project portfolios and development of standard policies, processes, and procedures",
                "Agile (Scrum, Kanban, XP, SAFe) & Waterfall methodologies, Kaizen and Lean management",
                "Delivery of Cloud migration, HRIS, ERP, AI, IT Infra, ECM, PSRN projects and digital transformation initiatives",
                "Risk Management, Stakeholder management, Organizational Change Management, Transition to Operations",
              ].map((item, index) => (
                <div key={index} className="flex gap-3">
                  <span className="text-primary flex-shrink-0">✓</span>
                  <span className="text-white/85 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Work Experience */}
          <section className="mb-12 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <span className="w-3 h-3 bg-primary rounded-full"></span>
              Work Experience
            </h3>
            <div className="space-y-8">
              {[
                {
                  title: "Director, PEC PM Experts Inc",
                  period: "Nov '22 - Present",
                  highlights: [
                    "Provided executive oversight and strategic direction for enterprise-wide programs and project portfolios",
                    "Led initiatives in information management, business analytics, workforce planning, and large-scale workforce development",
                    "Implemented communication framework fostering highly collaborative and productive work environment",
                    "Design, develop and implement standardized processes to streamline project execution and maximize resource allocation",
                    "Evaluate project performance, identify areas for improvement, and provide coaching to project teams",
                  ],
                },
                {
                  title: "Senior IT Project Manager, Infrastructure Ontario",
                  period: "Sept '24 – Nov '25",
                  highlights: [
                    "Led successful deployment of Portfolio Plus infrastructure upgrade, GRC tool, and ServiceNow platform",
                    "Spearheaded end-to-end project planning with resource allocation, stakeholder engagement, and risk mitigation",
                    "Coached and led a team of 6 project managers and introduced continuous learning initiatives",
                    "Developed strategies to enhance QA process by 15% and improve overall testing practices",
                    "Delivered measurable improvements in system performance and regulatory compliance",
                  ],
                },
                {
                  title: "HRIS Project Manager (Contract), Arnprior Regional Health",
                  period: "Jul '23 – Sept '24",
                  highlights: [
                    "Set up Change Management Board and Steering Committee for UKG implementation",
                    "Successfully led end-to-end implementation of UKG for 3,000 employees across regional healthcare system",
                    "Achieved project completion 20% ahead of schedule with maintained high quality standards",
                    "Optimized resource allocation strategy resulting in 15% increase in overall efficiency",
                    "Improved testing turnaround time by 20%, surpassing company standard",
                  ],
                },
                {
                  title: "Senior Project Manager, EPMO, Equifax",
                  period: "Oct '22 – May '23",
                  highlights: [
                    "Program-level oversight and associate directorship of three PMs on EPMO transformation programs",
                    "Designed and executed complex strategic portfolio of programs with proactive risk remediation",
                    "Improved stakeholder communication by 8% through effective change management procedures",
                    "Guided junior project team members and solved complex problems for the team",
                    "All programs delivered on schedule and within budget with 8% improvement in stakeholder communication",
                  ],
                },
                {
                  title: "Project Manager (Toronto Pearson Programs), Wipro Solutions Ltd",
                  period: "Jan '22 – Aug '22",
                  highlights: [
                    "Managed multiple IT Programs: Cloud migration, Infrastructure upgrade, PSRN and enhancement initiatives",
                    "Improved resource forecasting and recruited scarce skills within 2 months of being hired",
                    "Successfully delivered Phase 1 of E-EVIDS program at Toronto Pearson airport in 5 months",
                    "Ensured end-to-end testing and quality through SIT, UAT, and BAT phases using agile methodology",
                    "Received Best PM Award for outstanding project delivery",
                  ],
                },
                {
                  title: "Senior Project Manager, GoWrench Inc",
                  period: "Jun '21 - Jan '22",
                  highlights: [
                    "Efficiently planned and managed overall control and coordination of capital project expansion initiatives",
                    "Improved project management policies and set up standardized artifacts and processes",
                    "Initiated procedures and guidelines for project development activities across all business units",
                    "Achieved capital expenditure variance reduction from 12% to 3.2%",
                    "Improved average project delivery time by 15% and achieved 8% vendor cost optimization",
                  ],
                },
                {
                  title: "Supervisor, Projects & NOC, American Tower Corporation",
                  period: "Apr '15 - Sep '21",
                  highlights: [
                    "Implemented major IT RMS and PSRN projects across 4,752 live sites with OPS IT Standards",
                    "Led team growth from 5 to over 100 staff, managing critical 24/7 infrastructure operations",
                    "Developed IT policies and procedure documents for NOC unit operations and escalation management",
                    "Increased success rate from 50% to 85% through efficient project scheduling and stakeholder management",
                    "Automated theft incident reporting system and improved vendor performance by 55%",
                  ],
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="border-l-4 border-primary pl-6"
                >
                  <h4 className="text-xl font-bold text-white mb-1">
                    {job.title}
                  </h4>
                  <p className="text-primary font-semibold mb-3">{job.period}</p>
                  <ul className="space-y-2">
                    {job.highlights.map((highlight, i) => (
                      <li key={i} className="text-white/85 text-sm flex gap-3">
                        <span className="text-primary flex-shrink-0">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-12 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-primary rounded-full"></span>
              Education
            </h3>
            <div className="space-y-4">
              {[
                {
                  degree: "Doctorate, Business Administration",
                  school: "Fox School of Business, Temple University USA",
                  year: "2027",
                },
                {
                  degree: "Post Graduate with Distinction, Project Management",
                  school: "Conestoga College, Ontario",
                  year: "2021",
                },
                {
                  degree: "MBA; Finance & Investment",
                  school: "Ahmadu Bello University",
                  year: "2020",
                },
                {
                  degree: "B.Sc. Computer Science",
                  school: "University of Benin",
                  year: "2009",
                },
              ].map((edu, index) => (
                <div key={index} className="border-l-4 border-primary pl-6">
                  <p className="font-semibold text-white">{edu.degree}</p>
                  <p className="text-primary text-sm">{edu.school}</p>
                  <p className="text-white/70 text-sm">{edu.year}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-12 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-primary rounded-full"></span>
              Certifications & Training
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "PMI Certified Professional in Managing AI (PMI-CPMAI)",
                "Agile Release Train Engineering Certificate, 2025",
                "Strategic Thinking for the CXO - University of Cambridge, 2024",
                "Google Cybersecurity Certificate 2024",
                "PMP Certificate (Project Management Institute, 2013 till date)",
                "DevOps - Project Manager Certification (2023)",
                "Scrum Master Accredited Certification (International Scrum Institute, 2021)",
                "ISO/IEC 20000-1 Service Management System (2020)",
                "Lean Six Sigma Black Belt Training (2020)",
                "ITIL Foundation Certificate (EXIN 2011)",
                "Cisco Certified Network Associate (CISCO 2010)",
              ].map((cert, index) => (
                <div key={index} className="flex gap-2 text-white/85 text-sm">
                  <span className="text-primary flex-shrink-0">✓</span>
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-12 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-primary rounded-full"></span>
              Core Competencies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  category: "Project & Program Management",
                  skills: [
                    "Portfolio Management",
                    "Program Oversight",
                    "Agile/Scrum",
                    "Waterfall",
                    "Risk Management",
                    "Budget Management",
                  ],
                },
                {
                  category: "Digital Transformation",
                  skills: [
                    "Cloud Migration (AWS, Azure, GCP)",
                    "HRIS Implementation",
                    "ERP Systems",
                    "Infrastructure Modernization",
                    "IT Service Management",
                    "Enterprise Solutions",
                  ],
                },
                {
                  category: "Leadership & Change",
                  skills: [
                    "Team Building & Development",
                    "Stakeholder Management",
                    "Change Management (ADKAR)",
                    "Organizational Leadership",
                    "Remote Team Management",
                    "Vendor Management",
                  ],
                },
                {
                  category: "Tools & Platforms",
                  skills: [
                    "Jira, Asana, MS Project, Smartsheet",
                    "Salesforce, ServiceNow, Primavera",
                    "Power BI, Tableau, Azure",
                    "AWS, Google Cloud, Netsuite",
                    "MS 365, Google Suite, Oracle",
                    "Slack, Zoom, Webex, Confluence",
                  ],
                },
              ].map((group, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    {group.category}
                  </h4>
                  <ul className="space-y-2">
                    {group.skills.map((skill, i) => (
                      <li key={i} className="text-white/85 text-sm flex gap-2">
                        <span className="text-primary flex-shrink-0">•</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Awards */}
          <section className="mb-12 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-primary rounded-full"></span>
              Awards & Recognition
            </h3>
            <div className="space-y-3">
              {[
                { award: "Woman of Distinction", org: "YWCA", year: "2025" },
                { award: "40 Under 40 Honoree", org: "Canada", year: "2025" },
                {
                  award: "Best PM Award",
                  org: "GTAA Projects, Wipro",
                  year: "2022",
                },
                {
                  award: "Three-time Exceptional Performer",
                  org: "American Tower Corporation",
                  year: "2015, 2016, 2017",
                },
                {
                  award: "Customer Champion (2nd Runner Up)",
                  org: "American Tower Corporation",
                  year: "2019",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-start gap-4 text-white/85"
                >
                  <div className="flex-1">
                    <p className="font-semibold text-white">{item.award}</p>
                    <p className="text-sm text-white/70">{item.org}</p>
                  </div>
                  <span className="text-primary font-semibold flex-shrink-0 text-sm">
                    {item.year}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Volunteer Experience */}
          <section className="mb-12 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-primary rounded-full"></span>
              Volunteer & Community Leadership
            </h3>
            <div className="space-y-4">
              {[
                {
                  role: "Board Director, Governance & Strategy",
                  org: "Cambridge Federal Liberals Association",
                  period: "Nov 2024 - Present",
                },
                {
                  role: "Team Lead, Community Grants Committee",
                  org: "Waterloo Region Community Foundation",
                  period: "March 2025 - Present",
                },
                {
                  role: "Board Director",
                  org: "Rising Oaks Learning",
                  period: "April 2024 - Present",
                },
                {
                  role: "Mentor",
                  org: "Ontario Women's Technology Empowerment Centre",
                  period: "2021 - Present",
                },
                {
                  role: "Board Director",
                  org: "Nigerians in the Region of Waterloo (NIROW)",
                  period: "Sept 2021 - Present",
                },
                {
                  role: "President, Students In Business Club",
                  org: "Conestoga College",
                  period: "2022",
                },
              ].map((item, index) => (
                <div key={index} className="border-l-4 border-primary pl-6">
                  <p className="font-semibold text-white">{item.role}</p>
                  <p className="text-primary text-sm">{item.org}</p>
                  <p className="text-white/70 text-sm">{item.period}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 p-8 bg-white/10 border border-primary/30 rounded-xl text-white text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-4">Let&rsquo;s Connect</h2>
            <p className="text-lg text-white/85 mb-8 max-w-2xl mx-auto">
              Ready to discuss how my experience can help your organization?
            </p>
            <a
              href="mailto:cindyofunne@yahoo.com?subject=Project Discussion"
              className="inline-block px-8 py-4 bg-primary text-white hover:bg-orange-600 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Schedule a Consultation
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
