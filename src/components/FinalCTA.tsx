import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useState, useRef } from "react";
import heroImage from "@/assets/hero-beach.jpg";

const FinalCTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.bottom < 0 || rect.top > windowHeight) return;

      const scrollProgress =
        (windowHeight - rect.top) / (windowHeight + rect.height);
      setParallaxOffset((scrollProgress - 0.5) * 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Vista al mar"
          className="w-full h-[130%] object-cover transition-transform duration-100 ease-out"
          style={{
            transform: `translateY(${parallaxOffset}px) scale(1.1)`,
          }}
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Vive Happy Stay
            <span className="block text-ocean-light mt-2">
              o deja que gestionemos tu Airbnb
            </span>
          </h2>

          <p className="text-xl text-primary-foreground/80 mb-10 max-w-xl mx-auto">
            Reserva tu próxima estadía o delega la administración completa con
            un anfitrión 5 estrellas. Tú descansas, nosotros operamos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              variant="hero"
              className="bg-card text-foreground hover:bg-card/90"
            >
              <a href="#properties">Reservar ahora</a>
            </Button>
            <Button
              asChild
              variant="heroOutline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a
                href="https://wa.me/51989856864?text=Quiero%20que%20administres%20mi%20propiedad%20con%20Happy%20Stay"
                target="_blank"
                rel="noreferrer"
              >
                Administrar mi propiedad
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>

      {/* Decorative organic shapes with parallax */}
      <div
        className="absolute top-0 left-0 w-64 h-64 bg-ocean/20 rounded-full blur-3xl"
        style={{ transform: `translateY(${-parallaxOffset * 0.5}px)` }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-seafoam/20 rounded-full blur-3xl"
        style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
      />
    </section>
  );
};

export default FinalCTA;
