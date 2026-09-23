import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Story } from "@/components/sections/Story";
import { Products } from "@/components/sections/Products";
import { WhyUs } from "@/components/sections/WhyUs";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";

export function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <Story />
      <Products />
      <WhyUs />
      <Gallery />
      <Contact />
    </main>
  );
}
