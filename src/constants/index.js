import {
  css3,
  express,
  figma,
  git,
  html5,
  javascript,
  materialui,
  mongoDB,
  nextjs,
  node,
  react,
  tailwindcss,
  threejs,
  typescript,
  arienza,
  prospectify,
  siargao,
  pastoriza,
} from "../assets";

export const navLinks = [
  {
    id: "",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html5,
    description:
      "HTML is the standard markup language used to create web pages; it ensures proper formatting of text and images (using tags) so that Internet browsers can display them in the ways they were intended to look.",
  },
  {
    name: "CSS 3",
    icon: css3,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React.JS",
    icon: react,
  },
  {
    name: "Next.JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwindcss,
  },
  {
    name: "Material UI",
    icon: materialui,
  },
  {
    name: "Node.JS",
    icon: node,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongoDB,
  },
  {
    name: "Three.JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const projects = [
  {
    name: "Siargao International Surfing Festival",
    description:
      "A landing page showcasing the a surfing event in the Philippines. The goal was to design it to be fun, bright, and animated.",
    tag: "Completed",
    tech: "Built with Next.js, Tailwind CSS, and Framer Motion.",
    image: siargao,
    link: "https://siargaoisf.vercel.app/",
    github: "https://github.com/M00ose/webpage-siargaoISF",
  },
  {
    name: "Arienza - Architects and Engineers",
    description:
      "A modern and sleek landing page for an architecture and engineering firm.",
    tag: "In progress",
    tech: "Built with React.js, Tailwind CSS, React-Router, Three.js, and Framer Motion.",
    image: arienza,
    link: "",
    github: "https://github.com/M00ose/webpage-arienza",
  },
  {
    name: "Anton Pastoriza",
    description:
      "A simple artist gallery with an opening animation and interactive features.",
    tag: "Completed",
    tech: "Built with NExt.js, Tailwind CSS, and Framer Motion.",
    image: pastoriza,
    link: "",
    github: "https://github.com/M00ose/webpage-antonPastoriza",
  },
  {
    name: "Prospectify",
    description:
      "A CRUD application built with the MERN stack. The application is a CRM platform designed specifically for nonprofits and fundraising workflows.",
    tag: "In progress",
    tech: "Built with the M.E.R.N stack, with Flowbite for design and Refine for development.",
    image: prospectify,
    link: "https://webpage-anton-pastoriza.vercel.app/",
    github: "https://github.com/M00ose/webapp-echo",
  },
];

export { technologies, projects };
