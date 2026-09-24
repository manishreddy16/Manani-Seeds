
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/site";
import { media } from "@/data/media";
import { MediaFrame } from "./MediaFrame";
import { cn } from "@/lib/cn";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { whatsappLink } from "@/lib/whatsapp";

export function TubelightNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const location = useLocation();
  const onHome = location.pathname === "/";

  // Locked while a click-triggered smooth scroll is in flight,
  // so the scroll-spy doesn't flicker through intermediate sections.
  const lockRef = useRef(false);
  const settleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const safetyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const getHashFromHref = (href: string) => {
    const hash = href.split("#")[1];
    return hash ? `#${hash}` : "#home";
  };

  const sectionIds = navLinks
    .map((link) => getHashFromHref(link.href).replace("#", ""));

  const updateActiveFromScroll = useCallback(() => {
    if (lockRef.current) return;

    const doc = document.documentElement;

    const nearBottom =
      window.innerHeight + window.scrollY >= doc.scrollHeight - 4;

    if (nearBottom && sectionIds.length > 0) {
      setActiveHash(`#${sectionIds[sectionIds.length - 1]}`);
      return;
    }

    const activationLine = window.innerHeight * 0.35;
    let current = sectionIds[0];

    for (const id of sectionIds) {
      const el = document.getElementById(id);

      if (!el) continue;

      if (el.getBoundingClientRect().top <= activationLine) {
        current = id;
      } else {
        break;
      }
    }

    if (current) {
      setActiveHash(`#${current}`);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join(",")]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      if (onHome) {
        updateActiveFromScroll();
      }
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [onHome, updateActiveFromScroll]);

  useEffect(() => {
    if (onHome) {
      updateActiveFromScroll();
    }
  }, [onHome, updateActiveFromScroll]);

  useEffect(() => {
    if (!onHome || !location.hash) return;

    const matched = navLinks.some(
      (link) => getHashFromHref(link.href) === location.hash
    );

    if (matched) {
      setActiveHash(location.hash);
    }
  }, [location.hash, onHome]);

  useEffect(() => {
    return () => {
      window.clearTimeout(settleTimerRef.current ?? undefined);
      window.clearTimeout(safetyTimerRef.current ?? undefined);
    };
  }, []);

  const setActiveFromClick = (href: string) => {
    const hash = getHashFromHref(href);

    setActiveHash(hash);
    setMobileOpen(false);

    // Ignore scroll-spy updates until the programmatic smooth-scroll settles.
    lockRef.current = true;

    window.clearTimeout(settleTimerRef.current ?? undefined);
    window.clearTimeout(safetyTimerRef.current ?? undefined);

    let lastY = window.scrollY;
    let settledTicks = 0;

    const checkSettled = () => {
      const y = window.scrollY;

      settledTicks =
        Math.abs(y - lastY) < 1 ? settledTicks + 1 : 0;

      lastY = y;

      if (settledTicks > 3) {
        lockRef.current = false;
        updateActiveFromScroll();
        return;
      }

      settleTimerRef.current = window.setTimeout(checkSettled, 60);
    };

    settleTimerRef.current = window.setTimeout(checkSettled, 60);

    // Hard fallback in case the scroll never cleanly "settles".
    safetyTimerRef.current = window.setTimeout(() => {
      lockRef.current = false;
    }, 1500);
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/30 bg-white/80 shadow-[0_18px_40px_-24px_rgba(22,36,31,0.25)] backdrop-blur-xl"
          : "bg-white/55 backdrop-blur-lg"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mt-2 flex items-center justify-between gap-3 md:mt-3 md:gap-4 md:justify-center">
          <Link
            to="/#home"
            className="flex shrink-0 items-center gap-2 px-1 md:absolute md:left-1 md:gap-3"
          >
            <MediaFrame
              asset={media.logo}
              tone="sky"
              rounded="rounded-none"
              fit="contain"
              className="h-11 w-11 md:h-14 md:w-14"
            />

            <span className="font-sans text-[1.1rem] font-bold tracking-normal drop-shadow-sm md:text-[1.35rem]">
              <span className="text-sky-500">Manani</span>{" "}
              <span className="text-lime-600">Seeds</span>
            </span>
          </Link>

          <div
            className={cn(
              "flex h-14 items-center justify-end rounded-full px-2 transition-all duration-500 sm:px-3 md:h-16 md:px-4",
              scrolled || !onHome
                ? "border border-white/30 bg-white/80 shadow-[0_18px_40px_-24px_rgba(22,36,31,0.18)] backdrop-blur-xl"
                : "border border-white/50 bg-white/65 shadow-soft backdrop-blur-md"
            )}
          >
            <nav className="hidden items-center gap-1 relative md:flex">
              {navLinks.map((link) => {
                const targetHash = getHashFromHref(link.href);
                const isActive =
                  onHome && activeHash === targetHash;

                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setActiveFromClick(link.href)}
                    className={cn(
                      "relative inline-flex items-center rounded-full px-[1.1rem] py-[0.6rem] text-sm font-medium transition-all duration-300",
                      isActive
                        ? "border border-[#e9e3d9] bg-[rgba(225,220,210,0.75)] text-ink-900 shadow-[0_12px_28px_-16px_rgba(22,36,31,0.4)] backdrop-blur-sm"
                        : "text-ink-700 hover:text-ink-950"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="tubelight"
                        className="absolute inset-0 -z-10 rounded-full border border-[#efe8df] bg-[rgba(225,220,210,0.75)] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 32,
                        }}
                      />
                    )}

                    <span className="relative z-10">
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:block">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/60 bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_-14px_rgba(37,211,102,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-14px_rgba(37,211,102,1)]"
              >
                <WhatsAppIcon size={18} className="text-white" />
                WhatsApp
              </a>
            </div>

            <button
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full text-ink-900 hover:bg-white/30 transition-colors"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mx-4 mt-2 rounded-3xl border border-white/30 bg-white/80 backdrop-blur-xl shadow-soft overflow-hidden"
        >
          <nav className="flex flex-col p-2">
            {navLinks.map((link) => {
              const targetHash = getHashFromHref(link.href);
              const isActive =
                onHome && activeHash === targetHash;

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setActiveFromClick(link.href)}
                  className={cn(
                    "px-4 py-3 rounded-2xl text-ink-800 font-medium transition-colors",
                    isActive
                      ? "border border-[#e9e3d9] bg-[rgba(225,220,210,0.75)] text-ink-900 shadow-[0_12px_30px_-18px_rgba(22,36,31,0.38)]"
                      : "hover:bg-white/40"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="mx-2 mt-1 mb-1 inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366]/60 bg-[#25D366] px-4 py-3 font-semibold text-white shadow-[0_12px_26px_-14px_rgba(37,211,102,0.9)]"
            >
              <WhatsAppIcon size={18} className="text-white" />
              WhatsApp
            </a>
          </nav>
        </motion.div>
      )}
    </header>
  );
}

