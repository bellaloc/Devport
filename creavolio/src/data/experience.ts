/* eslint-disable @typescript-eslint/no-explicit-any */
// ==================[ Experience ]================== //
export const experience = {
  // --- Working history --- //
  working: [
    {
      event: "Full-Stack Developer – Freelance",
      year: { from: "2024", to: "Present" },
      description:
        "Designing and developing responsive, scalable full-stack web applications for clients across various industries. Building APIs, integrating third-party services, and deploying solutions using modern cloud infrastructure. Projects emphasize clean architecture, performance, and user-first design.",
    },
    {
      event: "Software Engineer – Independent Projects",
      year: { from: "2022", to: "2024" },
      description:
        "Built and deployed applications including a stock market prediction platform (Alucres) using Python, Flask, TensorFlow, and Qiskit. Integrated AI/ML models, conducted data analysis, and used Git, CI/CD pipelines, and cloud environments (Heroku, AWS).",
    },
    {
      event: "Backend Engineer – Contract",
      year: { from: "2020", to: "2021" },
      description:
        "Developed backend logic, RESTful APIs, and database schemas using Node.js, Express, and MongoDB. Focused on security, scalability, and efficient data handling. Collaborated with front-end developers and product stakeholders on multiple freelance contracts.",
    },
    {
      event: "Frontend Developer – Freelance",
      year: { from: "2016", to: "2019" },
      description:
        "Created responsive, modern UI/UX experiences using HTML, CSS, JavaScript, and React. Worked with small business owners to design portfolio websites, landing pages, and ecommerce storefronts tailored to their brand and user base.",
    },
  ] as any[],

  // --- Education history --- //
  education: [
    {
      event: "Bachelor of Science in Cloud Computing – Purdue Global",
      year: { from: "2023", to: "Present" },
      description:
        "Currently enrolled in a fast-track Cloud Computing program, focused on DevOps, network security, infrastructure as code (IaC), and AWS architecture. Hands-on labs in infrastructure monitoring, CI/CD, and virtualization.",
    },
    {
      event: "Certificate in Fullstack Software Engineering – UCLA Extension",
      year: { from: "2023", to: "2023" },
      description:
        "Completed an immersive software engineering program focused on JavaScript, Node.js, React, MongoDB, SQL, Git, Agile, and building full-stack MERN applications from concept to deployment.",
    },
    {
      event: "Associate Degree in International Business – Santa Monica College",
      year: { from: "2016", to: "2018" },
      description:
        "Gained foundational knowledge in international trade, finance, marketing, and economics. Developed strong communication and organizational skills to support global tech and eCommerce business applications.",
    },
  ] as any[],
} as const;
