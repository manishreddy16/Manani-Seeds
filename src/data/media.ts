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

// Use for any slot whose file has not been dropped into /public/media yet.
// MediaFrame renders a tasteful gradient placeholder instead of a broken
// <img> icon. Flip to `asset()` the moment the real file exists.
const placeholder = (src: string, alt: string): MediaAsset => ({
  src,
  alt,
  real: false,
});

const jpegAsset = (name: string, alt: string): MediaAsset =>
  asset(`/media/farmers/${name}.jpeg`, alt);

export const media = {
  logo: asset("/media/logo/manani-seeds-logo.png", "Manani Seeds logo"),

  hero: {
    field: placeholder("/media/ai/hero-paddy-field.jpg", "Sunlit paddy field at dawn"),
    farmer: placeholder("/media/ai/hero-farmer.jpg", "Farmer walking through a field"),
    seed: placeholder("/media/ai/hero-seed-closeup.jpg", "Close-up of a single seed"),
    corridor: [
      asset("/media/hero/corridor/corridor-1.jpg", "Paddy field in morning light"),
      asset("/media/hero/corridor/corridor-2.jpg", "Farmer working in a paddy field"),
      asset("/media/hero/corridor/corridor-3.jpg", "Close-up of paddy grains"),
      asset("/media/hero/corridor/corridor-4.jpg", "Rows of young crops"),
      asset("/media/hero/corridor/corridor-5.jpg", "Agricultural landscape at golden hour"),
      asset("/media/hero/corridor/corridor-6.jpg", "Seed and crop close-up"),
    ],
  },

  farmers: [
    jpegAsset("farmer-1", "Farmer in a paddy field"),
    jpegAsset("farmer-2", "Farmer inspecting crop"),
    placeholder("/media/ai/farmer-holding-grain.jpg", "Farmer holding grain"),
    placeholder("/media/ai/farmer-at-sunrise.jpg", "Farmer at sunrise"),
  ],

  fields: [
    placeholder("/media/ai/field-green-paddy.jpg", "Green paddy field"),
    placeholder("/media/ai/field-golden-hour.jpg", "Field at golden hour"),
    placeholder("/media/ai/field-aerial-farmland.jpg", "Aerial view of farmland"),
    placeholder("/media/ai/field-rows-of-crops.jpg", "Rows of crops"),
  ],

  crops: {
    paddy: placeholder("/media/ai/crop-paddy-closeup.jpg", "Paddy crop close-up"),
    maize: placeholder("/media/ai/crop-maize-closeup.jpg", "Maize crop close-up"),
    cotton: placeholder("/media/ai/crop-cotton-closeup.jpg", "Cotton crop close-up"),
  },

  gallery: [
    asset("/media/hero/corridor/corridor-1.jpg", "Paddy field in morning light"),
    asset("/media/hero/corridor/corridor-2.jpg", "Farmer working in a paddy field"),
    asset("/media/hero/corridor/corridor-3.jpg", "Close-up of paddy grains"),
    asset("/media/products/zoomba/field.jpg", "ZOOMBA crop field"),
    asset("/media/products/manani-666/field.jpg", "MANANI 666 crop field"),
    asset("/media/products/bhoomi/field.jpg", "BHOOMI crop field"),
    asset("/media/products/rudhraksha/field.jpg", "RUDHRAKSHA crop field"),
    asset("/media/farmers/farmer-1.jpeg", "Farmer in a paddy field"),
  ],

  video: {
    // Points at the file actually present in /public/media/videos.
    storyLoop: "/media/videos/hero.mp4",
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
      grain: placeholder("/media/ai/bhoomi-grain-closeup.jpg", "BHOOMI grain close-up"),
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
