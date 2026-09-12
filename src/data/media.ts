// ---------------------------------------------------------------------------
// CENTRALIZED MEDIA MAP
// Every image/video path used across the site is declared here. Drop real
// files into /public/media/... using these exact names and the whole site
// updates automatically — no component edits required.
//
// `real: false` tells components to render the tasteful placeholder panel
// instead of requesting a file that doesn't exist yet. Flip it to `true`
// the moment the matching file is added to /public/media.
// ---------------------------------------------------------------------------

export interface MediaAsset {
  src: string;
  alt: string;
  real: boolean;
}

const asset = (src: string, alt: string): MediaAsset => ({
  src,
  alt,
  real: true,
});

export const media = {
  logo: asset("/media/logo/manani-seeds-logo.png", "Manani Seeds logo"),

  hero: {
    field: asset("/media/hero/hero-field.jpg", "Sunlit paddy field at dawn"),
    farmer: asset("/media/hero/hero-farmer.jpg", "Farmer walking through a field"),
    seed: asset("/media/hero/hero-seed.jpg", "Close-up of a single seed"),
    corridor: [
      asset("/media/hero/corridor/corridor-1.svg", "Paddy field in morning light"),
      asset("/media/hero/corridor/corridor-2.svg", "Farmer working in a paddy field"),
      asset("/media/hero/corridor/corridor-3.svg", "Close-up of paddy grains"),
      asset("/media/hero/corridor/corridor-4.svg", "Rows of young crops"),
      asset("/media/hero/corridor/corridor-5.svg", "Agricultural landscape at golden hour"),
      asset("/media/hero/corridor/corridor-6.svg", "Seed and crop close-up"),
    ],
  },

  farmers: [
    asset("/media/farmers/farmer-1.jpg", "Farmer in a paddy field"),
    asset("/media/farmers/farmer-2.jpg", "Farmer inspecting crop"),
    asset("/media/farmers/farmer-3.jpg", "Farmer holding grain"),
    asset("/media/farmers/farmer-4.jpg", "Farmer at sunrise"),
  ],

  fields: [
    asset("/media/fields/field-1.jpg", "Green paddy field"),
    asset("/media/fields/field-2.jpg", "Field at golden hour"),
    asset("/media/fields/field-3.jpg", "Aerial view of farmland"),
    asset("/media/fields/field-4.jpg", "Rows of crops"),
  ],

  crops: {
    paddy: asset("/media/crops/crop-paddy.jpg", "Paddy crop close-up"),
    maize: asset("/media/crops/crop-maize.jpg", "Maize crop close-up"),
    cotton: asset("/media/crops/crop-cotton.jpg", "Cotton crop close-up"),
  },

  gallery: Array.from({ length: 10 }, (_, i) =>
    asset(`/media/gallery/gallery-${i + 1}.jpg`, `Manani Seeds gallery photograph ${i + 1}`)
  ),

  video: {
    storyLoop: "/media/videos/story-loop.mp4",
  },

  products: {
    zoomba: {
      pack: asset("/media/products/zoomba/pack.png", "ZOOMBA seed pack"),
      field: asset("/media/products/zoomba/field.jpg", "ZOOMBA field"),
      grain: asset("/media/products/zoomba/grain.jpg", "ZOOMBA grain close-up"),
    },
    "manani-666": {
      pack: asset("/media/products/manani-666/pack.png", "MANANI 666 seed pack"),
      field: asset("/media/products/manani-666/field.jpg", "MANANI 666 field"),
      grain: asset("/media/products/manani-666/grain.jpg", "MANANI 666 grain close-up"),
    },
    bhoomi: {
      pack: asset("/media/products/bhoomi/pack.png", "BHOOMI seed pack"),
      field: asset("/media/products/bhoomi/field.jpg", "BHOOMI field"),
      grain: asset("/media/products/bhoomi/grain.jpg", "BHOOMI grain close-up"),
    },
    rudhraksha: {
      pack: asset("/media/products/rudhraksha/pack.png", "RUDHRAKSHA seed pack"),
      field: asset("/media/products/rudhraksha/field.jpg", "RUDHRAKSHA field"),
      grain: asset("/media/products/rudhraksha/grain.jpg", "RUDHRAKSHA grain close-up"),
    },
    maize: {
      pack: asset("/media/products/maize/pack.png", "MAIZE seed pack — coming soon"),
      field: asset("/media/products/maize/field.jpg", "Maize field"),
      grain: asset("/media/products/maize/grain.jpg", "Maize grain close-up"),
    },
  },
};

export type ProductSlug = keyof typeof media.products;
