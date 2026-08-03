import { FiArrowUpRight } from "react-icons/fi";

import Container from "./ui/Container";

import { footer } from "../data/footer";
import { profile } from "../data/profile";
import { site } from "../data/site";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <Container>
        <div className="grid gap-12 py-16 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              {profile.brand}
            </h3>

            <p className="mt-5 leading-8 text-slate-400">
              {footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors duration-300 hover:text-blue-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="mb-5 text-lg font-semibold text-white">
              Built With
            </h4>

            <div className="flex flex-wrap gap-2">
              {footer.builtWith.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm text-blue-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <a
                href={profile.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 transition hover:text-blue-300"
              >
                Visit Portfolio

                <FiArrowUpRight
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800 py-6 text-sm text-slate-500 lg:flex-row">
          <p>
            © {currentYear} {site.author}. All rights reserved.
          </p>

          <div className="flex gap-5">
            {profile.socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-slate-400 transition-colors duration-300 hover:text-blue-400"
                >
                  <Icon aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;