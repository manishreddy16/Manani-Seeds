import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Sprout,
  BarChart3,
  CloudSun,
  CheckCircle2,
} from "lucide-react";
import { getProductBySlug, products } from "@/data/products";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    if (product) document.title = `${product.name} — Manani Seeds`;
  }, [product]);

  if (!product) return <Navigate to="/" replace />;

  const comingSoon = product.status === "coming-soon";
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <main className="pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Link
          to="/#products"
          className="inline-flex items-center gap-2 text-sm font-medium text-ink-600 hover:text-sky-600 transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <MediaFrame
              asset={product.images.field}
              tone={product.accent === "earth" ? "earth" : product.accent}
              className={`h-72 sm:h-96 w-full shadow-soft ${comingSoon ? "blur-[3px] saturate-75" : ""}`}
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-44 sm:w-40 sm:h-52"
            >
              <MediaFrame
                asset={product.images.pack}
                tone={product.accent === "earth" ? "earth" : product.accent}
                rounded="rounded-2xl"
                className="h-full w-full shadow-soft border-4 border-white"
              />
            </motion.div>
            {comingSoon && (
              <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-ink-900/85 text-white text-xs font-semibold px-3 py-1.5">
                <Clock size={12} /> Coming Soon
              </span>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 lg:mt-0"
          >
            <span className="inline-flex items-center rounded-full bg-sky-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-800">
              {product.crop}
            </span>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl font-semibold text-ink-900">
              {product.name}
            </h1>
            <p className="mt-3 text-lg text-ink-600">{product.tagline}</p>
            <p className="mt-6 text-ink-700 leading-relaxed">
              {product.description}
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <SpecCard icon={Clock} label="Duration" value={product.duration} />
              <SpecCard icon={BarChart3} label="Yield" value={product.yieldInfo} />
              <SpecCard
                icon={CloudSun}
                label="Conditions"
                value={product.suitableConditions}
              />
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-ink-900 mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-ink-700">
                    <CheckCircle2 size={18} className="text-leaf-600 mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-lime-50 to-sky-50 border border-ink-900/5 p-6">
              <div className="flex items-center gap-2 mb-2">
                <Sprout size={18} className="text-leaf-600" />
                <h3 className="font-semibold text-ink-900">
                  {product.teluguContent.heading}
                </h3>
              </div>
              <p className="lang-te text-ink-700 leading-relaxed">
                {product.teluguContent.body}
              </p>
            </div>

            <a
              href={whatsappLink(
                `Hello Manani Seeds, I'd like to know more about ${product.name}.`
              )}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-leaf-500 text-white px-7 py-3.5 font-semibold shadow-soft hover:scale-[1.03] transition-transform"
            >
              <WhatsAppIcon size={18} />
              {comingSoon ? "Get Notified on WhatsApp" : "Enquire on WhatsApp"}
            </a>
          </motion.div>
        </div>

        <div className="mt-24">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink-900 mb-8">
            Explore other products
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="group rounded-2xl border border-ink-900/5 bg-white/70 p-5 shadow-soft hover:-translate-y-1 transition-transform"
              >
                <MediaFrame
                  asset={p.images.field}
                  tone={p.accent === "earth" ? "earth" : p.accent}
                  className="h-32 w-full mb-4"
                />
                <h3 className="font-semibold text-ink-900">{p.name}</h3>
                <p className="text-sm text-ink-600 mt-1">{p.crop}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

function SpecCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Clock;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-ink-900/5 bg-white/60 p-4 text-center">
      <Icon size={18} className="mx-auto text-sky-600 mb-2" />
      <p className="text-[11px] uppercase tracking-wide text-ink-500">{label}</p>
      <p className="text-sm font-medium text-ink-800 mt-1 leading-snug">{value}</p>
    </div>
  );
}
