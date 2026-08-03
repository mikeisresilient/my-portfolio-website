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
    "I design and build scalable web applications that blend beautiful user interfaces with robust backend systems. Whether it's a business website, a full stack platform, or a blockchain application, I focus on creating software that is fast, reliable, and built to last.",

  typingRoles: [
    "Full Stack Developer",
    "React Developer",
    "Backend Developer",
    "Blockchain Developer",
    "Problem Solver",
  ],

  // Contact
  availability: "Open to Full Time Roles",

  location: "Nigeria",

  email: "michaelege022@gmail.com", // TODO: Replace with your email

  phone: "+234 806 302 3766", // TODO: Replace with your phone number

  portfolio: "https://yourportfolio.com", // TODO: Replace after deployment

  whatsapp: "https://wa.me/2348063023766",

  telegram: "https://t.me/mikeisresilient",

  resume: "/resume.pdf",

  profileImageAlt: "Portrait of Michael Ege",

  // Hero Buttons
  cta: {
    primary: {
      label: "Explore My Work",
      href: "#projects",
    },

    secondary: {
      label: "Download Resume",
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
      url: "https://www.linkedin.com/in/michael-ege-2997ba420", // TODO: Replace with your LinkedIn URL
      icon: FiLinkedin,
    },

    {
      name: "X",
      icon: FaXTwitter,
      url: "https://x.com/mikeisresilient",
    }
  ],
};