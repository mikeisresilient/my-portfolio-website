import { motion } from "framer-motion";
import { FiArrowRight, FiBriefcase, FiCode, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import Container from "../components/ui/Container";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Introduction */}
      <section
        className="
          bg-white
          py-24
          text-slate-900
          transition-colors
          duration-300
          dark:bg-slate-950
          dark:text-white
        "
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[4px] text-blue-500">
              About Me
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">
              Building Software That Solves Real Problems
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
              I'm a Full Stack Developer passionate about building software
              that combines clean design, reliable backend systems, and
              exceptional user experiences. I build web applications, mobile
              applications, and blockchain solutions designed to be fast,
              scalable, and built to last.
            </p>

            <Link
              to="/about"
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-blue-600
                px-6
                py-3
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-blue-700
              "
            >
              More About Me

              <FiArrowRight
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </Container>
      </section>

      {/* What I Do */}
      <section
        className="
          bg-slate-50
          py-24
          text-slate-900
          transition-colors
          duration-300
          dark:bg-slate-900
          dark:text-white
        "
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[4px] text-blue-500">
              What I Do
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Solutions I Build
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600 dark:text-slate-400">
              From modern business websites to full stack platforms, mobile
              applications, and blockchain systems, I build practical digital
              solutions around real world needs.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* Web */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-500/40
                dark:border-white/10
                dark:bg-white/5
                dark:shadow-none
              "
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500">
                <FiCode size={28} />
              </div>

              <h3 className="text-2xl font-bold">
                Web Development
              </h3>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                Responsive websites and scalable full stack applications
                built with modern frontend and backend technologies.
              </p>
            </motion.div>

            {/* Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-500/40
                dark:border-white/10
                dark:bg-white/5
                dark:shadow-none
              "
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-500">
                <FiBriefcase size={28} />
              </div>

              <h3 className="text-2xl font-bold">
                Mobile Applications
              </h3>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                Cross platform mobile applications with responsive interfaces,
                authentication, APIs, payments, and persistent data.
              </p>
            </motion.div>

            {/* Blockchain */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-500/40
                dark:border-white/10
                dark:bg-white/5
                dark:shadow-none
              "
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-500">
                <FiBriefcase size={28} />
              </div>

              <h3 className="text-2xl font-bold">
                Blockchain & Web3
              </h3>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                Smart contracts, decentralized applications, and Web3
                integrations built with modern blockchain technologies.
              </p>
            </motion.div>
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              to="/services"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-blue-500/30
                px-6
                py-3
                font-semibold
                text-blue-500
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-500
                hover:bg-blue-600
                hover:text-white
              "
            >
              View All Services

              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Projects Preview */}
      <section
        className="
          bg-white
          py-24
          text-slate-900
          transition-colors
          duration-300
          dark:bg-slate-950
          dark:text-white
        "
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[4px] text-blue-500">
              Portfolio
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Selected Projects
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600 dark:text-slate-400">
              Explore some of the applications and digital products I've
              designed and developed.
            </p>
          </motion.div>

          <div className="mt-10 flex justify-center">
            <Link
              to="/projects"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-blue-600
                px-7
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-blue-700
              "
            >
              Explore My Projects

              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section
        className="
          bg-slate-50
          py-24
          text-slate-900
          transition-colors
          duration-300
          dark:bg-slate-900
          dark:text-white
        "
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-8
              text-center
              shadow-sm
              dark:border-white/10
              dark:bg-slate-950
              dark:shadow-none
              sm:p-12
              lg:p-16
            "
          >
            <p className="text-sm font-semibold uppercase tracking-[4px] text-blue-500">
              Let's Work Together
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">
              Have a project in mind?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600 dark:text-slate-400">
              Whether you need a business website, full stack application,
              mobile app, or blockchain solution, let's build something
              meaningful together.
            </p>

            <Link
              to="/contact"
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-blue-600
                px-7
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-blue-700
              "
            >
              <FiMail />

              Let's Talk

              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </Container>
      </section>
    </>
  );
}