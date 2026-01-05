import { ScrollReveal } from "@/hooks/useScrollReveal";
import { ShieldCheck, Trophy, Compass, Sparkles } from "lucide-react";

const stats = [
  {
    icon: Trophy,
    label: "+3 temporadas",
    description: "Gestionando propiedades de playa con alta ocupación.",
  },
  {
    icon: Sparkles,
    label: "+200 estadías",
    description: "Huéspedes felices y reseñas 5 estrellas comprobadas.",
  },
  {
    icon: ShieldCheck,
    label: "+7 alojamientos",
    description: "2025: 2 → 2026: 5, creciendo de forma sostenible.",
  },
  {
    icon: Compass,
    label: "Especialistas en playa",
    description: "Casas de campo, playa y experiencias premium.",
  },
];

const WhyHappyStay = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-sand-light noise-overlay">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-ocean-light text-ocean font-medium text-sm mb-4">
            ¿Por qué elegir Happy Stay?
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            No solo administramos propiedades,
            <span className="text-ocean"> gestionamos experiencias.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Sr. Smith y equipo operan cada detalle con procesos claros,
            comunicación transparente y foco en resultados.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.label} delay={index * 100}>
                <article className="p-6 rounded-2xl bg-card border border-border/50 shadow-soft h-full">
                  <div className="w-12 h-12 rounded-xl bg-ocean-light text-ocean flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {item.label}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyHappyStay;
