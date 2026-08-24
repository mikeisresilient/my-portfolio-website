import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();

  const [open, setOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

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

  /* Close mobile menu */
  const closeMenu = () => {
    setOpen(false);
  };

  /* Active navigation item */
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    if (path.includes("#")) {
      return location.pathname === path.split("#")[0];
    }

    return location.pathname === path;
  };

  return (
    <>
      {/* =========================
          NAVBAR
      ========================== */}
      <nav
        className="
          fixed
          inset-x-0
          top-0
          z-50
          border-b
          border-transparent
          bg-white/80
          backdrop-blur-xl
          transition-colors
          duration-300
          dark:border-white/5
          dark:bg-slate-950/80
        "
      >
        <div
          className="
            mx-auto
            flex
            h-16
            w-full
            max-w-7xl
            items-center
            justify-between
            gap-3
            px-4
            sm:h-18
            sm:px-6
            lg:px-8
          "
        >
          {/* =========================
              LOGO
          ========================== */}
          <Link
            to="/"
            onClick={closeMenu}
            className="
              min-w-0
              shrink
              cursor-pointer
              whitespace-nowrap
              text-base
              font-bold
              tracking-wide
              text-slate-900
              transition-colors
              hover:text-blue-500
              dark:text-white
              dark:hover:text-blue-400
              sm:text-lg
              lg:text-xl
            "
          >
            Mike{" "}
            <span className="text-blue-500">
              Is Resilient
            </span>
          </Link>

          {/* =========================
              DESKTOP NAVIGATION
          ========================== */}
          <div
            className="
              hidden
              items-center
              gap-4
              lg:flex
              xl:gap-7
            "
          >
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`
                  whitespace-nowrap
                  text-sm
                  font-medium
                  transition-colors
                  duration-300
                  ${
                    isActive(item.to)
                      ? "text-blue-500 dark:text-blue-400"
                      : "text-slate-600 hover:text-blue-500 dark:text-slate-300 dark:hover:text-blue-400"
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* =========================
              RIGHT CONTROLS
          ========================== */}
          <div
            className="
              flex
              shrink-0
              items-center
              gap-2
              sm:gap-3
            "
          >
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
                h-9
                w-9
                shrink-0
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
                hover:border-blue-500
                hover:text-blue-500
                dark:border-slate-700
                dark:bg-slate-900
                dark:text-yellow-300
                dark:hover:border-blue-500
              "
            >
              {darkMode ? (
                <FiSun size={17} />
              ) : (
                <FiMoon size={17} />
              )}
            </button>

            {/* Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                hidden
                rounded-xl
                bg-blue-600
                px-4
                py-2
                text-sm
                font-medium
                text-white
                transition
                hover:bg-blue-700
                lg:block
                xl:px-5
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
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={open}
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
                border-slate-200
                bg-white
                text-slate-800
                transition
                hover:border-blue-500
                hover:text-blue-500
                dark:border-slate-700
                dark:bg-slate-900
                dark:text-white
                lg:hidden
              "
            >
              {open ? (
                <HiX size={23} />
              ) : (
                <HiMenuAlt3 size={23} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* =========================
          MOBILE MENU
      ========================== */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="
                fixed
                inset-0
                z-40
                bg-black/20
                backdrop-blur-[2px]
                lg:hidden
              "
            />

            {/* Menu Panel */}
            <motion.div
              initial={{
                opacity: 0,
                y: -15,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -15,
                scale: 0.97,
              }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
              className="
                fixed
                right-3
                top-19
                z-50
                w-[calc(100%-1.5rem)]
                max-w-sm
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-3
                shadow-2xl
                dark:border-slate-800
                dark:bg-slate-950
                lg:hidden
              "
            >
              {/* Navigation Links */}
              <div className="space-y-1">
                {navLinks.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{
                      opacity: 0,
                      x: 10,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.04,
                    }}
                  >
                    <Link
                      to={item.to}
                      onClick={closeMenu}
                      className={`
                        flex
                        w-full
                        items-center
                        rounded-xl
                        px-4
                        py-3
                        text-sm
                        font-medium
                        transition-colors
                        ${
                          isActive(item.to)
                            ? "bg-blue-500/10 text-blue-500 dark:text-blue-400"
                            : "text-slate-700 hover:bg-slate-100 hover:text-blue-500 dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-blue-400"
                        }
                      `}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Divider */}
              <div className="my-3 h-px bg-slate-200 dark:bg-white/10" />

              {/* Bottom Controls */}
              <div className="flex items-center gap-2">
                {/* Theme */}
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="
                    flex
                    flex-1
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-3
                    py-3
                    text-sm
                    font-medium
                    text-slate-700
                    transition
                    hover:border-blue-500
                    hover:text-blue-500
                    dark:border-slate-800
                    dark:bg-slate-900
                    dark:text-slate-200
                  "
                >
                  {darkMode ? (
                    <>
                      <FiSun className="text-yellow-400" />
                      Light
                    </>
                  ) : (
                    <>
                      <FiMoon className="text-blue-500" />
                      Dark
                    </>
                  )}
                </button>

                {/* Resume */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="
                    flex
                    flex-1
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-600
                    px-3
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-blue-700
                  "
                >
                  Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}