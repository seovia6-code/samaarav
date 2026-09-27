export const servicesData: Record<string, any> = {
  "contract-staffing": {
    title: "CONTRACT<br />STAFFING",
    subtitle: "Contract Staffing Solutions for Project-Based Teams.",
    description: "Scale your workforce flexibly. Access vetted IT contractors for 3-6 month projects without long-term commitment.",
    stats: [
      { value: "72 hrs", label: "Average Time to Start" },
      { value: "1000+", label: "Contractors Placed" },
      { value: "95%", label: "Extension Rate" },
      { value: "4.9/5", label: "Contractor Rating" },
    ],
    benefits: [
      {
        number: "01",
        title: "Quick Onboarding",
        description: "Get experienced contractors up and running in days, not weeks. Our vetted professionals hit the ground running with minimal ramp-up time.",
        color: "#ffffff",
        textColor: "#171717",
      },
      {
        number: "02",
        title: "Cost Control",
        description: "Pay only for the duration you need. No overhead costs for benefits, training, or long-term commitments. Perfect for budget-conscious projects.",
        color: "#f5f5f5",
        textColor: "#171717",
      },
      {
        number: "03",
        title: "Specialized Expertise",
        description: "Hire contractors with exact expertise for your project. Whether you need AWS specialists or React experts, we match the right skills to your needs.",
        color: "#eaeaea",
        textColor: "#171717",
      },
      {
        number: "04",
        title: "Flexibility",
        description: "Quickly scale up during peak seasons and down during slow periods. Maintain flexibility without HR overhead or termination complications.",
        color: "#171717",
        textColor: "#ffffff",
      },
    ],
    expertise: [
      {
        id: "frontend",
        title: "Frontend Development",
        description: "React, Vue, Angular, TypeScript, CSS specialists with modern web development expertise.",
        technologies: ["React", "Vue", "Angular", "TypeScript", "CSS"]
      },
      {
        id: "backend",
        title: "Backend & APIs",
        description: "Node.js, Python, Java, Go developers. REST APIs, microservices, database optimization.",
        technologies: ["Node.js", "Python", "Java", "Go", "REST APIs", "Microservices"]
      },
      {
        id: "cloud",
        title: "Cloud & DevOps",
        description: "AWS, Azure, GCP specialists. CI/CD, infrastructure as code, Kubernetes, containerization.",
        technologies: ["AWS", "Azure", "GCP", "Kubernetes", "CI/CD", "Terraform"]
      },
      {
        id: "data",
        title: "Data & Analytics",
        description: "Data engineers, ETL specialists, analytics engineers. Spark, SQL, Python, big data platforms.",
        technologies: ["Spark", "SQL", "Python", "ETL", "Big Data"]
      },
      {
        id: "mobile",
        title: "Mobile Development",
        description: "iOS, Android, React Native contractors. Native and cross-platform mobile experts.",
        technologies: ["iOS", "Android", "React Native", "Cross-platform"]
      },
      {
        id: "qa",
        title: "QA & Testing",
        description: "Automation engineers, QA leads, performance testers. Selenium, Jest, manual testing expertise.",
        technologies: ["Selenium", "Jest", "Automation", "Performance Testing"]
      }
    ],
    process: [
      {
        number: "01",
        title: "Requirements Gathering",
        description: "Understand your project scope, duration, required skills, and team integration needs. Usually completed same-day.",
        color: "#ffffff",
        textColor: "#171717",
      },
      {
        number: "02",
        title: "Rapid Sourcing",
        description: "Access our pre-vetted contractor pool. 24-48 hours to present qualified candidates with work samples.",
        color: "#f5f5f5",
        textColor: "#171717",
      },
      {
        number: "03",
        title: "Technical Assessment",
        description: "All contractors pass technical screening. Code reviews, project walkthroughs, and skill validation included.",
        color: "#eaeaea",
        textColor: "#171717",
      },
      {
        number: "04",
        title: "Fast Onboarding",
        description: "Start within 5-7 days. Minimal ramp-up with documentation, code access, and quick integration into your team.",
        color: "#171717",
        textColor: "#ffffff",
      },
    ],
    faqs: [
      {
        question: "How quickly can you provide contract developers?",
        answer: "We typically present qualified candidates within 24-48 hours of receiving your requirements. Onboarding usually takes 5-7 days. For urgent needs, we can expedite to 48-72 hour start dates with pre-vetted contractors from our immediate pool."
      },
      {
        question: "What contract durations do you support?",
        answer: "We handle contracts from 1 month to 12 months. Most common engagements are 3-6 months. We also offer ad-hoc/hourly arrangements for flexible staffing needs with no minimum commitment."
      },
      {
        question: "What are the typical costs for contract staffing?",
        answer: "Contract costs vary by skill level, experience, and technology. Typically 20-40% higher hourly rate than permanent salaries (no benefits/overhead). For example: mid-level developer ($40-50/hr), senior architect ($65-85/hr). We provide transparent quotes before engagement."
      },
      {
        question: "Can we extend a contract or transition to permanent?",
        answer: "Absolutely! Many clients convert successful contractors to permanent roles using our Contract-to-Hire service. We handle extensions seamlessly with no gaps. Discuss transition plans early if you anticipate this possibility."
      },
      {
        question: "Do you handle contract compliance and paperwork?",
        answer: "Yes, we manage all contracting, compliance, taxes, and legal documentation. You work directly with our contractor team—we handle all backend administration and ensure compliance with labor laws and contract terms."
      },
      {
        question: "What if the contractor isn't the right fit?",
        answer: "Within the first two weeks (trial period), if there's a skills mismatch, we replace the contractor at no additional cost. We're committed to your satisfaction and won't charge extra for replacements during this period."
      }
    ],
    modelsOffered: [
      {
        title: "Contract Staffing",
        description: "Specialized talent for defined projects and durations, allowing you to access expertise exactly when and where you need it."
      },
      {
        title: "Contract-to-Hire",
        description: "Evaluate a contractor's technical skills, productivity, and cultural fit over a trial period (typically 3-6 months) before making a commitment to permanent employment."
      },
      {
        title: "Statement of Work (SOW)",
        description: "An outcome-based workforce solution where we manage project delivery, resources, timelines, and agreed-upon deliverables."
      },
      {
        title: "Temporary Staffing",
        description: "Flexible staffing to help meet seasonal demands and short-term project requirements with pre-vetted professionals."
      }
    ],
    whenToUse: [
      {
        title: "Project-Based Work",
        description: "When you need specialized talent for a defined project duration without the long-term overhead."
      },
      {
        title: "Skill Gaps",
        description: "When your current team lacks specific technical expertise required to complete a critical initiative."
      },
      {
        title: "Scaling Quickly",
        description: "During periods of rapid growth or seasonal demand peaks where immediate workforce scaling is necessary."
      },
      {
        title: "Evaluating Fit",
        description: "When you want to assess a professional's performance and cultural fit before committing to a permanent hire."
      }
    ]
  },
  "direct-hire": {
    title: "Direct Hire<br />Services",
    subtitle: "PERMANENT TALENT ACQUISITION",
    description: "Identify, attract, and hire the ideal full-time technical talent to drive long-term business growth.",
    stats: [
      { value: "90", label: "Day Replacement Guarantee" },
      { value: "3x", label: "Faster Time-to-Hire" },
      { value: "95%", label: "Offer Acceptance Rate" }
    ],
    benefits: [
      {
        title: "Quality Assurance Guarantee",
        description: "We back our placements with a 90-day replacement guarantee, meaning if a hire does not work out, we replace the candidate free of charge."
      },
      {
        title: "Comprehensive Assessment",
        description: "Our service covers the entire recruitment lifecycle—from technical interviews and behavioral assessments to team meetings and logistics."
      },
      {
        title: "Offer & Onboarding Support",
        description: "We assist with negotiating offers, handling counter-offers, managing acceptance, and providing post-placement support for smooth onboarding."
      },
      {
        title: "Strategic Cultural Alignment",
        description: "Focus on long-term value by attracting committed, permanent professionals who integrate seamlessly into your existing culture."
      }
    ],
    expertise: [
      {
        id: "executive",
        title: "IT Leadership & Executive",
        description: "CTOs, CIOs, VP of Engineering, and IT Directors who can strategically steer your technology initiatives.",
        technologies: ["Strategic Planning", "Team Leadership", "Budgeting", "Vendor Management"]
      },
      {
        id: "engineering",
        title: "Software Engineering",
        description: "Full-stack, frontend, and backend developers across all modern programming languages and frameworks.",
        technologies: ["React", "Node.js", "Java", "Python", "Go", "C++"]
      },
      {
        id: "data-cloud",
        title: "Data & Cloud Infrastructure",
        description: "Cloud architects, data scientists, and DevOps engineers to build and maintain resilient platforms.",
        technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Snowflake", "Databricks"]
      }
    ],
    process: [
      {
        title: "Requirement Gathering",
        description: "We deeply analyze your business needs, technical requirements, and cultural expectations."
      },
      {
        title: "Sourcing & Headhunting",
        description: "Targeted search campaigns to engage both active job seekers and passive top-tier talent."
      },
      {
        title: "Rigorous Screening",
        description: "In-depth technical assessments, behavioral interviews, and comprehensive reference checking."
      },
      {
        title: "Interview Coordination",
        description: "Seamless scheduling and facilitation of your internal interview rounds."
      },
      {
        title: "Offer & Negotiation",
        description: "Managing candidate expectations, negotiating competitive offers, and securing acceptances."
      },
      {
        title: "Onboarding & Follow-up",
        description: "Ensuring a smooth transition and checking in during the 90-day guarantee period."
      }
    ],
    faqs: [
      {
        question: "How does the 90-day replacement guarantee work?",
        answer: "If the candidate leaves or is terminated for cause within the first 90 days of employment, we will recruit a replacement candidate for that exact role at no additional cost to you."
      },
      {
        question: "What is your typical fee structure for Direct Hire?",
        answer: "Our direct hire fees are typically calculated as a percentage of the candidate's first-year base salary. We offer competitive rates and only charge once a candidate is successfully hired and starts work."
      },
      {
        question: "How long does the Direct Hire process usually take?",
        answer: "While timelines vary based on role complexity, we typically present the first batch of qualified candidates within 3-5 business days, with the average time-to-fill ranging from 2 to 4 weeks."
      },
      {
        question: "Do you help with salary benchmarking?",
        answer: "Yes, we provide current market insights and salary benchmarking data to help you craft competitive offers that attract top talent while aligning with your budget."
      }
    ]
  },
  "contract-to-hire": {
    title: "Contract-to-Hire<br />Services",
    subtitle: "TRY BEFORE YOU BUY",
    description: "Reduce hiring risk with a 3-6 month trial period. Evaluate technical skills, productivity, and cultural fit before making a permanent commitment.",
    stats: [
      { value: "3-6", label: "Months Trial Period" },
      { value: "92%", label: "Conversion Rate" },
      { value: "Zero", label: "Conversion Fees" }
    ],
    benefits: [
      {
        title: "Risk Mitigation",
        description: "Validate a candidate's actual on-the-job performance and team dynamic fit before offering them a permanent full-time position."
      },
      {
        title: "Role Validation",
        description: "Unsure if a new role requires a full-time headcount? Contract-to-hire lets you test the business need while getting the work done."
      },
      {
        title: "Structured Feedback",
        description: "We facilitate formal check-ins at months 1, 3, and 6 to ensure the placement is meeting your expectations and tracking toward conversion."
      },
      {
        title: "Seamless Conversion",
        description: "Once the trial period concludes, transition top-performing contractors to your permanent payroll smoothly and without friction."
      }
    ],
    expertise: [
      {
        id: "engineering",
        title: "Software Engineering",
        description: "Developers across the full stack (React, Node.js, Java, Python) who are seeking long-term homes.",
        technologies: ["React", "Node.js", "Java", "Python"]
      },
      {
        id: "infrastructure",
        title: "Cloud & DevOps",
        description: "Engineers responsible for core infrastructure who need to intimately understand your unique architecture.",
        technologies: ["AWS", "Azure", "Kubernetes", "Terraform"]
      },
      {
        id: "data",
        title: "Data Science & Analytics",
        description: "Data professionals whose work impacts long-term strategic decisions and internal reporting.",
        technologies: ["SQL", "Spark", "Tableau", "Machine Learning"]
      }
    ],
    process: [
      {
        title: "Define Evaluation Criteria",
        description: "Set clear success metrics and expectations for the trial period before the engagement begins."
      },
      {
        title: "Rapid Contractor Placement",
        description: "Candidates are presented within 24–48 hours, with placements starting within 5–7 days."
      },
      {
        title: "Evaluation Phase",
        description: "The contractor works alongside your team for 3-6 months, allowing you to assess technical skills and cultural fit."
      },
      {
        title: "Regular Check-ins",
        description: "Structured feedback and reviews occur at months 1, 3, and 6 to ensure expectations are met."
      },
      {
        title: "Conversion Decision",
        description: "At the end of month 6, a decision is made based on real performance data against predefined success criteria."
      }
    ],
    whenToUse: [
      {
        title: "Uncertainty About Long-Term Need",
        description: "When you are unsure if a role will remain necessary after a year, validate the need before committing."
      },
      {
        title: "First-Time Team Building",
        description: "Serves as an effective strategy for organizations building new teams where cultural fit is critical."
      },
      {
        title: "High-Stakes Hiring",
        description: "For critical roles where the cost of a bad hire is exceptionally high, reducing hiring risk is paramount."
      },
      {
        title: "Immediate Skill Gaps",
        description: "When you need talent immediately but still want the option to hire them permanently later."
      }
    ],
    conversionProcess: [
      {
        title: "Performance Review",
        description: "Analyzing the 6-month evaluation data and deciding to offer permanent employment."
      },
      {
        title: "Offer Generation",
        description: "Crafting a competitive full-time offer based on demonstrated value and market rates."
      },
      {
        title: "Seamless Transition",
        description: "Transferring the employee to your internal payroll without any conversion fees or work gaps."
      }
    ],
    faqs: [
      {
        question: "Are there fees when converting a contractor to permanent?",
        answer: "Typically, if the contractor completes the agreed-upon trial period (e.g., 6 months), there is absolutely zero conversion fee to transition them to your payroll."
      },
      {
        question: "Who provides benefits during the contract period?",
        answer: "As the employer of record during the contract phase, we handle all payroll, taxes, compliance, and offer health benefits to the contractor."
      },
      {
        question: "What if the contractor doesn't work out during the trial?",
        answer: "That's the beauty of contract-to-hire. If they aren't the right fit, you can end the contract with standard notice (usually 1-2 weeks) without the complexities of firing a permanent employee, and we will source a replacement."
      },
      {
        question: "Do candidates like contract-to-hire?",
        answer: "Yes, many top professionals appreciate the opportunity to evaluate your company culture, work-life balance, and management style before fully committing themselves."
      }
    ]
  },
  "statement-of-work": {
    title: "Statement of<br />Work",
    subtitle: "FIXED-SCOPE DELIVERY",
    description: "Outcome-based workforce solutions where we manage project delivery, resources, and timelines for guaranteed results.",
    stats: [
      { value: "98%", label: "On-Time Delivery" },
      { value: "Fixed", label: "Scope & Budget" },
      { value: "Zero", label: "Management Overhead" }
    ],
    benefits: [
      {
        title: "Fixed Scope & Budget",
        description: "Provides clear deliverables and a defined budget from the start to prevent scope creep and unexpected costs."
      },
      {
        title: "Guaranteed Timelines",
        description: "Projects include strict milestones and delivery dates backed by our 98% on-time delivery track record."
      },
      {
        title: "Deliverable-Based Payment",
        description: "Payments are tied to the completion of specific milestones rather than time, ensuring absolute accountability."
      },
      {
        title: "Quality Assurance",
        description: "Includes defined quality standards, acceptance criteria, comprehensive testing, documentation, and knowledge transfer."
      }
    ],
    expertise: [
      {
        id: "app-dev",
        title: "Custom Application Development",
        description: "End-to-end development of web and mobile applications delivered by our managed engineering pods.",
        technologies: ["React", "Node.js", "React Native", "PostgreSQL"]
      },
      {
        id: "cloud-migration",
        title: "Cloud Migration & Architecture",
        description: "Lifting and shifting legacy systems to modern cloud infrastructure with zero downtime.",
        technologies: ["AWS", "Azure", "GCP", "Kubernetes"]
      },
      {
        id: "data-engineering",
        title: "Data Engineering Pipelines",
        description: "Building robust ETL pipelines and data warehouses delivered as a complete project.",
        technologies: ["Snowflake", "Databricks", "Airflow", "Python"]
      }
    ],
    process: [
      {
        title: "Requirements Definition",
        description: "Deep dive into your business needs to finalize the project scope, objectives, and acceptance criteria."
      },
      {
        title: "SOW Drafting",
        description: "Creating a comprehensive Statement of Work detailing deliverables, timeline, budget, and team composition."
      },
      {
        title: "Team Assembly",
        description: "We assemble a dedicated squad of developers, architects, and project managers tailored to your SOW."
      },
      {
        title: "Milestone Execution",
        description: "Development begins with regular sprint reviews and progress tracking tied to defined payment milestones."
      },
      {
        title: "Delivery & Handoff",
        description: "Final QA, deployment, knowledge transfer, and post-launch support based on the SOW terms."
      }
    ],
    faqs: [
      {
        question: "How is SOW different from Contract Staffing?",
        answer: "In Contract Staffing, you manage the contractor's daily tasks and pay them by the hour. In an SOW model, we manage the team, take on the delivery risk, and you pay for completed deliverables."
      },
      {
        question: "What happens if the project scope changes?",
        answer: "Any changes to the scope are managed through a formal Change Request process, ensuring transparency in how new requirements affect timelines and budgets."
      },
      {
        question: "Do you provide Project Managers for SOW engagements?",
        answer: "Yes, every SOW engagement includes a dedicated Project Manager or Scrum Master who oversees delivery and acts as your primary point of contact."
      },
      {
        question: "Is post-launch support included?",
        answer: "Yes, our SOWs typically include a defined period of warranty and hypercare support after delivery to ensure smooth operation."
      }
    ]
  },
  "ai-ml": {
    title: "AI & ML<br />STAFFING",
    subtitle: "Certified AI & Machine Learning Talent",
    description: "Connect with elite AI/ML engineers, data scientists, and researchers. We deliver technical talent capable of building scalable, responsible AI systems and transforming complex data into business value.",
    stats: [
      { value: "300+", label: "AI Experts Placed" },
      { value: "95%", label: "Client Retention" },
      { value: "Top 5%", label: "Vetted Talent" },
    ],
    benefits: [
      {
        number: "01",
        title: "Domain Experts",
        description: "Our recruiters have deep technical backgrounds to properly evaluate complex AI/ML skillsets.",
        color: "#ffffff",
        textColor: "#171717",
      },
      {
        number: "02",
        title: "Speed to Hire",
        description: "We maintain an active network of passive AI talent, reducing your time-to-hire for niche roles.",
        color: "#f5f5f5",
        textColor: "#171717",
      },
      {
        number: "03",
        title: "Responsible AI",
        description: "We screen for professionals who understand data ethics, bias mitigation, and compliance.",
        color: "#eaeaea",
        textColor: "#171717",
      },
      {
        number: "04",
        title: "End-to-End Skillsets",
        description: "From research and modeling to MLOps and production deployment.",
        color: "#171717",
        textColor: "#ffffff",
      },
    ],
    expertise: [
      {
        id: "data",
        title: "Data & Engineering",
        description: "Data Scientists, Data Engineers (AI Pipelines), MLOps Engineers, and Responsible AI Specialists focused on building reliable data foundations.",
        technologies: ["Python", "Spark", "Airflow", "MLflow", "Kubeflow"]
      },
      {
        id: "research",
        title: "Research & Modeling",
        description: "AI Research Scientists, Deep Learning Engineers, NLP Engineers, and Computer Vision Engineers pushing the boundaries of what's possible.",
        technologies: ["TensorFlow", "PyTorch", "Keras", "OpenCV", "HuggingFace"]
      },
      {
        id: "product",
        title: "Product & Deployment",
        description: "Generative AI Developers, LLM/Prompt Engineers, ML Engineers, and AI Product Managers bringing models to production.",
        technologies: ["OpenAI API", "LangChain", "Vector DBs", "Docker", "AWS SageMaker"]
      }
    ],
    process: [
      {
        number: "01",
        title: "Technical Discovery",
        description: "We align on your specific ML framework needs, data infrastructure, and deployment targets.",
        color: "#ffffff",
        textColor: "#171717",
      },
      {
        number: "02",
        title: "Targeted Search",
        description: "We source from specialized AI communities, research institutions, and our proprietary network.",
        color: "#f5f5f5",
        textColor: "#171717",
      },
      {
        number: "03",
        title: "Technical Assessment",
        description: "Candidates undergo rigorous algorithmic and architectural system design evaluations.",
        color: "#eaeaea",
        textColor: "#171717",
      },
      {
        number: "04",
        title: "Client Interviews",
        description: "You interview a curated shortlist of 2-4 highly qualified experts.",
        color: "#dedede",
        textColor: "#171717",
      },
      {
        number: "05",
        title: "Offer & Integration",
        description: "We manage negotiations and provide integration support for seamless onboarding.",
        color: "#171717",
        textColor: "#ffffff",
      },
    ],
    faqs: [
      {
        question: "Do you supply GenAI and LLM specialists?",
        answer: "Yes, we have a dedicated network of Prompt Engineers, LLM integrators, and Generative AI application developers."
      },
      {
        question: "How do you evaluate AI talent?",
        answer: "We use a multi-tiered approach including technical interviews by subject matter experts, take-home modeling challenges, and portfolio reviews."
      }
    ]
  },
  "cloud": {
    title: "CLOUD<br />STAFFING",
    subtitle: "AWS, Azure & GCP Certified Talent",
    description: "Scale your cloud infrastructure with certified Architects and Engineers. We provide talent that builds secure, highly available, and scalable cloud environments.",
    stats: [
      { value: "400+", label: "Cloud Engineers Placed" },
      { value: "100%", label: "Certified Talent" },
      { value: "3 Cloud", label: "Major Providers" },
    ],
    benefits: [
      {
        number: "01",
        title: "Certified Experts",
        description: "We rigorously verify certifications across AWS, Azure, and GCP.",
        color: "#ffffff",
        textColor: "#171717",
      },
      {
        number: "02",
        title: "Multi-Cloud Focus",
        description: "Access talent experienced in hybrid and multi-cloud architectural patterns.",
        color: "#f5f5f5",
        textColor: "#171717",
      },
      {
        number: "03",
        title: "Security First",
        description: "Our candidates understand DevSecOps and cloud-native security postures.",
        color: "#eaeaea",
        textColor: "#171717",
      },
      {
        number: "04",
        title: "Cost Optimization",
        description: "Hire engineers skilled at FinOps and reducing cloud infrastructure spend.",
        color: "#171717",
        textColor: "#ffffff",
      },
    ],
    expertise: [
      {
        id: "aws",
        title: "AWS Ecosystem",
        description: "Solutions Architects, DevOps Engineers, and SysOps Administrators specialized in Amazon Web Services.",
        technologies: ["EC2", "EKS", "Lambda", "CloudFormation", "DynamoDB"]
      },
      {
        id: "azure",
        title: "Microsoft Azure",
        description: "Azure Architects and Administrators focused on enterprise cloud migrations and integrations.",
        technologies: ["Azure Kubernetes", "ARM Templates", "Azure DevOps", "CosmosDB"]
      },
      {
        id: "gcp",
        title: "Google Cloud",
        description: "GCP Data Engineers and Cloud Architects leveraging Google's premier data and ML infrastructure.",
        technologies: ["GKE", "BigQuery", "Terraform", "Cloud Run", "Pub/Sub"]
      }
    ],
    process: [
      {
        number: "01",
        title: "Architecture Review",
        description: "We evaluate your current cloud state to find the exact skill gaps.",
        color: "#ffffff",
        textColor: "#171717",
      },
      {
        number: "02",
        title: "Candidate Sourcing",
        description: "Targeted sourcing of certified professionals from our extensive cloud network.",
        color: "#f5f5f5",
        textColor: "#171717",
      },
      {
        number: "03",
        title: "Certification & Skills Check",
        description: "Verification of credentials and practical infrastructure-as-code assessments.",
        color: "#eaeaea",
        textColor: "#171717",
      },
      {
        number: "04",
        title: "Presentation",
        description: "Review of shortlisted candidates with detailed technical profiles.",
        color: "#dedede",
        textColor: "#171717",
      },
      {
        number: "05",
        title: "Placement",
        description: "Seamless hiring and integration into your engineering teams.",
        color: "#171717",
        textColor: "#ffffff",
      },
    ],
    faqs: [
      {
        question: "Do you provide Cloud Security specialists?",
        answer: "Yes, we staff dedicated Cloud Security Engineers and DevSecOps professionals to ensure your infrastructure is secure."
      },
      {
        question: "Can you help us build a completely new cloud team?",
        answer: "Absolutely. We specialize in building entire specialized teams (squads) for large-scale cloud migration projects."
      }
    ]
  },
  "sap": {
    title: "SAP<br />STAFFING",
    subtitle: "Struggling to Find the Right SAP Talent?",
    description: "Accelerate your digital transformation with elite SAP talent. From S/4HANA migrations to complex integrations, we deliver certified consultants who ensure zero compromises.",
    stats: [
      { value: "500+", label: "SAP Consultants Placed" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "Global", label: "Talent Reach" },
    ],
    benefitsTitle: "Why Leading Enterprises Choose Samaarav for SAP Staffing",
    benefits: [
      {
        number: "01",
        title: "S/4HANA Ready",
        description: "Access consultants with proven experience in end-to-end S/4HANA implementations and migrations.",
        color: "#ffffff",
        textColor: "#171717",
      },
      {
        number: "02",
        title: "Module Specialists",
        description: "Deep expertise across Functional, Technical, and Industry-specific SAP modules.",
        color: "#f5f5f5",
        textColor: "#171717",
      },
      {
        number: "03",
        title: "Rapid Deployment",
        description: "Reduce project delays by onboarding pre-vetted SAP talent immediately.",
        color: "#eaeaea",
        textColor: "#171717",
      },
      {
        number: "04",
        title: "Business Alignment",
        description: "Consultants who understand both the technical architecture and your core business processes.",
        color: "#171717",
        textColor: "#ffffff",
      },
    ],
    expertiseTitle: "SAP Modules & Specializations We Staff",
    expertise: [
      {
        id: "functional",
        title: "Functional & Finance",
        description: "Expert consultants across core enterprise functions and financial modules.",
        technologies: ["SAP S/4HANA", "SAP FICO", "SAP BPC", "SAP TRM"]
      },
      {
        id: "supply",
        title: "Supply Chain & HR",
        description: "Logistics, supply chain, and human capital management specialists.",
        technologies: ["SAP MM/WM", "SAP SD/LE", "SAP PP/QM", "SuccessFactors", "Ariba"]
      },
      {
        id: "technical",
        title: "Technical & Security",
        description: "ABAP developers, Basis administrators, and security experts ensuring system integrity.",
        technologies: ["SAP ABAP", "SAP Basis", "SAP BW/4HANA", "SAP GRC"]
      }
    ],
    textSections: [
      {
        title: "Are SAP Staffing Challenges Slowing Your Projects?",
        content: [
          "In today's digital transformation landscape, the demand for certified SAP professionals far outpaces supply. Generic IT staffing agencies circulate unqualified resumes, waste your time with irrelevant profiles, and fail to understand the nuances of SAP implementations — costing your business valuable time and budget."
        ]
      },
      {
        title: "The Real Cost of a Wrong SAP Hire",
        content: [
          "Hiring the wrong SAP consultant leads to botched migrations, misaligned system architectures, and critical business disruptions.",
          "By partnering with Samaarav, you bypass these costly pitfalls. We pre-vet every candidate for both technical proficiency and functional industry knowledge before they ever reach your desk."
        ]
      }
    ],
    processTitle: "Business Outcomes<br />You Can Expect",
    processSubtitle: "Partner with Samaarav to accelerate your SAP initiatives and achieve measurable business results through our expert talent solutions.",
    conversionProcess: [
      {
        number: "01",
        title: "On-time SAP project delivery",
        description: "Meet go-live milestones with confidence, backed by consultants who have done it before.",
        color: "#ffffff",
        textColor: "#171717",
      },
      {
        number: "02",
        title: "Reduced total cost of SAP ownership",
        description: "Fewer mis-hires, faster onboarding, and lower rework costs.",
        color: "#f5f5f5",
        textColor: "#171717",
      },
      {
        number: "03",
        title: "Empowered internal teams",
        description: "Let your in-house staff focus on strategic SAP governance rather than operational firefighting.",
        color: "#eaeaea",
        textColor: "#171717",
      },
      {
        number: "04",
        title: "Scalable SAP talent pipeline",
        description: "Access a ready bench of pre-vetted SAP professionals aligned to your growth roadmap.",
        color: "#dedede",
        textColor: "#171717",
      },
      {
        number: "05",
        title: "Accelerated digital transformation",
        description: "Move your S/4HANA migration, cloud adoption, or SAP upgrade forward without talent bottlenecks.",
        color: "#171717",
        textColor: "#ffffff",
      },
    ],
    cta: {
      title: "Ready to Hire<br /><span class=\"ml-[8vw]\">Top SAP Experts?</span>",
      description: "Share your SAP staffing requirements today. Our team responds within hours with pre-vetted SAP professionals matched to your modules, industry, and strategic goals.",
      buttonText: "Let's Talk ↗",
      buttonLink: "/contact"
    }
  },
  "infor": {
    title: "INFOR<br />STAFFING",
    subtitle: "Can't Find Experienced Infor Consultants for Your ERP Project?",
    description: "Empower your manufacturing and enterprise operations with industry-proven Infor talent. We provide specialized consultants for CloudSuite, LN, and M3 deployments.",
    stats: [
      { value: "Top 10%", label: "Vetted Consultants" },
      { value: "Fast", label: "Deployment Times" },
      { value: "100%", label: "Infor Dedicated" },
    ],
    benefitsTitle: "Why Organizations Choose Samaarav for Infor Staffing",
    benefits: [
      {
        number: "01",
        title: "CloudSuite Experts",
        description: "Specialized talent for modern Infor CloudSuite deployments and migrations.",
        color: "#ffffff",
        textColor: "#171717",
      },
      {
        number: "02",
        title: "Manufacturing Focus",
        description: "Consultants with deep experience in discrete and process manufacturing workflows.",
        color: "#f5f5f5",
        textColor: "#171717",
      },
      {
        number: "03",
        title: "Integration Masters",
        description: "Experts in Infor ION and integrating Infor with edge applications.",
        color: "#eaeaea",
        textColor: "#171717",
      },
      {
        number: "04",
        title: "End-to-End Support",
        description: "From initial implementation to hypercare and ongoing managed support.",
        color: "#171717",
        textColor: "#ffffff",
      },
    ],
    expertiseTitle: "Infor Products & Roles We Staff",
    expertise: [
      {
        id: "cloudsuite",
        title: "Infor CloudSuite",
        description: "Experts in deploying and optimizing Infor CloudSuite Industrial and Corporate.",
        technologies: ["CloudSuite Industrial (Syteline)", "CloudSuite Corporate", "Birst"]
      },
      {
        id: "ln-m3",
        title: "Infor LN & M3",
        description: "Functional and technical consultants for complex manufacturing environments.",
        technologies: ["Infor LN", "Infor M3", "Infor OS", "Infor ION"]
      },
      {
        id: "hcm",
        title: "Infor HCM & EAM",
        description: "Specialists in human capital and enterprise asset management modules.",
        technologies: ["Infor HCM", "Infor EAM", "WFM"]
      }
    ],
    textSections: [
      {
        title: "Is the Limited Infor Talent Pool Stalling Your ERP Program?",
        content: [
          "Infor is a specialized ERP ecosystem with a significantly smaller certified talent pool than SAP or Oracle. Most staffing agencies lack the Infor-specific knowledge to differentiate between Infor CloudSuite Industrial, LN, and M3 — resulting in placements that look qualified on paper but fail in practice.",
          "Our dedicated Infor practice solves this by maintaining active relationships with proven specialists across every major Infor product line."
        ]
      },
      {
        title: "The Real Cost of a Wrong Infor Hire",
        content: [
          "Hiring the wrong Infor consultant doesn't just waste staffing budget—it derails deployment timelines, frustrates internal teams, and delays critical business capabilities.",
          "By partnering with us, you avoid these costly mistakes. We pre-vet every candidate for both technical proficiency and functional industry knowledge before they ever reach your desk."
        ]
      }
    ],
    processTitle: "Business Outcomes<br />You Can Expect",
    processSubtitle: "Partner with Samaarav to achieve these transformative results for your enterprise.",
    conversionProcess: [
      {
        number: "01",
        title: "Requirements Gathering",
        description: "Understanding your specific Infor product suite and project phase.",
        color: "#ffffff",
        textColor: "#171717",
      },
      {
        number: "02",
        title: "Network Activation",
        description: "Tapping into our exclusive pool of certified Infor professionals.",
        color: "#f5f5f5",
        textColor: "#171717",
      },
      {
        number: "03",
        title: "Screening",
        description: "Verifying project history, module expertise, and cultural fit.",
        color: "#eaeaea",
        textColor: "#171717",
      },
      {
        number: "04",
        title: "Client Evaluation",
        description: "You interview the top 3 heavily vetted Infor experts.",
        color: "#dedede",
        textColor: "#171717",
      },
      {
        number: "05",
        title: "Onboarding",
        description: "Finalizing contracts and ensuring immediate project impact.",
        color: "#171717",
        textColor: "#ffffff",
      },
    ],
    cta: {
      title: "Ready to Hire<br /><span class=\"ml-[8vw]\">Top Infor Experts?</span>",
      description: "Share your Infor staffing requirements today. Our team responds within hours with pre-vetted Infor professionals matched to your product, version, and industry.",
      buttonText: "Let's Talk ↗",
      buttonLink: "/contact"
    }
  },
  "odoo": {
    title: "ODOO<br />STAFFING",
    subtitle: "Struggling to Find Qualified Odoo Developers and Consultants?",
    description: "Samaarav connects growing businesses with pre-vetted Odoo professionals — from functional consultants and Python/XML developers to implementation specialists across Sales, Inventory, Manufacturing, Accounting, and Website/eCommerce modules. Whether you run Odoo Community or Enterprise, we deliver talent that gets your ERP right the first time.",
    stats: [
      { value: "200+", label: "Odoo Experts Placed" },
      { value: "96%", label: "Client Satisfaction Rate" },
      { value: "100%", label: "Odoo Dedicated" },
    ],
    benefitsTitle: "Why Growing Businesses Choose Samaarav for Odoo Staffing",
    benefits: [
      {
        number: "01",
        title: "Community & Enterprise",
        description: "Experts skilled in both Odoo Community and Odoo Enterprise editions for any project size.",
        color: "#ffffff",
        textColor: "#171717",
      },
      {
        number: "02",
        title: "Agile Delivery",
        description: "We combine deep Odoo domain expertise with an agile staffing model to deliver top-tier talent at speed.",
        color: "#f5f5f5",
        textColor: "#171717",
      },
      {
        number: "03",
        title: "Proven Implementation Experience",
        description: "Generalist staffing agencies confuse basic familiarity with genuine experience. We provide vetted specialists.",
        color: "#eaeaea",
        textColor: "#171717",
      },
      {
        number: "04",
        title: "Modular Flexibility",
        description: "Maximize Odoo's open-source, modular architecture with developers who get it right the first time.",
        color: "#171717",
        textColor: "#ffffff",
      },
    ],
    expertiseTitle: "Odoo Modules & Roles We Staff",
    expertise: [
      {
        id: "functional-technical",
        title: "Functional & Technical",
        description: "Odoo Functional Consultants, Python Developers, Implementation Architects, and Integration Developers.",
        technologies: ["Functional Consultant", "Python Developer", "Implementation Architect", "Integration Developer"]
      },
      {
        id: "core-modules",
        title: "Core Modules",
        description: "Deep expertise in core business modules from CRM to Manufacturing.",
        technologies: ["Sales / CRM", "Inventory & Warehouse", "Manufacturing (MRP)", "Accounting & Finance"]
      },
      {
        id: "services-management",
        title: "Services & Management",
        description: "Extend Odoo to cover every aspect of your business operations.",
        technologies: ["HR & Payroll", "Website / eCommerce", "Project Management", "POS (Point of Sale)"]
      }
    ],
    textSections: [
      {
        title: "Is a Shortage of Skilled Odoo Talent Holding Back Your ERP Rollout?",
        content: [
          "Odoo's open-source, modular architecture makes it one of the most flexible ERP platforms available — but that same flexibility means implementation quality depends entirely on the expertise of the consultants and developers behind it.",
          "Generalist staffing agencies routinely confuse basic Odoo familiarity with genuine implementation experience, leading to misconfigured modules, broken customizations, and ERP rollouts that never deliver their promised ROI."
        ]
      },
      {
        title: "The Real Cost of a Wrong Odoo Hire",
        content: [
          "Hiring the wrong Odoo developer leads to misconfigured modules, poor system architecture, and broken customizations that can completely derail your operations and increase technical debt.",
          "By partnering with us, you avoid these costly mistakes. We pre-vet every candidate for both technical proficiency and functional industry knowledge before they ever reach your desk."
        ]
      }
    ],
    processTitle: "Business Outcomes<br />You Can Expect",
    processSubtitle: "Partner with Samaarav to achieve measurable business results and maximize your Odoo investment through our expert talent solutions.",
    conversionProcess: [
      {
        number: "01",
        title: "On-time, on-budget Odoo go-lives",
        description: "Certified consultants who configure modules correctly and avoid costly rework cycles.",
        color: "#ffffff",
        textColor: "#171717",
      },
      {
        number: "02",
        title: "Reliable custom development",
        description: "Python and Odoo-native developers who build customizations that survive future upgrades.",
        color: "#f5f5f5",
        textColor: "#171717",
      },
      {
        number: "03",
        title: "Smooth third-party integrations",
        description: "Specialists who connect Odoo cleanly to your payment, e-commerce, and accounting tools.",
        color: "#eaeaea",
        textColor: "#171717",
      },
      {
        number: "04",
        title: "Maximum ERP ROI",
        description: "Experts who configure Odoo's full modular potential to match your actual business workflows.",
        color: "#dedede",
        textColor: "#171717",
      },
      {
        number: "05",
        title: "Reduced technical debt",
        description: "Vetted developers who follow Odoo best practices and write maintainable, upgrade-safe code.",
        color: "#2a2a2a",
        textColor: "#ffffff",
      },
      {
        number: "06",
        title: "Scalable Odoo talent pipeline",
        description: "A ready bench of pre-vetted Odoo professionals aligned to your growth and module expansion roadmap.",
        color: "#171717",
        textColor: "#ffffff",
      }
    ],
    cta: {
      title: "Ready to Hire<br /><span class=\"ml-[8vw]\">Top Odoo Experts?</span>",
      description: "Share your Odoo staffing requirements today. Our team responds within hours with pre-vetted Odoo consultants and developers matched to your edition, modules, and business goals.",
      buttonText: "Let's Talk ↗",
      buttonLink: "/contact"
    }
  },
  "oracle": {
    title: "ORACLE<br />STAFFING",
    subtitle: "Struggling to Find Qualified Oracle Professionals?",
    description: "Empower your business transformation with pre-vetted Oracle specialists. From Oracle Cloud Infrastructure (OCI) to E-Business Suite (EBS) and NetSuite, we connect you with the precise talent required for your ecosystem.",
    stats: [
      { value: "100%", label: "Oracle Certified Experts" },
      { value: "Agile", label: "Delivery Timelines" },
      { value: "Global", label: "Talent Network" },
    ],
    benefitsTitle: "Why Enterprises Choose Samaarav for Oracle Staffing",
    benefits: [
      {
        number: "01",
        title: "Oracle Cloud Infrastructure",
        description: "Specialized talent for modern OCI migrations, architecture, and deployments.",
        color: "#ffffff",
        textColor: "#171717",
      },
      {
        number: "02",
        title: "E-Business Suite (EBS)",
        description: "Consultants with deep experience in legacy upgrades, maintenance, and functional modules.",
        color: "#f5f5f5",
        textColor: "#171717",
      },
      {
        number: "03",
        title: "NetSuite Integration",
        description: "Experts in configuring, customizing, and scaling Oracle NetSuite for mid-market and enterprise.",
        color: "#eaeaea",
        textColor: "#171717",
      },
      {
        number: "04",
        title: "End-to-End Support",
        description: "From initial implementation to hypercare, managed support, and database administration.",
        color: "#171717",
        textColor: "#ffffff",
      },
    ],
    expertiseTitle: "Oracle Modules & Roles We Staff",
    expertise: [
      {
        id: "cloud",
        title: "Oracle Cloud (OCI & ERP)",
        description: "Architects and functional consultants deploying modern Oracle Cloud solutions.",
        technologies: ["OCI", "Oracle ERP Cloud", "Oracle HCM Cloud", "SCM Cloud"]
      },
      {
        id: "ebs",
        title: "Oracle EBS & Database",
        description: "Database administrators and EBS experts for complex enterprise environments.",
        technologies: ["E-Business Suite", "Oracle DBA", "PL/SQL", "Oracle RAC"]
      },
      {
        id: "netsuite",
        title: "Oracle NetSuite",
        description: "Developers and analysts specializing in NetSuite customization and SuiteScript.",
        technologies: ["NetSuite ERP", "SuiteScript", "SuiteCommerce"]
      }
    ],
    textSections: [
      {
        title: "Is the Oracle Talent Shortage Blocking Your ERP or Cloud Roadmap?",
        content: [
          "Oracle migrations and upgrades are complex undertakings that require highly specialized expertise. Generalist staffing agencies often struggle to source candidates with genuine, hands-on experience in the specific Oracle modules your business relies on, leading to delays and increased risk."
        ]
      },
      {
        title: "The Real Cost of a Wrong Oracle Hire",
        content: [
          "• Oracle ERP go-live delays from consultants unfamiliar with your specific modules and business processes.",
          "• Data migration failures due to insufficient expertise in Oracle data conversion methodologies.",
          "• Budget overruns from rework on poorly configured financial, procurement, or supply chain modules.",
          "• Oracle Cloud Fusion migration risk from consultants without OCI or SaaS upgrade experience.",
          "• Compliance and audit exposure from poorly implemented Oracle GRC or financial controls."
        ]
      },
      {
        title: "Samaarav: Your Dedicated Oracle Staffing Partner",
        content: [
          "Samaarav maintains an Oracle-specialist staffing practice with recruiters trained to distinguish between Oracle EBS R12, Oracle Cloud Fusion, Oracle Database DBA, and OCI infrastructure roles. We verify real implementation experience — not just familiarity — before any candidate reaches your desk.",
          "• Oracle-specialist recruiters trained to distinguish between EBS R12, Cloud Fusion, DBA, and OCI roles.",
          "• Real implementation experience verified before any candidate reaches your desk.",
          "• Talent matched to your modules, version, and industry for precision delivery.",
          "Find Your Oracle Talent Today."
        ]
      }
    ],
    processTitle: "Business Outcomes<br />You Can Expect",
    processSubtitle: "Partner with Samaarav to accelerate your Oracle initiatives and achieve measurable business results through our expert talent solutions.",
    conversionProcess: [
      {
        number: "01",
        title: "On-time Oracle go-lives",
        description: "Certified consultants who execute implementations with precision and deliver on schedule.",
        color: "#ffffff",
        textColor: "#171717",
      },
      {
        number: "02",
        title: "Reduced rework and cost overruns",
        description: "Module experts who configure Oracle correctly the first time.",
        color: "#f5f5f5",
        textColor: "#171717",
      },
      {
        number: "03",
        title: "Smooth Oracle Cloud migrations",
        description: "Specialists experienced in EBS-to-Fusion migrations who minimize disruption.",
        color: "#eaeaea",
        textColor: "#171717",
      },
      {
        number: "04",
        title: "Better system performance",
        description: "Oracle DBAs and architects who optimize your environment for reliability and speed.",
        color: "#dedede",
        textColor: "#171717",
      },
      {
        number: "05",
        title: "Scalable Oracle talent pipeline",
        description: "A ready bench of pre-screened Oracle professionals aligned to your upgrade roadmap.",
        color: "#171717",
        textColor: "#ffffff",
      },
    ],
    cta: {
      title: "Ready to Hire<br /><span class=\"ml-[8vw]\">Top Oracle Experts?</span>",
      description: "Share your Oracle staffing requirements today. Our team responds within hours with certified Oracle professionals matched to your modules and environment.",
      buttonText: "Let's Talk ↗",
      buttonLink: "/contact"
    }
  },
  "epicor": {
    title: "EPICOR<br />STAFFING",
    subtitle: "Searching for Experienced Epicor ERP Consultants?",
    description: "Samaarav connects manufacturers, distributors, and service organizations with pre-vetted Epicor professionals across Epicor Kinetic (ERP 10), Prophet 21, Eclipse, and BisTrack. Epicor expertise is rare — our specialist practice makes finding it fast and reliable.",
    stats: [
      { value: "130+", label: "Epicor Experts Placed" },
      { value: "96%", label: "Client Satisfaction Rate" },
      { value: "100%", label: "Epicor Dedicated" },
    ],
    benefitsTitle: "Why Manufacturers and Distributors Choose Samaarav for Epicor Staffing",
    benefits: [
      {
        number: "01",
        title: "Specialized Network",
        description: "Access a curated talent pool of certified Epicor Kinetic and Prophet 21 professionals.",
        color: "#ffffff",
        textColor: "#171717",
      },
      {
        number: "02",
        title: "Agile Delivery",
        description: "We combine deep Epicor domain expertise with an agile staffing model to deliver top-tier talent at speed.",
        color: "#f5f5f5",
        textColor: "#171717",
      },
      {
        number: "03",
        title: "Proven Track Record",
        description: "Avoid agencies that confuse Epicor versions. We supply specialists with verified implementation histories.",
        color: "#eaeaea",
        textColor: "#171717",
      },
      {
        number: "04",
        title: "Industry Alignment",
        description: "Consultants who understand shop floor operations, discrete manufacturing, and complex distribution.",
        color: "#171717",
        textColor: "#ffffff",
      },
    ],
    expertiseTitle: "Epicor Products & Roles We Staff",
    expertise: [
      {
        id: "core",
        title: "Core Products",
        description: "Epicor Kinetic (ERP 10), Epicor Prophet 21, Epicor Eclipse, and Epicor BisTrack specialists.",
        technologies: ["Epicor Kinetic", "Prophet 21", "Eclipse", "BisTrack"]
      },
      {
        id: "functional",
        title: "Functional Modules",
        description: "Experts in Manufacturing, Finance, Supply Chain, and Human Capital Management.",
        technologies: ["Manufacturing (MES)", "Finance & Accounting", "Supply Chain / Procurement", "HCM / Payroll"]
      },
      {
        id: "technical",
        title: "Technical & Cloud",
        description: "Technical Developers, BAQ/BPM Engineers, Cloud Architects, and CRM integrators.",
        technologies: ["Technical Developer", "BAQ / BPM Engineer", "Cloud / SaaS Architect", "Epicor CRM"]
      }
    ],
    textSections: [
      {
        title: "Is the Epicor Talent Shortage Delaying Your ERP Delivery?",
        content: [
          "Epicor is a mid-market ERP leader with a loyal but limited certified consultant community. Generic staffing agencies routinely confuse Epicor product versions, misrepresent functional experience, and fail to provide the exact expertise required for successful implementations."
        ]
      },
      {
        title: "The Real Cost of a Wrong Epicor Hire",
        content: [
          "Hiring the wrong Epicor consultant leads to misconfigured manufacturing modules, delayed go-lives, and costly rework.",
          "By partnering with Samaarav, you bypass these risks. We pre-vet every candidate for both technical proficiency and functional industry knowledge before they ever reach your desk."
        ]
      }
    ],
    processTitle: "Business Outcomes<br />You Can Expect",
    processSubtitle: "Partner with Samaarav to achieve measurable business results and maximize your Epicor investment through our expert talent solutions.",
    conversionProcess: [
      {
        number: "01",
        title: "On-time Epicor go-lives",
        description: "Certified consultants who configure Epicor Kinetic and P21 correctly and avoid costly rework cycles.",
        color: "#ffffff",
        textColor: "#171717",
      },
      {
        number: "02",
        title: "Reliable custom development",
        description: "BAQ and BPM developers who build customizations that survive future upgrades.",
        color: "#f5f5f5",
        textColor: "#171717",
      },
      {
        number: "03",
        title: "Smooth third-party integrations",
        description: "Specialists who connect Epicor cleanly to your e-commerce and shop floor tools.",
        color: "#eaeaea",
        textColor: "#171717",
      },
      {
        number: "04",
        title: "Maximum ERP ROI",
        description: "Experts who configure Epicor's full manufacturing potential to match your actual workflows.",
        color: "#dedede",
        textColor: "#171717",
      },
      {
        number: "05",
        title: "Reduced technical debt",
        description: "Vetted developers who follow Epicor best practices and write maintainable code.",
        color: "#171717",
        textColor: "#ffffff",
      },
    ],
    cta: {
      title: "Ready to Hire<br /><span class=\"ml-[8vw]\">Top Epicor Experts?</span>",
      description: "Share your Epicor staffing requirements today. Our team responds within hours with pre-vetted Epicor consultants and developers matched to your edition, modules, and business goals.",
      buttonText: "Let's Talk ↗",
      buttonLink: "/contact"
    }
  }
};
