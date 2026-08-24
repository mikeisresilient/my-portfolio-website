import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Skills", to: "/about#tech-stack" },
  { label: "Projects", to: "/projects" },
  { label: "Experience", to: "/experience" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  /* Navbar background on scroll */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* Prevent page scrolling while menu is open */
  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [open]);

  /* Toggle theme */
  const toggleTheme = () => {
    const newDarkMode = !darkMode;

    setDarkMode(newDarkMode);

    document.documentElement.classList.toggle(
      "dark",
      newDarkMode,
    );

    localStorage.setItem(
      "theme",
      newDarkMode ? "dark" : "light",
    );
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`
          fixed
          left-0
          right-0
          top-0
          z-50
          transition-all
          duration-300

          ${
            scrolled
              ? `
                border-b
                border-slate-200
                bg-white/85
                backdrop-blur-xl
                dark:border-white/10
                dark:bg-slate-950/85
              `
              : `
                bg-transparent
              `
          }
        `}
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between
            px-5
            py-4
            sm:px-6
            sm:py-5
          "
        >
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="
              cursor-pointer
              text-lg
              font-bold
              tracking-wide
              text-slate-900
              dark:text-white
              sm:text-xl
              md:ml-5
              md:text-2xl
            "
          >
            Mike{" "}
            <span className="text-blue-500">
              Is Resilient
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="
                  cursor-pointer
                  text-slate-700
                  transition
                  duration-300
                  hover:text-blue-500
                  dark:text-slate-200
                  dark:hover:text-blue-400
                "
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                darkMode
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              title={
                darkMode
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-slate-200
                bg-white
                text-slate-700
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-blue-500
                hover:text-blue-500
                dark:border-slate-700
                dark:bg-slate-900
                dark:text-yellow-300
                dark:hover:border-blue-500
              "
            >
              {darkMode ? (
                <FiSun size={19} />
              ) : (
                <FiMoon size={19} />
              )}
            </button>

            {/* Desktop Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                hidden
                rounded-xl
                bg-blue-600
                px-5
                py-2
                font-medium
                text-white
                transition
                hover:bg-blue-700
                md:block
              "
            >
              Resume
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              aria-label={
                open
                  ? "Close navigation"
                  : "Open navigation"
              }
              aria-expanded={open}
              className="
                relative
                z-110
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-slate-200
                bg-white
                text-slate-800
                transition-all
                duration-300
                hover:border-blue-500
                hover:text-blue-500
                dark:border-slate-700
                dark:bg-slate-900
                dark:text-white
                dark:hover:border-blue-500
                md:hidden
              "
            >
              {open ? (
                <HiX size={25} />
              ) : (
                <HiMenuAlt3 size={25} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Floating Menu */}
        <AnimatePresence>
          {open && (
            <>
              {/* Background click area */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setOpen(false)}
                className="
                  fixed
                  inset-0
                  top-[72px]
                  z-45
                  bg-black/10
                  dark:bg-black/30
                  md:hidden
                "
              />

              {/* Menu Panel */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: -12,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -12,
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.22,
                  ease: "easeOut",
                }}
                className="
                  absolute
                  right-4
                  top-full
                  z-100
                  mt-3
                  w-[calc(100vw-2rem)]
                  max-w-[360px]
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-3
                  shadow-2xl
                  shadow-slate-900/10
                  dark:border-white/10
                  dark:bg-slate-900
                  dark:shadow-black/30
                  md:hidden
                "
              >
                {/* Menu Header */}
                <div
                  className="
                    mb-2
                    flex
                    items-center
                    justify-between
                    border-b
                    border-slate-200
                    px-3
                    pb-3
                    dark:border-white/10
                  "
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      Navigation
                    </p>

                    <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                      Explore my portfolio
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={toggleTheme}
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-slate-200
                      bg-slate-100
                      text-slate-700
                      transition
                      hover:border-blue-500
                      hover:text-blue-500
                      dark:border-slate-700
                      dark:bg-slate-800
                      dark:text-yellow-300
                    "
                    aria-label="Toggle theme"
                  >
                    {darkMode ? (
                      <FiSun size={17} />
                    ) : (
                      <FiMoon size={17} />
                    )}
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="space-y-1">
                  {navLinks.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{
                        opacity: 0,
                        x: 15,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.04,
                        duration: 0.2,
                      }}
                    >
                      <Link
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className="
                          flex
                          w-full
                          items-center
                          rounded-xl
                          px-4
                          py-3
                          text-base
                          font-medium
                          text-slate-700
                          transition-all
                          duration-200
                          hover:bg-slate-100
                          hover:text-blue-500
                          dark:text-slate-200
                          dark:hover:bg-slate-800
                          dark:hover:text-blue-400
                        "
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Divider */}
                <div className="my-3 h-px bg-slate-200 dark:bg-white/10" />

                {/* Resume */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-600
                    px-4
                    py-3
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-blue-700
                  "
                >
                  View Resume
                </a>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}