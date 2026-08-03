import {
  FiGlobe,
  FiLayout,
  FiDatabase,
  FiCode,
  FiCpu,
  FiSettings,
} from "react-icons/fi";

export const services = [
  {
    id: 1,
    icon: FiGlobe,
    title: "Business Websites",
    description:
      "Modern, responsive websites that help businesses establish a strong online presence and convert visitors into customers.",
    technologies: ["React", "Tailwind CSS", "Vite"],
    buttonText: "Learn More",
  },

  {
    id: 2,
    icon: FiLayout,
    title: "Full Stack Applications",
    description:
      "Scalable web applications with modern frontends, secure backends, authentication, and database integration.",
    technologies: ["React", "Node.js", "Express", "Django"],
    buttonText: "Learn More",
  },

  {
    id: 3,
    icon: FiDatabase,
    title: "REST API Development",
    description:
      "Designing and building secure, scalable APIs for web and mobile applications.",
    technologies: ["Node.js", "Express", "Django"],
    buttonText: "Learn More",
  },

  {
    id: 4,
    icon: FiCode,
    title: "Admin Dashboards",
    description:
      "Interactive dashboards with analytics, user management, authentication, and reporting.",
    technologies: ["React", "Charts", "REST API"],
    buttonText: "Learn More",
  },

  {
    id: 5,
    icon: FiCpu,
    title: "Blockchain Applications",
    description:
      "Smart contracts and decentralized applications built on Ethereum using modern Web3 technologies.",
    technologies: ["Solidity", "Hardhat", "Ethers.js"],
    buttonText: "Learn More",
  },

  {
    id: 6,
    icon: FiSettings,
    title: "Website Maintenance",
    description:
      "Continuous support, bug fixes, performance optimization, feature enhancements, and long-term maintenance.",
    technologies: ["Optimization", "Deployment", "Support"],
    buttonText: "Learn More",
  },
];