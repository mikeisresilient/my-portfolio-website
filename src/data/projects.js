import fromZeroHQ from "../assets/projects/fromzerohq.png";
import tmgreatness from "../assets/projects/tmgreatness.png";
import littleLemon from "../assets/projects/little-lemon.png";
import attendance from "../assets/projects/attendance.png";
import blockchain from "../assets/projects/blockchain.png";
import staking from "../assets/projects/staking.jpg";
import placeholder from "../assets/projects/placeholder.png";
import prostore from "../assets/projects/prostore.png";
import prostoreMobile from "../assets/projects/prostore-mobile.png";
import chainpulse from "../assets/projects/chainpulse.png";

// Temporary placeholders
const digitalWill = placeholder;
const voting = placeholder;
const token = placeholder;

export const projects = [
  {
    id: 1,
    featured: false,
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

    github:
      "https://github.com/mikeisresilient/fromzerohq-website",

    live:
      "https://fromzerohq.vercel.app/",
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

    github:
      "https://github.com/mikeisresilient/tmgreatness-website",

    live:
      "https://tmgreatness-website.vercel.app/",
  },

  {
    id: 3,
    featured: false,
    title: "ProStore Mobile",
    image: prostoreMobile,

    description:
      "A production ready mobile ecommerce application built with React Native and Expo, featuring authentication, product browsing, cart, wishlist, checkout, Paystack payments, order management, currency support, and light and dark mode.",

    challenge:
      "Build a complete mobile shopping experience that connects securely to an ecommerce backend while providing reliable authentication, cart management, payment processing, order handling, and a responsive experience across Android devices.",

    solution:
      "Developed a React Native application with Expo and TypeScript using Expo Router for navigation, secure local storage for authentication data, Paystack for payments, and a Next.js backend powered by Prisma and PostgreSQL. Implemented product browsing, authentication, cart and wishlist functionality, stock validation, address management, payment verification, order management, currency support, persistent theme preferences, and production Android builds through EAS.",

    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Expo Router",
      "React Navigation",
      "Reanimated",
      "Secure Store",
      "AsyncStorage",
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Paystack",
      "EAS Build",
    ],

    github:
      "https://github.com/mikeisresilient/prostore-mobile",

    live:
      "https://expo.dev/accounts/mikeisresilient/projects/prostore-mobile/builds/b4a62dbb-afe1-4bcf-9045-f1ea4cad335b",
  },

  {
    id: 4,
    featured: true,
    title: "ChainPulse",
    image: chainpulse,

    description:
      "A blockchain analytics platform that tracks Ethereum network activity, cryptocurrency prices, transactions, wallet data, and network statistics through a modern full stack dashboard.",

    challenge:
      "Build a reliable blockchain analytics platform capable of collecting, processing, storing, and presenting live Ethereum network data in a clear and useful dashboard while connecting multiple external data sources.",

    solution:
      "Developed a full stack blockchain analytics platform with a React and TypeScript frontend and a Rust backend connected to PostgreSQL. Integrated Ethereum RPC data and the Etherscan API to retrieve blockchain activity, transactions, wallet information, network statistics, and cryptocurrency prices through REST APIs.",

    technologies: [
      "Rust",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Ethereum",
      "Etherscan API",
      "REST API",
      "Vite",
      "Tailwind CSS",
    ],

    github:
      "https://github.com/mikeisresilient/chainpulse-frontend",

    live:
      "https://chainpulse-frontend.onrender.com/",
  },

  {
    id: 5,
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

    github:
      "https://github.com/mikeisresilient/little-lemon-website",

    live:
      "https://little-lemon-website-vbbb.onrender.com/",
  },

  {
    id: 6,
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

    github:
      "https://github.com/mikeisresilient/training-attendance",

    live:
      "https://training-attendance.onrender.com/",
  },

  {
    id: 7,
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

    github:
      "https://github.com/mikeisresilient/resilient-staking-dapp",

    live:
      "https://resilient-staking-dapp.vercel.app/",
  },

  {
    id: 8,
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

    github:
      "https://github.com/mikeisresilient/blockchain-assessment",

    live: null,
  },

  {
    id: 9,
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

    github:
      "https://github.com/mikeisresilient/chronara-digital-estate",

    live: null,
  },

  {
    id: 10,
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

    github:
      "https://github.com/mikeisresilient/Voting-DApp",

    live: null,
  },

  {
    id: 11,
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

    github:
      "https://github.com/mikeisresilient/crypto-token-contract",

    live: null,
  },

  {
    id: 12,
    featured: false,
    title: "ProStore Ecommerce",
    image: prostore,

    description:
      "A complete modern ecommerce platform featuring customer accounts, product management, shopping cart, wishlist, secure Paystack payments, inventory management, order management, currency support, and a responsive shopping experience.",

    challenge:
      "Build a complete ecommerce platform capable of handling the full customer journey, from product discovery and account management to checkout, payment processing, order management, and inventory control.",

    solution:
      "Developed a full stack ecommerce platform using Next.js, React, TypeScript, Prisma, and PostgreSQL with secure authentication, role based access control, Paystack payment integration, currency conversion, database transactions, inventory management, order management, REST APIs, and a responsive admin dashboard. The application was deployed to Vercel for production use.",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Prisma",
      "PostgreSQL",
      "Neon",
      "Auth.js",
      "Paystack",
      "REST APIs",
      "Git",
      "GitHub",
      "Vercel",
    ],

    github:
      "https://github.com/mikeisresilient/prostore-ecommerce",

    live:
      "https://prostore-ecommerce.vercel.app",
  },
];