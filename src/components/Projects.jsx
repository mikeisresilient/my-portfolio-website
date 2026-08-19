import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import BackgroundGlow from "./ui/BackgroundGlow";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";

import { projects } from "../data/projects";
import { profile } from "../data/profile";

const Projects = () => {
  const featuredProject = projects.find((project) => project.featured);

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  const hasProjects = projects.length > 0;

  const github = profile.socials.find(
    (social) => social.name === "GitHub"
  );

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 py-28"
    >
      <BackgroundGlow />

      <Container>
        {/* Heading */}
        <SectionTitle
          badge="Portfolio"
          title="Featured Projects"
          subtitle="A selection of projects that demonstrate my ability to design, build, and deploy modern web, mobile & blockchain applications."
        />

        {/* Featured Project */}
        {featuredProject && (
          <div className="mt-16">
            <FeaturedProject project={featuredProject} />
          </div>
        )}

        {/* Other Projects */}
        {hasProjects ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 columns-1 gap-8 md:columns-2 xl:columns-3"
          >
            {otherProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </motion.div>
        ) : (
          <p className="mt-16 text-center text-slate-400">
            Projects coming soon.
          </p>
        )}

        {/* CTA */}
        {github && (
          <div className="mt-20 flex justify-center">
            <a
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl border border-blue-500/20 bg-blue-500/10 px-6 py-3 font-medium text-blue-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/30"
            >
              Explore More Projects on GitHub

              <FiArrowRight
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Projects;