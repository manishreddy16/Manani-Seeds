// ---------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH for site-wide, non-product content.
// Update phone numbers, stats and copy here — components never hardcode them.
// ---------------------------------------------------------------------------

export const siteConfig = {
  name: "Manani Seeds",
  tagline: "Seeds with a New Skill",
  teluguTagline: "కొత్త నైపుణ్యంతో కూడిన విత్తనాలు",
  description:
    "Manani Seeds develops and delivers high-performing agricultural seeds for Indian farmers — bred for resilience, yield and trust.",
  url: "https://mananiseeds.example.com",

  // Update this single number to change every WhatsApp CTA on the site.
  whatsapp: {
    number: "919010566100",
    defaultMessage:
      "Hello Manani Seeds, I would like to know more about your seeds.",
  },

  email: "info@mananiseeds.example.com",
  address: "Manani Seeds, Telangana, India",
};

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Products", href: "/#products" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
];

export const impactStats = [
  {
    value: 50000,
    suffix: "+",
    label: "Farmers Served",
    icon: "users",
  },
  {
    value: 12500,
    suffix: "+",
    label: "Acres Cultivated",
    icon: "sprout",
  },
  {
    value: 98,
    suffix: "%",
    label: "Germination Confidence",
    icon: "leaf",
  },
  {
    value: 6,
    suffix: "+",
    label: "Years of Experience",
    icon: "calendar",
  },
] as const;

export const whyUsPoints = [
  {
    icon: "shield-check",
    title: "Premium Seed Quality",
    description:
      "Every batch is selected and processed with strict quality checks before it reaches a farmer's hands.",
  },
  {
    icon: "users",
    title: "Farmer-First Approach",
    description:
      "We build our products around real field feedback from the farmers who use them every season.",
  },
  {
    icon: "trending-up",
    title: "Consistent Performance",
    description:
      "Bred and processed for dependable performance across varied soil and weather conditions.",
  },
  {
    icon: "flask-conical",
    title: "Agricultural Expertise",
    description:
      "Decades of combined agronomic experience guide every product we bring to market.",
  },
  {
    icon: "cloud-sun",
    title: "Weather Resilience",
    description:
      "Our varieties are developed with an eye toward the unpredictable conditions Indian farmers face.",
  },
  {
    icon: "handshake",
    title: "Trusted Relationships",
    description:
      "We measure success by the long-term trust farmers place in the Manani name, season after season.",
  },
] as const;

export const aboutContent = {
  eyebrow: "About Manani Seeds",
  heading: "Rooted in Agriculture. Growing with Farmers.",
  teluguLine: "రైతుల నమ్మకమే మా విత్తనానికి బలం.",
  paragraphs: [
    "Manani Seeds exists for one reason: to give farmers a seed they can trust from the first sowing to the final harvest.",
    "Every product we release is shaped by agricultural expertise and real conversations with the farmers who plant it — not by guesswork.",
    "Our vision is simple. Better seeds, grown with care, should lead to better harvests and a better future for the families who depend on the land.",
  ],
};

export const storySteps = [
  {
    title: "Seed",
    telugu: "విత్తనం",
    description: "Every harvest begins with a single, carefully chosen seed.",
  },
  {
    title: "Soil",
    telugu: "మట్టి",
    description: "Rooted in the land that has fed generations of farmers.",
  },
  {
    title: "Crop",
    telugu: "పంట",
    description: "Nurtured through every season into a thriving crop.",
  },
  {
    title: "Farmer",
    telugu: "రైతు",
    description: "Grown alongside the farmers who trust it with their land.",
  },
  {
    title: "Harvest",
    telugu: "పంట కోత",
    description: "A season of effort, realised in a bountiful harvest.",
  },
  {
    title: "Future",
    telugu: "భవిష్యత్తు",
    description: "One harvest at a time, building a stronger farming future.",
  },
] as const;
