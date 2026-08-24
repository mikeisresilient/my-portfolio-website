import { motion } from "framer-motion";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "../data/experience";
import { experienceSection } from "../data/experienceSection";

const Experience = () => {
  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        bg-white
        py-28
        text-slate-900
        transition-colors
        duration-300
        dark:bg-slate-950
        dark:text-white
      "
    >
     

      <Container>
        <SectionTitle
          badge={experienceSection.badge}
          title={experienceSection.title}
          subtitle={experienceSection.subtitle}
        />

        <div className="relative mt-20">
          {/* Timeline Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="
              absolute
              left-7
              top-0
              h-full
              w-0.5
              origin-top
              bg-linear-to-b
              from-blue-500
              via-violet-500
              to-transparent
              lg:left-1/2
              lg:-translate-x-1/2
            "
          />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.length > 0 ? (
              experiences.map((experience, index) => (
                <ExperienceCard
                  key={experience.id}
                  experience={experience}
                  index={index}
                />
              ))
            ) : (
              <p className="text-center text-slate-500 dark:text-slate-400">
                Experience will be added soon.
              </p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Experience;