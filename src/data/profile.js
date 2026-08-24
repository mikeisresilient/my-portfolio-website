import {
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

export const profile = {
  // Identity
  firstName: "Michael",

  lastName: "Ege",

  name: "Michael Ege",

  brand: "Mike Is Resilient",

  title: "Full Stack Developer",

  heroGreeting: "Hello, I'm",

  tagline:
    "Building resilient software that solves real world problems.",

  heroDescription:
    "I design and build scalable web & mobile applications that blend beautiful user interfaces with robust backend systems. I also build blockchain solutions and data driven platforms, focusing on software that is fast, reliable, responsive, and built to last.",

  typingRoles: [
    "Full Stack Web Developer",
    "Mobile App Developer",
    "Full Stack Blockchain Developer",
    "Backend Developer",
    "Problem Solver",
  ],

  // Contact
  availability: "Open to Projects, Roles & Collaborations",

  location: "Nigeria",

  email: "michaelege022@gmail.com",

  phone: "+234 806 302 3766",

  portfolio: "https://mikeisresilient.vercel.app",

  whatsapp: "https://wa.me/2348063023766",

  telegram: "https://t.me/mikeisresilient",

  resume: "/resume.pdf",

  profileImageAlt: "Portrait of Michael Ege",

  // Hero Buttons
  cta: {
    primary: {
      label: "Explore My Work",
      href: "/projects",
    },

    secondary: {
      label: "Resume",
      href: "/resume.pdf",
    },
  },

  // Social Links
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/mikeisresilient",
      icon: FiGithub,
    },

    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mikeisresilient",
      icon: FiLinkedin,
    },

    {
      name: "X",
      icon: FaXTwitter,
      url: "https://x.com/mikeisresilient",
    },
  ],
};