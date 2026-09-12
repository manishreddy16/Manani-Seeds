import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import { media } from "@/data/media";
import { MediaFrame } from "./MediaFrame";
import { cn } from "@/lib/cn";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function TubelightNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const location = useLocation();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!onHome) return;

    const sections = navLinks.map((l) => l.href.replace("/#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [onHome]);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "mt-3 flex h-20 items-center justify-between rounded-full px-4 transition-all duration-500 sm:px-6",
            scrolled || !onHome
              ? "bg-cream-50/90 backdrop-blur-xl border border-ink-900/8 shadow-soft"
              : "bg-cream-50/75 backdrop-blur-md border border-white/50 shadow-soft",
          )}
        >
          <Link to="/#home" className="flex shrink-0 items-center gap-3">
            <MediaFrame
              asset={media.logo}
              tone="sky"
              rounded="rounded-xl"
              className="h-12 w-12"
            />

            <span className="font-sans text-xl font-bold tracking-normal">
              <span className="text-sky-500">Manani</span>{" "}
              <span className="text-lime-600">Seeds</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 relative">
            {navLinks.map((link) => {
              const isActive =
                onHome && activeHash === link.href.replace("/", "");

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className="relative px-4 py-2 text-sm font-medium rounded-full text-ink-700 hover:text-ink-950 transition-colors"
                >
                  {isActive && (
                    <motion.span
                      layoutId="tubelight"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-100/90 to-lime-100/90 -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    >
                      <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-1 w-8 rounded-full bg-gradient-to-r from-sky-500 to-lime-500 blur-[2px]" />
                    </motion.span>
                  )}

                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold shadow-soft transition-all hover:scale-[1.03] bg-gradient-to-r from-sky-500 to-leaf-500 text-white"
            >
              Enquire Now
            </Link>
          </div>

          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full text-ink-900 hover:bg-sky-50 transition-colors"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mx-4 mt-2 rounded-3xl bg-cream-50/95 backdrop-blur-xl border border-ink-900/5 shadow-soft overflow-hidden"
        >
          <nav className="flex flex-col p-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-2xl text-ink-800 font-medium hover:bg-sky-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <a
              href={`https://wa.me/${siteConfig.whatsapp.number}`}
              target="_blank"
              rel="noreferrer"
              className="mx-2 mt-1 mb-1 inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 font-semibold text-white bg-gradient-to-r from-sky-500 to-leaf-500"
            >
              <WhatsAppIcon size={18} />
              Enquire on WhatsApp
            </a>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
