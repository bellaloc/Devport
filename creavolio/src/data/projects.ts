// ==================[ Project's image aspect ]================== //
// can be "video" or "square"
type AspectType = "square" | "video";
export const project_image_aspect: AspectType = "video";
// ==================[ Project's image aspect ]================== //

// ==================[ Projects ]================== //
export const projects = [
  // 1
  {
    title: "personal portfolio",
    description:
      "A modern personal portfolio that effectively showcases a developer's experience, services, background, and projects, designed to increase opportunities for finding freelance or remote work",

    images: ["/images/projects/1-1.jpg"],
    tags: ["portfolio", "front-end"],
    tools_used: ["Next.js", "Typescript", "Shadcn", "Tailwind Css"],
    duration: "1 month and 5 days",
    link: "https://creavolio.vercel.app",
  },

  // 2
  {
    title: "ymmy grocery store",
    description:
      "Ymmy is a front-end grocery market web application designed to serve the local community by showcasing fresh food offerings, especially fruits and vegetables, with a focus on fast, local delivery. This project uses mock data to simulate real-world content and interactions, aiming to demonstrate my front-end development capabilities in building clean, responsive, and user-friendly interfaces.",
    images: ["/images/projects/2-1.jpg", "/images/projects/2-2.jpg"],
    tags: ["eCommerce", "front-end", "back-end"],
    tools_used: ["Next.js", "Typescript", "Shadcn", "Tailwind Css"],
    duration: "1 month and 5 days",
    link: "https://ymmy-grocery-store-ecommerce.vercel.app",
  },

  // 3
  {
    title: "ymmy grocery dashboard",
    description:
      "A clean and efficient dashboard for managing products, orders, categories, and viewing insights through sales, order, and profit analysis, note: This project uses mock data to simulate real-world content and interactions, aiming to demonstrate my front-end development capabilities in building clean, responsive, and user-friendly interfaces.",
    images: ["/images/projects/3-1.jpg", "/images/projects/3-2.jpg"],
    tags: ["eCommerce", "front-end", "back-end", "analysis"],
    tools_used: ["Next.js", "Typescript", "Shadcn", "Tailwind Css"],
    duration: "1 month and 5 days",
    link: "https://ymmy-grocery-store-ecommerce.vercel.app/admin",
  },

  // 4
  {
    title: "personal portfolio",
    description:
      "A personal portfolio displaying skills, projects, and testimonials, with an option for hiring or collaboration.",
    images: ["/images/projects/4-1.jpg"],
    tags: ["portfolio", "front-end"],
    tools_used: ["React", "CSS", "Javascript"],
    duration: "3 days",
    link: "https://portfolio-1-ecb5e.web.app/",
  },

  // 5
  {
    title: "logo",
    description: "A minimal abstract logo on A shape",
    images: ["/images/projects/5-1.jpg"],
    tags: ["logo", "design"],
    tools_used: ["figma"],
    duration: "30min",
    link: "#",
  },
];
//
