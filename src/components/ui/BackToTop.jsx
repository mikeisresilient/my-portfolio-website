import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
            y: 20,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            fixed
            bottom-5
            right-5
            z-[9997]
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-blue-500/20
            bg-slate-900/90
            text-blue-400
            shadow-lg
            backdrop-blur-md
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-blue-600
            hover:text-white
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            focus:ring-offset-2
            focus:ring-offset-slate-950

            sm:h-14
            sm:w-14
            sm:bottom-6
            sm:right-6
          "
        >
          <FiArrowUp
            size={22}
            aria-hidden="true"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;