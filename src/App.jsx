import { lazy, Suspense, useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import ScrollProgress from "./components/ui/ScrollProgress";
import BackToTop from "./components/ui/BackToTop";

import SEO from "./components/SEO";

const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Services = lazy(() => import("./components/Services"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {

  useEffect(() => {
    const timer = setTimeout(() => {
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SEO />


      <ScrollProgress />

      <Navbar />

      <Hero />

      <Suspense fallback={null}>
        <About />
        <Projects />
        <Experience />
        <Services />
        <Contact />
        <Footer />
      </Suspense>

      <BackToTop />
    </>
  );
}

export default App;