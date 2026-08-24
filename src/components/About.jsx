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
        <SectionTitle subtitle="About Me" title={about.heading} />

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="absolute -inset-4 rounded-3xl bg-linear-to-r from-blue-600/20 via-cyan-500/20 to-purple-600/20 blur-3xl" />

            <GlassCard className="relative p-4">
              <img
                src={profile}
                alt="Michael Ege"
                className="w-full max-w-md rounded-2xl object-cover"
              />
            </GlassCard>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
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
            <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
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
                  <div className="text-2xl font-bold text-blue-500 dark:text-blue-400">
                    <AnimatedCounter
                      end={counter.end}
                      suffix={counter.suffix}
                    />
                  </div>

                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {counter.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <TechStack />
          </motion.div>
        </div>

        {/* Highlight Cards */}
        <div className="mt-24 grid gap-8 md:grid-cols-3">
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

                  <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-slate-600 dark:text-slate-400">
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