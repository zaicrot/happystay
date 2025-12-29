import { useState } from 'react';
import { Expand } from 'lucide-react';
import { ScrollReveal, StaggerReveal } from '@/hooks/useScrollReveal';
import { Lightbox, useLightbox } from './Lightbox';

import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import property3 from '@/assets/property-3.jpg';
import detailKitchen from '@/assets/detail-kitchen.jpg';
import detailTerrace from '@/assets/detail-terrace.jpg';
import heroBeach from '@/assets/hero-beach.jpg';
import lifestyleCouple from '@/assets/lifestyle-couple.jpg';
import lifestyleFamily from '@/assets/lifestyle-family.jpg';

const galleryImages = [
  { src: heroBeach, alt: 'Vista panorámica de la playa', title: 'Vista Panorámica', category: 'exterior' },
  { src: property1, alt: 'Suite Ocean View', title: 'Suite Ocean View', category: 'habitaciones' },
  { src: detailTerrace, alt: 'Terraza con vista al mar', title: 'Terraza Privada', category: 'exterior' },
  { src: property2, alt: 'Master Retreat', title: 'Master Retreat', category: 'habitaciones' },
  { src: detailKitchen, alt: 'Cocina gourmet equipada', title: 'Cocina Gourmet', category: 'interiores' },
  { src: lifestyleCouple, alt: 'Experiencia de pareja', title: 'Momentos Especiales', category: 'lifestyle' },
  { src: property3, alt: 'Penthouse Paradise', title: 'Penthouse Paradise', category: 'habitaciones' },
  { src: lifestyleFamily, alt: 'Vacaciones en familia', title: 'Tiempo en Familia', category: 'lifestyle' },
];

const categories = [
  { id: 'all', label: 'Todas' },
  { id: 'habitaciones', label: 'Habitaciones' },
  { id: 'exterior', label: 'Exteriores' },
  { id: 'interiores', label: 'Interiores' },
  { id: 'lifestyle', label: 'Lifestyle' },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { isOpen, currentIndex, openLightbox, closeLightbox, navigateTo } = useLightbox();

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-sand-light noise-overlay">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="max-w-2xl mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-ocean-light text-ocean font-medium text-sm mb-4">
            Galería
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Descubre cada
            <span className="text-ocean"> rincón</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explora nuestros espacios a través de imágenes que capturan la esencia de la experiencia.
          </p>
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal delay={100} className="mb-10">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-ocean text-primary-foreground shadow-soft'
                    : 'bg-card text-muted-foreground hover:bg-sand hover:text-foreground'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Masonry/Mosaic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {filteredImages.map((image, index) => {
            // Create varied sizes for mosaic effect
            const isLarge = index === 0 || index === 5;
            const isTall = index === 2 || index === 6;
            
            return (
              <ScrollReveal
                key={`${image.src}-${index}`}
                delay={index * 80}
                className={`
                  ${isLarge ? 'col-span-2 row-span-2' : ''}
                  ${isTall ? 'row-span-2' : ''}
                `}
              >
                <button
                  onClick={() => openLightbox(index)}
                  className="group relative w-full h-full min-h-[200px] rounded-2xl overflow-hidden shadow-card hover:shadow-float transition-all duration-500 cursor-pointer"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content on Hover */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="w-14 h-14 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center mb-3 shadow-soft">
                      <Expand className="w-6 h-6 text-ocean" />
                    </div>
                    <span className="font-display text-card font-semibold text-lg text-center px-4">
                      {image.title}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-card/80 backdrop-blur-sm rounded-full text-xs font-medium text-foreground capitalize">
                    {image.category}
                  </div>
                </button>
              </ScrollReveal>
            );
          })}
        </div>

        {/* View More CTA */}
        <ScrollReveal delay={300} className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            ¿Quieres ver más? Contáctanos para un tour virtual personalizado.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-ocean text-primary-foreground rounded-full font-medium hover:bg-ocean-dark transition-colors shadow-soft hover:shadow-float"
          >
            Solicitar tour virtual
          </a>
        </ScrollReveal>
      </div>

      {/* Lightbox */}
      <Lightbox
        images={filteredImages}
        isOpen={isOpen}
        currentIndex={currentIndex}
        onClose={closeLightbox}
        onNavigate={navigateTo}
      />
    </section>
  );
};

export default Gallery;
