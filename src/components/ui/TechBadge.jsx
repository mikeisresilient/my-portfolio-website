import { motion } from "framer-motion";

export default function TechBadge({
  icon,
  name,
  className = "",
}) {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 3,
      }}
      className={`
        absolute
        px-4
        py-2
        rounded-xl
        bg-white/10
        border
        border-white/10
        backdrop-blur-xl
        flex
        items-center
        gap-2
        ${className}
      `}
    >
      {icon}

      <span className="text-sm">
        {name}
      </span>
    </motion.div>
  );
}