import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/hooks/useScrollReveal';
import heroImage from '@/assets/hero-beach.jpg';

const FinalCTA = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Vista al mar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Tu hogar frente al mar
            <span className="block text-ocean-light mt-2">te espera</span>
          </h2>

          <p className="text-xl text-primary-foreground/80 mb-10 max-w-xl mx-auto">
            Descansa, nosotros nos encargamos. Reserva hoy y comienza a vivir la experiencia HappyStay.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" className="bg-card text-foreground hover:bg-card/90">
              Reservar ahora
            </Button>
            <Button variant="heroOutline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Contactar
            </Button>
          </div>
        </ScrollReveal>
      </div>

      {/* Decorative organic shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-ocean/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-seafoam/20 rounded-full blur-3xl" />
    </section>
  );
};

export default FinalCTA;
