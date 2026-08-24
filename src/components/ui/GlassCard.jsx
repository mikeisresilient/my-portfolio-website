import { motion } from "framer-motion";

export default function GlassCard({
  children,
  className = "",
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-xl
        backdrop-blur-xl
        transition-colors
        duration-300
        dark:border-white/10
        dark:bg-white/5
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}