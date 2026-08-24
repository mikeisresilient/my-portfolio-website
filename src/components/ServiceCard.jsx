import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {
    title,
    description,
    technologies = [],
    icon: Icon,
    buttonText,
  } = service;

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="
        group
        flex
        h-full
        flex-col
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
        backdrop-blur-md
        transition-all
        duration-300
        hover:border-blue-500/40
        hover:shadow-xl
        hover:shadow-blue-500/10
        dark:border-slate-800
        dark:bg-slate-900/60
        dark:shadow-none
      "
    >
      {/* Icon */}
      <div
        className="
          mb-6
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-xl
          bg-blue-500/10
          text-blue-500
          transition
          duration-300
          group-hover:scale-110
          group-hover:bg-blue-600
          group-hover:text-white
          dark:text-blue-400
        "
      >
        <Icon size={28} aria-hidden="true" />
      </div>

      {/* Title */}
      <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="grow leading-7 text-slate-600 dark:text-slate-400">
        {description}
      </p>

      {/* Technologies */}
      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((tech) => (
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

      {/* Contact Button */}
      <div className="mt-8">
        <Link
          to="/contact"
          className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            bg-blue-600
            px-6
            py-3
            text-sm
            font-semibold
            text-white
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-blue-700
          "
        >
          <span>{buttonText}</span>

          <FiArrowRight
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
            aria-hidden="true"
          />
        </Link>
      </div>
    </motion.article>
  );
};

export default ServiceCard;