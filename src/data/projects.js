import fromZeroHQ from "../assets/projects/fromzerohq.png";
import tmgreatness from "../assets/projects/tmgreatness.png";
import littleLemon from "../assets/projects/little-lemon.png";
import attendance from "../assets/projects/attendance.png";
import blockchain from "../assets/projects/blockchain.png";
import staking from "../assets/projects/staking.jpg";
import placeholder from "../assets/projects/placeholder.png";

// Temporary placeholders
const digitalWill = placeholder;
const voting = placeholder;
const token = placeholder;

export const projects = [
  {
    id: 1,
    featured: true,
    title: "FromZeroHQ",
    image: fromZeroHQ,

    description:
      "A modern platform designed to connect beginners with curated learning resources, practical roadmaps, and career guidance through a fast, responsive, and intuitive user experience.",

    challenge:
      "Build a professional, scalable platform that presents educational content clearly while maintaining excellent performance, accessibility, and responsiveness across all devices.",

    solution:
      "Developed using React, Vite, Tailwind CSS, and Framer Motion with reusable components, responsive layouts, smooth animations, and deployment on Vercel.",

    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
    ],

    github: "https://github.com/mikeisresilient/fromzerohq-website",

    live: "https://fromzerohq.vercel.app/",
  },

  {
    id: 2,
    featured: false,
    title: "TMGreatness Website",
    image: tmgreatness,
    description:
      "A premium website for a dance brand showcasing performances, achievements, and booking information through a modern responsive interface.",
    challenge:
      "Create a visually engaging website that reflects the brand's creativity while maintaining excellent performance across all devices.",
    solution:
      "Built a responsive application using React, Vite, Tailwind CSS, and Framer Motion, then optimized and deployed to Vercel.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
    ],
    github: "https://github.com/mikeisresilient/tmgreatness-website",
    live: "https://tmgreatness-website.vercel.app/",
  },

  {
    id: 3,
    featured: false,
    title: "Little Lemon Restaurant",
    image: littleLemon,
    description:
      "A responsive restaurant website featuring online reservations and a modern dining experience.",
    challenge:
      "Build a fast, responsive restaurant website with an intuitive user experience.",
    solution:
      "Developed a React application with reusable components and responsive layouts focused on usability.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
    ],
    github: "https://github.com/mikeisresilient/little-lemon-website",
    live: "https://little-lemon-website-vbbb.onrender.com/",
  },

  {
    id: 4,
    featured: false,
    title: "Training Attendance System",
    image: attendance,
    description:
      "A Django-based attendance management system with participant registration, reporting, and an administrator dashboard.",
    challenge:
      "Digitize attendance tracking and simplify participant management for training events.",
    solution:
      "Built a full-stack Django application with secure data management, responsive pages, and an administrative dashboard.",
    technologies: [
      "Django",
      "Bootstrap",
      "SQLite",
    ],
    github: "https://github.com/mikeisresilient/training-attendance",
    live: "https://training-attendance.onrender.com/",
  },

  {
    id: 5,
    featured: false,
    title: "Blockchain Assessment",
    image: blockchain,
    description:
      "A blockchain implementation demonstrating transactions, wallets, mining, balances, and block validation.",
    challenge:
      "Build a functional blockchain that demonstrates the core concepts behind distributed ledgers.",
    solution:
      "Implemented blockchain logic with Node.js and Express while providing a React interface for interacting with the chain.",
    technologies: [
      "React",
      "Node.js",
      "Express",
    ],
    github: "https://github.com/mikeisresilient/blockchain-assessment",
    live: "#",
  },

  {
    id: 6,
    featured: false,
    title: "Resilient Staking DApp",
    image: staking,
    description:
      "A decentralized staking application that allows users to stake tokens and receive blockchain-based rewards.",
    challenge:
      "Create a secure staking workflow that interacts with Ethereum smart contracts.",
    solution:
      "Developed Solidity smart contracts with a React frontend for staking, rewards, and wallet interaction.",
    technologies: [
      "Solidity",
      "React",
      "Web3.js",
    ],
    github: "https://github.com/mikeisresilient/resilient-staking-dapp",
    live: "https://resilient-staking-dapp.vercel.app/",
  },

  {
    id: 7,
    featured: false,
    title: "Digital Will DApp",
    image: digitalWill,
    description:
      "A blockchain application for securely managing digital assets and inheritance through smart contracts.",
    challenge:
      "Provide a transparent and secure way to manage digital inheritance on the blockchain.",
    solution:
      "Designed smart contracts and a React interface that securely manage digital estate records.",
    technologies: [
      "Solidity",
      "React",
      "Hardhat",
    ],
    github: "https://github.com/mikeisresilient/chronara-digital-estate",
    live: null,
  },

  {
    id: 8,
    featured: false,
    title: "Voting DApp",
    image: voting,
    description:
      "A decentralized voting application powered by Ethereum smart contracts to provide secure and transparent elections.",
    challenge:
      "Ensure secure voting while preventing duplicate votes and maintaining transparency.",
    solution:
      "Built Ethereum smart contracts with a React frontend for secure blockchain-based voting.",
    technologies: [
      "Solidity",
      "React",
      "Ethers.js",
    ],
    github: "https://github.com/mikeisresilient/Voting-DApp",
    live: null,
  },

  {
    id: 9,
    featured: false,
    title: "ERC20 Token Contract",
    image: token,
    description:
      "A custom ERC20 token implementation with minting, transfers, and ownership controls using OpenZeppelin.",
    challenge:
      "Develop a secure ERC20 implementation following industry best practices.",
    solution:
      "Implemented an ERC20 smart contract using OpenZeppelin with ownership and token management functionality.",
    technologies: [
      "Solidity",
      "OpenZeppelin",
    ],
    github: "https://github.com/mikeisresilient/crypto-token-contract",
    live: null,
  },
];