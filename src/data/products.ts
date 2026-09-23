import { media } from "./media";

// ---------------------------------------------------------------------------
// PRODUCT DATA ARCHITECTURE
// Update names, descriptions, specs and Telugu content here only.
// No visual component needs to change when this data changes.
//
// IMPORTANT: fields left as "—" or with a placeholder note are intentionally
// unset. Never fill these with invented agricultural specifications —
// replace them only once confirmed by the business.
// ---------------------------------------------------------------------------

export type ProductStatus = "available" | "coming-soon";

export interface Product {
  name: string;
  slug: string;
  crop: string;
  tagline: string;
  shortDescription: string;
  description: string;
  features: string[];
  duration: string;
  yieldInfo: string;
  suitableConditions: string;
  teluguContent: {
    heading: string;
    body: string;
  };
  images: {
    pack: (typeof media.products)["zoomba"]["pack"];
    field: (typeof media.products)["zoomba"]["field"];
    grain: (typeof media.products)["zoomba"]["grain"];
  };
  status: ProductStatus;
  accent: "sky" | "lime" | "leaf" | "earth";
}

export const products: Product[] = [
  {
    name: "ZOOMBA",
    slug: "zoomba",
    crop: "Paddy",
    tagline: "Built for consistent field performance.",
    shortDescription:
      "A dependable paddy variety developed with a focus on field consistency.",
    description:
      "ZOOMBA is Manani Seeds' flagship paddy variety, developed to give farmers a dependable option across a range of field conditions. It is positioned as a consistent, trustworthy choice for farmers seeking predictable results season after season.",
    features: [
      "Consistent field performance",
      "Suited to standard paddy cultivation practices",
      "Backed by Manani Seeds quality checks",
      "Positioned for farmers who value predictability",
    ],
    duration: "Placeholder — to be confirmed",
    yieldInfo: "Placeholder — to be confirmed",
    suitableConditions: "Placeholder — to be confirmed",
    teluguContent: {
      heading: "నమ్మకమైన దిగుబడి కోసం జూంబా",
      body: "రైతుల అనుభవం ఆధారంగా రూపొందించిన జూంబా వరి రకం స్థిరమైన పనితీరు కోసం రూపొందించబడింది.",
    },
    images: media.products.zoomba,
    status: "available",
    accent: "sky",
  },
  {
    name: "MANANI 666",
    slug: "manani-666",
    crop: "Paddy",
    tagline: "A trusted name farmers know by number.",
    shortDescription:
      "One of Manani Seeds' established paddy varieties, trusted across growing regions.",
    description:
      "MANANI 666 carries the Manani name directly into its identity — a signal of the confidence the company places behind it. It is developed for farmers looking for an established, well-regarded paddy option.",
    features: [
      "Established variety within the Manani range",
      "Developed for regional adaptability",
      "Quality-checked before distribution",
      "Supported by Manani's farmer-first approach",
    ],
    duration: "Placeholder — to be confirmed",
    yieldInfo: "Placeholder — to be confirmed",
    suitableConditions: "Placeholder — to be confirmed",
    teluguContent: {
      heading: "మనని 666 – రైతుల నమ్మకం",
      body: "మనని 666 అనేక ప్రాంతాలలో రైతుల విశ్వాసాన్ని పొందిన వరి రకం.",
    },
    images: media.products["manani-666"],
    status: "available",
    accent: "leaf",
  },
  {
    name: "BHOOMI",
    slug: "bhoomi",
    crop: "Paddy",
    tagline: "Named for the land it grows from.",
    shortDescription:
      "A variety named after the earth itself — developed with soil-first thinking.",
    description:
      "BHOOMI — meaning 'earth' — reflects Manani Seeds' commitment to varieties developed with the land in mind. It is offered to farmers as part of Manani's broader paddy portfolio.",
    features: [
      "Developed with soil-conscious agronomy in mind",
      "Part of Manani's core paddy portfolio",
      "Processed under Manani's quality standards",
      "Positioned for everyday farming needs",
    ],
    duration: "Placeholder — to be confirmed",
    yieldInfo: "Placeholder — to be confirmed",
    suitableConditions: "Placeholder — to be confirmed",
    teluguContent: {
      heading: "భూమి – మట్టికి తగిన విత్తనం",
      body: "భూమి పేరుకు తగినట్టుగా, ఈ రకం మట్టిని దృష్టిలో ఉంచుకుని రూపొందించబడింది.",
    },
    images: media.products.bhoomi,
    status: "available",
    accent: "earth",
  },
  {
    name: "RUDHRAKSHA",
    slug: "rudhraksha",
    crop: "Paddy",
    tagline: "A name that carries strength and trust.",
    shortDescription:
      "A distinctively named variety in the Manani Seeds paddy lineup.",
    description:
      "RUDHRAKSHA rounds out Manani Seeds' current paddy lineup, offered to farmers as another dependable choice within the company's range of quality-checked seed varieties.",
    features: [
      "Part of Manani's quality-checked paddy range",
      "Offered as a dependable seasonal choice",
      "Developed with farmer feedback in mind",
      "Backed by the Manani Seeds name",
    ],
    duration: "Placeholder — to be confirmed",
    yieldInfo: "Placeholder — to be confirmed",
    suitableConditions: "Placeholder — to be confirmed",
    teluguContent: {
      heading: "రుద్రాక్ష – బలానికి మారుపేరు",
      body: "రుద్రాక్ష మనని విత్తనాల శ్రేణిలో మరో నమ్మకమైన ఎంపిక.",
    },
    images: media.products.rudhraksha,
    status: "available",
    accent: "sky",
  },
  {
    name: "MAIZE",
    slug: "maize",
    crop: "Maize",
    tagline: "The next Manani Seeds variety is on its way.",
    shortDescription:
      "Manani Seeds' upcoming maize variety — currently in development.",
    description:
      "Manani Seeds is preparing to expand beyond paddy with a dedicated maize variety. Details will be announced as the product nears release — stay in touch via WhatsApp to be notified first.",
    features: [
      "In active development",
      "Expanding the Manani Seeds portfolio beyond paddy",
      "Full specifications to be announced at launch",
      "Enquire on WhatsApp for early updates",
    ],
    duration: "To be announced",
    yieldInfo: "To be announced",
    suitableConditions: "To be announced",
    teluguContent: {
      heading: "మొక్కజొన్న – త్వరలో అందుబాటులోకి",
      body: "మనని విత్తనాల తదుపరి రకం మొక్కజొన్న త్వరలో రైతులకు అందుబాటులోకి రానుంది.",
    },
    images: media.products.maize,
    status: "coming-soon",
    accent: "lime",
  },
];

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);
