import { ScrollReveal } from '@/hooks/useScrollReveal';
import PropertyCard, { PropertyData } from './PropertyCard';
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import property3 from '@/assets/property-3.jpg';
import detailKitchen from '@/assets/detail-kitchen.jpg';
import detailTerrace from '@/assets/detail-terrace.jpg';
import heroBeach from '@/assets/hero-beach.jpg';
import lifestyleCouple from '@/assets/lifestyle-couple.jpg';
import lifestyleFamily from '@/assets/lifestyle-family.jpg';
import lifestyleFriends from '@/assets/lifestyle-friends.jpg';
import lifestyleRemote from '@/assets/lifestyle-remote.jpg';

const properties: PropertyData[] = [
  {
    id: 1,
    name: 'Costa Peruana 2182 | Playa Señoritas',
    location: 'Punta Hermosa, Lima',
    price: 'S/. 850',
    period: 'noche',
    images: [
      property1,
      detailKitchen,
      detailTerrace,
      heroBeach,
      lifestyleCouple,
      lifestyleFamily,
      lifestyleFriends,
      lifestyleRemote,
    ],
    guests: 6,
    bedrooms: 2,
    bathrooms: 2,
    amenities: [
      { icon: 'beach', label: 'Frente a la playa' },
      { icon: 'ac', label: 'Aire Acondicionado' },
      { icon: 'grill', label: 'Parrilla' },
      { icon: 'terrace', label: 'Terraza' },
      { icon: 'security', label: 'Seguridad 24/7' },
      { icon: 'kitchen', label: 'Cocina Equipada' },
      { icon: 'pool', label: 'Piscina Temperada' },
      { icon: 'wifi', label: 'WiFi de alta velocidad' },
      { icon: 'coffee', label: 'Cafetera' },
      { icon: 'bedding', label: 'Ropa de Cama Premium' },
      { icon: 'bath', label: 'Artículos de Aseo' },
      { icon: 'parking', label: 'Estacionamiento' },
    ],
    featured: true,
    airbnbUrl: 'https://airbnb.com',
  },
  {
    id: 2,
    name: 'Blue Paradise XIII | Playa Caballeros',
    location: 'Punta Hermosa, Lima',
    price: 'S/. 850',
    period: 'noche',
    images: [
      property2,
      detailTerrace,
      detailKitchen,
      heroBeach,
      lifestyleRemote,
      lifestyleFriends,
      lifestyleFamily,
      lifestyleCouple,
    ],
    guests: 8,
    bedrooms: 3,
    bathrooms: 2,
    amenities: [
      { icon: 'beach', label: 'Frente a la playa' },
      { icon: 'grill', label: 'Parrilla' },
      { icon: 'terrace', label: 'Terraza Amplia' },
      { icon: 'security', label: 'Seguridad 24/7' },
      { icon: 'kitchen', label: 'Cocina Equipada' },
      { icon: 'pool', label: 'Piscina Grande' },
      { icon: 'wifi', label: 'WiFi' },
      { icon: 'coffee', label: 'Cafetera' },
      { icon: 'bedding', label: 'Ropa de Cama' },
      { icon: 'bath', label: 'Artículos de Aseo' },
      { icon: 'parking', label: 'Estacionamiento' },
      { icon: 'gym', label: 'Gimnasio' },
    ],
    featured: false,
    airbnbUrl: 'https://airbnb.com',
  },
  {
    id: 3,
    name: 'Sunset View Premium | Playa Norte',
    location: 'Punta Hermosa, Lima',
    price: 'S/. 1,200',
    period: 'noche',
    images: [
      property3,
      heroBeach,
      detailKitchen,
      detailTerrace,
      lifestyleFamily,
      lifestyleCouple,
      lifestyleRemote,
      lifestyleFriends,
    ],
    guests: 10,
    bedrooms: 4,
    bathrooms: 3,
    amenities: [
      { icon: 'beach', label: 'Vista al Mar' },
      { icon: 'ac', label: 'Aire Acondicionado' },
      { icon: 'grill', label: 'Parrilla Premium' },
      { icon: 'terrace', label: 'Terraza Panorámica' },
      { icon: 'security', label: 'Seguridad 24/7' },
      { icon: 'kitchen', label: 'Cocina Gourmet' },
      { icon: 'pool', label: 'Piscina Infinity' },
      { icon: 'wifi', label: 'WiFi Fibra Óptica' },
      { icon: 'coffee', label: 'Cafetera Espresso' },
      { icon: 'bedding', label: 'Ropa de Cama Luxury' },
      { icon: 'bath', label: 'Jacuzzi' },
      { icon: 'parking', label: '2 Estacionamientos' },
      { icon: 'gym', label: 'Gimnasio Privado' },
    ],
    featured: false,
    airbnbUrl: 'https://airbnb.com',
  },
];

const Properties = () => {
  return (
    <section id="properties" className="py-20 lg:py-32 bg-sand-light noise-overlay">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="max-w-2xl mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-ocean-light text-ocean font-medium text-sm mb-4">
            Nuestros Alojamientos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Encuentra tu refugio
            <span className="text-ocean"> perfecto</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Espacios diseñados para el descanso absoluto, con todas las comodidades que mereces.
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
