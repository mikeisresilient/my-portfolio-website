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
      className="relative min-h-screen overflow-hidden flex items-center bg-slate-950"
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
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-green-500/30 bg-green-500/10 mb-8 mt-20"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-ping" />

              <span className="text-green-300 text-sm">
                {profile.availability}
              </span>
            </motion.div>

            <p className="text-blue-400 text-lg mb-3">{profile.heroGreeting}</p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              {profile.firstName}{" "}
              <span className="text-blue-500">{profile.lastName}</span>
            </h1>

            <TypeAnimation
              sequence={profile.typingRoles.flatMap((role) => [role, 2200])}
              wrapper="h2"
              speed={40}
              repeat={Infinity}
              className="text-2xl md:text-3xl font-semibold text-slate-300 mt-6"
            />

            <p className="mt-8 text-slate-400 text-lg leading-8 max-w-xl">
              {profile.heroDescription}
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">
              <a
                href={profile.cta.primary.href}
                className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-medium transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30"
              >
                {profile.cta.primary.label}
                <FaArrowRight className="group-hover:translate-x-1 transition" />
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

            <div className="flex gap-4 mt-10">
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
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition hover:bg-blue-600
                    hover:-translate-y-1
                    hover:shadow-lg
                    hover:shadow-blue-500/20
                    duration-300"
                  >
                    <Icon size={20} aria-hidden="true" />
                  </a>
                );
              })}
            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
              {heroStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-5 text-center"
                >
                  <h3 className="text-2xl font-bold text-blue-400">
                    {stat.number}
                  </h3>

                  <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
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

                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 blur-xl opacity-60 animate-pulse" />

                {/* Profile */}

                <div className="relative rounded-full border border-white/10 bg-slate-900 p-2 transition-transform duration-500 hover:scale-[1.02]">
                  {" "}
                  <img
                    src={profileImage}
                    alt={profile.profileImageAlt}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    draggable={false}
                    width="430"
                    height="430"
                    className="w-80 h-80 lg:w-[430px] lg:h-[430px] rounded-full object-cover"
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
                      className={`absolute ${badge.position} px-4 py-2 rounded-xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center gap-2`}
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
        className="absolute bottom-8 left-1/2 -translate-x-1/10 flex flex-col items-center"
      >
        <span className="ml-5 text-xs text-slate-500 mb-3">
          Scroll to discover my journey
        </span>

        <div className="w-7 h-12 rounded-full border-2 border-slate-500 flex justify-center">
          <motion.div
            animate={{
              y: [4, 18, 4],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
            className="w-1.5 h-3 rounded-full bg-blue-400 mt-2"
          />
        </div>
      </motion.a>
    </section>
  );
}
