import { Button } from "@/components/ui/button";
import { MapPin, Star, ArrowRight, Waves } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import heroImage from "@/assets/hero-beach.jpg";
import backendService from "@/services/backend";

const WHATSAPP_URL =
  "https://wa.me/51989856864?text=Quiero%20que%20administres%20mi%20propiedad%20con%20Happy%20Stay";

const WHATSAPP_ASESOR_URL =
  "https://wa.me/51989856864?text=Hola,%20quiero%20hablar%20con%20un%20asesor%20sobre%20Happy%20Stay";

const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [firstListing, setFirstListing] = useState<any>(null);

  useEffect(() => {
    const loadFirstListing = async () => {
      try {
        const response = await backendService.getProperties({ per_page: 5 });
        if (response.data && response.data.length > 0) {
          setFirstListing(response.data[response.data.length - 1]);
        }
      } catch (err) {
        console.error("Error loading first listing:", err);
      }
    };

    loadFirstListing();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setParallaxOffset(scrollY * 0.4);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-20 overflow-hidden">
      {/* Split Layout */}
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-5rem)]">
        {/* Left Content Side */}
        <div className="flex-1 flex items-center justify-center px-6 lg:px-12 xl:px-20 py-16 lg:py-0 bg-background relative z-10">
          <div className="max-w-xl">
            {/* Main Headline */}
            <h1
              className="wendy-one-regular text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-foreground leading-[1.1] mb-6 animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              {/* Happy Stay */}
              <span className="block mt-2 text-ocean">
                Alojamientos premium
              </span>
              <span className="block">y gestión profesional de Airbnb</span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg md:text-xl text-muted-foreground max-w-md mb-8 animate-fade-in-up leading-relaxed"
              style={{ animationDelay: "200ms" }}
            >
              Alojamientos administrados por un anfitrión 5 estrellas,
              especializado en alquileres vacacionales para grupos grandes.
              Playa, casas de campo y escapes premium con operación integral.
            </p>

            {/* Stats Row */}
            <div
              className="flex items-center gap-8 mb-10 animate-fade-in-up"
              style={{ animationDelay: "250ms" }}
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-ocean fill-ocean" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  +200 estadías 5 estrellas
                </span>
              </div>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-seafoam" />
                <span className="text-sm text-muted-foreground">
                  Punta Hermosa · Playa
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              <Button asChild variant="hero" className="group">
                <a
                  href={WHATSAPP_ASESOR_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="py-6"
                >
                  Hablar con un asesor
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild variant="heroOutline">
                <a href="#properties" className="py-6">
                  Descubre nuestras propiedades
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Right Image Side with Parallax */}
        <div
          className="flex-1 relative lg:min-h-full min-h-[50vh]"
          ref={imageRef}
        >
          {/* Main Hero Image with Parallax */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={heroImage}
              alt="Vista al mar desde terraza de departamento premium"
              className="w-full h-[120%] object-cover transition-transform duration-100 ease-out"
              style={{
                transform: `translateY(${-parallaxOffset * 0.3}px) scale(1.1)`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/20 lg:to-background" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent lg:from-transparent" />
          </div>

          {/* Floating Card - Property Preview */}
          {firstListing && (
            <div className="absolute bottom-8 left-8 right-8 lg:bottom-12 lg:left-12 lg:right-auto lg:max-w-xs z-10 animate-float">
              <div className="bg-card/95 backdrop-blur-md rounded-2xl p-4 shadow-float border border-border/50">
                <div className="flex gap-4">
                  <img
                    src={firstListing.images?.[0] || heroImage}
                    alt={firstListing.name}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {firstListing.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {firstListing.location}
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-lg font-bold text-ocean">
                        {firstListing.price}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        /{firstListing.period || "noche"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Decorative Elements with opposite parallax */}
          <div
            className="absolute top-20 right-10 w-20 h-20 rounded-full bg-seafoam/20 blur-xl animate-float"
            style={{
              animationDelay: "1s",
              transform: `translateY(${parallaxOffset * 0.2}px)`,
            }}
          />
          <div
            className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-ocean/20 blur-2xl animate-float"
            style={{
              animationDelay: "2s",
              transform: `translateY(${parallaxOffset * 0.15}px)`,
            }}
          />
        </div>
      </div>

      {/* Bottom Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden pointer-events-none hidden lg:block">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full text-sand-light"
        >
          <path
            fill="currentColor"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
