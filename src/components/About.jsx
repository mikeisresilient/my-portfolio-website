import { motion } from "framer-motion";
import profile from "../assets/images/profile.png";

import Container from "./ui/Container";
import GlassCard from "./ui/GlassCard";
import SectionTitle from "./ui/SectionTitle";
import AnimatedCounter from "./ui/AnimatedCounter";
import TechStack from "./ui/TechStack";
import { about } from "../data/about";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-white
        py-28
        text-slate-900
        transition-colors
        duration-300
        dark:bg-slate-950
        dark:text-white
      "
    >
      <Container>
        <SectionTitle
          subtitle="About Me"
          title={about.heading}
        />

        {/* Main About Content */}
        <div
          className="
            grid
            items-start
            gap-8
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-10
            xl:gap-12
          "
        >
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              relative
              flex
              justify-center
              lg:justify-start
            "
          >
            <GlassCard className="relative w-full max-w-md p-4 lg:max-w-lg">
              <img
                src={profile}
                alt="Michael Ege"
                loading="lazy"
                decoding="async"
                draggable={false}
                className="
                  w-full
                  rounded-2xl
                  object-cover
                "
              />
            </GlassCard>
          </motion.div>

          {/* Right: Introduction + Counters */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="min-w-0"
          >
            <h3
              className="
                mb-6
                text-3xl
                font-bold
                text-slate-900
                dark:text-white
              "
            >
              Hi, I'm{" "}
              <span className="text-blue-500 dark:text-blue-400">
                Michael Ege.
              </span>
            </h3>

            {/* Introduction */}
            {about.intro.map((paragraph) => (
              <p
                key={paragraph}
                className="
                  mb-6
                  text-justify
                  leading-8
                  text-slate-600
                  dark:text-slate-400
                "
              >
                {paragraph}
              </p>
            ))}

            {/* Counters */}
            <div
              className="
                mb-8
                grid
                grid-cols-2
                gap-4
                sm:grid-cols-4
              "
            >
              {about.counters.map((counter) => (
                <div
                  key={counter.label}
                  className="
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-100
                    p-4
                    text-center
                    shadow-sm
                    transition-colors
                    duration-300
                    dark:border-white/10
                    dark:bg-white/5
                    dark:shadow-none
                  "
                >
                  <div
                    className="
                      text-2xl
                      font-bold
                      text-blue-500
                      dark:text-blue-400
                    "
                  >
                    <AnimatedCounter
                      end={counter.end}
                      suffix={counter.suffix}
                    />
                  </div>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    {counter.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <div className="mt-16">
          <TechStack />
        </div>

        {/* Highlight Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {about.highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
              >
                <GlassCard className="h-full p-8">
                  <div className="mb-6">
                    <Icon
                      className={`${item.color} text-3xl`}
                      aria-hidden="true"
                    />
                  </div>

                  <h3
                    className="
                      mb-4
                      text-2xl
                      font-bold
                      text-slate-900
                      dark:text-white
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      leading-7
                      text-slate-600
                      dark:text-slate-400
                    "
                  >
                    {item.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}