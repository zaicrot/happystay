export interface ListingImages {
  slug: string;
  images: string[];
}

const BASE_URL = "https://integracion149.com/website_c6cf0a7f/frontend";

const makeImages = (folder: string, total: number): string[] =>
  Array.from(
    { length: total },
    (_, idx) => `${BASE_URL}/${folder}/${String(idx + 1).padStart(2, "0")}.webp`
  );

export const listings: ListingImages[] = [
  {
    slug: "beachfront-playa-senoritas-piscina-terraza",
    images: makeImages("beachfront-playa-senoritas-piscina-terraza", 13),
  },
  {
    slug: "duplex-mirador-del-mar-pool-best-view",
    images: makeImages("duplex-mirador-del-mar-pool-best-view", 22),
  },
  {
    slug: "paradise-in-stunning-beach-house-playa-caballeros",
    images: makeImages("paradise-in-stunning-beach-house-playa-caballeros", 20),
  },
  {
    slug: "sunset-view-duplex",
    images: makeImages("sunset-view-duplex", 13),
  },
  {
    slug: "vista-mar-prime",
    images: makeImages("vista-mar-prime", 24),
  },
];
