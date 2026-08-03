import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";

const FeaturedProject = ({ project }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-md"
    >
      <div className="grid lg:grid-cols-2">
        {/* Image */}
        {/* Image */}
        <div className="lg:col-span-3">
          <div className="flex items-center justify-center bg-slate-950 p-8 lg:p-10">
            <div className="overflow-hidden rounded-2xl border border-slate-800 shadow-2xl">
              {/* Browser Bar */}
              <div className="flex items-center gap-2 border-b border-slate-700 bg-slate-800 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              <img
                src={project.image}
                alt={project.title}
                className="block w-full h-auto transition duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-2 flex flex-col justify-center p-8 lg:p-12">
          {/* Existing content */}
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-8 lg:p-12">
          {/* Badge */}
          <span className="mb-4 w-fit rounded-full bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-400 border border-blue-500/20">
            ⭐ Featured Project
          </span>

          {/* Title */}
          <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
            {project.title}
          </h2>

          {/* Description */}
          <p className="mb-8 leading-8 text-slate-400">{project.description}</p>

          {/* Challenge */}
          <div className="mb-6">
            <h3 className="mb-2 text-lg font-semibold text-white">Challenge</h3>

            <p className="leading-7 text-slate-400">{project.challenge}</p>
          </div>

          {/* Solution */}
          <div className="mb-8">
            <h3 className="mb-2 text-lg font-semibold text-white">Solution</h3>

            <p className="leading-7 text-slate-400">{project.solution}</p>
          </div>

          {/* Technologies */}
          <div className="mb-8 flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm text-blue-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
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

          {/* Learnings */}
          <div className="mt-10 border-t border-slate-800 pt-6">
            <div className="flex items-center gap-2 text-blue-400 font-medium">
              Key Outcome
              <FiArrowRight />
            </div>

            <p className="mt-2 leading-7 text-slate-400">
              Delivered a fast, responsive, and visually engaging web experience
              that strengthens the brand's online presence while maintaining
              excellent performance across desktop and mobile devices.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturedProject;
