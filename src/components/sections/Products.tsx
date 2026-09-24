import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";

export function Products() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeProduct, setActiveProduct] = useState(0);

  const handleCarouselScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel || carousel.children.length === 0) return;

    const firstCard = carousel.children[0] as HTMLElement;
    const cardStep = firstCard.offsetWidth + 16;
    setActiveProduct(Math.min(products.length - 1, Math.round(carousel.scrollLeft / cardStep)));
  };

  const scrollToProduct = (index: number) => {
    const carousel = carouselRef.current;
    const card = carousel?.children[index] as HTMLElement | undefined;
    if (!carousel || !card) return;

    carousel.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  };

  return (
    <section id="products" className="relative pt-12 pb-24 sm:pt-16 sm:pb-32 bg-gradient-to-b from-transparent via-sky-50/40 to-transparent">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-8 max-w-2xl text-center sm:mb-14"
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

        <div
          ref={carouselRef}
          onScroll={handleCarouselScroll}
          className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-6 pb-4 sm:hidden"
          aria-label="Product carousel"
        >
          {products.map((product, i) => (
            <div key={product.slug} className="w-[84vw] shrink-0 snap-start">
              <ProductCard product={product} index={i} />
            </div>
          ))}
        </div>

        <div className="mt-1 flex justify-center gap-1.5 sm:hidden" aria-label="Product carousel pagination">
          {products.map((product, index) => (
            <button
              key={product.slug}
              type="button"
              aria-label={`Go to ${product.name}`}
              aria-current={activeProduct === index ? "true" : undefined}
              onClick={() => scrollToProduct(index)}
              className={`h-1.5 rounded-full transition-all ${
                activeProduct === index
                  ? "w-5 bg-ink-900"
                  : "w-1.5 bg-ink-900/20"
              }`}
            />
          ))}
        </div>

        <div className="hidden gap-6 sm:grid sm:grid-cols-2 lg:gap-8 lg:grid-cols-3">
          {products.map((product, i) => (
            <ProductCard key={product.slug} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
