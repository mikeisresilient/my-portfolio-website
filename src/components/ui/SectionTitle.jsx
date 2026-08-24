import { motion } from "framer-motion";

export default function SectionTitle({
  subtitle,
  title,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="mb-16 text-center"
    >
      <p className="text-sm uppercase tracking-[4px] text-blue-500 dark:text-blue-400">
        {subtitle}
      </p>

      <h2 className="mt-4 text-4xl font-black text-slate-900 dark:text-white lg:text-5xl">
        {title}
      </h2>
    </motion.div>
  );
}