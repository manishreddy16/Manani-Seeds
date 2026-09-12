import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { siteConfig, navLinks } from "@/data/site";
import { products } from "@/data/products";
import { media } from "@/data/media";
import { MediaFrame } from "./MediaFrame";
import { whatsappLink } from "@/lib/whatsapp";

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-ink-900/5 bg-gradient-to-b from-cream-100 to-cream-50">
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-lime-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/#home" className="flex items-center gap-2.5">
              <MediaFrame asset={media.logo} tone="sky" rounded="rounded-xl" className="h-10 w-10" />
              <span className="font-display text-xl font-semibold text-ink-900">
                Manani Seeds
              </span>
            </Link>
            <p className="mt-4 text-sm text-ink-600 max-w-xs">
              {siteConfig.tagline}
            </p>
            <p className="lang-te mt-2 text-sm text-ink-600 max-w-xs">
              {siteConfig.teluguTagline}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-500">
              Explore
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-ink-700 hover:text-sky-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-500">
              Products
            </h3>
            <ul className="mt-4 space-y-3">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/products/${p.slug}`}
                    className="text-sm text-ink-700 hover:text-sky-600 transition-colors"
                  >
                    {p.name}
                    {p.status === "coming-soon" && (
                      <span className="ml-2 text-xs text-lime-700">Coming Soon</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-500">
              Connect
            </h3>
            <div className="mt-4">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-leaf-500 px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:scale-[1.03] transition-transform"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <p className="mt-4 text-sm text-ink-600">{siteConfig.address}</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-ink-600 hover:text-sky-600 transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-ink-900/5 pt-6">
          <p className="text-xs text-ink-500">
            © {year} Manani Seeds. All rights reserved.
          </p>
          <p className="text-xs text-ink-500">
            Seeds with a New Skill
          </p>
        </div>
      </div>
    </footer>
  );
}
