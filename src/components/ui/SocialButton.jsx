import { motion } from "framer-motion";

export default function SocialButton({
  icon,
  href,
}) {
  return (
    <motion.a
      whileHover={{
        y: -4,
        scale: 1.05,
      }}
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
        w-12
        h-12
        rounded-xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        flex
        items-center
        justify-center
        hover:bg-blue-600
        transition
      "
    >
      {icon}
    </motion.a>
  );
}