import { ScrollReveal } from "@/hooks/useScrollReveal";
import { TrendingUp, Sparkles, ShieldCheck, Briefcase } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Maximización de ingresos",
    description:
      "Precios dinámicos, ocupación alta y foco en temporadas clave para rentabilidad sostenida.",
    color: "ocean",
  },
  {
    icon: ShieldCheck,
    title: "Cuidado de la propiedad",
    description:
      "Limpiezas profesionales, control post-estadía y reportes claros en cada salida.",
    color: "seafoam",
  },
  {
    icon: Sparkles,
    title: "Experiencia 5 estrellas",
    description:
      "Comunicación fluida, protocolos definidos y huéspedes filtrados para reviews impecables.",
    color: "sand-dark",
  },
  {
    icon: Briefcase,
    title: "Anfitrión profesional",
    description:
      "Tú descansas, nosotros operamos. Equipo dedicado que gestiona como si fuera propio.",
    color: "ocean",
  },
];

const Benefits = () => {
  return (
    <section id="owners" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-seafoam-light text-seafoam font-medium text-sm mb-4">
            Administra tu propiedad con Happy Stay
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Gestión integral de Airbnb
            <span className="text-seafoam"> para propietarios</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            No solo alquilamos propiedades: las gestionamos como si fueran
            nuestras. Maximizamos tus ingresos y cuidamos cada detalle para que
            tengas tranquilidad total.
          </p>
        </ScrollReveal>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <ScrollReveal key={benefit.title} delay={index * 100}>
                <article className="group p-8 rounded-3xl bg-card border border-border/50 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2 h-full">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 ${
                      benefit.color === "ocean"
                        ? "bg-ocean-light text-ocean"
                        : benefit.color === "seafoam"
                        ? "bg-seafoam-light text-seafoam"
                        : "bg-sand text-sand-dark"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={200} className="mt-12 flex justify-center">
          <a
            href="https://wa.me/51989856864?text=Quiero%20que%20administres%20mi%20propiedad%20con%20Happy%20Stay"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-seafoam text-primary-foreground font-semibold shadow-soft hover:shadow-card transition"
          >
            Quiero que administres mi Airbnb
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Benefits;
