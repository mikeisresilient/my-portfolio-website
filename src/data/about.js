import {
  FaLaptopCode,
  FaCube,
  FaMobileAlt
} from "react-icons/fa";

export const about = {
  heading: "Building Software That Solves Real Problems",

  intro: [
    "I'm a Full Stack Developer passionate about building software that combines clean design, reliable backend systems, and exceptional user experiences. I enjoy transforming ideas into products that people can actually use and businesses can grow with.",

    "Beyond traditional web development, I have experience building blockchain & mobile applications, integrating REST APIs, and mentoring aspiring developers through practical, real world learning. Whether I'm creating business websites, mobile apps, dashboards, or decentralized applications, my focus remains the same: build solutions that are fast, scalable, and built to last.",
  ],

  counters: [
    {
      end: 10,
      suffix: "+",
      label: "Projects",
    },
    {
      end: 3,
      suffix: "+",
      label: "Years Experience",
    },
    {
      end: 15,
      suffix: "+",
      label: "Technologies",
    },
    {
      end: 100,
      suffix: "%",
      label: "Commitment",
    },
  ],

  highlights: [
  {
    title: "Full Stack Development",
    description:
      "Building modern, scalable web applications with React, Next.js, TypeScript, Node.js, Django, Prisma, and PostgreSQL, with a focus on responsive design and reliable backend systems.",
    icon: FaLaptopCode,
    color: "text-blue-400",
  },

  {
    title: "Mobile App Development",
    description:
      "Developing production ready mobile applications with React Native, Expo, TypeScript, secure authentication, API integration, payment processing, and responsive mobile experiences.",
    icon: FaMobileAlt,
    color: "text-cyan-400",
  },

  {
    title: "Blockchain & Web3",
    description:
      "Developing smart contracts, decentralized applications, and Web3 integrations using Solidity, Hardhat, Ethers.js, Web3.js, and blockchain based architectures.",
    icon: FaCube,
    color: "text-purple-400",
  },
],
};