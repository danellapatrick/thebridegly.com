"use client";

import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;

  email?: string;
  phone?: string;
  github?: string;
  linkedin?: string;
  website?: string;

  summary: string;

  skills: string[];

  competencies?: string[];

  experience: {
    title: string;
    company: string;
    duration: string;
    points: string[];
  }[];

  projects: {
    name: string;
    description: string;
    tech?: string[];
    github?: string;
  }[];

  certifications?: string[];

  achievements?: string[];

  education?: {
    degree: string;
    institute: string;
    year?: string;
  }[];
  community? : {
    role : string;
    organization : string;
    points : string[]
  }[];
}

export default function VettedTeamGallery() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    containScroll: "trimSnaps",
  });

  const TEAM: TeamMember[] = [
    {
      id: "danella",
      name: "Danella Patrick",
      role: "Senior QA Automation Engineer | AI/ML Quality Specialist | STLC",
      image: "/images/team/Danella.png",
    
      email: "danellapatricksunny@gmail.com",
      phone: "03162578422",
      github: "github.com/danellapatrick",
      linkedin: "linkedin.com/in/danellapatrick",
    
      summary:
        "QA Automation Engineer with 4+ years of experience in Manual & Automation Testing, API validation, performance testing, and AI/ML quality assurance. Strong expertise in building scalable automation frameworks using Python, Playwright, and Selenium with CI/CD integration and modern QA practices.",
    
      skills: [
        "Playwright",
        "Selenium WebDriver",
        "Python",
        "SQL",
        "Postman",
        "REST API Testing",
        "JMeter",
        "CI/CD (Jenkins, GitHub Actions)",
        "Git / GitHub",
        "Pytest",
        "BDD (Gherkin/Cucumber)",
        "Page Object Model (POM)",
        "Automation Framework Design",
        "Regression Testing",
        "Functional Testing",
        "Integration Testing",
        "System Testing",
        "Smoke Testing",
        "Exploratory Testing",
        "Mobile Testing (iOS & Android)",
        "Cross-browser Testing",
        "Performance Testing",
        "Test Case Design",
        "Defect Tracking",
        "Release Validation",
        "Agile / Scrum",
        "Jira",
        "Confluence",
        "AI/ML Testing",
        "LLM Evaluation",
        "Prompt Testing",
        "Bias Detection",
        "Model Output Validation"
      ],
    
      competencies: [
        "Automation Framework Architecture",
        "API & Backend Testing Strategy",
        "CI/CD Pipeline Integration",
        "Test Strategy & Planning",
        "Quality Engineering Leadership",
        "Cross-platform QA (Web/Mobile/Smart TV)",
        "AI/ML Quality Assurance",
        "LLM Evaluation & Prompt Validation",
        "Performance & Load Testing",
        "Data Validation & SQL Testing",
        "Mentoring QA Engineers"
      ],
    
      experience: [
        {
          title: "SQA Engineer",
          company: "Dubizzle Labs",
          duration: "2024 – Present",
          points: [
            "Built Playwright automation frameworks using Python with BDD and POM",
            "Designed API testing strategy including schema, validation, and reliability checks",
            "Executed regression, integration, and system testing across web and mobile",
            "Led QA sign-off process for production releases"
          ],
        },
        {
          title: "Associate QA Analyst",
          company: "Genetech Solutions",
          duration: "2022 – 2024",
          points: [
            "Performed functional, regression, usability, and exploratory testing",
            "Executed JMeter load and performance testing",
            "Conducted mobile QA for Android and iOS applications",
            "Supported automation scripting and defect lifecycle management"
          ],
        },
      ],
    
      projects: [
        {
          name: "TiviTime IPTV",
          description: "Cross-platform IPTV testing & automation system",
          tech: ["Playwright", "Python", "JMeter", "API Testing"],
        },
        {
          name: "CalCount App",
          description: "Health tracking QA validation across mobile/web",
          tech: ["Manual Testing", "Mobile QA", "Cross-platform Testing"],
        },
        {
          name: "Avocado ERP System",
          description: "ERP & CMS QA automation with API validation",
          tech: ["Python", "Playwright", "Postman", "SQL"],
        }
      ],
    
      certifications: [
        "Playwright Automation (Udemy)",
        "Azure Fundamentals (Microsoft)",
        "Google IT Automation with Python (Coursera)",
        "Claude 101 (Anthropic)",
        "Data Science in Python (DataCamp)",
        "Web Scraping with Python (DataCamp)"
      ]
    },

    {
      id: "muhammad-ateeb",
      name: "Muhammad Ateeb",
      role: "UI/UX Designer | AI Engineer ",
  
      image: "/images/team/Ateeb.png",
  
      email: "ateebm11@gmail.com",
      phone: "+92-323-2756086",
      linkedin: "linkedin.com/in/muhammad-ateeb-n10",
      github: "github.com/mAteeb10",
  
      summary:
        "UI/UX Designer with hands-on experience in designing user-centered web and mobile applications. Skilled in creating wireframes, design systems, and end-to-end product experiences for digital platforms across logistics, e-commerce, and SaaS domains.",
  
      skills: [
        "UI/UX Design",
        "Wireframing",
        "Prototyping",
        "User Research",
        "Figma",
        "Adobe Creative Suite",
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Vue JS"
      ],
  
      competencies: [
        "User-Centered Design",
        "Interaction Design",
        "Responsive Web Design",
        "Design Systems",
        "Information Architecture",
        "Usability Improvements"
      ],
  
      experience: [
        {
          title: "UI/UX Designer",
          company: "Amnox",
          duration: "Sept 2025 – Present",
          points: [
            "Designed mobile app and web portal for Hydra Finds, enabling business onboarding and management",
            "Created low-fidelity wireframes for Omni Marketing digital marketing platform",
            "Designed UI/UX for Destiny Transfers, focusing on simplified vehicle booking and rental flows",
            "Built modern e-commerce UI for Book Publishing Group LLC for e-book listings and sales",
            "Designed Infinity Car Rentals platform covering booking, payment, and invoice workflows"
          ],
        },
        {
          title: "UI/UX Designer",
          company: "Reactree",
          duration: "Feb 2025 – Sept 2025",
          points: [
            "Designed multiple portals for Bogoliv with focus on usability and clean UI structure",
            "Created wireframes for Omni Marketing platform aligning with user flows",
            "Improved UI/UX consistency for Trainr App and Thaqlain App",
            "Worked on Sindh High Court Bar Association (SHCBA) app including onboarding, profiles, and review systems"
          ],
        },
        {
          title: "Frontend Developer (Intern)",
          company: "Aeroglobe",
          duration: "May 2024 – July 2024",
          points: [
            "Worked on a global booking platform for hotels, resorts, and flights",
            "Implemented flight quotation date display feature using Vue.js",
            "Improved booking accuracy and user experience for 100+ users"
          ],
        },
      ],
  
      projects: [
        {
          name: "Hydra Finds",
          description: "Business onboarding platform for hydraulic sphere part businesses",
          tech: ["Figma", "UI/UX Design"]
        },
        {
          name: "Destiny Transfers",
          description: "Vehicle pickup/drop-off and rental service platform",
          tech: ["Figma", "UI/UX Design"]
        },
        {
          name: "Book Publishing Group LLC",
          description: "E-book e-commerce platform for listing and selling books",
          tech: ["Figma", "UI/UX Design"]
        },
        {
          name: "Infinity Car Rentals",
          description: "Car rental platform with booking, invoicing, and payments system",
          tech: ["Figma", "UI/UX Design"]
        },
        {
          name: "Portfolio Website",
          description: "Personal portfolio built to showcase projects and experience",
          tech: ["React JS", "JavaScript"]
        }
      ],
    },
    {
      id: "hassan",
      name: "Hassan",
      role: "AI Content Specialist | Automation Engineer",
      image: "/images/team/Hassan.png",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
  
      summary:
        "AI Content Specialist and Automation Engineer with expertise in AI-driven content creation, workflow automation, and LLM-based systems. Experienced in building scalable content pipelines using modern AI tools, automating multi-platform distribution, and developing AI-powered brand strategies.",
  
      skills: [
        "AI Content Generation",
        "Workflow Automation",
        "Prompt Engineering",
        "LLMs (GPT, Claude, Gemini, Ollama)",
        "n8n Automation",
        "Zapier",
        "AI Voice Synthesis",
        "AI Video Generation",
        "Content Strategy",
        "Video Editing",
        "API Integrations",
        "Multi-platform Scheduling"
      ],
  
      competencies: [
        "AI Content Automation",
        "End-to-End Content Pipelines",
        "Brand Content Strategy",
        "AI Voice & Video Production",
        "Prompt Engineering & Optimization",
        "System Design for Automation Workflows"
      ],
  
      experience: [
        {
          title: "Founder – Personal Branding Services",
          company: "Independent",
          duration: "Sep 2025 – Present",
          points: [
            "Built AI-assisted content production system for personal branding",
            "Generated high-volume content using LLM prompting and AI editing tools",
            "Achieved 10M+ views and 400% monthly social growth",
            "Automated content calendars including hooks, scripts, and optimization workflows"
          ]
        },
        {
          title: "Creative Lead",
          company: "Newtation LLC",
          duration: "Mar 2025 – Sep 2025",
          points: [
            "Led creative team producing content for SaaS, e-commerce, and startup clients",
            "Managed AI-assisted content production workflows for US-based clients",
            "Improved content efficiency through automation and structured pipelines"
          ]
        },
        {
          title: "Senior UI/UX Designer",
          company: "iPath Services",
          duration: "Aug 2023 – Mar 2025",
          points: [
            "Worked on AI-assisted design workflows and prompt-based visual generation",
            "Enhanced architectural visualization using AI tools and prompt engineering",
            "Collaborated with development teams to improve product design quality"
          ]
        }
      ],
  
      projects: [
        {
          name: "AI-Powered Personal Branding System",
          description:
            "End-to-end AI system for generating, editing, and distributing content at scale",
          tech: ["GPT", "CapCut", "n8n", "AI Automation"]
        },
        {
          name: "n8n Content Automation Pipeline",
          description:
            "Fully automated content workflow from generation to publishing across platforms",
          tech: ["n8n", "Gemini API", "Automation"]
        },
        {
          name: "AI Voice & Video Experiments",
          description:
            "Exploration of AI avatars, voice synthesis, and lip-sync video generation systems",
          tech: ["HeyGen", "Coqui XTTS-v2", "MuseTalk", "ElevenLabs"]
        }
      ],
    },
    {
      id: "malaika-afridi",
      name: "Malaika Afridi",
      role: "Senior Software Engineer (Frontend)",
    
      image: "/images/team/Malaika.png",
    
      email: "malaikaafridi22@gmail.com",
      phone: "+92-335-3774501",
      linkedin: "linkedin.com/in/malaikaafridi",
      github: "github.com/malaika22",
      website: "https://myportfoliodev.netlify.app",
    
      summary:
        "Senior Frontend Software Engineer with 4+ years of experience building scalable, high-performance web applications using React, Next.js, and TypeScript. Experienced in monorepo architectures, design systems, reusable component libraries, and CI/CD-driven development. Strong focus on performance optimization, accessibility, and end-to-end feature ownership in production-grade systems.",
    
      skills: [
        "JavaScript (ES6+)",
        "TypeScript",
        "React.js",
        "Next.js",
        "Redux Toolkit",
        "Tailwind CSS",
        "Material UI",
        "Ant Design",
        "Framer Motion",
        "Responsive Design",
        "Git",
        "Firebase",
        "AWS Cognito",
        "AWS Lambda",
        "Nginx",
        "CI/CD",
        "Puppeteer"
      ],
    
      competencies: [
        "Frontend Architecture",
        "Monorepo Systems",
        "Design Systems",
        "Reusable Component Libraries",
        "Performance Optimization",
        "SEO & Core Web Vitals",
        "API Integration",
        "CI/CD Automation",
        "Cross-functional Collaboration",
        "Technical Mentorship"
      ],
    
      experience: [
        {
          title: "Senior Software Engineer (Frontend)",
          company: "Dubizzle Labs",
          duration: "2025 – Present",
          points: [
            "Lead frontend architecture for high-traffic marketplace applications across a monorepo ecosystem",
            "Own end-to-end feature delivery from design collaboration to production release and monitoring",
            "Mentor junior engineers through code reviews, pair programming, and technical guidance",
            "Improve Core Web Vitals using SSR, code splitting, lazy loading, and bundle optimization",
            "Enforce TypeScript standards and reusable component architecture across teams"
          ]
        },
        {
          title: "Software Engineer",
          company: "Dubizzle Labs",
          duration: "Jun 2023 – 2025",
          points: [
            "Developed customer-facing applications using React, Next.js, and TypeScript",
            "Integrated Uqudo identity verification system into onboarding flows",
            "Maintained and scaled monorepo architecture with shared tooling and dependencies",
            "Built reusable UI component libraries using Material UI",
            "Improved CI/CD pipelines and optimized Nginx configurations for performance and security"
          ]
        },
        {
          title: "Software Engineer I (Frontend)",
          company: "Medznmore (Tabiyat.pk)",
          duration: "Jan 2023 – Jun 2023",
          points: [
            "Built CMS platform within a monorepo enabling non-technical content management",
            "Developed fleet management and order tracking systems for logistics operations",
            "Delivered production-grade React applications using Ant Design"
          ]
        },
        {
          title: "Frontend Engineer",
          company: "Robor Systems",
          duration: "May 2022 – Dec 2022",
          points: [
            "Delivered multiple Next.js and React projects with modern UI/UX implementations",
            "Integrated AWS Cognito authentication with Lambda triggers",
            "Built Stable Diffusion-powered image generation API integrations",
            "Developed web scraping pipelines using Puppeteer"
          ]
        },
        {
          title: "React.js Developer (Remote)",
          company: "Kpibar",
          duration: "Nov 2022 - Dec 2022",
          points: [
            "Built dashboard UI using React and integrated third-party APIs",
            "Converted PSD designs into reusable React components"
          ]
        },
        {
          title: "React.js Developer",
          company: "CSTech Softwares",
          duration: "Sep 2021 – Apr 2022",
          points: [
            "Developed React-based dashboards and e-commerce interfaces using Ant Design",
            "Improved state management and component lifecycle practices across team projects"
          ]
        }
      ],
    
      projects: [
        {
          name: "Car Tajir",
          description: "Car marketplace UI platform with modern responsive design",
          tech: ["React", "UI/UX", "Netlify"]
        },
        {
          name: "Travel Community",
          description: "Travel platform for community-based trip sharing and discovery",
          tech: ["React", "Next.js", "Tailwind CSS"]
        },
        {
          name: "Tech World",
          description: "Tech storefront with product listing and modern UI system",
          tech: ["React", "Ant Design", "Frontend Architecture"]
        }
      ],
    
      community: [
        {
          role: "Hackathon Mentor",
          organization: "Google Developer Groups (GDG)",
          points: [
            "Mentored teams on frontend architecture and React best practices",
            "Guided project execution and technical problem solving during hackathons"
          ]
        },
        {
          role: "Workshop Speaker",
          organization: "Google Developer Groups (GDG)",
          points: [
            "Delivered hands-on technical workshop for developers",
            "Shared best practices in modern frontend development"
          ]
        }
      ]
    },
    {
      id: "areeba-asad",
      name: "Areeba Asad",
      role: "Software Engineer | AI & Machine Learning Engineer",
    
      image: "/images/team/Areeba.png",
    
      email: "areebaasad07@gmail.com",
      phone: "+92-313-2613459",
      linkedin: "linkedin.com/in/areebaasad",
      github: "github.com/areebaasad",
    
      summary:
        "Software Engineer with experience building scalable web applications, admin dashboards, and performance-optimized frontend solutions. Skilled in React, Next.js, TypeScript, and modern web technologies with hands-on experience in SEO optimization, code splitting, monitoring, and cross-functional collaboration.",
    
      skills: [
        "React.js",
        "Next.js",
        "Redux",
        "JavaScript",
        "TypeScript",
        "Python",
        "HTML",
        "CSS",
        "Material UI",
        "Django",
        "MySQL",
        "MongoDB",
        "REST APIs",
        "Git",
        "Postman",
        "Sentry",
        "Google Analytics",
        "ArgoCD",
        "ELK",
        "Mandrill",
        "PractiTest",
        "ClickUp"
      ],
    
      competencies: [
        "Frontend Development",
        "Performance Optimization",
        "SEO Optimization",
        "Responsive Web Design",
        "State Management",
        "API Integration",
        "Error Monitoring",
        "Cross-functional Collaboration"
      ],
    
      experience: [
        {
          title: "Associate Software Engineer",
          company: "Dubizzle Labs",
          duration: "Nov 2024 – Present",
          points: [
            "Collaborated with designers and backend engineers to deliver pixel-perfect, cross-browser compatible features",
            "Implemented end-to-end workflows including backend-driven emails and dynamic report generation",
            "Contributed to scalable frontend architecture and feature development"
          ],
        },
        {
          title: "Software Engineering Apprentice",
          company: "Dubizzle Labs",
          duration: "2024",
          points: [
            "Migrated 20+ legacy class components to React functional components with hooks",
            "Improved bundle size by approximately 25%",
            "Implemented schema markup and metadata optimization for improved SEO performance",
            "Worked on code splitting and lazy loading strategies"
          ],
        },
        {
          title: "Software Engineering Intern",
          company: "KAISPE",
          duration: "Sept 2024 – Nov 2024",
          points: [
            "Enhanced company website using Next.js Server-Side Rendering",
            "Improved performance scores by approximately 30%",
            "Optimized image loading through lazy loading and WebP conversion",
            "Reduced overall page load time and improved user experience"
          ],
        },
        {
          title: "Tech Intern",
          company: "PTCL",
          duration: "Jul 2023 – Aug 2023",
          points: [
            "Developed frontend interfaces for internal employee portals",
            "Resolved UI/UX issues based on stakeholder feedback",
            "Worked with HTML, CSS, and JavaScript to improve usability"
          ],
        },
        {
          title: "Game Development Intern",
          company: "Mindstorm Studios",
          duration: "Jun 2023 – Aug 2023",
          points: [
            "Collaborated within a 5-person team to develop a puzzle game prototype",
            "Implemented touch controls, level progression, and scoring systems",
            "Contributed to Android game development using Unity and C#"
          ],
        }
      ],
    
      projects: [
        {
          name: "Campus Car App",
          description:
            "University-focused carpooling platform with ride preference customization, fare estimation, and real-time gender ratio visibility.",
          tech: [
            "React Native",
            "Node.js",
            "Express",
            "Google Maps API",
            "Firebase"
          ]
        },
        {
          name: "Tripster",
          description:
            "Tour management dashboard with AI-powered trip recommendations, analytics, user management, and booking administration.",
          tech: [
            "React",
            "TypeScript",
            "Syncfusion",
            "Appwrite",
            "Sentry"
          ]
        },
        {
          name: "Eat Split",
          description:
            "Expense tracking platform featuring smart settlement calculations, bill management, filtering, and search capabilities.",
          tech: [
            "React",
            "JavaScript",
            "Material UI"
          ]
        }
      ]
    },
    {
      id: "mishal-zehra",
      name: "Mishal Zehra",
      role: "Senior HR Specialist | Talent Acquisition Lead",
    
      image: "/images/team/Mishal.png",
    
      email: "mish2jaffri@gmail.com",
      phone: "+92-332-2674322",
      linkedin: "linkedin.com/in/mishalzehra",
    
      summary:
        "Experienced Talent Acquisition Specialist with 5+ years of expertise in technical recruitment, employer branding, stakeholder management, and employee engagement. Proven success in sourcing, attracting, and hiring top talent while building strong relationships with hiring managers and driving strategic hiring initiatives.",
    
      skills: [
        "Technical Recruitment",
        "Full-Cycle Recruiting",
        "Talent Acquisition",
        "Candidate Sourcing",
        "Stakeholder Management",
        "Employer Branding",
        "Employee Engagement",
        "ATS Management",
        "Interviewing",
        "Offer Negotiation",
        "Recruitment Analytics",
        "Greenhouse",
        "LinkedIn Recruiter",
        "Hiring Strategy",
        "Workforce Planning"
      ],
    
      competencies: [
        "Technical Hiring",
        "Leadership & Team Management",
        "Employer Branding",
        "Talent Pipeline Development",
        "Recruitment Operations",
        "Relationship Building",
        "Candidate Experience",
        "Strategic Workforce Planning"
      ],
    
      experience: [
        {
          title: "Senior HR Specialist",
          company: "Dubizzle Labs",
          duration: "Feb 2024 – Present",
          points: [
            "Lead full-cycle recruitment for technical and business roles",
            "Collaborate with senior leadership to align hiring with organizational goals",
            "Manage employee engagement initiatives and company-wide events",
            "Drive employer branding strategies and talent pipeline development"
          ],
        },
        {
          title: "Freelance IT Tech Recruiter",
          company: "Freelance",
          duration: "Apr 2023 – Present",
          points: [
            "Closed senior-level placements across multiple technology domains",
            "Sourced, screened, and interviewed high-quality candidates",
            "Provided hiring strategy and market insights to clients",
            "Built long-term relationships with candidates and employers"
          ],
        },
        {
          title: "Business Recruiter",
          company: "Motive",
          duration: "Jan 2022 – Mar 2023",
          points: [
            "Managed end-to-end recruitment for leadership and business roles",
            "Implemented sourcing strategies resulting in increased placement success",
            "Reduced hiring timelines through structured assessment processes",
            "Collaborated with stakeholders using recruitment analytics and insights"
          ],
        },
        {
          title: "Talent Acquisition Manager",
          company: "TekRevol",
          duration: "May 2021 – Jan 2022",
          points: [
            "Led recruitment efforts across multiple departments",
            "Managed and mentored recruitment teams",
            "Improved candidate quality through strategic sourcing initiatives",
            "Enhanced talent pipeline and reduced time-to-fill metrics"
          ],
        },
        {
          title: "Talent Acquisition Specialist",
          company: "Zepcom",
          duration: "Jan 2020 – May 2021",
          points: [
            "Managed full-cycle recruitment for various business units",
            "Built strong hiring manager relationships",
            "Negotiated offers and coordinated onboarding processes",
            "Tracked recruitment KPIs and optimized hiring workflows"
          ],
        },
        {
          title: "Senior HR Executive",
          company: "Code Avenue",
          duration: "Jan 2018 – Jan 2020",
          points: [
            "Led recruitment, employee relations, and performance management initiatives",
            "Conducted salary benchmarking and compensation analysis",
            "Developed HR policies and employee engagement programs",
            "Coordinated professional development and training activities"
          ],
        }
      ],
    
      projects: [
        {
          name: "Technical Hiring Excellence Program",
          description:
            "Built and maintained talent pipelines for engineering, product, and technical leadership positions.",
          tech: [
            "LinkedIn Recruiter",
            "Greenhouse",
            "ATS"
          ]
        },
        {
          name: "Employer Branding Strategy",
          description:
            "Developed employer branding initiatives to improve talent attraction and candidate engagement.",
          tech: [
            "Social Media",
            "Recruitment Marketing",
            "Employer Branding"
          ]
        },
        {
          name: "Recruitment Process Optimization",
          description:
            "Implemented recruitment metrics tracking and workflow improvements to reduce hiring timelines.",
          tech: [
            "ATS",
            "Analytics",
            "Recruitment Operations"
          ]
        }
      ]
    },
    {
      id: "ahmed-sufyan-samee",
      name: "Ahmed Sufiyan Samee",
      role: "Senior SEO Specialist | Digital Marketing Strategist",
    
      image: "/images/team/Sufiyan.png",
    
      email: "sufyansamee@gmail.com",
      phone: "+92-311-3658271",
      linkedin: "linkedin.com/in/ahmedsufyansamee",
    
      summary:
        "Results-driven SEO and Digital Marketing Specialist with 5+ years of experience in SEO, AEO, content marketing, technical optimization, and lead generation. Experienced in driving organic growth, improving search visibility, optimizing website performance, and developing comprehensive digital marketing strategies for international businesses.",
    
      skills: [
        "SEO",
        "AEO",
        "Keyword Research",
        "Technical SEO",
        "Content Marketing",
        "Link Building",
        "Competitor Analysis",
        "Google Analytics",
        "Google Search Console",
        "Google Ads",
        "AHREFS",
        "SEMRush",
        "WordPress",
        "Schema Markup",
        "Site Speed Optimization",
        "Microsoft Clarity",
        "Email Outreach",
        "Social Media Marketing",
        "HTML",
        "Canva"
      ],
    
      competencies: [
        "Search Engine Optimization",
        "Answer Engine Optimization",
        "Technical Website Audits",
        "Organic Lead Generation",
        "Content Strategy",
        "Website Performance Optimization",
        "SEO Reporting & KPIs",
        "Competitive Analysis"
      ],
    
      experience: [
        {
          title: "Senior SEO Executive",
          company: "Folio3 Software",
          duration: "Apr 2024 – Present",
          points: [
            "Leading SEO and AEO initiatives for enterprise-level projects",
            "Managing keyword clustering, content optimization, and technical SEO",
            "Driving organic lead generation through search visibility improvements",
            "Implementing schema markup and advanced optimization strategies"
          ]
        },
        {
          title: "Digital Marketing Specialist",
          company: "MTFX Group (Hub 360 Solutions)",
          duration: "Jul 2022 – Mar 2024",
          points: [
            "Developed and executed SEO and digital marketing campaigns",
            "Conducted competitor analysis and market research",
            "Managed website optimization and search performance improvements",
            "Generated MQLs and SQLs through organic channels"
          ]
        },
        {
          title: "SEO Executive",
          company: "Techoid",
          duration: "Jan 2021 – Jun 2022",
          points: [
            "Performed on-page and off-page SEO optimization",
            "Managed backlinking and outreach campaigns",
            "Handled search console indexing and technical issue resolution",
            "Optimized website content and blog performance"
          ]
        }
      ],
    
      projects: [
        {
          name: "Enterprise SEO Growth Program",
          description:
            "Managed large-scale SEO strategies focused on organic lead generation, technical optimization, and search visibility improvements.",
          tech: [
            "Google Search Console",
            "AHREFS",
            "SEMRush",
            "Schema Markup"
          ]
        },
        {
          name: "AEO & Content Optimization Initiative",
          description:
            "Implemented Answer Engine Optimization strategies using AI-driven content research and optimization techniques.",
          tech: [
            "ChatGPT",
            "Claude",
            "Gemini",
            "Perplexity"
          ]
        },
        {
          name: "Technical SEO Audit Framework",
          description:
            "Developed auditing processes covering indexing, crawlability, site speed, and structured data optimization.",
          tech: [
            "Google Analytics",
            "GTMetrix",
            "Microsoft Clarity"
          ]
        }
      ]
    },
    {
      id: "alishba-javed",
      name: "Alishba Javed",
      role: "Software Engineer | AI & Machine Learning Engineer",
    
      image: "/images/team/Alishba.png",
    
      email: "alishba.javed2001@gmail.com",
      phone: "+92-332-2406533",
      linkedin: "linkedin.com/in/alishbajaved",
      github: "github.com/alishba-javed-2001",
    
      summary:
        "Software Engineer with strong expertise in backend development, distributed systems, machine learning, and AI-powered applications. Experienced in Django, FastAPI, cloud technologies, search architectures, and large-scale production systems, with a passion for building intelligent and scalable software solutions.",
    
      skills: [
        "Python",
        "Django",
        "FastAPI",
        "Flask",
        "Java",
        "C++",
        "React",
        "Next.js",
        "Node.js",
        "Machine Learning",
        "TensorFlow",
        "PyTorch",
        "OpenCV",
        "Redis",
        "Elasticsearch",
        "Algolia",
        "Docker",
        "Kubernetes",
        "AWS",
        "RabbitMQ",
        "Celery",
        "SQL",
        "MongoDB"
      ],
    
      competencies: [
        "Backend Development",
        "Machine Learning",
        "Artificial Intelligence",
        "Distributed Systems",
        "Event-Driven Architecture",
        "Search Systems",
        "Cloud Computing",
        "MLOps"
      ],
    
      experience: [
        {
          title: "Associate Software Engineer",
          company: "Dubizzle Labs",
          duration: "Nov 2024 – Present",
          points: [
            "Architected event-driven saved search notification systems using Django and Celery",
            "Designed distributed search architecture powered by Algolia and Redis caching",
            "Built premium subscription lifecycle management systems serving 15K+ active subscriptions",
            "Developed AI-powered listing creation features processing over 200K prediction requests monthly"
          ]
        },
        {
          title: "Machine Learning Intern",
          company: "Digital Empowerment Network",
          duration: "Sep 2024 – Oct 2024",
          points: [
            "Built telecom churn prediction models using Logistic Regression and Random Forest",
            "Developed spam detection systems using Naive Bayes and SVM",
            "Implemented anomaly detection solutions using Isolation Forest and EWMA",
            "Created house price prediction models using XGBoost and Linear Regression"
          ]
        },
        {
          title: "Cloud App Development & Mobility Intern",
          company: "Systems Limited",
          duration: "Jun 2024 – Aug 2024",
          points: [
            "Developed full-stack applications using Spring Boot and Angular",
            "Implemented JWT and OAuth2 authentication systems",
            "Worked with AWS and Azure cloud deployments",
            "Optimized database performance across MongoDB, MySQL, and PostgreSQL"
          ]
        }
      ],
    
      projects: [
        {
          name: "Intelli-Dent",
          description:
            "AI-powered orthodontics platform developed with AKUH featuring teeth segmentation, classification, and numbering models achieving up to 90% accuracy.",
          tech: [
            "YOLO",
            "RCNN",
            "UNet",
            "GANs",
            "React",
            "Next.js",
            "PostgreSQL"
          ]
        },
        {
          name: "NeuroCheck",
          description:
            "Brain tumor detection platform utilizing YOLOv10 and FastAPI for MRI scan analysis and diagnostic support.",
          tech: [
            "FastAPI",
            "MongoDB",
            "React",
            "YOLOv10"
          ]
        },
        {
          name: "EmailAI",
          description:
            "AI-powered cold email generation platform leveraging Llama 3.1, vector databases, and workflow orchestration.",
          tech: [
            "Llama 3.1",
            "LangChain",
            "ChromaDB",
            "Streamlit"
          ]
        },
        {
          name: "ImageGenAI",
          description:
            "MERN-based AI image generation platform integrating DALL-E and Midjourney APIs for prompt-based image creation.",
          tech: [
            "MongoDB",
            "Express",
            "React",
            "Node.js",
            "TailwindCSS"
          ]
        }
      ]
    },
  ];
  return (
    <>
      {/* ================= CAROUSEL ================= */}
<div className="relative">

{/* LEFT BUTTON */}
<button
  onClick={() => emblaApi?.scrollPrev()}
  className="
   absolute left-2 top-1/2 -translate-y-1/2 z-10
    w-10 h-10 rounded-full
    bg-white/10 hover:bg-white/20
    text-white
    flex items-center justify-center
    transition
    backdrop-blur-md
  "
>
  ‹
</button>

{/* RIGHT BUTTON */}
<button
  onClick={() => emblaApi?.scrollNext()}
  className="
    absolute right-2 top-1/2 -translate-y-1/2 z-10
    w-10 h-10 rounded-full
    bg-[#54BD95]/90 hover:bg-[#54BD95]
    text-black font-bold
    flex items-center justify-center
    transition
    shadow-lg shadow-[#54BD95]/20
  "
>
  ›
</button>

{/* EMBLA VIEWPORT */}
<div className="overflow-hidden" ref={emblaRef}>
  <div className="flex cursor-grab active:cursor-grabbing">

    {TEAM.map((member) => (
      <div key={member.id} className="w-[300px] shrink-0 mr-4">

        <div
          onClick={() => setSelectedMember(member)}
          className="
            rounded-2xl
            bg-[#161C28]
            border border-white/10
            overflow-hidden
            cursor-pointer
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-[#54BD95]/40
          "
        >
          {/* IMAGE */}
          <div className="w-full h-[320px] overflow-hidden">
            <Image
              src={member.image}
              alt={member.name}
              width={600}
              height={640}
              className="w-full h-full object-cover"
              priority={member.id === "danella"}
            />
          </div>

          {/* CONTENT */}
          <div className="p-5 flex flex-col min-h-[140px]">

            <h3 className="text-white font-semibold text-lg">
              {member.name}
            </h3>

            <p className="text-neutral-400 text-sm mt-1 line-clamp-2 min-h-[3.5rem]">
              {member.role}
            </p>
           
            <div className="mt-auto">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedMember(member);
                }}
                className="mt-4 text-[#54BD95] text-sm font-medium"
              >
                View Profile →
              </button>
            </div>

          </div>
        </div>

      </div>
    ))}

  </div>
</div>

</div>
      {/* ================= BOTTOM DRAWER ================= */}
      <AnimatePresence>
        {selectedMember && (
          <>
            {/* overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
            />

            {/* bottom sheet */}
            <motion.div
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "100%" }}
  transition={{ type: "tween", duration: 0.35 }}
  className="fixed bottom-0 left-0 right-0 z-50
  h-[80vh]
  rounded-t-[32px]
  bg-[#161C28]
  overflow-hidden"
>
<div className="h-full overflow-y-auto custom-scroll p-6 md:p-10 pb-24">
              <div className="relative flex items-center justify-center mb-6">
  
  {/* drag handle (center) */}
  <div className="h-1.5 w-12 rounded-full bg-white/20" />

  {/* close button (right side absolute) */}
  <button
    onClick={() => setSelectedMember(null)}
    className="
      absolute right-0
      h-9 w-9
      rounded-full
      bg-white/5
      flex items-center justify-center
      hover:bg-white/10
      transition
    "
  >
    <X size={18} className="text-white" />
  </button>

</div>
                {/* HEADER */}
                <div className="flex items-start gap-4">
  <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0">
  <Image
  src={selectedMember.image}
  alt={selectedMember.name}
  fill
  className="object-cover"
  quality={100}
  sizes="80px"
/>
  </div>

  <div className="min-h-[64px] flex flex-col justify-center">
    <h2 className="text-2xl text-white font-bold leading-tight line-clamp-1">
      {selectedMember.name}
    </h2>

    <p className="text-[#48AD88] text-sm leading-snug line-clamp-2">
      {selectedMember.role}
    </p>
    <div className="flex flex-wrap gap-4 text-sm mt-3">
  {/* GitHub */}
  {selectedMember.github && (
    <a
      href={`https://${selectedMember.github}`}
      target="_blank"
      rel="noreferrer"
      className="text-white/60 hover:text-[#54BD95] transition no-underline"
    >
      GitHub
    </a>
  )}

  {/* LinkedIn */}
  {selectedMember.linkedin && (
    <a
      href={`https://${selectedMember.linkedin}`}
      target="_blank"
      rel="noreferrer"
      className="text-white/60 hover:text-[#54BD95] transition no-underline"
    >
      LinkedIn
    </a>
  )}

{selectedMember.website && (
    <a
      href={selectedMember.website.startsWith("http") ? selectedMember.website : `https://${selectedMember.website}`}
      target="_blank"
      className="text-white/60 hover:text-[#54BD95] transition"
    >
      Website
    </a>
  )}


</div>

  </div>
</div>


                {/* SUMMARY */}
                <p className="text-neutral-300 mt-6">
                  {selectedMember.summary}
                </p>

                {/* SKILLS */}
                <h3 className="text-white mt-8 font-semibold">Skills</h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  {selectedMember.skills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 text-xs rounded-full bg-white/10 text-white"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* COMPETENCIES */}
                {selectedMember.competencies && (
                  <>
                    <h3 className="text-white mt-8 font-semibold">
                      Competencies
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {selectedMember.competencies.map((c) => (
                        <span
                          key={c}
                          className="px-3 py-1 text-xs rounded-full bg-[#48AD88]/20 text-[#48AD88]"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </>
                )}

                {/* EXPERIENCE */}
                <h3 className="text-white mt-8 font-semibold">Experience</h3>
                <div className="mt-3 space-y-4">
                  {selectedMember.experience.map((exp, i) => (
                    <div key={i} className="border-l border-white/10 pl-4">
                      <h4 className="text-white font-medium">
                        {exp.title} — {exp.company}
                      </h4>
                      <p className="text-neutral-400 text-sm">
                        {exp.duration}
                      </p>
                      <ul className="text-neutral-300 text-sm mt-2 list-disc ml-5">
                        {exp.points.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* PROJECTS */}
                <h3 className="text-white mt-8 font-semibold">Projects</h3>
                <div className="mt-3 space-y-4">
                  {selectedMember.projects.map((p) => (
                    <div key={p.name} className="p-4 rounded-xl bg-white/5">
                      <h4 className="text-white font-medium">
                        {p.name}
                      </h4>
                      <p className="text-neutral-400 text-sm mt-1">
                        {p.description}
                      </p>

                      <div className="flex gap-2 flex-wrap mt-2">
                        {p.tech?.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-2 py-1 bg-white/10 rounded-full"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

  
                
              
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}