import { motion } from "framer-motion";
import { techStack } from "../../data/techStack";

export default function TechStack() {
  return (
    <section id="tech-stack" className="w-full">
      <h4 className="mb-5 text-lg font-semibold text-slate-900 dark:text-white">
        Currently Working With
      </h4>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {techStack.map((tech, index) => {
          const Icon = tech.icon;

          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.35,
                delay: index * 0.04,
              }}
              whileHover={{ y: -4 }}
              className="
                flex
                min-w-0
                items-center
                gap-2.5
                rounded-xl
                border
                border-slate-200
                bg-white
                px-3
                py-2.5
                shadow-sm
                transition-all
                duration-300
                hover:border-blue-500/40
                hover:bg-slate-50
                hover:shadow-md
                dark:border-white/10
                dark:bg-white/5
                dark:shadow-none
                dark:hover:bg-white/10
              "
            >
              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-slate-100
                  dark:bg-slate-900/70
                "
              >
                <Icon
                  className={`${tech.color} text-lg`}
                  aria-hidden="true"
                />
              </div>

              <span
                className="
                  min-w-0
                  truncate
                  text-sm
                  font-medium
                  text-slate-700
                  dark:text-slate-300
                "
                title={tech.name}
              >
                {tech.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}