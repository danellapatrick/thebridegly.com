export interface PortfolioProject {
  id: string;
  title: string;
  tagline: string;
  industry: string[];
  video: string;
  galleryImages: string[];
  overview: string;
  services: string[];
  techStack: { category: string; items: string[] }[];
  keyFeatures: string[];
  outcome: string;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "content-designer-ai",
    title: "Content Designer AI",
    tagline: "AI-powered content governance platform",
    industry: ["AI", "SaaS", "Content Management"],
    video: "/videos/portfolio/project-1.mp4",
    galleryImages: [
      "/images/content-designer-ai-1.png?w=800&q=80",
      "/images/content-designer-ai-2.png?w=800&q=80",
      "/images/content-designer-ai-3.png?w=800&q=80",
    ],
    overview:
      "Content Designer AI is an AI-powered content governance platform that helps organizations create, review, and manage web content. It enables writers to generate high-quality content with AI assistance while allowing administrators to monitor website health, detect duplicate content, ensure accessibility, and maintain compliance across their entire site.",
    services: [
      "Product Development",
      "UI/UX Design",
      "Frontend Development",
      "Backend Development",
      "AI Integration",
      "Website Crawling & Analytics",
      "Quality Assurance (Manual, Regression, Exploratory & API Testing)",
    ],
    techStack: [
      {
        category: "Frontend",
        items: ["React", "Next.js", "TypeScript"],
      },
      {
        category: "Backend",
        items: ["Node.js", "PostgreSQL"],
      },
      {
        category: "AI & ML",
        items: ["OpenAI (LLM)", "Prompt Engineering", "AI Content Analysis"],
      },
      {
        category: "Authentication",
        items: ["Magic Link Authentication"],
      },
      {
        category: "Infrastructure",
        items: ["REST APIs", "Website Crawling", "Content Analytics"],
      },
      {
        category: "QA",
        items: [
          "Manual Testing",
          "API Testing (Postman)",
          "Regression Testing",
          "Exploratory Testing",
        ],
      },
      {
        category: "Tools",
        items: ["Git", "ClickUp/Jira", "Postman"],
      },
    ],
    keyFeatures: [
      "AI-powered content generation and writing assistance",
      "AI content quality, accessibility, and compliance checks",
      "Website crawling and site health analytics",
      "Duplicate and similar content detection",
      "Organization-wide content governance dashboard",
      "AI-powered recommendations and issue detection",
      "Draft management with autosave and versioning",
      "Role-based access for writers and administrators",
    ],
    outcome:
      "Delivered a scalable AI-powered platform that streamlines content creation, improves content quality, and enables organizations to govern thousands of web pages through intelligent automation and analytics.",
  },
  {
    id: "fintech-dashboard",
    title: "FinPulse Analytics",
    tagline: "Real-time financial intelligence dashboard",
    industry: ["FinTech", "SaaS", "Analytics"],
    video: "/videos/portfolio/project-2.mp4",
    galleryImages: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    ],
    overview:
      "FinPulse Analytics is a real-time financial intelligence platform that aggregates market data, portfolio performance, and risk metrics into a unified dashboard for investment teams.",
    services: [
      "Product Development",
      "UI/UX Design",
      "Frontend Development",
      "Backend Development",
      "Data Pipeline Engineering",
      "Quality Assurance",
    ],
    techStack: [
      { category: "Frontend", items: ["React", "TypeScript", "D3.js"] },
      { category: "Backend", items: ["Node.js", "PostgreSQL", "Redis"] },
      { category: "Infrastructure", items: ["AWS", "WebSockets", "REST APIs"] },
      { category: "Tools", items: ["Git", "Jira", "Postman"] },
    ],
    keyFeatures: [
      "Real-time market data streaming",
      "Custom portfolio analytics",
      "Risk scoring and alerts",
      "Multi-tenant organization support",
    ],
    outcome:
      "Enabled investment teams to monitor portfolios and market signals in real time, reducing manual reporting overhead by 60%.",
  },
  {
    id: "healthcare-portal",
    title: "CareBridge Portal",
    tagline: "Patient engagement & telehealth platform",
    industry: ["Healthcare", "SaaS"],
    video: "/videos/portfolio/project-3.mp4",
    galleryImages: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      "https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=800&q=80",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80",
    ],
    overview:
      "CareBridge Portal connects patients with healthcare providers through secure messaging, appointment scheduling, and video consultations in a HIPAA-aware environment.",
    services: [
      "Product Development",
      "UI/UX Design",
      "Frontend Development",
      "Backend Development",
      "Quality Assurance",
    ],
    techStack: [
      { category: "Frontend", items: ["Next.js", "TypeScript", "Tailwind CSS"] },
      { category: "Backend", items: ["Node.js", "PostgreSQL"] },
      { category: "Auth", items: ["OAuth 2.0", "Role-Based Access"] },
      { category: "Tools", items: ["Git", "ClickUp", "Postman"] },
    ],
    keyFeatures: [
      "Secure patient-provider messaging",
      "Appointment booking and reminders",
      "Telehealth video sessions",
      "Admin dashboard for clinic management",
    ],
    outcome:
      "Launched a patient portal that improved appointment adherence and reduced no-shows for pilot clinics.",
  },
  {
    id: "ecommerce-platform",
    title: "ShopNest Commerce",
    tagline: "Headless e-commerce storefront",
    industry: ["E-Commerce", "SaaS"],
    video: "/videos/portfolio/project-4.mp4",
    galleryImages: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    ],
    overview:
      "ShopNest Commerce is a headless e-commerce platform with a customizable storefront, inventory management, and integrated payment processing for growing retail brands.",
    services: [
      "Product Development",
      "UI/UX Design",
      "Frontend Development",
      "Backend Development",
      "Payment Integration",
      "Quality Assurance",
    ],
    techStack: [
      { category: "Frontend", items: ["React", "Next.js", "TypeScript"] },
      { category: "Backend", items: ["Node.js", "PostgreSQL", "Stripe"] },
      { category: "Infrastructure", items: ["REST APIs", "CDN", "CI/CD"] },
      { category: "Tools", items: ["Git", "Jira", "Postman"] },
    ],
    keyFeatures: [
      "Headless storefront with CMS integration",
      "Inventory and order management",
      "Stripe payment processing",
      "Analytics and conversion tracking",
    ],
    outcome:
      "Delivered a scalable storefront that supported multi-brand launches with faster time-to-market for new product lines.",
  },
  {
    id: "logistics-tracker",
    title: "RouteFlow Logistics",
    tagline: "Fleet tracking & route optimization",
    industry: ["Logistics", "SaaS", "IoT"],
    video: "/videos/portfolio/project-5.mp4",
    galleryImages: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
      "https://images.unsplash.com/photo-1494412519320-aa4fb4c4d9bc?w=800&q=80",
      "https://images.unsplash.com/photo-1566576721346-4f3b83a0b4b0?w=800&q=80",
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
    ],
    overview:
      "RouteFlow Logistics provides fleet operators with live GPS tracking, route optimization, and delivery status updates through a web and mobile-ready dashboard.",
    services: [
      "Product Development",
      "UI/UX Design",
      "Frontend Development",
      "Backend Development",
      "API Integration",
      "Quality Assurance",
    ],
    techStack: [
      { category: "Frontend", items: ["React", "TypeScript", "Mapbox GL"] },
      { category: "Backend", items: ["Node.js", "PostgreSQL", "Redis"] },
      { category: "Infrastructure", items: ["REST APIs", "WebSockets", "AWS"] },
      { category: "Tools", items: ["Git", "ClickUp", "Postman"] },
    ],
    keyFeatures: [
      "Live fleet GPS tracking",
      "Route optimization engine",
      "Delivery status notifications",
      "Driver and dispatcher dashboards",
    ],
    outcome:
      "Helped logistics teams reduce delivery delays and improve on-time performance through centralized fleet visibility.",
  },
];
