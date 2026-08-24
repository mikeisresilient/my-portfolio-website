import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const ExperienceCard = ({ experience, index }) => {
  const {
    year,
    role,
    company,
    location,
    description,
    impact = [],
    technologies = [],
  } = experience;

  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={`relative flex w-full ${
        isLeft ? "lg:justify-start" : "lg:justify-end"
      }`}
    >
      {/* Timeline Dot */}
      <div
        className="
          absolute
          left-5
          top-8
          z-20
          h-4
          w-4
          rounded-full
          border-4
          border-white
          bg-blue-500
          dark:border-slate-950
          lg:left-1/2
          lg:-translate-x-1/2
        "
      />

      {/* Card */}
      <div
        className={`
          ml-14
          w-full
          rounded-2xl
          border
          border-slate-200
          bg-white
          p-6
          shadow-sm
          backdrop-blur-md
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-blue-500/40
          hover:shadow-xl
          hover:shadow-blue-500/10
          dark:border-slate-800
          dark:bg-slate-900/60
          dark:shadow-none
          lg:ml-0
          lg:w-[46%]
          ${isLeft ? "lg:mr-auto" : "lg:ml-auto"}
        `}
      >
        {/* Year */}
        <span className="inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-500 dark:text-blue-400">
          {year}
        </span>

        {/* Role */}
        <h3 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
          {role}
        </h3>

        {/* Company */}
        <p className="mt-1 text-blue-600 dark:text-blue-300">
          {company}

          {location && (
            <span className="text-slate-500 dark:text-slate-500">
              {" • "}
              {location}
            </span>
          )}
        </p>

        {/* Description */}
        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
          {description}
        </p>

        {/* Key Achievements */}
        <div className="mt-6">
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
            Key Achievements
          </h4>

          <ul className="space-y-3">
            {impact.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
              >
                <FiCheckCircle
                  className="mt-1.5 shrink-0 text-blue-500 dark:text-blue-400"
                  aria-hidden="true"
                />

                <span className="leading-7">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-500 dark:text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;