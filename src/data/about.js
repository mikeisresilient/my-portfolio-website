import {
  FaLaptopCode,
  FaCube,
  FaChalkboardTeacher,
} from "react-icons/fa";

export const about = {
  heading: "Building Software That Solves Real Problems",

  intro: [
    "I'm a Full Stack Developer passionate about building software that combines clean design, reliable backend systems, and exceptional user experiences. I enjoy transforming ideas into products that people can actually use and businesses can grow with.",

    "Beyond traditional web development, I have experience building blockchain applications, integrating REST APIs, and mentoring aspiring developers through practical, real world learning. Whether I'm creating business websites, dashboards, or decentralized applications, my focus remains the same: build solutions that are fast, scalable, and built to last.",
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
        "Building modern, responsive web applications with React, Node.js, Express, Django, and scalable backend systems.",
      icon: FaLaptopCode,
      color: "text-blue-400",
    },

    {
      title: "Blockchain Development",
      description:
        "Developing smart contracts, decentralized applications, and Web3 integrations using Solidity, Hardhat, Ethers.js, and Web3.js.",
      icon: FaCube,
      color: "text-purple-400",
    },

    {
      title: "Technical Education",
      description:
        "Breaking down complex technologies into practical lessons through mentoring, documentation, and technical content.",
      icon: FaChalkboardTeacher,
      color: "text-green-400",
    },
  ],
};