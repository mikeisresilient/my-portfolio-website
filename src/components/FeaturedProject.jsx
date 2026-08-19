import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";

const FeaturedProject = ({ project }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-md"
    >
      {/* Project Image */}
      <div className="w-full overflow-hidden rounded-t-3xl bg-slate-950">
        <img
          src={project.image}
          alt={project.title}
          className="block h-auto w-full rounded-t-3xl transition duration-700 group-hover:scale-[1.01]"
        />
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 lg:p-12">
        {/* Badge */}
        <span className="mb-4 inline-flex w-fit rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-400">
          ⭐ Featured Project
        </span>

        {/* Title */}
        <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
          {project.title}
        </h2>

        {/* Description */}
        <p className="mb-8 max-w-4xl leading-8 text-slate-400">
          {project.description}
        </p>

        {/* Challenge & Solution */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Challenge */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
            <h3 className="mb-2 text-lg font-semibold text-white">
              Challenge
            </h3>

            <p className="leading-7 text-slate-400">
              {project.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
            <h3 className="mb-2 text-lg font-semibold text-white">
              Solution
            </h3>

            <p className="leading-7 text-slate-400">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-8">
          <h3 className="mb-4 text-lg font-semibold text-white">
            Technologies
          </h3>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm text-blue-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              Live Demo
              <FiExternalLink />
            </a>
          )}

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 font-medium text-slate-300 transition hover:border-blue-500 hover:text-white"
          >
            GitHub
            <FiGithub />
          </a>
        </div>

        {/* Key Outcome */}
        <div className="mt-10 border-t border-slate-800 pt-6">
          <div className="flex items-center gap-2 font-medium text-blue-400">
            Key Outcome
            <FiArrowRight />
          </div>

          <p className="mt-2 max-w-4xl leading-7 text-slate-400">
            Delivered a fast, responsive, and visually engaging web
            experience that strengthens the brand's online presence while
            maintaining excellent performance across desktop and mobile
            devices.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturedProject;