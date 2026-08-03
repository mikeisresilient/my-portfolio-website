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
    <section id="about" className="py-28 bg-slate-950 relative overflow-hidden">
      <Container>
        <SectionTitle subtitle="About Me" title={about.heading} />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-purple-600/20 rounded-3xl blur-3xl" />

            <GlassCard className="relative p-4">
              <img
                src={profile}
                alt="Michael Ege"
                className="rounded-2xl w-full max-w-md object-cover"
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
            <h3 className="text-3xl font-bold mb-6">
              Hi, I'm <span className="text-blue-400">Michael Ege.</span>
            </h3>

            {about.intro.map((paragraph) => (
              <p key={paragraph} className="mb-6 leading-8 text-slate-400">
                {paragraph}
              </p>
            ))}

            <TechStack />

            
          </motion.div>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-24">
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
                <GlassCard className="p-8 h-full">
                  <div className="mb-6">
                    <Icon
                      className={`${item.color} text-3xl`}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

                  <p className="text-slate-400 leading-7">{item.description}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
