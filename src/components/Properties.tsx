import { MapPin, Users, Waves } from 'lucide-react';
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import property3 from '@/assets/property-3.jpg';

const properties = [
  {
    id: 1,
    name: 'Suite Ocean View',
    location: 'Primera línea de playa',
    price: '$180',
    period: 'noche',
    image: property1,
    guests: 4,
    amenities: ['Vista al mar', 'Cocina completa', 'Terraza'],
    featured: true,
  },
  {
    id: 2,
    name: 'Master Retreat',
    location: 'Frente al mar',
    price: '$220',
    period: 'noche',
    image: property2,
    guests: 6,
    amenities: ['2 habitaciones', 'Piscina', 'Gym'],
    featured: false,
  },
  {
    id: 3,
    name: 'Penthouse Paradise',
    location: 'Vista panorámica',
    price: '$350',
    period: 'noche',
    image: property3,
    guests: 8,
    amenities: ['Terraza privada', 'Jacuzzi', 'Servicio VIP'],
    featured: false,
  },
];

const Properties = () => {
  return (
    <section id="properties" className="py-20 lg:py-32 bg-sand-light noise-overlay">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-ocean-light text-ocean font-medium text-sm mb-4">
            Alojamientos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Encuentra tu refugio
            <span className="text-ocean"> perfecto</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Espacios diseñados para el descanso absoluto, con todas las comodidades que mereces.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {properties.map((property, index) => (
            <article
              key={property.id}
              className={`group relative bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-float transition-all duration-500 ${
                index === 0 ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''
              }`}
            >
              {/* Image Container */}
              <div className={`relative overflow-hidden ${index === 0 ? 'lg:h-full lg:min-h-[500px]' : 'h-64'}`}>
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 px-4 py-2 bg-card/90 backdrop-blur-sm rounded-xl shadow-soft">
                  <span className="font-display text-xl font-bold text-foreground">{property.price}</span>
                  <span className="text-muted-foreground text-sm">/{property.period}</span>
                </div>

                {/* Featured Badge */}
                {property.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-ocean text-primary-foreground rounded-full text-sm font-medium">
                    Destacado
                  </div>
                )}

                {/* Hover Reveal Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex flex-wrap gap-2">
                    {property.amenities.map((amenity) => (
                      <span
                        key={amenity}
                        className="px-3 py-1 bg-card/80 backdrop-blur-sm rounded-full text-sm text-foreground"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-ocean transition-colors">
                  {property.name}
                </h3>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-ocean" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-seafoam" />
                    <span className="text-sm">{property.guests} huéspedes</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
