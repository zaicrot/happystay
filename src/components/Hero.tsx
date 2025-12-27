import { Button } from '@/components/ui/button';
import { MapPin, Star, ArrowRight, Waves } from 'lucide-react';
import heroImage from '@/assets/hero-beach.jpg';
import property1 from '@/assets/property-1.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Split Layout */}
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-5rem)]">
        {/* Left Content Side */}
        <div className="flex-1 flex items-center justify-center px-6 lg:px-12 xl:px-20 py-16 lg:py-0 bg-background relative z-10">
          <div className="max-w-xl">
            {/* Floating Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ocean-light border border-ocean/20 mb-8 animate-fade-in-up">
              <Waves className="w-4 h-4 text-ocean" />
              <span className="text-sm font-medium text-ocean">
                Premium beachfront rentals
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Despierta con
              <span className="relative inline-block ml-3">
                <span className="relative z-10 text-ocean">el mar</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-ocean/20" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,8 Q25,0 50,8 T100,8" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
              <span className="block mt-2">en tu ventana</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-md mb-8 animate-fade-in-up leading-relaxed" style={{ animationDelay: '200ms' }}>
              Alojamientos exclusivos frente al océano en Playa del Carmen. Comodidad premium, vistas infinitas.
            </p>

            {/* Stats Row */}
            <div className="flex items-center gap-8 mb-10 animate-fade-in-up" style={{ animationDelay: '250ms' }}>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-ocean fill-ocean" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">4.9 rating</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-seafoam" />
                <span className="text-sm text-muted-foreground">Playa del Carmen</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <Button variant="hero" className="group">
                Explorar alojamientos
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="heroOutline">
                Ver experiencias
              </Button>
            </div>
          </div>
        </div>

        {/* Right Image Side */}
        <div className="flex-1 relative lg:min-h-full min-h-[50vh]">
          {/* Main Hero Image */}
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Vista al mar desde terraza de departamento premium"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/20 lg:to-background" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent lg:from-transparent" />
          </div>

          {/* Floating Card - Property Preview */}
          <div className="absolute bottom-8 left-8 right-8 lg:bottom-12 lg:left-12 lg:right-auto lg:max-w-xs z-10 animate-float">
            <div className="bg-card/95 backdrop-blur-md rounded-2xl p-4 shadow-float border border-border/50">
              <div className="flex gap-4">
                <img
                  src={property1}
                  alt="Suite Ocean View"
                  className="w-20 h-20 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-foreground mb-1">Suite Ocean View</h3>
                  <p className="text-sm text-muted-foreground mb-2">Primera línea de playa</p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-lg font-bold text-ocean">$180</span>
                    <span className="text-sm text-muted-foreground">/noche</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 right-10 w-20 h-20 rounded-full bg-seafoam/20 blur-xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-ocean/20 blur-2xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      {/* Bottom Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden pointer-events-none hidden lg:block">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full text-sand-light">
          <path fill="currentColor" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
