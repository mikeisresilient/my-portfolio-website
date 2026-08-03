import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiMapPin,
  FiCopy,
  FiCheck,
  FiSend,
  FiPhone,
} from "react-icons/fi";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import { profile } from "../data/profile";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);

      setCopied(true);

      toast.success("Email copied to clipboard!");

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      toast.error("Unable to copy email.");
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      // Send notification to you
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      // Send automatic reply to the visitor
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast.success("Your message has been sent successfully!");

      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);

      toast.error("Unable to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-24"
    >
      <Container>
        <SectionTitle
          badge="Contact"
          title="Let's Build Something Great"
          subtitle="Have a project, collaboration, or opportunity? I'd love to hear from you."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-md"
          >
            <h3 className="mb-8 text-2xl font-bold text-white">
              Contact Information
            </h3>

            {/* Contact Details */}
            <div className="space-y-5">
              {/* Email */}
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center rounded-xl border border-slate-800 p-4 transition hover:border-blue-500 hover:bg-slate-800/50"
              >
                <div className="rounded-xl bg-blue-500/10 p-3">
                  <FiMail className="text-blue-400" size={22} />
                </div>

                <div className="ml-4">
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="break-all text-white">{profile.email}</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-xl border border-slate-800 p-4 transition hover:border-green-500 hover:bg-slate-800/50"
              >
                <div className="rounded-xl bg-green-500/10 p-3">
                  <FaWhatsapp className="text-green-400" size={22} />
                </div>

                <div className="ml-4">
                  <p className="text-sm text-slate-400">WhatsApp</p>
                  <p className="text-white">{profile.phone}</p>
                </div>
              </a>

              {/* Telegram */}
              <a
                href={profile.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-xl border border-slate-800 p-4 transition hover:border-sky-500 hover:bg-slate-800/50"
              >
                <div className="rounded-xl bg-sky-500/10 p-3">
                  <FaTelegramPlane className="text-sky-400" size={22} />
                </div>

                <div className="ml-4">
                  <p className="text-sm text-slate-400">Telegram</p>
                  <p className="text-white">@mikeisresilient</p>
                </div>
              </a>
            </div>

            <div className="mt-6">
              <button
                onClick={copyEmail}
                className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 transition hover:border-blue-500 hover:bg-slate-800"
              >
                {copied ? (
                  <>
                    <FiCheck className="text-green-400" />
                    Email Copied
                  </>
                ) : (
                  <>
                    <FiCopy className="text-blue-400" />
                    Copy Email Address
                  </>
                )}
              </button>
            </div>

            {/* Socials */}
            <div className="mt-8 flex gap-4">
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
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    <Icon size={22} />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-md"
          >
            <div className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="block w-full min-w-0 rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none transition focus:border-blue-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="block w-full min-w-0 rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none transition focus:border-blue-500"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="block w-full min-w-0 rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none transition focus:border-blue-500"
              />

              <textarea
                name="message"
                rows={6}
                placeholder="Tell me about your project..."
                required
                className="block w-full min-w-0 rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none transition focus:border-blue-500"
              />

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading && (
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                )}

                {loading ? "Sending Message..." : "Send Message"}

                {!loading && <FiSend />}
              </button>
            </div>
          </motion.form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
