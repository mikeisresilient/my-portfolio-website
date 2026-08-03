import { motion } from "framer-motion";
import { techStack } from "../../data/techStack";

export default function TechStack() {
  return (
    <section id="tech-stack" className="mt-12">
      <h4 className="mb-6 text-lg font-semibold text-white">
        Currently Working With
      </h4>

      <div className="flex flex-wrap gap-4">
        {techStack.map((tech, index) => {
          const Icon = tech.icon;

          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              whileHover={{
                y: -5,
                scale: 1.05,
              }}
              className="
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-5
                py-3
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-blue-500/40
                hover:bg-white/10
                hover:shadow-lg
                hover:shadow-blue-500/10
              "
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/70">
                <Icon className={`${tech.color} text-xl`} />
              </div>

              <span className="text-sm font-medium text-slate-300">
                {tech.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}