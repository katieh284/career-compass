// Comprehensive Career Database - All 17 Graduate Careers
const careersDatabase = {
  // PROFESSIONAL SERVICES
  taxConsulting: {
    id: "taxConsulting",
    name: "Tax Consulting",
    category: "Professional Services",
    description: "Specialized tax advisory and compliance expertise",
    longDescription: "Tax specialists help clients minimize tax liabilities, ensure regulatory compliance, and optimize their financial positions through specialized tax expertise. Work includes tax planning, compliance, advisory for individuals and corporations, and handling tax disputes.",
    traits: {
      analyticalFocus: 9,
      peopleFocus: 7,
      workLifeBalance: 6,
      earnings: 7,
      stability: 9,
      pressure: 6,
      autonomy: 5,
      variety: 5,
      qualifications: 10
    },
    bestSuitedFor: [
      "Analytical thinkers",
      "People who enjoy problem-solving",
      "People who like client interaction",
      "People who want structured progression"
    ],
    applicationDifficulty: "Medium",
    typicalRoute: "Internship → Graduate Scheme → ACA/CTA → Senior roles",
    companies: ["Deloitte", "PwC", "EY", "KPMG", "Grant Thornton", "BDO", "Crowe"],
    salary: { grad: "£28,000", fiveYears: "£50,000", twentyYears: "£120,000" },
    keySkills: ["Tax knowledge", "Attention to detail", "Client service", "Compliance expertise", "Problem-solving"],
    typicalDay: "Meet with clients on tax planning, review compliance documentation, prepare tax returns, attend team meetings",
    workLifeBalance: "Good - busy periods in March/April, quieter in summer",
    skillsNeeded: ["Excel", "Communication", "Commercial awareness", "Attention to detail"],
    interviewQuestions: [
      "Tell us about a complex tax problem you researched",
      "How do you stay updated with tax law changes?",
      "Describe your experience with client interaction"
    ],
    misconceptions: [
      "It's just about numbers - actually involves lots of client communication",
      "You need accounting background - any analytical degree works",
      "It's boring - tax law is constantly changing and interesting"
    ],
    typicalActivities: ["analysis", "advising", "research"],
    typicalIndustries: ["tax", "consulting"],
    typicalStrengths: ["analytical", "detailed", "organized", "curious"]
  },

  audit: {
    id: "audit",
    name: "Audit",
    category: "Professional Services",
    description: "Financial audit and assurance services",
    longDescription: "Auditors examine financial records, ensure compliance with regulations, and provide assurance to stakeholders. You'll work with diverse clients across industries, traveling to their sites, and building expertise in audit procedures and controls.",
    traits: {
      analyticalFocus: 8,
      peopleFocus: 6,
      workLifeBalance: 6,
      earnings: 7,
      stability: 8,
      pressure: 6,
      autonomy: 5,
      variety: 7,
      qualifications: 9
    },
    bestSuitedFor: [
      "Detail-oriented professionals",
      "People who enjoy logical thinking",
      "People comfortable with travel",
      "People pursuing professional qualifications"
    ],
    applicationDifficulty: "Medium",
    typicalRoute: "Internship → Graduate Scheme → ACA → Senior Auditor → Manager",
    companies: ["KPMG", "PwC", "EY", "Deloitte", "BDO", "Grant Thornton"],
    salary: { grad: "£28,000", fiveYears: "£50,000", twentyYears: "£130,000" },
    keySkills: ["Financial analysis", "Attention to detail", "Audit procedures", "Communication", "Systems thinking"],
    typicalDay: "Review financial statements at client site, test controls, prepare audit reports, team meetings",
    workLifeBalance: "Moderate - busy during year-end close periods (Dec-Mar)",
    skillsNeeded: ["Excel", "Communication", "Teamwork", "Attention to detail"],
    interviewQuestions: [
      "What interests you about audit?",
      "How would you handle a complex financial issue?",
      "Tell us about working in a team"
    ],
    misconceptions: [
      "Audit is boring - you solve complex financial puzzles",
      "You need accounting qualifications - you earn them on the job",
      "It's all desk work - you visit client sites regularly"
    ],
    typicalActivities: ["analysis", "research", "advising"],
    typicalIndustries: ["consulting", "tax"],
    typicalStrengths: ["analytical", "organized", "detailed", "communicator"]
  },

  consulting: {
    id: "consulting",
    name: "Management Consulting",
    category: "Professional Services",
    description: "Strategy, operations, and organizational transformation",
    longDescription: "Consultants help organizations solve complex business problems, improve operations, and drive growth. You'll work on diverse projects across industries, presenting insights to senior executives, leading teams, and developing strategic recommendations.",
    traits: {
      analyticalFocus: 8,
      peopleFocus: 8,
      workLifeBalance: 4,
      earnings: 8,
      stability: 6,
      pressure: 8,
      autonomy: 6,
      variety: 9,
      qualifications: 5
    },
    bestSuitedFor: [
      "Strategic thinkers",
      "People who love problem-solving",
      "Confident presenters",
      "People who thrive under pressure",
      "People comfortable with travel"
    ],
    applicationDifficulty: "Hard",
    typicalRoute: "Internship/Spring Week → Graduate Scheme → Consultant → Senior Consultant",
    companies: ["McKinsey", "BCG", "Bain", "Deloitte Consulting", "PwC Consulting", "Accenture"],
    salary: { grad: "£50,000", fiveYears: "£90,000", twentyYears: "£200,000+" },
    keySkills: ["Problem-solving", "Communication", "Client management", "Analytics", "Leadership"],
    typicalDay: "Client meetings, data analysis, strategy development, team presentations, travel",
    workLifeBalance: "Challenging - travel and long hours common",
    skillsNeeded: ["Problem-solving", "Communication", "Commercial awareness", "Teamwork"],
    interviewQuestions: [
      "Walk us through your problem-solving approach",
      "Tell us about a time you influenced others",
      "How do you handle pressure?"
    ],
    misconceptions: [
      "You need an MBA - many consultants join straight from undergrad",
      "It's just PowerPoint - you actually solve real business problems",
      "Work-life balance is impossible - depends on projects and firm culture"
    ],
    typicalActivities: ["advising", "problemSolving", "presenting", "analysis", "managing"],
    typicalIndustries: ["consulting"],
    typicalStrengths: ["strategic", "analytical", "communicator", "competitive"]
  },

  dealAdvisory: {
    id: "dealAdvisory",
    name: "Deal Advisory & M&A",
    category: "Professional Services",
    description: "Mergers & acquisitions and transaction advisory",
    longDescription: "Deal advisors support organizations through complex transactions including M&A, divestitures, and restructuring. You'll conduct financial due diligence, value companies, identify synergies, and work with investment banks and legal teams on deal execution.",
    traits: {
      analyticalFocus: 9,
      peopleFocus: 7,
      workLifeBalance: 5,
      earnings: 8,
      stability: 6,
      pressure: 8,
      autonomy: 6,
      variety: 8,
      qualifications: 6
    },
    bestSuitedFor: [
      "Financial analysts",
      "People interested in M&A transactions",
      "Driven individuals",
      "People comfortable with project-based work"
    ],
    applicationDifficulty: "Hard",
    typicalRoute: "Summer Internship → Graduate Scheme → Senior Analyst → Manager",
    companies: ["KPMG Deal Advisory", "PwC Deals", "EY Transactions", "Deloitte Financial Advisory", "BDO Advisory"],
    salary: { grad: "£40,000", fiveYears: "£80,000", twentyYears: "£180,000+" },
    keySkills: ["Financial modeling", "Valuation", "Due diligence", "Excel mastery", "Communication"],
    typicalDay: "Financial analysis, client meetings, valuation models, due diligence reviews, deal documentation",
    workLifeBalance: "Demanding - deal timelines are intense",
    skillsNeeded: ["Excel", "Financial modeling", "Communication", "Attention to detail"],
    interviewQuestions: [
      "Walk us through a financial model",
      "How would you value a company?",
      "Tell us about a complex deal you researched"
    ],
    misconceptions: [
      "You need finance background - analytical skills are key",
      "It's all spreadsheets - involves lots of strategic thinking",
      "Only finance grads get in - any analytical degree works"
    ],
    typicalActivities: ["analysis", "models", "advising", "research"],
    typicalIndustries: ["finance", "consulting"],
    typicalStrengths: ["analytical", "detailed", "strategic", "competitive"]
  },

  riskAdvisory: {
    id: "riskAdvisory",
    name: "Risk Advisory & Cyber",
    category: "Professional Services",
    description: "Risk management, compliance, and cyber security advisory",
    longDescription: "Risk advisors help organizations identify, assess, and mitigate business risks including cyber security threats, regulatory compliance, operational risks, and fraud. You'll work across diverse industries helping clients build resilient organizations.",
    traits: {
      analyticalFocus: 8,
      peopleFocus: 7,
      workLifeBalance: 6,
      earnings: 7,
      stability: 8,
      pressure: 6,
      autonomy: 6,
      variety: 7,
      qualifications: 7
    },
    bestSuitedFor: [
      "People interested in cyber security",
      "Problem-solvers",
      "People interested in compliance",
      "Detail-oriented thinkers"
    ],
    applicationDifficulty: "Medium",
    typicalRoute: "Graduate Scheme → Risk Consultant → Senior Consultant → Manager",
    companies: ["Deloitte Risk Advisory", "KPMG Risk Consulting", "PwC Risk", "EY Risk", "BDO Risk"],
    salary: { grad: "£32,000", fiveYears: "£60,000", twentyYears: "£140,000" },
    keySkills: ["Risk analysis", "Compliance knowledge", "Communication", "Systems thinking", "Problem-solving"],
    typicalDay: "Risk assessments, client meetings, compliance reviews, cyber security analysis, recommendations",
    workLifeBalance: "Good - less travel than other advisory services",
    skillsNeeded: ["Risk analysis", "Communication", "Commercial awareness", "Attention to detail"],
    interviewQuestions: [
      "What interests you about risk management?",
      "Describe a cyber security risk you researched",
      "How would you advise a client on a compliance issue?"
    ],
    misconceptions: [
      "You need tech background - non-tech grads work here too",
      "It's only cyber security - it covers all types of business risks",
      "It's reactive - you help organizations build proactive resilience"
    ],
    typicalActivities: ["analysis", "advising", "research"],
    typicalIndustries: ["consulting", "finance"],
    typicalStrengths: ["analytical", "organized", "detailed", "curious"]
  },

  // FINANCE
  investmentBanking: {
    id: "investmentBanking",
    name: "Investment Banking",
    category: "Finance",
    description: "M&A, capital markets, and corporate finance advisory",
    longDescription: "Investment bankers advise corporations and private equity firms on complex transactions including M&A, IPOs, and capital raising. You'll build financial models, manage client relationships, and work on high-stakes deals with global impact.",
    traits: {
      analyticalFocus: 9,
      peopleFocus: 8,
      workLifeBalance: 2,
      earnings: 9,
      stability: 6,
      pressure: 9,
      autonomy: 6,
      variety: 7,
      qualifications: 6
    },
    bestSuitedFor: [
      "Highly driven individuals",
      "People who thrive under pressure",
      "Financial modelers",
      "People ambitious about earnings",
      "People comfortable with intense hours"
    ],
    applicationDifficulty: "Very Hard",
    typicalRoute: "Summer Analyst → Graduate Analyst → Associate → VP",
    companies: ["Goldman Sachs", "JP Morgan", "Morgan Stanley", "Barclays", "HSBC", "Citi", "BNP Paribas"],
    salary: { grad: "£60,000", fiveYears: "£150,000", twentyYears: "£400,000+" },
    keySkills: ["Financial modeling", "Excel mastery", "Deal knowledge", "Client management", "Attention to detail"],
    typicalDay: "Financial modeling, client pitches, due diligence, late nights finalizing deals, team collaboration",
    workLifeBalance: "Very challenging - 80+ hour weeks common",
    skillsNeeded: ["Excel", "Financial modeling", "Communication", "Resilience"],
    interviewQuestions: [
      "Walk us through an accretion/dilution analysis",
      "Tell us about a deal you followed in the news",
      "How do you work under pressure?"
    ],
    misconceptions: [
      "Only finance grads get in - strong analytical skills matter most",
      "You need an MBA - many join straight from undergrad",
      "Exit options are limited - banking opens many doors"
    ],
    typicalActivities: ["analysis", "models", "negotiating", "research"],
    typicalIndustries: ["finance"],
    typicalStrengths: ["analytical", "detailed", "competitive", "strategic"]
  },

  assetManagement: {
    id: "assetManagement",
    name: "Asset Management",
    category: "Finance",
    description: "Portfolio management and investment strategy",
    longDescription: "Asset managers help individuals and institutions invest their capital to achieve financial goals. You'll research investments, build portfolios, manage relationships with clients, and contribute to investment decisions across equities, bonds, and alternatives.",
    traits: {
      analyticalFocus: 9,
      peopleFocus: 7,
      workLifeBalance: 6,
      earnings: 8,
      stability: 7,
      pressure: 7,
      autonomy: 7,
      variety: 7,
      qualifications: 6
    },
    bestSuitedFor: [
      "Investment enthusiasts",
      "People interested in markets",
      "Financial analysts",
      "People who want varied work"
    ],
    applicationDifficulty: "Hard",
    typicalRoute: "Summer Intern → Graduate Analyst → Investment Analyst → Senior Analyst",
    companies: ["Schroders", "Fidelity", "Pictet", "BlackRock", "Vanguard", "Evelyn Partners"],
    salary: { grad: "£40,000", fiveYears: "£90,000", twentyYears: "£200,000+" },
    keySkills: ["Investment analysis", "Portfolio management", "Financial modeling", "Client relationship", "Communication"],
    typicalDay: "Market research, company analysis, portfolio reviews, client meetings, investment discussions",
    workLifeBalance: "Good - market hours but manageable",
    skillsNeeded: ["Investment research", "Communication", "Commercial awareness", "Excel"],
    interviewQuestions: [
      "What investment interests you currently?",
      "Walk us through your investment thesis on a company",
      "How do you stay current with markets?"
    ],
    misconceptions: [
      "You need a finance degree - any analytical degree works",
      "You're trading all day - it's more research and relationship-focused",
      "Returns are all that matter - risk management is equally important"
    ],
    typicalActivities: ["analysis", "research", "negotiating"],
    typicalIndustries: ["finance"],
    typicalStrengths: ["analytical", "strategic", "curious", "competitive"]
  },

  equityResearch: {
    id: "equityResearch",
    name: "Equity Research",
    category: "Finance",
    description: "Investment research and stock analysis",
    longDescription: "Equity researchers analyze companies and write reports to support investment decisions. You'll conduct deep-dive financial analysis, build models, engage with company management, and publish recommendations that influence billions in investment decisions.",
    traits: {
      analyticalFocus: 9,
      peopleFocus: 6,
      workLifeBalance: 6,
      earnings: 8,
      stability: 6,
      pressure: 7,
      autonomy: 7,
      variety: 6,
      qualifications: 6
    },
    bestSuitedFor: [
      "Financial analysts",
      "People interested in deep research",
      "Stock market enthusiasts",
      "Independent thinkers"
    ],
    applicationDifficulty: "Hard",
    typicalRoute: "Summer Intern → Research Analyst → Senior Analyst → Associate",
    companies: ["UBS", "Goldman Sachs", "JP Morgan", "Morgan Stanley", "Barclays", "Citi"],
    salary: { grad: "£45,000", fiveYears: "£100,000", twentyYears: "£250,000+" },
    keySkills: ["Financial analysis", "Valuation", "Company research", "Writing", "Excel modeling"],
    typicalDay: "Company analysis, financial modeling, management meetings, report writing, client calls",
    workLifeBalance: "Good - market hours, intense during reporting seasons",
    skillsNeeded: ["Excel", "Financial modeling", "Writing", "Communication"],
    interviewQuestions: [
      "Tell us about a company you've researched",
      "Walk us through a valuation model",
      "How do you form an investment opinion?"
    ],
    misconceptions: [
      "You need a finance degree - strong analytical skills are key",
      "It's all numbers - writing and communication are crucial",
      "You need to be right all the time - it's about informed analysis"
    ],
    typicalActivities: ["analysis", "research", "models"],
    typicalIndustries: ["finance"],
    typicalStrengths: ["analytical", "curious", "detailed", "strategic"]
  },

  corporateFinance: {
    id: "corporateFinance",
    name: "Corporate Finance",
    category: "Finance",
    description: "Internal corporate finance and treasury management",
    longDescription: "Corporate finance teams manage a company's financial strategy, capital allocation, treasury, and financial planning. You'll work closely with leadership on investment decisions, funding strategy, and financial optimization for the organization.",
    traits: {
      analyticalFocus: 8,
      peopleFocus: 7,
      workLifeBalance: 7,
      earnings: 7,
      stability: 8,
      pressure: 6,
      autonomy: 6,
      variety: 7,
      qualifications: 5
    },
    bestSuitedFor: [
      "People interested in corporate strategy",
      "Financial planners",
      "People who want stability",
      "People interested in capital allocation"
    ],
    applicationDifficulty: "Medium",
    typicalRoute: "Graduate Analyst → Senior Analyst → Finance Manager → Director",
    companies: ["FTSE 100 companies", "Major multinational corporations", "Large private companies"],
    salary: { grad: "£35,000", fiveYears: "£75,000", twentyYears: "£150,000" },
    keySkills: ["Financial analysis", "Strategic thinking", "Excel", "Communication", "Stakeholder management"],
    typicalDay: "Financial planning, investment appraisals, budget analysis, board meetings, strategy discussions",
    workLifeBalance: "Excellent - office hours, minimal travel",
    skillsNeeded: ["Excel", "Financial analysis", "Communication", "Strategic thinking"],
    interviewQuestions: [
      "Describe a capital allocation decision",
      "How would you evaluate an investment?",
      "Tell us about a strategic finance issue"
    ],
    misconceptions: [
      "It's just accounting - it's strategic decision-making",
      "You need an MBA - graduates join directly",
      "Work-life balance is poor - it's actually quite good"
    ],
    typicalActivities: ["analysis", "models", "advising"],
    typicalIndustries: ["finance"],
    typicalStrengths: ["analytical", "strategic", "organized", "communicator"]
  },

  financialAnalyst: {
    id: "financialAnalyst",
    name: "Financial Analyst",
    category: "Finance",
    description: "Financial analysis and business intelligence",
    longDescription: "Financial analysts provide data-driven insights to support business decisions. You'll analyze financial data, build models, create dashboards, and provide recommendations to improve business performance across various functions.",
    traits: {
      analyticalFocus: 8,
      peopleFocus: 5,
      workLifeBalance: 7,
      earnings: 6,
      stability: 7,
      pressure: 5,
      autonomy: 6,
      variety: 6,
      qualifications: 4
    },
    bestSuitedFor: [
      "Data analysts",
      "Excel enthusiasts",
      "People who enjoy problem-solving",
      "Organized thinkers"
    ],
    applicationDifficulty: "Easy to Medium",
    typicalRoute: "Graduate Analyst → Senior Analyst → Financial Planning Manager",
    companies: ["Most large corporations", "Consulting firms", "Tech companies", "Banks"],
    salary: { grad: "£28,000", fiveYears: "£50,000", twentyYears: "£100,000" },
    keySkills: ["Excel", "Data analysis", "Financial modeling", "SQL/Python", "Communication"],
    typicalDay: "Data analysis, building reports, creating dashboards, presenting insights, meeting with stakeholders",
    workLifeBalance: "Good - standard office hours, occasional tight deadlines",
    skillsNeeded: ["Excel", "Data analysis", "SQL", "Communication"],
    interviewQuestions: [
      "Walk us through your Excel skills",
      "Tell us about a data analysis project",
      "How would you approach this business question?"
    ],
    misconceptions: [
      "It's just spreadsheets - it's about driving decisions",
      "You need advanced SQL skills - Excel is actually key",
      "It's entry-level only - strong analysts progress rapidly"
    ],
    typicalActivities: ["analysis", "models", "research"],
    typicalIndustries: ["finance"],
    typicalStrengths: ["analytical", "organized", "detailed", "curious"]
  },

  // OTHER POPULAR ROUTES
  economicConsulting: {
    id: "economicConsulting",
    name: "Economic Consulting",
    category: "Other Popular Routes",
    description: "Economics-based consulting and expert witness services",
    longDescription: "Economic consultants apply economic analysis to complex business and legal problems. You'll work on competition cases, regulatory matters, damages claims, and strategic issues where deep economic thinking is required.",
    traits: {
      analyticalFocus: 9,
      peopleFocus: 6,
      workLifeBalance: 6,
      earnings: 8,
      stability: 6,
      pressure: 7,
      autonomy: 7,
      variety: 7,
      qualifications: 7
    },
    bestSuitedFor: [
      "Economists and quantitative thinkers",
      "People interested in competition/antitrust",
      "People who enjoy research",
      "People with strong analytical skills"
    ],
    applicationDifficulty: "Hard",
    typicalRoute: "Consultant → Senior Consultant → Manager → Principal",
    companies: ["Charles River Associates", "Compass Lexecon", "NERA Economic Consulting", "Evercore ISI"],
    salary: { grad: "£45,000", fiveYears: "£85,000", twentyYears: "£180,000+" },
    keySkills: ["Economic analysis", "Statistical modeling", "Expert witness", "Writing", "Problem-solving"],
    typicalDay: "Economic analysis, litigation support, expert reports, client meetings, data analysis",
    workLifeBalance: "Good - case-dependent, generally manageable",
    skillsNeeded: ["Economics", "Statistical analysis", "Excel", "Writing"],
    interviewQuestions: [
      "Walk us through an economic analysis",
      "Tell us about an interesting competition case",
      "How would you approach this economic question?"
    ],
    misconceptions: [
      "You need a PhD - strong analysts join with bachelor's degrees",
      "It's all theory - it's applied to real business problems",
      "Only economists work here - strong quants from any background"
    ],
    typicalActivities: ["analysis", "research", "presenting"],
    typicalIndustries: ["consulting"],
    typicalStrengths: ["analytical", "curious", "strategic", "organized"]
  },

  dataAnalytics: {
    id: "dataAnalytics",
    name: "Data Analytics",
    category: "Other Popular Routes",
    description: "Data science and business analytics",
    longDescription: "Data analysts and scientists use data to solve business problems and drive decision-making. You'll work with large datasets, build predictive models, create visualizations, and translate insights into business recommendations across organizations.",
    traits: {
      analyticalFocus: 9,
      peopleFocus: 5,
      workLifeBalance: 7,
      earnings: 7,
      stability: 7,
      pressure: 6,
      autonomy: 7,
      variety: 7,
      qualifications: 5
    },
    bestSuitedFor: [
      "Data enthusiasts",
      "People interested in AI/ML",
      "Problem-solvers",
      "People with tech skills"
    ],
    applicationDifficulty: "Medium",
    typicalRoute: "Data Analyst → Senior Analyst → Data Scientist → Lead Scientist",
    companies: ["Deloitte Analytics", "PwC Data", "KPMG Data Analytics", "Sky", "Various tech companies"],
    salary: { grad: "£35,000", fiveYears: "£75,000", twentyYears: "£150,000+" },
    keySkills: ["Python/R", "SQL", "Statistics", "Machine Learning", "Communication"],
    typicalDay: "Data cleaning, model building, analysis, visualization, presenting insights, stakeholder meetings",
    workLifeBalance: "Good - project-dependent",
    skillsNeeded: ["Python or R", "SQL", "Statistics", "Data visualization"],
    interviewQuestions: [
      "Walk us through a data project",
      "How would you approach this analysis?",
      "Tell us about your machine learning experience"
    ],
    misconceptions: [
      "You need a tech background - analytics training is provided",
      "It's only for PhDs - graduates join with undergrad degrees",
      "It's only big tech - all industries need data analysts"
    ],
    typicalActivities: ["analysis", "research", "models"],
    typicalIndustries: ["consulting", "finance"],
    typicalStrengths: ["analytical", "curious", "organized", "detailed"]
  },

  civilService: {
    id: "civilService",
    name: "Civil Service & Policy",
    category: "Other Popular Routes",
    description: "Government policy and public service",
    longDescription: "Civil servants work in government departments influencing policy that shapes society. You'll analyze policy issues, develop recommendations, engage with stakeholders, and contribute to government strategy on everything from economics to health to environment.",
    traits: {
      analyticalFocus: 8,
      peopleFocus: 7,
      workLifeBalance: 7,
      earnings: 6,
      stability: 9,
      pressure: 6,
      autonomy: 6,
      variety: 8,
      qualifications: 6
    },
    bestSuitedFor: [
      "People interested in social impact",
      "Policy enthusiasts",
      "People who want job security",
      "Strategic thinkers"
    ],
    applicationDifficulty: "Medium",
    typicalRoute: "Fast Stream → Policy Officer → Senior Policy → Head of Policy",
    companies: ["Cabinet Office", "HMRC", "DfE", "BEIS", "NHS", "Local authorities"],
    salary: { grad: "£30,000", fiveYears: "£60,000", twentyYears: "£120,000" },
    keySkills: ["Policy analysis", "Stakeholder engagement", "Communication", "Strategic thinking", "Excel"],
    typicalDay: "Policy research, stakeholder meetings, evidence review, report writing, cross-department collaboration",
    workLifeBalance: "Excellent - office hours, holidays included",
    skillsNeeded: ["Policy research", "Communication", "Strategic thinking", "Writing"],
    interviewQuestions: [
      "Tell us about a policy issue you're interested in",
      "How would you analyze this policy problem?",
      "Describe your experience with stakeholder engagement"
    ],
    misconceptions: [
      "It's bureaucratic - you drive real policy change",
      "Job security means limited progression - career development is strong",
      "Only PPE grads join - all disciplines welcome"
    ],
    typicalActivities: ["advising", "analysis", "research", "presenting"],
    typicalIndustries: ["government"],
    typicalStrengths: ["analytical", "communicator", "curious", "organized"]
  },

  productManagement: {
    id: "productManagement",
    name: "Product Management",
    category: "Other Popular Routes",
    description: "Digital product development and strategy",
    longDescription: "Product managers lead the development of digital products and services. You'll define product strategy, work with engineering and design teams, analyze user data, and make decisions that drive product success and user satisfaction.",
    traits: {
      analyticalFocus: 7,
      peopleFocus: 8,
      workLifeBalance: 7,
      earnings: 7,
      stability: 6,
      pressure: 7,
      autonomy: 8,
      variety: 9,
      qualifications: 3
    },
    bestSuitedFor: [
      "Tech enthusiasts",
      "People interested in user experience",
      "Strategic thinkers",
      "Natural leaders"
    ],
    applicationDifficulty: "Medium to Hard",
    typicalRoute: "Associate PM → Product Manager → Senior PM → Director of Product",
    companies: ["Sky", "BBC", "BT", "HSBC", "Tech startups", "Google, Meta (external hire)"],
    salary: { grad: "£40,000", fiveYears: "£80,000", twentyYears: "£150,000+" },
    keySkills: ["Product strategy", "Data analysis", "Leadership", "User research", "Communication"],
    typicalDay: "User research, product meetings, data analysis, engineering collaboration, strategy sessions",
    workLifeBalance: "Good - varies by company",
    skillsNeeded: ["Product thinking", "Data analysis", "Communication", "Leadership"],
    interviewQuestions: [
      "Tell us about a product you use and how you'd improve it",
      "Walk us through your product strategy for X",
      "Describe a complex trade-off you'd face"
    ],
    misconceptions: [
      "You need technical skills - product thinking matters more",
      "You need MBA - many join straight from undergrad",
      "You're just taking orders from leadership - you drive strategy"
    ],
    typicalActivities: ["managing", "advising", "analysis", "presenting"],
    typicalIndustries: ["consulting"],
    typicalStrengths: ["strategic", "communicator", "leader", "creative"]
  },

  marketing: {
    id: "marketing",
    name: "Marketing & Brand",
    category: "Other Popular Routes",
    description: "Brand management and commercial marketing",
    longDescription: "Marketing professionals develop strategies to build brands and drive commercial success. You'll work on product launches, marketing campaigns, brand strategy, consumer insights, and digital marketing across diverse industries.",
    traits: {
      analyticalFocus: 6,
      peopleFocus: 8,
      workLifeBalance: 7,
      earnings: 6,
      stability: 6,
      pressure: 6,
      autonomy: 7,
      variety: 8,
      qualifications: 3
    },
    bestSuitedFor: [
      "Creative thinkers",
      "People interested in consumer behavior",
      "Strategic communicators",
      "Data-driven marketers"
    ],
    applicationDifficulty: "Easy to Medium",
    typicalRoute: "Brand Executive → Brand Manager → Senior Brand Manager → Marketing Director",
    companies: ["Unilever", "L'Oréal", "P&G", "GSK", "Diageo", "Sky"],
    salary: { grad: "£28,000", fiveYears: "£60,000", twentyYears: "£130,000" },
    keySkills: ["Consumer insights", "Campaign strategy", "Communication", "Data analysis", "Creativity"],
    typicalDay: "Brand strategy, campaign planning, consumer research, team meetings, creative reviews",
    workLifeBalance: "Good - manageable hours with campaign deadlines",
    skillsNeeded: ["Communication", "Creativity", "Data analysis", "Strategic thinking"],
    interviewQuestions: [
      "Tell us about a brand you admire",
      "How would you improve our product positioning?",
      "Walk us through a marketing campaign"
    ],
    misconceptions: [
      "It's just creative - it's actually very analytical",
      "You need marketing background - any background works",
      "It's lower-paid - strong progression to senior roles"
    ],
    typicalActivities: ["managing", "advising", "analysis", "presenting"],
    typicalIndustries: ["consulting"],
    typicalStrengths: ["communicator", "creative", "strategic", "analytical"]
  },

  entrepreneurship: {
    id: "entrepreneurship",
    name: "Entrepreneurship & Startups",
    category: "Other Popular Routes",
    description: "Founding and building new ventures",
    longDescription: "Entrepreneurs build new businesses from the ground up. You'll identify opportunities, develop business models, raise capital, build teams, and navigate the challenges of scaling a startup. Paths include joining accelerators, founding your own company, or early-stage startup roles.",
    traits: {
      analyticalFocus: 7,
      peopleFocus: 8,
      workLifeBalance: 3,
      earnings: 5,
      stability: 2,
      pressure: 8,
      autonomy: 9,
      variety: 10,
      qualifications: 1
    },
    bestSuitedFor: [
      "Risk-takers",
      "Visionary thinkers",
      "People who want independence",
      "People comfortable with uncertainty"
    ],
    applicationDifficulty: "Varies (self-directed)",
    typicalRoute: "Idea → Startup/Accelerator → Growth → Exit or Scale",
    companies: ["Founder/Co-founder roles", "Early-stage startups", "Accelerators like Y Combinator"],
    salary: { grad: "£0-£50,000", fiveYears: "£0-£200,000+", twentyYears: "£0-£∞" },
    keySkills: ["Business acumen", "Leadership", "Problem-solving", "Resilience", "Sales"],
    typicalDay: "Highly variable - pitching, product development, team building, fundraising, customer conversations",
    workLifeBalance: "Very challenging - all-consuming initially",
    skillsNeeded: ["Business skills", "Leadership", "Resilience", "Problem-solving"],
    interviewQuestions: [
      "Tell us about a problem you'd solve",
      "How would you validate your business idea?",
      "Describe your experience leading a team"
    ],
    misconceptions: [
      "You need an MBA - many founders have undergrad degrees",
      "You need lots of capital - many bootstrapped successfully",
      "It's impossible - thousands of successful founders started with nothing"
    ],
    typicalActivities: ["managing", "problemSolving", "presenting", "negotiating"],
    typicalIndustries: ["consulting"],
    typicalStrengths: ["strategic", "leader", "resilient", "creative"]
  }
};

// Export for use in quiz
if (typeof module !== 'undefined' && module.exports) {
  module.exports = careersDatabase;
}
