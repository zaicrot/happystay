import { ScrollReveal } from "@/hooks/useScrollReveal";
import PropertyCard, { PropertyData } from "./PropertyCard";
import { listings } from "@/lib/listings";

const getImages = (slug: string, count?: number) => {
  const match = listings.find((item) => item.slug === slug);
  if (!match) return [];
  return typeof count === "number"
    ? match.images.slice(0, count)
    : match.images;
};

const properties: PropertyData[] = [
  {
    id: 5,
    name: "Vista Mar Prime",
    location: "Vista Mar Prime · Punta Hermosa",
    price: "Consultar",
    period: "noche",
    images: getImages("vista-mar-prime", 10),
    guests: 9,
    bedrooms: 4,
    bathrooms: 3,
    amenities: [
      { icon: "beach", label: "Vista al mar" },
      { icon: "terrace", label: "Terraza panorámica" },
      { icon: "kitchen", label: "Cocina equipada" },
      { icon: "wifi", label: "WiFi" },
      { icon: "parking", label: "Estacionamiento" },
    ],
    featured: false,
    airbnbUrl: "https://www.airbnb.com/l/X5MRxaGZ",
  },
  {
    id: 1,
    name: "Beachfront Señoritas",
    location: "Costa Peruana 2182 | Playa Señoritas",
    price: "Desde S/. 850.00",
    period: "noche",
    images: getImages("beachfront-playa-senoritas-piscina-terraza", 8),
    guests: 10,
    bedrooms: 3,
    bathrooms: 3,
    amenities: [
      { icon: "beach", label: "Frente a la playa" },
      { icon: "ac", label: "Aire Acondicionado" },
      { icon: "grill", label: "Parrilla" },
      { icon: "terrace", label: "Terraza" },
      { icon: "security", label: "Seguridad garantizada" },
      { icon: "kitchen", label: "Cocina Equipada" },
      { icon: "pool", label: "Piscina Temperada" },
      { icon: "wifi", label: "Zona de trabajo" },
      { icon: "coffee", label: "Cafetera" },
      { icon: "bedding", label: "Ropa de Cama" },
      { icon: "bath", label: "Artículos de Aseo" },
      { icon: "parking", label: "Estacionamiento" },
    ],
    featured: true,
    airbnbUrl: "https://es-l.airbnb.com/rooms/1525428116461485955?guests=1&adults=1&s=67&unique_share_id=6a833779-c926-40a8-b4a1-629418adae57",
  },
  {
    id: 2,
    name: "Paradise in Stunning Beach",
    location: "Playa Caballeros · Punta Hermosa",
    price: "Desde S/. 850.00",
    period: "noche",
    images: getImages("paradise-in-stunning-beach-house-playa-caballeros", 10),
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    amenities: [
      { icon: "beach", label: "Frente a la playa" },
      { icon: "grill", label: "Parrilla" },
      { icon: "terrace", label: "Terraza amplia" },
      { icon: "security", label: "Seguridad garantizada" },
      { icon: "kitchen", label: "Cocina Equipada" },
      { icon: "pool", label: "Piscina grande" },
      { icon: "wifi", label: "Zona de trabajo" },
      { icon: "coffee", label: "Cafetera" },
      { icon: "bedding", label: "Ropa de Cama" },
      { icon: "bath", label: "Artículos de Aseo" },
      { icon: "parking", label: "Estacionamiento" },
      { icon: "gym", label: "Gimnasio" },
    ],
    featured: false,
    airbnbUrl: "https://es-l.airbnb.com/rooms/1527899059073105488?guests=1&adults=1&s=67&unique_share_id=2e390b72-41f7-4934-b13a-ac371d7eea6c",
  },
  {
    id: 3,
    name: "Mirador del Mar | Dúplex con piscina",
    location: "Mirador del Mar · Punta Hermosa",
    price: "Consultar",
    period: "noche",
    images: getImages("duplex-mirador-del-mar-pool-best-view", 10),
    guests: 10,
    bedrooms: 4,
    bathrooms: 4,
    amenities: [
      { icon: "beach", label: "Vista al mar" },
      { icon: "ac", label: "Aire acondicionado" },
      { icon: "grill", label: "Parrilla" },
      { icon: "terrace", label: "Terraza amplia" },
      { icon: "security", label: "Seguridad" },
      { icon: "kitchen", label: "Cocina equipada" },
      { icon: "pool", label: "Piscina" },
      { icon: "wifi", label: "WiFi" },
      { icon: "coffee", label: "Cafetera" },
      { icon: "bedding", label: "Ropa de cama" },
      { icon: "bath", label: "Baños completos" },
      { icon: "parking", label: "2 Estacionamientos" },
      { icon: "gym", label: "Gimnasio" },
    ],
    featured: false,
    airbnbUrl: "https://es-l.airbnb.com/rooms/1520379592139978771?guests=1&adults=1&s=67&unique_share_id=c3e94c35-5f86-4142-b175-bc851da1a3cc",
  },
  {
    id: 4,
    name: "Sunset View Dúplex",
    location: "Sunset View · Punta Hermosa",
    price: "Consultar",
    period: "noche",
    images: getImages("sunset-view-duplex", 10),
    guests: 10,
    bedrooms: 3,
    bathrooms: 2,
    amenities: [
      { icon: "beach", label: "Cerca al mar" },
      { icon: "terrace", label: "Terraza" },
      { icon: "pool", label: "Piscina" },
      { icon: "kitchen", label: "Cocina equipada" },
      { icon: "wifi", label: "WiFi" },
      { icon: "parking", label: "Estacionamiento" },
    ],
    featured: false,
    airbnbUrl: "https://es-l.airbnb.com/rooms/1545984399998767987?guests=1&adults=1&s=67&unique_share_id=89b9fddf-297d-4d4b-b0b1-a87139dfbc6c",
  },
];

const Properties = () => {
  return (
    <section
      id="properties"
      className="py-20 lg:py-32 bg-sand-light noise-overlay"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="max-w-2xl mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-ocean-light text-ocean font-medium text-sm mb-4">
            Happy Stay Houses
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Alojamientos premium, mejor organizados
          </h2>
          <p className="text-lg text-muted-foreground">
            Fotos atractivas, ubicación, capacidad y beneficios clave para
            elegir mejor. Calidad antes que cantidad.
          </p>
        </ScrollReveal>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {properties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
