import { Star, Quote } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { useState, useEffect } from "react";
import backendService from "@/services/backend";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        setLoading(true);
        const response = await backendService.getTestimonials();
        setTestimonials(response.data || response);
      } catch (err) {
        console.error("Error loading testimonials:", err);
      } finally {
        setLoading(false);
      }
    };

    loadTestimonials();
  }, []);
  return (
    <section className="py-20 lg:py-32 bg-sand-light noise-overlay">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-ocean-light text-ocean font-medium text-sm mb-4">
            Lo que dicen nuestros huéspedes
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Historias 5 estrellas de
            <span className="text-ocean"> familias, parejas y amigos</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Frases reales con la misma atención que recibirás al llegar.
          </p>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {loading ? (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">Cargando testimonios...</p>
            </div>
          ) : testimonials.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">
                No hay testimonios disponibles
              </p>
            </div>
          ) : (
            testimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.id} delay={index * 150}>
                <article className="group p-8 rounded-3xl bg-card border border-border/50 shadow-soft hover:shadow-card transition-all duration-500 h-full">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="w-10 h-10 text-ocean/20" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-ocean fill-ocean" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-foreground leading-relaxed mb-6">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-ocean-light text-ocean font-display font-bold text-lg flex items-center justify-center">
                      {testimonial.avatar.slice(0, 2)}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
