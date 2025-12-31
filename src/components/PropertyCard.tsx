import { useState } from 'react';
import { MapPin, Users, Wifi, Car, Waves, UtensilsCrossed, AirVent, Dumbbell, Bath, Coffee, Bed, ShieldCheck, Flame, TreePalm, X, ChevronLeft, ChevronRight, ExternalLink, Images } from 'lucide-react';
import { ScrollReveal } from '@/hooks/useScrollReveal';

export interface PropertyData {
  id: number;
  name: string;
  location: string;
  price: string;
  period: string;
  images: string[];
  guests: number;
  bedrooms: number;
  bathrooms: number;
  amenities: {
    icon: string;
    label: string;
  }[];
  featured: boolean;
  airbnbUrl?: string;
}

interface PropertyCardProps {
  property: PropertyData;
  index: number;
}

const amenityIcons: Record<string, React.ReactNode> = {
  wifi: <Wifi className="w-4 h-4" />,
  parking: <Car className="w-4 h-4" />,
  pool: <Waves className="w-4 h-4" />,
  kitchen: <UtensilsCrossed className="w-4 h-4" />,
  ac: <AirVent className="w-4 h-4" />,
  gym: <Dumbbell className="w-4 h-4" />,
  bath: <Bath className="w-4 h-4" />,
  coffee: <Coffee className="w-4 h-4" />,
  bedding: <Bed className="w-4 h-4" />,
  security: <ShieldCheck className="w-4 h-4" />,
  grill: <Flame className="w-4 h-4" />,
  terrace: <TreePalm className="w-4 h-4" />,
  beach: <Waves className="w-4 h-4" />,
};

const PropertyCard = ({ property, index }: PropertyCardProps) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (imageIndex: number = 0) => {
    setCurrentImageIndex(imageIndex);
    setIsGalleryOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeGallery();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <>
      <ScrollReveal delay={index * 150}>
        <article className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-float transition-all duration-500">
          {/* Main Image with Gallery Preview */}
          <div className="relative">
            {/* Main Image */}
            <div 
              className="relative h-64 lg:h-72 overflow-hidden cursor-pointer"
              onClick={() => openGallery(0)}
            >
              <img
                src={property.images[0]}
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

              {/* View Photos Button */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-2 bg-card/90 backdrop-blur-sm rounded-lg text-sm font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Images className="w-4 h-4" />
                <span>Ver {property.images.length} fotos</span>
              </div>
            </div>

            {/* Image Thumbnails Preview */}
            <div className="flex gap-1 p-2 bg-muted/50">
              {property.images.slice(0, 4).map((image, idx) => (
                <div
                  key={idx}
                  className="relative flex-1 h-16 overflow-hidden rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => openGallery(idx)}
                >
                  <img
                    src={image}
                    alt={`${property.name} - ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {idx === 3 && property.images.length > 4 && (
                    <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center text-card font-medium">
                      +{property.images.length - 4}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-ocean transition-colors">
              {property.name}
            </h3>
            
            {/* Location & Guests */}
            <div className="flex items-center gap-4 text-muted-foreground mb-4">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-ocean" />
                <span className="text-sm">{property.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-seafoam" />
                <span className="text-sm">{property.guests} huéspedes</span>
              </div>
            </div>

            {/* Room Info */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 pb-4 border-b border-border">
              <span>{property.bedrooms} {property.bedrooms === 1 ? 'habitación' : 'habitaciones'}</span>
              <span>•</span>
              <span>{property.bathrooms} {property.bathrooms === 1 ? 'baño' : 'baños'}</span>
            </div>

            {/* Amenities Section */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-foreground mb-3">Lo que ofrecemos</h4>
              <div className="grid grid-cols-2 gap-2">
                {property.amenities.slice(0, 6).map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-ocean">{amenityIcons[amenity.icon] || <Waves className="w-4 h-4" />}</span>
                    <span>{amenity.label}</span>
                  </div>
                ))}
              </div>
              {property.amenities.length > 6 && (
                <button
                  onClick={() => openGallery(0)}
                  className="mt-2 text-sm text-ocean hover:underline"
                >
                  +{property.amenities.length - 6} más servicios
                </button>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => openGallery(0)}
                className="flex-1 py-3 px-4 bg-ocean/10 text-ocean rounded-xl font-medium hover:bg-ocean/20 transition-colors flex items-center justify-center gap-2"
              >
                <Images className="w-4 h-4" />
                Ver fotos
              </button>
              {property.airbnbUrl && (
                <a
                  href={property.airbnbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 bg-ocean text-primary-foreground rounded-xl font-medium hover:bg-ocean-dark transition-colors flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ir al Airbnb
                </a>
              )}
            </div>
          </div>
        </article>
      </ScrollReveal>

      {/* Gallery Lightbox */}
      {isGalleryOpen && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 backdrop-blur-sm flex flex-col"
          onClick={closeGallery}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 text-card">
            <h3 className="font-display text-lg font-bold">{property.name}</h3>
            <div className="flex items-center gap-4">
              <span className="text-sm opacity-80">
                {currentImageIndex + 1} / {property.images.length}
              </span>
              <button
                onClick={closeGallery}
                className="p-2 rounded-full hover:bg-card/10 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Main Image */}
          <div className="flex-1 flex items-center justify-center p-4 relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={prevImage}
              className="absolute left-4 p-3 rounded-full bg-card/10 hover:bg-card/20 text-card transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <img
              src={property.images[currentImageIndex]}
              alt={`${property.name} - ${currentImageIndex + 1}`}
              className="max-h-[70vh] max-w-full object-contain rounded-lg"
            />
            
            <button
              onClick={nextImage}
              className="absolute right-4 p-3 rounded-full bg-card/10 hover:bg-card/20 text-card transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="p-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex gap-2 overflow-x-auto pb-2 justify-center">
              {property.images.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all ${
                    idx === currentImageIndex 
                      ? 'ring-2 ring-ocean scale-110' 
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Amenities Panel (visible in gallery) */}
          <div className="bg-card/10 backdrop-blur-sm p-4" onClick={(e) => e.stopPropagation()}>
            <h4 className="text-card font-semibold mb-3">Todas las comodidades</h4>
            <div className="flex flex-wrap gap-2">
              {property.amenities.map((amenity, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-2 px-3 py-1.5 bg-card/20 rounded-full text-sm text-card"
                >
                  {amenityIcons[amenity.icon] || <Waves className="w-3 h-3" />}
                  {amenity.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PropertyCard;
