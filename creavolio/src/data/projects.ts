// ==================[ Project's image aspect ]================== //
// can be "video" or "square"
type AspectType = "square" | "video";
export const project_image_aspect: AspectType = "video";
// ==================[ Project's image aspect ]================== //

// ==================[ Projects ]================== //
export const projects = [
  // 1
  {
    title: "Christa's Portfolio",
    description:
      "A responsive full-stack portfolio showcasing my professional background, technical skills, and featured projects. Built with modern design and dark/light mode toggle. Includes a contact form and animated transitions.",
    images: ["/images/projects/1-1.jpg"],
    tags: ["portfolio", "fullstack"],
    tools_used: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/ui"],
    duration: "2 weeks",
    link: "https://bellaloc.com",
  },

  // 2
  {
    title: "Alucres - AI Stock Predictor",
    description:
      "Stock analytics project currently under maintenance. Live demo unavailable while deployment and model evaluation are reviewed.",
    images: ["/images/projects/2-1.jpg"],
    tags: ["fintech", "AI", "fullstack"],
    tools_used: ["Python", "Flask", "TensorFlow", "React", "Chart.js"],
    duration: "1.5 months",
    link: "",
  },

  // 3
  {
    title: "Real Estate Market AI",
    description:
      "Real estate analytics concept with a public landing page. Authentication and analytics functionality are under review.",
    images: ["/images/projects/3-1.jpg"],
    tags: ["real estate", "data", "AI"],
    tools_used: ["Next.js", "Leaflet.js", "Python", "Pandas", "scikit-learn"],
    duration: "3 weeks",
    link: "https://realestateai.vercel.app",
  },

  // 4
  {
    title: "Ymmy Grocery Store (Frontend)",
    description:
      "A modern grocery market web app focused on UX/UI for local shopping and deliveries. Mock product data with filtering, responsive layout, and checkout flow.",
    images: ["/images/projects/4-1.jpg"],
    tags: ["eCommerce", "frontend"],
    tools_used: ["Next.js", "Typescript", "Tailwind CSS", "Shadcn/ui"],
    duration: "1 month",
    link: "https://ymmy-grocery-store-ecommerce.vercel.app",
  },

  // 5
  {
    title: "Ymmy Admin Dashboard",
    description:
      "Demonstration admin dashboard with sample product and sales data. Administrative authorization and persistence are under review.",
    images: ["/images/projects/5-1.jpg"],
    tags: ["dashboard", "backend", "analytics"],
    tools_used: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
    duration: "1 month",
    link: "https://ymmy-grocery-store-ecommerce.vercel.app/admin",
  },

  // 6
  {
    title: "Los Angelust",
    description:
      "An initiative supporting single mothers with remote work and entrepreneurship tools. Includes simple forms, storytelling layout, and CTA integrations.",
    images: ["/images/projects/6-1.jpg"],
    tags: ["nonprofit", "landing page", "UX"],
    tools_used: ["PHP"],
    duration: "5 days",
    link: "https://losangelust.vercel.app/",
  },

  // 7
  {
    title: "Centsei Branding & Logo Design",
    description:
      "Visual identity and logo system for Centsei—combining financial wisdom with mentorship. Created using Figma with vector export and responsive logo guidelines.",
    images: ["/images/projects/7-1.jpg"],
    tags: ["branding", "logo", "design"],
    tools_used: ["Figma", "Illustrator"],
    duration: "1 day",
    link: "",
  },

  // 8
  {
    title: "Job Tracker App",
    description:
      "Job application tracking concept. The public demo currently displays summary headings; data persistence and tracking workflows are under review.",
    images: ["/images/projects/8-1.jpg"],
    tags: ["productivity", "fullstack"],
    tools_used: ["Next.js", "Supabase", "Tailwind CSS", "Shadcn/ui"],
    duration: "2 weeks",
    link: "https://jobtracker.vercel.app",
  },
];
