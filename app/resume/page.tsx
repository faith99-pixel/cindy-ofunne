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
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/85 to-black/80 z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-transparent to-black/95 z-0"></div>

            <div className="relative z-10 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header with Download Link */}
                    <div className="text-center mb-16 pt-12 animate-fade-in-up">
                        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-2">
                            Online Resume
                        </h1>
                        <a
                            href="https://drive.google.com/file/d/1kdlkFINE6668ohlHNejqQkPmCrbWpRxq/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-6 py-2 text-primary font-semibold hover:text-orange-400 transition-colors mb-8"
                        >
                            Download PDF Version
                        </a>
                    </div>

                    {/* Name & Title */}
                    <section className="mb-12 animate-fade-in-up">
                        <h2 className="text-4xl font-bold text-white mb-2">CINDY OKOSUN</h2>
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
                            <span>Ontario, Canada</span>
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
                        <p className="text-white/90 text-lg leading-relaxed mb-4">
                            Highly skilled digital transformation leader and IT program management
                            professional with over 15 years cognate experience in leadership; directing
                            large scale and complex projects with a revenue of over CAD 1 billion with
                            teams of 50 to 200 across the Finance-technology, IT, Consulting, Aviation,
                            Telecommunications, Health verticals. A self-starter who thrives on challenges
                            and champions&apos; change. Adept at:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "Directorship of project portfolios and development of standard policies, processes, and procedures",
                                "Agile – (Scrum, Kanban, XP, SAFe) & Waterfall methodologies, Kaizen and Lean management",
                                "Delivery of Cloud, HRIS, ERP, AI, IT Infra, ECM, PSRN projects, Omnichannel and digital transformation initiatives",
                                "Risk Management, Stakeholder management, Organizational Change Management, Transition to Operations, Managed Services, Quality Management, stakeholder and vendor management, Budget tracking and management",
                            ].map((item, index) => (
                                <div key={index} className="flex gap-3">
                                    <span className="text-primary flex-shrink-0">✓</span>
                                    <span className="text-white/85 text-base">{item}</span>
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
                                    title: "Senior IT Project Manager (Digital Transformation), Infrastructure Ontario",
                                    period: "Sept '24 – till date",
                                    highlights: [
                                        "Led the successful deployment of Portfolio Plus infrastructure upgrade, implementation of an Enterprise Risk Management (GRC) tool, Salesforce CRM, Microsoft Places, Citrix Upgrade and ServiceNow platform",
                                        "Provided executive oversight and strategic direction for enterprise-wide programs and project portfolios, integrating complex technical analyses from key sources to inform policy evaluation, program planning, and resource optimization",
                                        "Spearheaded end-to-end project planning, including resource allocation, stakeholder engagement, and risk mitigation, ensuring seamless execution and alignment with business goals",
                                        "Led initiatives in information management, business analytics, workforce planning, and large-scale workforce development to drive organizational excellence and sustainable growth",
                                        "Implemented a communication framework and high-performance culture that fosters a highly collaborative and productive work environment among all stakeholders including support to C-Suite level and senior leadership executives",
                                        "Coached and led a team of 6 project managers and introduced lunch and learn initiative to ensure continuous learning",
                                        "Developed and implemented strategies, to enhance the QA process by 15% and improving overall testing practices",
                                        "Delivered measurable improvements in system performance and regulatory compliance through strategic project execution and process optimization",
                                        "Design, Develop and implement standardized processes and procedures to streamline project execution and maximize resource allocation, eliminating waste and improving efficiencies where possible",
                                        "Perform and present predictive analysis and reporting analytics based on available data to ensure adequate financial forecasting, and resource allocation to optimize operational efficiencies",
                                        "Evaluate project performance, identify areas for improvement, and provide coaching and support to project teams",
                                    ],
                                },
                                {
                                    title: "HRIS Project Manager Snr (Contract), Arnprior Regional Health",
                                    period: "Jul '23 – Sept '24",
                                    highlights: [
                                        "Set up Change management board and steering committee and successfully lead end-to-end implementation of UKG (Ultimate Kronos Group) for 3000 employees within the regional healthcare system",
                                        "Directed a cross-functional team of shared and dedicated resources to ensure the project's timely delivery and adherence to quality standards. Fostered strong collaboration with internal and external stakeholders, ensuring goal alignment",
                                        "Achieved project completion 20% ahead of schedule, optimizing the implementation process while maintaining high quality standards. Implemented a resource allocation strategy with shared resources that resulted in a 15% increase in overall efficiency and productivity",
                                        "Improved testing turnaround time by 20%, surpassing the company standard and saving the organization valuable time and resources. Implemented robust quality assurance measures, enhancing overall system stability",
                                    ],
                                },
                                {
                                    title: "Project Manager (Senior), EPMO, Equifax",
                                    period: "Oct '22 – May '23",
                                    highlights: [
                                        "Program level oversight and associate directorship of three PMs on EPMO transformation programs and projects",
                                        "Liaised with EPMO team to review, define and fine tune existing processes and strategic operational goals",
                                        "Closely-supported the Director EPMO & VP to drive tracking and execution of strategic initiatives to deliver on business strategy and operations. Managed the design and execution of complex strategic portfolio of programs",
                                        "Performed risk and quality management strategies to ensure high level risk remedies are proactively implemented",
                                        "Managed Internal and external stakeholders effectively and improved support and communication with distributed and remote clients across different time zones by 8%",
                                        "Guided junior project team members, multiple priorities and solved complex problems for the team. Collaborated with internal and external stakeholders to strategically align project goals and integrated project plans",
                                        "Implemented strong risk management, quality management, and change management procedures using the appropriate PM documentation, tools and processes",
                                        "Managed portfolio/project increments and iterations, facilitated scrum ceremonies, and provided audience-specific reporting to key stakeholders: weekly, monthly and quarterly",
                                    ],
                                },
                                {
                                    title: "Project Manager (Toronto Pearson Programs), Wipro Solutions Ltd",
                                    period: "Jan '22 – Aug '22",
                                    highlights: [
                                        "Demonstrated sound knowledge of PM methodologies on GTAA IT Programs : Cloud migration, Infra Upgrade, PSRN and enhancement program initiatives. Improved processes and successfully delivered programs within schedule",
                                        "Improved the resource demand forecasting/planning and recruited scarce skills within 2 months of being hired leading to successful delivery of the Phase 1 of E-EVIDS program at Toronto Pearson airport in 5 months",
                                        "Utilized appropriate project management documentation, tools, and processes to develop PM documents, perform risk analysis, gather requirements, and map use cases, while considering triple constraints",
                                        "Ensured end to end testing and uphold quality through testing phases from System Integration Testing (SIT) through UAT to BAT in the required testing environments (pre-production, prod and post) using the agile methodology",
                                        "Facilitated scrum ceremonies with developers, testing team, QA manager, solution architect and ensured all blockages and impediments were cleared",
                                        "Implemented and developed projects involving AWS, PowerApps technology, Azure, Informatica and Tableau",
                                    ],
                                },
                                {
                                    title: "Senior Project Manager, GoWrench Inc",
                                    period: "Jun '21 - Jan '22",
                                    highlights: [
                                        "Efficiently planned, directed and managed overall control and coordination of key capital project expansion initiatives",
                                        "Improved project management policies and set up project management artifacts as well as processes",
                                        "Initiated procedures and guidelines for project development activities and supervised the overall preparation of the required analysis across engineering, planning, financing and policy impacts as it related to capital expenditures",
                                        "Built an overall project budget, compile budget requests, and generate capitalization plan based on project timeline",
                                        "Analyzed cycle time changes and adjust forecasts accordingly. Work with appropriate business and procurement teams to ensure support from vendors regarding setup, installation, repairs and maintenance are satisfactory",
                                    ],
                                },
                                {
                                    title: "Regional Supervisor, Project, American Tower Corporation",
                                    period: "Apr '19 - Sep '21",
                                    highlights: [
                                        "Managed North IT projects till date: increased success rate from 50% to 85% by efficient project scheduling, stakeholder management, communication management and prioritization",
                                        "Automated theft incident reporting and record management process using ECM and CRM tools for ATC security team",
                                        "Achieved 55% improvement in vendor performance within 3 months through data analytics and dispatch of scheduled reports up to top management level",
                                        "Increased team collaboration and efficiency by the creation of a central repository for North region",
                                    ],
                                },
                                {
                                    title: "Supervisor, Projects & NOC, American Tower Corporation",
                                    period: "Apr '15 - Apr '19",
                                    highlights: [
                                        "Implemented major IT RMS (Remote Management Solutions) and PSRN projects viz: the Galooli monitoring tool, radio networks and Access control system across 4752 live sites to OPS I & IT Standards",
                                        "Led a team of 5 to start up and build the Network Operations Centre from scratch to a team of over 100 staff. Applied strong leadership abilities to ensure and drive high performance; ultimately enhance customer experience",
                                        "Developed IT policies and procedure documents for NOC unit operations and infrastructure (Escalation management process, Incident management process, Emergency process, Alarm management process, etc.)",
                                        "Managed the implementation of automated IT systems to enhance productivity in change and incident management tools and processes. Managed critical projects for 24x7 critical environments and operations",
                                        "Successfully led user adoption process across all portfolios and change management using the ADKAR model",
                                    ],
                                },
                                {
                                    title: "IT Project Manager, Zinox Group",
                                    period: "Oct '11 – Apr '15",
                                    highlights: [
                                        "Delivered six major IT wireless network, solar, and PSRN projects nationwide using a unique combination of project management methodologies",
                                        "Reduced implementation costs on five projects by collaborating with the CTO and refining the sellers list",
                                        "Developed processes, procedures, work plans, and working documents for the entire team across all branches",
                                        "Received a promotion after six months of employment for outstanding performance",
                                        "Led a strategic team to revamp Taskdirect subsidiary under Zinox Group to Yudala before its exit",
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
                                                <span className="text-base">{highlight}</span>
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
                                    degree: "Doctorate, Business Admin(Digital Transformation)",
                                    school: "Fox School of Business, Temple University USA",
                                    year: "2027",
                                },
                                {
                                    degree: "Post Grad with Distinction, Project Management MBA; Finance & Investment",
                                    school: "Conestoga College, Ontario",
                                    year: "2021",
                                },
                                {
                                    degree: "B.Sc. Computer Science",
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
                                "Portfolio Management Professional (PfMP) 2026",
                                "Microsoft Azure Fundamentals 2025",
                                "Agile Release Train Engineering Certificate 2025",
                                "Strategic Thinking for the CXO - University of Cambridge, 2024",
                                "Google Cybersecurity Certificate 2024",
                                "Working at Heights – Build Safe 2024",
                                "PMP Certificate (Project Management Institute, 2013 till date)",
                                "DevOps - Project Manager certification(2023)",
                                "Scrum Master Accredited Certification (International Scrum Institute, 2021)",
                                "ISO/IEC 20000-1 Service Management System (2020)",
                                "Lean six sigma black belt training (2020)",
                                "Enhancing Personal & Team Communication (H.CB 2017)",
                                "Zinox Leadership Training (ZLA, Teknet Solutions, 2014)",
                                "Microsoft Project 2010 Training (Michael Stevens Consulting. 2012)",
                                "Business Writing & Communications Skills (Brain Power 2012)",
                                "ITIL Foundation Certificate (EXIN 2011)",
                                "Telecommunication Training (Diploma, TTC Mobile, 2010)",
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
                                    period: "Nov 2024-till date",
                                },
                                {
                                    role: "Team Lead, Community Grants Committee",
                                    org: "Waterloo Region Community Foundation",
                                    period: "March 2025 -date",
                                },
                                {
                                    role: "Board Director",
                                    org: "Rising Oaks Learning Ontario",
                                    period: "April 2024 till date",
                                },
                                {
                                    role: "Mentor, MentorHer Programme",
                                    org: "Women's Technology Empowerment Centre",
                                    period: "2021",
                                },
                                {
                                    role: "Board Director",
                                    org: "Nigerians in the Region of Waterloo (NIROW)",
                                    period: "Sept 2021 till date",
                                },
                                {
                                    role: "President, Students In Business Club",
                                    org: "Conestoga College Student Inc",
                                    period: "2022",
                                },
                                {
                                    role: "International Students Advisory Council",
                                    org: "Conestoga College",
                                    period: "2021",
                                },
                                {
                                    role: "Ambassador, Student Engagement",
                                    org: "Conestoga College",
                                    period: "2021",
                                },
                                {
                                    role: "Vice President, Delegate, DECA U",
                                    org: "Conestoga College",
                                    period: "2021",
                                },
                                {
                                    role: "Communications Lead, Wellness Committee",
                                    org: "American Tower Corp Engagement Committee",
                                    period: "2020",
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
