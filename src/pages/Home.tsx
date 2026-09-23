import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Story } from "@/components/sections/Story";
import { Products } from "@/components/sections/Products";
import { WhyUs } from "@/components/sections/WhyUs";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";

// NOTE: the previous `<Stats />` section (50,000+ farmers, 12,500+ acres,
// 98% germination, 6+ years) has been removed from the homepage. Those
// numbers are not sourced anywhere in the project and the brief explicitly
// forbids invented statistics. Re-add <Stats /> (component + data still in
// src/components/sections/Stats.tsx and src/data/site.ts:impactStats) once
// Manani Seeds confirms real figures.
export function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Story />
      <Products />
      <WhyUs />
      <Gallery />
      <Contact />
    </main>
  );
}
