import { motion } from "framer-motion";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";

export function Products() {
  return (
    <section id="products" className="relative py-24 sm:py-32 bg-gradient-to-b from-transparent via-sky-50/40 to-transparent">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <span className="inline-flex items-center rounded-full bg-sky-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-800">
            Our Products
          </span>
          <h2 className="mt-5 text-balance text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink-900">
            Seeds developed for the field, not the shelf.
          </h2>
          <p className="mt-4 text-ink-600">
            Every Manani Seeds product is presented here — explore each one for
            full details, farmer benefits and WhatsApp enquiry.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, i) => (
            <ProductCard key={product.slug} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
