import { motion } from "framer-motion";
import { FiArrowDown, FiGithub } from "react-icons/fi";

import Projects from "../components/Projects";
import Container from "../components/ui/Container";
import { profile } from "../data/profile";

export default function ProjectsPage() {
  const github = profile.socials.find(
    (social) => social.name === "GitHub",
  );

  return (
    <>
      {/* Page Hero */}
      <section
        className="
          relative
          overflow-hidden
          bg-white
          px-6
          pb-20
          pt-36
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[4px] text-blue-500">
              Portfolio
            </p>

            <h1
              className="
                mt-5
                text-4xl
                font-black
                leading-tight
                sm:text-5xl
                lg:text-6xl
              "
            >
              Projects I've Built
            </h1>

            <p
              className="
                mx-auto
                mt-6
                max-w-3xl
                text-base
                leading-8
                text-slate-600
                dark:text-slate-400
                sm:text-lg
              "
            >
              A collection of web, mobile, full stack, and blockchain
              applications built to solve practical problems and demonstrate
              modern software development capabilities.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              

              <a
                href="#project-list"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-slate-300
                  px-6
                  py-3
                  font-semibold
                  text-slate-700
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-500
                  hover:text-blue-500
                  dark:border-white/10
                  dark:text-slate-300
                  dark:hover:border-blue-500
                  dark:hover:text-blue-400
                "
              >
                View Projects
                <FiArrowDown />
              </a>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Projects */}
      <div id="project-list">
        <Projects />
      </div>
    </>
  );
}