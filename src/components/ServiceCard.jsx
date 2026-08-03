import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const ServiceCard = ({ service }) => {
  const { title, description, technologies = [], icon: Icon, buttonText, } = service;

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-md transition-all duration-300 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10"
    >
      {/* Icon */}
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
        <Icon size={28} aria-hidden="true" />
      </div>

      {/* Title */}
      <h3 className="mb-4 text-2xl font-bold text-white">{title}</h3>

      {/* Description */}
      <p className="flex-grow leading-7 text-slate-400">{description}</p>

      {/* Technologies */}
      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Learn More */}
      <div className="mt-8 flex items-center gap-2 text-blue-400 transition-all duration-300 group-hover:gap-3">
        <span className="text-sm font-medium">{buttonText} || "Learn More"</span>
        <FiArrowRight
          className="transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />{" "}
      </div>
    </motion.article>
  );
};

export default ServiceCard;
