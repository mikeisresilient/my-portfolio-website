import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", to: "about" },
  { label: "Skills", to: "tech-stack" },
  { label: "Projects", to: "projects" },
  { label: "Experience", to: "experience" },
  { label: "Services", to: "services" },
  { label: "Contact", to: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      return true;
    }

    if (savedTheme === "light") {
      return false;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Apply theme to the document
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);

    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock page scroll when mobile menu is open
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

  // Toggle theme
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-80}
          onClick={() => {
            setOpen(false);
          }}
          className="ml-0 cursor-pointer text-lg font-bold tracking-wide text-slate-900 dark:text-white sm:text-xl md:ml-5 md:text-2xl"
        >
          Mike <span className="text-blue-500">Is Resilient</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              smooth={true}
              spy={true}
              offset={-90}
              duration={500}
              activeClass="text-blue-400"
              className="cursor-pointer text-slate-700 transition hover:text-blue-400 dark:text-slate-200"
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
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            title={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
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
              dark:hover:text-yellow-200
            "
          >
            {darkMode ? <FiSun size={19} /> : <FiMoon size={19} />}
          </button>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-xl bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700 md:block"
          >
            Resume
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="
              relative
              z-[110]
              rounded-lg
              p-2
              text-slate-800
              transition
              hover:bg-slate-200
              dark:text-white
              dark:hover:bg-slate-800
              md:hidden
            "
            aria-label="Toggle navigation"
          >
            {open ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
            className="
              fixed
              inset-0
              z-[55]
              bg-white
              dark:bg-slate-950
              md:hidden
            "
          >
            <div
              className="
                flex
                min-h-[100dvh]
                flex-col
                overflow-y-auto
                bg-white
                px-8
                pb-8
                pt-24
                dark:bg-slate-950
              "
            >
              {/* Mobile Theme Toggle */}
              <div className="mb-6 flex justify-center">
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-100
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-slate-700
                    transition
                    hover:border-blue-500
                    hover:text-blue-500
                    dark:border-slate-700
                    dark:bg-slate-900
                    dark:text-slate-200
                    dark:hover:border-blue-500
                  "
                >
                  {darkMode ? (
                    <>
                      <FiSun className="text-yellow-400" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <FiMoon className="text-blue-500" />
                      Dark Mode
                    </>
                  )}
                </button>
              </div>

              {/* Navigation Links */}
              {navLinks.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.3,
                  }}
                  className="w-full"
                >
                  <Link
                    to={item.to}
                    smooth={true}
                    spy={true}
                    offset={-90}
                    duration={500}
                    onClick={() => setOpen(false)}
                    activeClass="text-blue-400"
                    className="
                      block
                      w-full
                      rounded-xl
                      px-6
                      py-5
                      text-center
                      text-2xl
                      font-semibold
                      text-slate-800
                      transition-all
                      duration-300
                      hover:bg-slate-100
                      hover:text-blue-400
                      dark:text-white
                      dark:hover:bg-slate-800
                      dark:hover:text-blue-400
                    "
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <div className="my-8 h-px w-full bg-slate-200 dark:bg-white/10" />

              {/* Mobile Resume */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="
                  w-full
                  rounded-xl
                  bg-blue-600
                  py-4
                  text-center
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-blue-500/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-blue-700
                "
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}