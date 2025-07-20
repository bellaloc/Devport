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
  Workflow as api_integaration,
  ShieldCheck as security,
  MessageCircleQuestion as consulting,
  Megaphone as marketing,
} from "lucide-react";

/*
  Available Services Icons
  |
  1  - analysis
  2  - business_intelligence
  3  - fix_bug
  4  - database_management
  5  - project_help
  6  - performance
  7  - system_design
  8  - responsive_design
  9  - api_integaration
  10 - security
  11 - consulting
  12 - marketing
*/

// ==================[ Personal Information ]================== //
export const services = [
  // 1
  {
    service: "Responsive Design",
    description:
      "I create responsive web designs that ensure your website looks and functions beautifully across all devices and screen sizes. Using modern techniques and frameworks, I tailor designs to provide an optimal user experience on secreens",
    Icon: responsive_design,
  },

  // 2
  {
    service: "API Integaration",
    description:
      "I seamlessly integrate third-party APIs into your web applications to enhance functionality and streamline processes. Whether you need payment gateways, social media integration, or data from external services.",
    Icon: api_integaration,
  },

  // 3
  {
    service: "Database Management",
    description:
      "I design, implement, and maintain robust databases to store and manage your data efficiently. From database schema design to performance tuning, I ensure your data is organized, secure, and easily accessible for your applications.",
    Icon: database_management,
  },

  // 4
  {
    service: "Fix Bugs",
    description:
      "I troubleshoot and resolve issues in your web applications to ensure they run smoothly and reliably. Whether it's a minor glitch or a major functionality problem, I diagnose and fix bugs promptly to enhance performance.",
    Icon: fix_bug,
  },

  // 5
  {
    service: "optimize Performance",
    description:
      "I analyze and optimize your website or application to improve load times, responsiveness, and overall performance. By employing best practices and leveraging tools and techniques, I ensure your site delivers a fast and user experience.",
    Icon: performance,
  },

  // 6
  {
    service: "Marketing",
    description:
      "As a dedicated web developer with expertise in marketing, I specialize in creating visually stunning, high-converting websites designed to drive traffic and boost your online presence. By integrating cutting-edge technologies and optimizing for search engines, I ensure your website not only looks great but performs excellently to meet your business goals.",
    Icon: marketing,
  },

  // 7
  {
    service: "Analysis",
    description:
      "I conduct thorough analysis to understand your requirements and identify areas for improvement. By evaluating your current systems, processes, and goals, I provide actionable insights and recommendations to drive better outcomes.",
    Icon: analysis,
  },

  // 8
  {
    service: "Business Intelligence",
    description:
      "I develop and implement business intelligence solutions to help you make data-driven decisions. Using advanced analytics and reporting tools, I transform your data into valuable insights, enabling you to understand trends.",
    Icon: business_intelligence,
  },

  // 9
  {
    service: "Project Help",
    description:
      "Whether you're starting a new project or need assistance with an existing one, I provide tailored support for web development projects. From troubleshooting code issues to guiding you through complex features, I'm here to help streamline your development process and ensure your project is successful.",
    Icon: project_help,
  },

  // 10
  {
    service: "Security",
    description:
      "I specialize in enhancing the security of your web applications by implementing best practices and cutting-edge technologies. From vulnerability assessments to securing user data and preventing attacks, I ensure your project is safeguarded against threats.",
    Icon: security,
  },

  // 11
  {
    service: "Consulting",
    description:
      "Need expert guidance? I offer web development consulting services to help you make informed decisions, optimize performance, and achieve your business goals. Whether you're deciding on a tech stack, improving user experience, or scaling your app, I'll provide actionable insights and strategies.",
    Icon: consulting,
  },

  // 12
  {
    service: "System Design",
    description:
      "I design scalable and efficient system architectures tailored to your specific needs. By focusing on modularity, performance, and maintainability, I create robust systems that support your business objectives and future growth.",
    Icon: system_design,
  },
] as any[];
//
