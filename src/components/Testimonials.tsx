import { Star, Quote } from 'lucide-react';
import { ScrollReveal } from '@/hooks/useScrollReveal';

const testimonials = [
  {
    id: 1,
    name: 'María González',
    location: 'Ciudad de México',
    rating: 5,
    text: 'Increíble experiencia. El departamento superó todas nuestras expectativas. La vista al mar es espectacular y la atención al detalle es impecable.',
    avatar: 'MG',
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    location: 'Monterrey',
    rating: 5,
    text: 'Vacaciones perfectas con mi familia. Los niños disfrutaron la piscina y nosotros la tranquilidad. Definitivamente volveremos.',
    avatar: 'CR',
  },
  {
    id: 3,
    name: 'Ana Martínez',
    location: 'Guadalajara',
    rating: 5,
    text: 'Como nómada digital, encontré el lugar perfecto para trabajar. WiFi excelente, espacios cómodos y vistas inspiradoras.',
    avatar: 'AM',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-32 bg-sand-light noise-overlay">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-ocean-light text-ocean font-medium text-sm mb-4">
            Testimonios
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Lo que dicen
            <span className="text-ocean"> nuestros huéspedes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Experiencias reales de quienes eligieron HappyStay.
          </p>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
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
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
