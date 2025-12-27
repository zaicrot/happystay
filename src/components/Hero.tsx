import { Button } from '@/components/ui/button';
import { MapPin, Star } from 'lucide-react';
import heroImage from '@/assets/hero-beach.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Vista al mar desde terraza de departamento premium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 shadow-soft mb-8 animate-fade-in-up">
            <Star className="w-4 h-4 text-ocean fill-ocean" />
            <span className="text-sm font-medium text-foreground">
              Alojamientos premium frente al mar
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Tu hogar
            <span className="block text-ocean">frente al mar</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Descansa sin preocupaciones en nuestros exclusivos departamentos con vista al océano. Comodidad, seguridad y experiencia vacacional premium.
          </p>

          {/* Location */}
          <div className="flex items-center gap-2 mb-8 animate-fade-in-up" style={{ animationDelay: '250ms' }}>
            <MapPin className="w-5 h-5 text-ocean" />
            <span className="text-muted-foreground">Playa del Carmen, México</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Button variant="hero">
              Ver alojamientos
            </Button>
            <Button variant="heroOutline">
              Conocer más
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="hidden lg:block absolute bottom-12 right-12 z-10">
        <div className="bg-card/90 backdrop-blur-md rounded-3xl p-6 shadow-float border border-border/50 animate-float">
          <div className="flex gap-8">
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-ocean">500+</div>
              <div className="text-sm text-muted-foreground">Huéspedes felices</div>
            </div>
            <div className="w-px bg-border" />
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-seafoam">4.9</div>
              <div className="text-sm text-muted-foreground">Calificación</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative organic shape */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-ocean-light/30 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default Hero;
