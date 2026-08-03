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
        border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-xl
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}