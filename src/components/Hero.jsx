import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import profileImage from "../assets/images/profile.png";
import { FaArrowRight } from "react-icons/fa6";
import { floatingBadges, heroStats } from "../data/hero";
import { profile } from "../data/profile";
import Container from "./ui/Container";
import BackgroundGlow from "./ui/BackgroundGlow";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950"
    >
      <BackgroundGlow />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right,#ffffff 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <Container>
        <div className="relative z-10 grid w-full items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="
                mb-8
                mt-20
                flex
                w-fit
                max-w-[90%]
                items-center
                gap-2.5
                rounded-full
                border
                border-green-500/30
                bg-green-500/10
                px-4
                py-2
                text-center
                sm:gap-3
                sm:px-5
                sm:py-2.5
              "
            >
              <span className="h-2.5 w-2.5 shrink-0 animate-ping rounded-full bg-green-400" />

              <span className="text-sm font-medium leading-5 text-green-300 sm:text-base">
                {profile.availability}
              </span>
            </motion.div>

            <p className="mb-3 text-lg text-blue-400">
              {profile.heroGreeting}
            </p>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              {profile.firstName}{" "}
              <span className="text-blue-500">{profile.lastName}</span>
            </h1>

            <TypeAnimation
              sequence={profile.typingRoles.flatMap((role) => [role, 2200])}
              wrapper="h2"
              speed={40}
              repeat={Infinity}
              className="mt-6 text-2xl font-semibold text-slate-300 md:text-3xl"
            />

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
              {profile.heroDescription}
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-5">
              <a
                href={profile.cta.primary.href}
                className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-medium transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30"
              >
                {profile.cta.primary.label}

                <FaArrowRight className="transition group-hover:translate-x-1" />
              </a>

              <a
                href={profile.cta.secondary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 px-7 py-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg hover:shadow-white/10"
              >
                {profile.cta.secondary.label}
              </a>
            </div>

            {/* Social */}
            <div className="mt-10 flex gap-4">
              {profile.socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/10
                      bg-white/5
                      transition
                      duration-300
                      hover:-translate-y-1
                      hover:bg-blue-600
                      hover:shadow-lg
                      hover:shadow-blue-500/20
                    "
                  >
                    <Icon size={20} aria-hidden="true" />
                  </a>
                );
              })}
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
              {heroStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl"
                >
                  <h3 className="text-2xl font-bold text-blue-400">
                    {stat.number}
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <Tilt
              glareEnable
              glareMaxOpacity={0.2}
              scale={1.02}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
            >
              <div className="relative">
                {/* Gradient Ring */}
                <div className="absolute -inset-2 animate-pulse rounded-full bg-linear-to-r from-blue-500 via-cyan-500 to-purple-500 opacity-60 blur-xl" />

                {/* Profile */}
                <div className="relative rounded-full border border-white/10 bg-slate-900 p-2 transition-transform duration-500 hover:scale-[1.02]">
                  <img
                    src={profileImage}
                    alt={profile.profileImageAlt}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    draggable={false}
                    width="430"
                    height="430"
                    className="h-80 w-80 rounded-full object-cover lg:h-107.5 lg:w-107.5"
                  />
                </div>

                {/* Floating Badges */}
                {floatingBadges.map((badge, index) => {
                  const Icon = badge.icon;

                  return (
                    <motion.div
                      key={badge.name}
                      animate={{
                        y: [0, -12, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 3 + index,
                        ease: "easeInOut",
                      }}
                      className={`absolute ${badge.position} flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-xl`}
                    >
                      <Icon className={`${badge.color} text-base`} />

                      <span className="text-sm">{badge.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </Tilt>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/10 flex-col items-center"
      >
        <span className="mb-3 ml-5 text-xs text-slate-500">
          Scroll to discover my journey
        </span>

        <div className="flex h-12 w-7 justify-center rounded-full border-2 border-slate-500">
          <motion.div
            animate={{
              y: [4, 18, 4],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
            className="mt-2 h-3 w-1.5 rounded-full bg-blue-400"
          />
        </div>
      </motion.a>
    </section>
  );
}