import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Products } from "@/components/sections/Products";
import { WhyUs } from "@/components/sections/WhyUs";
import { Story } from "@/components/sections/Story";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";

export function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <Products />
      <WhyUs />
      <Story />
      <Gallery />
      <Contact />
    </main>
  );
}
