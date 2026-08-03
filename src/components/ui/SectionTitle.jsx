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
      <p className="uppercase tracking-[4px] text-blue-400 text-sm">
        {subtitle}
      </p>

      <h2 className="text-4xl lg:text-5xl font-black mt-4">
        {title}
      </h2>
    </motion.div>
  );
}