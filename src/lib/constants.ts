export const NAV_LINKS = [
  { label: "Teams", href: "#team" },
  { label: "Services", href: "#services" },
  { label: "Why Pakistan", href: "#why-pakistan" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
] as const;

export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  "https://calendly.com/alishba-javed2001/30min";

export function getCalendlyEmbedUrl(): string {
  const base = CALENDLY_URL.replace(/\/$/, "").split("?")[0];
  return `${base}?embed=true&hide_landing_page_details=1&hide_gdpr_banner=1`;
}

export const CONTACT_EMAIL = "hello@thebridgely.com";

export const LEAD_INTENTS = [
  { value: "individual", label: "Hire individual talent" },
  { value: "embedded_team", label: "Build an embedded engineering team" },
  { value: "recruitment", label: "Recruitment / executive hiring" },
] as const;

export const LEAD_INTENT_VALUES = LEAD_INTENTS.map((i) => i.value);

export type LeadIntent = (typeof LEAD_INTENTS)[number]["value"];

export const TRUST_BADGES = [
  "Embedded Teams Ready",
  "Individual Talent Available",
  "Managed Hiring & Screening",
] as const;

export const PROBLEM_CARDS = [
  {
    title: "High Hiring Costs",
    description:
      "US and UK engineering salaries make scaling teams prohibitively expensive for early-stage startups.",
    icon: "DollarSign" as const,
  },
  {
    title: "Unreliable Freelancers",
    description:
      "Marketplace freelancers lack accountability, continuity, and the cohesion your product needs.",
    icon: "UserX" as const,
  },
  {
    title: "Slow Recruitment Cycles",
    description:
      "Months-long hiring pipelines delay launches and burn runway before a single line ships.",
    icon: "Clock" as const,
  },
] as const;

export const SOLUTION_FEATURES = [
  {
    title: "Embedded Engineering Teams",
    description:
      "A pre-built unit of frontend, backend, QA, design, and HR ready to plug into your product.",
    icon: "Users" as const,
  },
  {
    title: "Pre-Vetted Talent Pool",
    description:
      "Every engineer is technically screened and culturally aligned before you ever meet them.",
    icon: "ShieldCheck" as const,
  },
  {
    title: "Managed Hiring & Screening",
    description:
      "We handle sourcing, interviews, and coordination so you focus on building.",
    icon: "ClipboardCheck" as const,
  },
  {
    title: "Seamless Team Integration",
    description:
      "Our team already works together — embedding into your workflow is frictionless.",
    icon: "Plug" as const,
  },
] as const;

export const BENTO_SERVICES = [
  {
    id: "individual",
    title: "Hire Individual Talent",
    description:
      "Vetted engineers for specific roles when you need targeted expertise.",
    icon: "UserPlus" as const,
    featured: false,
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: "embedded",
    title: "Embedded Engineering Teams",
    description:
      "Fully dedicated teams integrated into your product — our primary offering and strongest value.",
    icon: "Layers" as const,
    featured: true,
    badge: "Primary Focus",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: "recruitment",
    title: "Recruitment Services",
    description:
      "Senior hiring and technical placements for companies building long-term teams in Pakistan.",
    icon: "Briefcase" as const,
    featured: false,
    span: "md:col-span-1 md:row-span-1",
  },
] as const;

export const COMPARISON_DATA = [
  {
    role: "Full Stack Developer",
    usCost: "$90K–130K",
    pkCost: "$18K–30K",
    savings: "~70%",
  },
  {
    role: "Data Engineer",
    usCost: "$110K–160K",
    pkCost: "$22K–38K",
    savings: "~75%",
  },
  {
    role: "UI/UX Designer",
    usCost: "$70K–110K",
    pkCost: "$14K–24K",
    savings: "~78%",
  },
  {
    role: "DevOps Engineer",
    usCost: "$100K–150K",
    pkCost: "$20K–36K",
    savings: "~75%",
  },
  {
    role: "QA Engineer",
    usCost: "$60K–90K",
    pkCost: "$10K–18K",
    savings: "~80%",
  },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Tell Us What You Need",
    description:
      "Share role requirements, tech stack, team structure, and goals.",
  },
  {
    step: "02",
    title: "We Source & Screen",
    description:
      "We tap into Pakistan's engineering ecosystem and pre-vet candidates technically and culturally.",
  },
  {
    step: "03",
    title: "You Meet the Shortlist",
    description:
      "Receive 3–5 highly relevant candidates. We handle coordination and interviews.",
  },
  {
    step: "04",
    title: "Hire & Onboard",
    description:
      "We support contracts, onboarding, and integration into your workflow.",
  },
] as const;

export const TEAM_MEMBERS = [
  {
    name: "Danella Patrick",
    role: "SQA Engineer",
    tag: "Quality & Release Assurance",
    details: [
      "Manual Testing (Smoke, Regression)",
      "Automation Testing (Selenium, API Testing)",
      "CI/CD QA Validation",
      "Ensures product release quality",
      "Embedded QA Specialist",
    ],
    initials: "DP",
    gradient: "from-brand-dark to-brand",
  },
  {
    name: "Malaika",
    role: "Senior Software Engineer",
    tag: "Full-Stack Product Engineering",
    details: [
      "React / Next.js Development",
      "API Integration & System Design",
      "Scalable frontend architecture",
      "Performance optimization",
      "Senior product engineering experience",
    ],
    initials: "M",
    gradient: "from-[#3D9A78] to-brand",
  },
  {
    name: "Senior Frontend Engineer",
    role: "Frontend Engineer",
    tag: "UI Systems & Performance",
    details: [
      "React / Next.js / UI Systems",
      "Component architecture",
      "Performance optimization",
    ],
    initials: "FE",
    gradient: "from-brand to-brand-light",
  },
  {
    name: "Backend Engineer",
    role: "Backend Engineer",
    tag: "APIs & Scalable Systems",
    details: [
      "Node.js / Python APIs",
      "Database design",
      "Scalable backend systems",
    ],
    initials: "BE",
    gradient: "from-brand-dark to-[#54BD95]",
  },
  {
    name: "UI/UX Designer",
    role: "Product Designer",
    tag: "Design Systems & UX",
    details: [
      "UX systems & wireframing",
      "Figma design systems",
      "Product UI design",
    ],
    initials: "UX",
    gradient: "from-[#2F7D62] to-brand-light",
  },
  {
    name: "HR / Talent Manager",
    role: "Talent Operations",
    tag: "Hiring & Client Onboarding",
    details: [
      "Candidate screening",
      "Hiring coordination",
      "Client onboarding support",
    ],
    initials: "HR",
    gradient: "from-brand-dark to-brand-light",
  },
] as const;

export const TRUSTED_BY_TEXT =
  "Trusted by modern product teams, fast-growing startups, SaaS companies, and digital agencies that rely on embedded engineering teams to build and scale their products.";

export const VETTED_TEAM = [
  {
    id: "1",
    name: "Mishal Zehra",
    role: "Offshore Recruitment Partner",
    image: "/images/team/mishal-zehra.jpg",
    summary:
      "Helping startups build high-performing remote teams across Engineering, Product, GTM, and Operations.",
    skills: [
      "Embedded Recruitment",
      "Technical Hiring",
      "Talent Sourcing",
    ],
    highlight:
      "Embedded hiring partner for Engineering, Product, GTM, and Operations teams",
    linkedin: "https://linkedin.com/in/mishalzehra",
  },
  {
    id: "2",
    name: "Alishba Javed",
    role: "Software Engineer",
    image: "/images/team/alishba-javed.jpg",
    summary:
      "Software engineer with deep roots in backend systems, applied AI, and ML/DL — spanning scalable API design, data pipelines, model training, and cloud deployment. Scopes systems cleanly, maintains databases, and ships models that hold up in production.",
    skills: [
      "Backend",
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Database Management",
      "Cloud Infrastructure",
    ],
    highlight:
      "Production-grade ML models and scalable backend systems — built end-to-end",
    linkedin: "https://linkedin.com/in/alishbajaved",
    github: "https://github.com/alishba-javed-2001",
  },
  {
    id: "3",
    name: "Areeba Asad",
    role: "Full Stack Engineer",
    image: "/images/team/areeba-asad.jpg",
    summary:
      "Software engineer focused on building end-to-end digital products — from intuitive frontend experiences to scalable backend systems. Experienced in designing APIs, developing modern web applications, managing databases, and deploying production-ready systems that are reliable, secure, and performant.",
    skills: ["React", "Next.js", "Python", "Django"],
    highlight:
      "Delivers reliable full-stack products from UI through API to deployment",
    linkedin: "https://www.linkedin.com/in/areebaasadullah",
    github: "https://github.com/areebaka",
  },
  {
    id: "4",
    name: "Danella Patrick",
    role: "QA Automation Engineer",
    image: "/images/team/danella-patrick.jpg",
    summary:
      "QA automation and manual testing specialist for global product teams — building robust test suites, automating regression with Playwright and Selenium, and keeping releases stable across web and API layers.",
    skills: [
      "Selenium",
      "Playwright",
      "Python",
      "JavaScript",
      "Manual Testing",
    ],
    highlight:
      "Automated release pipelines with Playwright & Selenium — faster, safer shipping",
    linkedin: "https://www.linkedin.com/in/danella-patrick/",
  },
  {
    id: "5",
    name: "Ahmad Khan",
    role: "Senior Full-Stack Engineer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=480&h=640&fit=crop&crop=face",
    summary: "7+ years building scalable SaaS products for US startups.",
    skills: ["React", "Node.js", "PostgreSQL", "System Design"],
    highlight: "Shipped 3 products from MVP to Series A",
  },
  {
    id: "2",
    name: "Hina Fatima",
    role: "QA Engineer",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=480&h=640&fit=crop&crop=face",
    summary: "Embedded QA lead for fintech and health-tech platforms.",
    skills: ["Selenium", "API Testing", "CI/CD", "Regression Suites"],
    highlight: "Reduced release defects by 60% for a UK SaaS client",
  },
  {
    id: "3",
    name: "Omar Hassan",
    role: "Backend Engineer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=480&h=640&fit=crop&crop=face",
    summary: "Specialist in APIs, databases, and cloud-native backends.",
    skills: ["Python", "Node.js", "AWS", "Microservices"],
    highlight: "Built payment infra handling 2M+ monthly transactions",
  },
  {
    id: "4",
    name: "Sara Malik",
    role: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=480&h=640&fit=crop&crop=face",
    summary: "Product designer for B2B SaaS and mobile-first experiences.",
    skills: ["Figma", "Design Systems", "UX Research", "Prototyping"],
    highlight: "Redesigned onboarding — 40% uplift in activation",
  },
  {
    id: "5",
    name: "Danella Patrick",
    role: "SQA Engineer",
    image: "/images/hero-engineer.png",
    summary:
      "Embedded QA specialist ensuring release quality for global product teams.",
    skills: [
      "Manual Testing (Smoke, Regression)",
      "Automation (Selenium, API Testing)",
      "CI/CD QA Validation",
      "Release Quality Assurance",
    ],
    highlight:
      "70% more cost-effective than US/UK hiring — without compromising quality",
    featured: true,
  },
] as const;

export const INSIGHTS_STATS = [
  {
    prefix: "A growing team of",
    value: "40+",
    suffix: "embedded engineers",
  },
  {
    prefix: "Shipped across",
    value: "120+",
    suffix: "production releases",
  },
  {
    prefix: "Covering",
    value: "55+",
    suffix: "modern tech stacks",
  },
  {
    prefix: "Integrated into",
    value: "50+",
    suffix: "client platforms",
  },
] as const;

export const TECH_STACK_LOGOS = [
  { name: "React", slug: "react", color: "61DAFB" },
  { name: "Next.js", slug: "nextdotjs", color: "000000" },
  { name: "TypeScript", slug: "typescript", color: "3178C6" },
  { name: "Vue", slug: "vuedotjs", color: "4FC08D" },
  { name: "Angular", slug: "angular", color: "0F0F11" },
  { name: "Svelte", slug: "svelte", color: "FF3E00" },
  { name: "Tailwind", slug: "tailwindcss", color: "06B6D4" },
  { name: "Vite", slug: "vite", color: "646CFF" },
  { name: "Node.js", slug: "nodedotjs", color: "339933" },
  { name: "Express", slug: "express", color: "000000" },
  { name: "NestJS", slug: "nestjs", color: "E0234E" },
  { name: "Python", slug: "python", color: "3776AB" },
  { name: "Django", slug: "django", color: "092E20" },
  { name: "FastAPI", slug: "fastapi", color: "009688" },
  { name: "Go", slug: "go", color: "00ADD8" },
  { name: "Rust", slug: "rust", color: "000000" },
  { name: "Java", slug: "openjdk", color: "437291" },
  { name: "Spring", slug: "springboot", color: "6DB33F" },
  { name: ".NET", slug: "dotnet", color: "512BD4" },
  { name: "PHP", slug: "php", color: "777BB4" },
  { name: "Ruby", slug: "ruby", color: "CC342D" },
  { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
  { name: "MongoDB", slug: "mongodb", color: "47A248" },
  { name: "MySQL", slug: "mysql", color: "4479A1" },
  { name: "Redis", slug: "redis", color: "FF4438" },
  { name: "SQLite", slug: "sqlite", color: "003B57" },
  { name: "Elasticsearch", slug: "elasticsearch", color: "005571" },
  { name: "Supabase", slug: "supabase", color: "3FCF8E" },
  { name: "Firebase", slug: "firebase", color: "DD2C00" },
  { name: "RabbitMQ", slug: "rabbitmq", color: "FF6600" },
  { name: "Kafka", slug: "apachekafka", color: "231F20" },
  { name: "GraphQL", slug: "graphql", color: "E10098" },
  { name: "Docker", slug: "docker", color: "2496ED" },
  { name: "Kubernetes", slug: "kubernetes", color: "326CE5" },
  { name: "Terraform", slug: "terraform", color: "844FBA" },
  { name: "Ansible", slug: "ansible", color: "EE0000" },
  { name: "Jenkins", slug: "jenkins", color: "D24939" },
  { name: "GitHub Actions", slug: "githubactions", color: "2088FF" },
  { name: "GitLab", slug: "gitlab", color: "FC6D26" },
  { name: "Nginx", slug: "nginx", color: "009639" },
  { name: "AWS", slug: "amazonwebservices", color: "232F3E" },
  { name: "Google Cloud", slug: "googlecloud", color: "4285F4" },
  { name: "Azure", slug: "microsoftazure", color: "0078D4" },
  { name: "Vercel", slug: "vercel", color: "000000" },
  { name: "Linux", slug: "linux", color: "FCC624" },
  { name: "Playwright", slug: "playwright", color: "2EAD33" },
  { name: "Jest", slug: "jest", color: "C21325" },
  { name: "Cypress", slug: "cypress", color: "69D3A7" },
  { name: "Selenium", slug: "selenium", color: "43B02A" },
  { name: "PyTorch", slug: "pytorch", color: "EE4C2C" },
  { name: "TensorFlow", slug: "tensorflow", color: "FF6F00" },
  { name: "OpenAI", slug: "openai", color: "412991" },
  { name: "Prisma", slug: "prisma", color: "2D3748" },
  { name: "Flutter", slug: "flutter", color: "02569B" },
  { name: "Figma", slug: "figma", color: "F24E1E" },
  { name: "Grafana", slug: "grafana", color: "F46800" },
  { name: "Prometheus", slug: "prometheus", color: "E6522C" },
  { name: "Sentry", slug: "sentry", color: "362D59" },
  { name: "Datadog", slug: "datadog", color: "632CA6" },
] as const;

export const FOOTER_LINKS = {
  company: [
    { label: "Services", href: "#services" },
    { label: "Team", href: "#team" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Why Pakistan", href: "#why-pakistan" },
  ],
  connect: [
    { label: "Contact", href: "#contact" },
    { label: "Book a Call", href: "#contact" },
  ],
} as const;

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com/company/thebridgely" },
  { label: "Twitter", href: "https://twitter.com/thebridgely" },
] as const;
