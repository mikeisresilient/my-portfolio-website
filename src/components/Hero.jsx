import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight } from "react-icons/fa6";

import { heroStats } from "../data/hero";
import { profile } from "../data/profile";

import Container from "./ui/Container";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        w-full
        items-center
        overflow-hidden
        bg-white
        text-slate-900
        transition-colors
        duration-300
        dark:bg-slate-950
        dark:text-white
      "
    >
      {/* Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.04]
          dark:opacity-[0.05]
        "
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(to right, var(--grid-color) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <Container>
        <div className="relative z-10 w-full py-24 sm:py-28 lg:py-32">
          {/* Main Hero Content */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              mx-auto
              w-full
              max-w-5xl
              text-center
            "
          >
            {/* Availability */}
            <motion.div
              initial={{
                opacity: 0,
                y: -15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
              }}
              className="
                mx-auto
                mb-7
                mt-4
                inline-flex
                w-fit
                max-w-full
                items-center
                gap-2
                rounded-full
                border
                border-green-500/30
                bg-green-500/10
                px-3
                py-2
                text-left
                sm:mb-8
                sm:px-4
                sm:py-2.5
              "
            >
              <span
                className="
                  h-2
                  w-2
                  shrink-0
                  animate-ping
                  rounded-full
                  bg-green-400
                  sm:h-2.5
                  sm:w-2.5
                "
              />

              <span
                className="
                  whitespace-nowrap
                  text-[11px]
                  font-medium
                  leading-5
                  text-green-600
                  dark:text-green-300
                  sm:text-sm
                  md:text-base
                "
              >
                {profile.availability}
              </span>
            </motion.div>

            {/* Greeting */}
            <p
              className="
                mb-3
                text-base
                text-blue-500
                dark:text-blue-400
                sm:text-lg
              "
            >
              {profile.heroGreeting}
            </p>

            {/* Name */}
            <h1
              className="
                text-[2.7rem]
                font-black
                leading-[1.05]
                tracking-tight
                text-slate-900
                dark:text-white
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
                xl:text-9xl
              "
            >
              {profile.firstName}{" "}
              <span className="text-blue-500">
                {profile.lastName}
              </span>
            </h1>

            {/* Typing Roles */}
            <TypeAnimation
              sequence={profile.typingRoles.flatMap((role) => [
                role,
                2200,
              ])}
              wrapper="h2"
              speed={40}
              repeat={Infinity}
              className="
                mt-5
                block
                px-2
                text-xl
                font-semibold
                leading-tight
                text-slate-700
                dark:text-slate-300
                sm:mt-6
                sm:text-3xl
                md:text-4xl
              "
            />

            {/* Description */}
            <p
              className="
                mx-auto
                mt-7
                w-full
                max-w-3xl
                px-1
                text-justify
                text-sm
                leading-7
                text-slate-600
                dark:text-slate-400
                sm:mt-8
                sm:px-0
                sm:text-base
                sm:leading-8
                md:text-lg
              "
            >
              {profile.heroDescription}
            </p>

            {/* Buttons */}
            <div
              className="
                mt-8
                flex
                w-full
                flex-col
                items-stretch
                justify-center
                gap-3
                px-2
                sm:mt-10
                sm:flex-row
                sm:items-center
                sm:px-0
                sm:gap-4
              "
            >
              {/* Primary */}
              <a
                href={profile.cta.primary.href}
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-blue-600
                  px-6
                  py-3.5
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-1
                  hover:bg-blue-700
                  sm:px-7
                  sm:py-4
                "
              >
                {profile.cta.primary.label}

                <FaArrowRight
                  className="
                    transition
                    group-hover:translate-x-1
                  "
                />
              </a>

              {/* Secondary */}
              <a
                href={profile.cta.secondary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-300
                  px-6
                  py-3.5
                  text-sm
                  text-slate-700
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-1
                  hover:bg-slate-100
                  dark:border-white/10
                  dark:text-white
                  dark:hover:bg-white/10
                  sm:px-7
                  sm:py-4
                "
              >
                {profile.cta.secondary.label}
              </a>
            </div>

            {/* Social Links */}
            <div
              className="
                mt-8
                flex
                justify-center
                gap-3
                sm:mt-10
                sm:gap-4
              "
            >
              {profile.socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-slate-200
                      bg-slate-100
                      text-slate-700
                      transition
                      duration-300
                      hover:-translate-y-1
                      hover:bg-blue-600
                      hover:text-white
                      dark:border-white/10
                      dark:bg-white/5
                      dark:text-white
                      sm:h-12
                      sm:w-12
                    "
                  >
                    <Icon
                      size={18}
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </div>

            {/* Stats */}
            <div
              className="
                mx-auto
                mt-10
                grid
                w-full
                max-w-4xl
                grid-cols-2
                gap-3
                px-1
                sm:mt-14
                sm:gap-4
                sm:px-0
                md:grid-cols-4
              "
            >
              {heroStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    min-w-0
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-100
                    p-3
                    text-center
                    transition-colors
                    duration-300
                    dark:border-white/10
                    dark:bg-white/5
                    sm:p-5
                  "
                >
                  <h3
                    className="
                      text-xl
                      font-bold
                      text-blue-500
                      dark:text-blue-400
                      sm:text-2xl
                    "
                  >
                    {stat.number}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-[11px]
                      leading-5
                      text-slate-500
                      dark:text-slate-400
                      sm:text-sm
                    "
                  >
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}