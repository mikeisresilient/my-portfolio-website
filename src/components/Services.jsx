import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import ServiceCard from "./ServiceCard";

import { services } from "../data/services";
import { servicesSection } from "../data/servicesSection";
import BackgroundGlow from "./ui/BackgroundGlow";

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-950 py-28"
    >
      <BackgroundGlow />
      <Container>
        <SectionTitle
          badge={servicesSection.badge}
          title={servicesSection.title}
          subtitle={servicesSection.subtitle}
        />

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {services.length > 0 ? (
            services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))
          ) : (
            <p className="col-span-full text-center text-slate-400">
              Services will be added soon.
            </p>
          )}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-24 overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-600/10 to-violet-600/10 p-10 lg:p-14"
        >
          {/* Glow */}
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="mb-3 inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-400">
                {servicesSection.cta.badge}
              </span>

              <h3 className="text-3xl font-bold text-white lg:text-4xl">
                {servicesSection.cta.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-300">
                {servicesSection.cta.description}
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-700"
            >
              {servicesSection.cta.button}
              <FiArrowRight
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />{" "}
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Services;
