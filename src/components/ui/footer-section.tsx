import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { Phone } from "lucide-react";
import { siteConfig, navLinks } from "@/data/site";
import { products } from "@/data/products";
import { media } from "@/data/media";
import { MediaFrame } from "./MediaFrame";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { whatsappLink } from "@/lib/whatsapp";

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-ink-900/5 bg-linear-to-b from-cream-100 to-cream-50">
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
                className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-sky-500 to-leaf-500 px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:scale-[1.03] transition-transform"
              >
                <WhatsAppIcon size={16} />
                WhatsApp
              </a>
              <p className="mt-4 text-sm text-ink-600">{siteConfig.address}</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-ink-600 hover:text-sky-600 transition-colors"
              >
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone.number}`}
                className="mt-2 inline-flex items-center gap-2 text-sm text-ink-600 transition-colors hover:text-sky-600"
              >
                <Phone size={15} />
                {siteConfig.phone.display}
              </a>
              <div className="mt-5 flex items-center gap-2.5">
                <SocialLink href={siteConfig.socialLinks.youtube} label="YouTube">
                  <SocialGlyph kind="youtube" />
                </SocialLink>
                <SocialLink href={siteConfig.socialLinks.facebook} label="Facebook">
                  <SocialGlyph kind="facebook" />
                </SocialLink>
                <SocialLink href={siteConfig.socialLinks.instagram} label="Instagram">
                  <SocialGlyph kind="instagram" />
                </SocialLink>
              </div>
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

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-900/10 bg-white/60 text-ink-700 transition-colors hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
    >
      {children}
    </a>
  );
}

function SocialGlyph({ kind }: { kind: "youtube" | "facebook" | "instagram" }) {
  if (kind === "youtube") {
    return (
      <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
      </svg>
    );
  }

  if (kind === "facebook") {
    return (
      <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6h1.8V4.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H7.5v3h2.8v8h3.2Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
