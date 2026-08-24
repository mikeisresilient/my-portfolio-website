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
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(to right, var(--grid-color) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <Container>
        <div className="relative z-10 w-full">
          {/* Main Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-5xl text-center"
          >
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="
                mb-8
                mt-20
                inline-flex
                w-fit
                max-w-full
                items-center
                gap-2.5
                rounded-full
                border
                border-green-500/30
                bg-green-500/10
                px-3.5
                py-2
                text-left
                sm:gap-3
                sm:px-4
                sm:py-2.5
              "
            >
              <span className="h-2.5 w-2.5 shrink-0 animate-ping rounded-full bg-green-400" />

              <span
                className="
                  whitespace-nowrap
                  text-xs
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
            <p className="mb-3 text-lg text-blue-500 dark:text-blue-400">
              {profile.heroGreeting}
            </p>

            {/* Name */}
            <h1
              className="
                text-5xl
                font-black
                leading-tight
                text-slate-900
                dark:text-white
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
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
                mt-6
                block
                text-2xl
                font-semibold
                text-slate-700
                dark:text-slate-300
                sm:text-3xl
                md:text-4xl
              "
            />

            {/* Description */}
            <p
              className="
                mx-auto
                mt-8
                max-w-3xl
                text-justify
                text-base
                leading-8
                text-slate-600
                dark:text-slate-400
                sm:text-lg
              "
            >
              {profile.heroDescription}
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-5">
              {/* Primary Button */}
              <a
                href={profile.cta.primary.href}
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-blue-600
                  px-7
                  py-4
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-1
                  hover:bg-blue-700
                "
              >
                {profile.cta.primary.label}

                <FaArrowRight className="transition group-hover:translate-x-1" />
              </a>

              {/* Secondary Button */}
              <a
                href={profile.cta.secondary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-xl
                  border
                  border-slate-300
                  px-7
                  py-4
                  text-slate-700
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-1
                  hover:bg-slate-100
                  dark:border-white/10
                  dark:text-white
                  dark:hover:bg-white/10
                "
              >
                {profile.cta.secondary.label}
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex justify-center gap-4">
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
                      h-12
                      w-12
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
                    "
                  >
                    <Icon size={20} aria-hidden="true" />
                  </a>
                );
              })}
            </div>

            {/* Stats */}
            <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
              {heroStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -5 }}
                  className="
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-100
                    p-5
                    text-center
                    backdrop-blur-xl
                    transition-colors
                    duration-300
                    dark:border-white/10
                    dark:bg-white/5
                  "
                >
                  <h3 className="text-2xl font-bold text-blue-500 dark:text-blue-400">
                    {stat.number}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
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