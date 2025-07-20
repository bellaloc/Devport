/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  BarChart4Icon as analysis,
  BrainCircuit as business_intelligence,
  Bug as fix_bug,
  DatabaseZap as database_management,
  HelpCircle as project_help,
  Rocket as performance,
  Server as system_design,
  WandSparkles as responsive_design,
  Workflow as api_integration,
  ShieldCheck as security,
  MessageCircleQuestion as consulting,
  Megaphone as marketing,
} from "lucide-react";

/*
  Available Services Icons:
  1  - analysis
  2  - business_intelligence
  3  - fix_bug
  4  - database_management
  5  - project_help
  6  - performance
  7  - system_design
  8  - responsive_design
  9  - api_integration
  10 - security
  11 - consulting
  12 - marketing
*/

// ==================[ Services Offered ]================== //
export const services = [
  {
    service: "Responsive Design",
    description:
      "I build fully responsive web interfaces that adapt seamlessly across all devices and screen sizes. Focused on modern aesthetics and accessibility for mobile-first experiences.",
    Icon: responsive_design,
  },
  {
    service: "API Integration",
    description:
      "I connect external services to your applications via RESTful or GraphQL APIs. Includes authentication, data binding, and robust error handling for smooth integrations.",
    Icon: api_integration,
  },
  {
    service: "Database Management",
    description:
      "Designing, optimizing, and maintaining scalable databases using PostgreSQL, MySQL, or NoSQL. I ensure secure and efficient data access for your apps.",
    Icon: database_management,
  },
  {
    service: "Bug Fixing",
    description:
      "I investigate and resolve front-end and back-end issues to restore app functionality and reliability. Fast turnarounds with clean, maintainable code.",
    Icon: fix_bug,
  },
  {
    service: "Performance Optimization",
    description:
      "I audit and improve app speed, responsiveness, and load time using performance profiling and best practices. Includes image optimization, code splitting, and caching strategies.",
    Icon: performance,
  },
  {
    service: "Marketing-Ready Development",
    description:
      "I create optimized websites designed to convert, using SEO best practices and modern layouts. Ideal for landing pages, product launches, and growing online presence.",
    Icon: marketing,
  },
  {
    service: "System Analysis",
    description:
      "I analyze existing codebases, app flow, and tech stacks to provide improvement strategies and planning for scaling or refactoring.",
    Icon: analysis,
  },
  {
    service: "Business Intelligence",
    description:
      "I transform data into actionable insights using BI tools and dashboards. Great for internal tools or startups needing data-driven decisions.",
    Icon: business_intelligence,
  },
  {
    service: "Project Support",
    description:
      "From planning to launch, I offer hands-on help to get your project unstuck. Great for solo devs, teams, or clients needing extra dev power.",
    Icon: project_help,
  },
  {
    service: "Web App Security",
    description:
      "I implement secure coding practices, authentication flows, and common vulnerability protections (XSS, CSRF, etc.) for safe web apps.",
    Icon: security,
  },
  {
    service: "Tech Consulting",
    description:
      "Offering 1:1 or team consulting on tech stacks, development strategy, and performance decisions. Ideal for MVPs, startups, or solo devs.",
    Icon: consulting,
  },
  {
    service: "System Design & Architecture",
    description:
      "I architect modular, scalable systems tailored for performance and future growth. Includes API design, service splitting, and data flow modeling.",
    Icon: system_design,
  },
] as const;
