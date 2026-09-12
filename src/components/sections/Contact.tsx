import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";
import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-sky-500 via-sky-600 to-leaf-600 px-8 py-16 sm:px-16 sm:py-20 text-center noise-overlay"
        >
          <div className="pointer-events-none absolute -top-16 -left-16 h-64 w-64 rounded-full bg-lime-300/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <h2 className="relative text-balance text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            Looking for the right seed for your crop?
          </h2>
          <p className="relative mt-4 text-white/90 text-lg">Let's grow together.</p>

          <div className="relative mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white text-ink-900 px-8 py-4 font-semibold shadow-soft hover:scale-[1.03] transition-transform"
            >
              <WhatsAppIcon size={20} />
              Enquire on WhatsApp
            </a>
          </div>

          <div className="relative mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 text-sm">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail size={16} />
              {siteConfig.email}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} />
              {siteConfig.address}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
