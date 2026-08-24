import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="
        group
        mb-8
        break-inside-avoid
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
        backdrop-blur-md
        transition-colors
        duration-300
        dark:border-slate-800
        dark:bg-slate-900/60
        dark:shadow-none
      "
    >
      {/* Image */}
      <div className="w-full overflow-hidden rounded-t-2xl bg-slate-100 dark:bg-slate-950">
        <img
          src={project.image}
          alt={project.title}
          className="block h-auto w-full rounded-t-2xl transition duration-500 group-hover:scale-[1.02]"
        />
      </div>

      {/* Content */}
      <div className="space-y-5 p-6">
        <div>
          <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
            {project.title}
          </h3>

          <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-blue-500/20
                bg-blue-500/10
                px-3
                py-1
                text-xs
                font-medium
                text-blue-500
                dark:text-blue-300
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
              flex
              items-center
              gap-2
              rounded-lg
              border
              border-slate-300
              px-4
              py-2
              text-sm
              text-slate-700
              transition
              hover:border-blue-500
              hover:text-blue-600
              dark:border-slate-700
              dark:text-slate-300
              dark:hover:text-white
            "
          >
            <FiGithub />
            GitHub
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              <FiExternalLink />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;