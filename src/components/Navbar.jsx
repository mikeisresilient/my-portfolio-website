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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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
          onClick={() => {
            setOpen(false);
          }}
          className="-ml-0 cursor-pointer text-lg font-bold tracking-wide sm:text-xl md:ml-5 md:text-2xl"
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

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="relative z-[110] rounded-lg p-2 transition hover:bg-slate-800 md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
        </button>
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
            className="fixed inset-0 z-[55] bg-slate-950 md:hidden"
          >
            <div className="flex min-h-[100dvh] flex-col overflow-y-auto bg-slate-950 px-8 pt-24 pb-8">

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
                    className="block w-full rounded-xl px-6 py-5 text-center text-2xl font-semibold transition-all duration-300 hover:bg-slate-800 hover:text-blue-400"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <div className="my-8 h-px w-full bg-white/10" />

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="w-full rounded-xl bg-blue-600 py-4 text-center font-semibold shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
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