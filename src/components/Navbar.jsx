import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
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

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-slate-950/70 backdrop-blur-xl"
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
          className="-ml-0 md:ml-5 cursor-pointer text-xl sm:text-2xl font-bold tracking-wide"
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
              className="cursor-pointer transition hover:text-blue-400"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-xl bg-blue-600 px-5 py-2 font-medium transition hover:bg-blue-700 md:block"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden"
          aria-label="Open navigation"
        >
          <HiMenuAlt3 size={30} />
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl md:hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Close navigation"
              className="absolute right-6 top-6 rounded-full border border-white/10 p-3 transition hover:border-blue-500"
            >
              <HiX size={28} />
            </button>

            {/* Mobile Links */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="flex h-full flex-col items-center justify-center gap-8"
            >
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  smooth={true}
                  spy={true}
                  offset={-90}
                  duration={500}
                  onClick={() => setOpen(false)}
                  activeClass="text-blue-400"
                  className="cursor-pointer text-3xl font-semibold transition hover:text-blue-400"
                >
                  {item.label}
                </Link>
              ))}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-6 rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
