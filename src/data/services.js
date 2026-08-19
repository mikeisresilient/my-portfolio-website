import {
  FiGlobe,
  FiLayout,
  FiSmartphone,
  FiDatabase,
  FiCode,
  FiCpu,
} from "react-icons/fi";

export const services = [
  {
    id: 1,
    icon: FiGlobe,
    title: "Business Websites",
    description:
      "Modern, responsive websites that help businesses establish a strong online presence and deliver a professional digital experience.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Vite"],
    buttonText: "Let's Talk",
  },

  {
    id: 2,
    icon: FiLayout,
    title: "Full Stack Applications",
    description:
      "Scalable web applications with modern frontends, secure backends, authentication, APIs, and database integration.",
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Django",
      "Prisma",
    ],
    buttonText: "Let's Talk",
  },

  {
    id: 3,
    icon: FiSmartphone,
    title: "Mobile App Development",
    description:
      "Modern cross platform mobile applications with responsive interfaces, authentication, APIs, payments, and persistent data.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Next.js",
      "PostgreSQL",
    ],
    buttonText: "Let's Talk",
  },

  {
    id: 4,
    icon: FiDatabase,
    title: "REST API Development",
    description:
      "Secure and scalable REST APIs that power web and mobile applications with reliable data processing and backend functionality.",
    technologies: ["Node.js", "Express", "Django", "PostgreSQL"],
    buttonText: "Let's Talk",
  },

  {
    id: 5,
    icon: FiCode,
    title: "Admin Dashboards",
    description:
      "Interactive dashboards for managing users, products, orders, inventory, analytics, and other business operations.",
    technologies: ["React", "Next.js", "REST APIs", "PostgreSQL"],
    buttonText: "Let's Talk",
  },

  {
    id: 6,
    icon: FiCpu,
    title: "Blockchain Applications",
    description:
      "Smart contracts and decentralized applications built with Solidity and modern Web3 technologies for Ethereum based systems.",
    technologies: ["Solidity", "Hardhat", "Ethers.js", "Web3.js"],
    buttonText: "Let's Talk",
  },
];