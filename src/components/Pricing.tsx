import { ScrollReveal } from "@/hooks/useScrollReveal";
import {
  BadgePercent,
  Building2,
  CalendarClock,
  Check,
  MessageSquare,
  Paintbrush,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const featureGroups = [
  {
    title: "Plan de Gestión Integral – Happy Stay",
    icon: Building2,
    accent: "ocean",
    items: [
      "Creación y optimización completa del anuncio en Airbnb",
      "Perfil y contenido profesional con mejoras continuas",
      "Optimización del listing para visibilidad y conversión",
    ],
  },
  {
    title: "Booking Management & Gestión de Reservas",
    icon: CalendarClock,
    accent: "seafoam",
    items: [
      "Gestión de reservas y consultas 24/7",
      "Calendario y disponibilidad optimizados para ocupación",
      "Operación hands-free sin intervención del propietario",
    ],
  },
  {
    title: "Comunicación y Experiencia del Huésped",
    icon: MessageSquare,
    accent: "sand",
    items: [
      "Comunicación fluida antes, durante y después de la estadía",
      "Evaluación y filtrado de huéspedes confiables",
      "Beneficios, seguimiento y reputación 5★ asegurada",
    ],
  },
  {
    title: "Estrategia de Precios y Revenue Management",
    icon: TrendingUp,
    accent: "ocean",
    items: [
      "Optimización de precios basada en mercado y competencia",
      "Tecnología e inteligencia artificial para revenue",
      "Ajustes dinámicos por demanda, ocupación y estacionalidad",
      "Estrategias diferenciadas para temporada alta y baja",
    ],
  },
  {
    title: "Operación y Mantenimiento",
    icon: Sparkles,
    accent: "seafoam",
    items: [
      "Limpieza profesional tras cada estadía (pagada por el huésped)",
      "Control de calidad post-limpieza",
      "Reposición de artículos de lavado y básicos del alojamiento",
    ],
  },
  {
    title: "Marketing y Visibilidad",
    icon: BadgePercent,
    accent: "sand",
    items: [
      "Promoción estratégica y SEO dentro de la plataforma",
      "Campañas de visibilidad por temporada",
      "Marketing cruzado para mayor alcance",
    ],
  },
  {
    title: "Diseño y Presentación del Espacio (opcional / premium)",
    icon: Paintbrush,
    accent: "ocean",
    items: [
      "Asesoría en diseño orientado a Airbnb",
      "Optimización de espacios y experiencia del huésped",
      "Curaduría de mobiliario y decoración alineada a la marca",
      "Layout pensado en comodidad, funcionalidad y reviews 5★",
    ],
  },
];

const accentStyles = {
  ocean: {
    pill: "bg-ocean-light text-ocean",
    icon: "bg-ocean-light text-ocean",
  },
  seafoam: {
    pill: "bg-seafoam-light text-seafoam",
    icon: "bg-seafoam-light text-seafoam",
  },
  sand: {
    pill: "bg-sand text-sand-dark",
    icon: "bg-sand text-sand-dark",
  },
};

const quickWins = [
  "Onboarding completo y anuncio optimizado",
  "Operación diaria hands-free con reportes claros",
  "Revenue management con IA y supervisión humana",
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="py-20 lg:py-32 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-ocean-light/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-seafoam-light/40 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-ocean-light text-ocean font-medium text-sm mb-4">
            Administramos tu Airbnb
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Plan Happy Stay <span className="text-ocean">15.5%</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Gestión integral, comunicación 24/7 y revenue management con
            tecnología para que seas un anfitrión hands-free.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <article className="p-8 rounded-3xl bg-card border border-border/60 shadow-soft backdrop-blur mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-seafoam-light text-seafoam font-semibold text-sm mb-4">
              Plan de Gestión Integral
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  Plan Happy Stay
                </h3>
                <p className="text-muted-foreground mt-2 max-w-2xl">
                  Fee único de gestión sobre ingresos: nos enfocamos en
                  ocupación, tarifa y reviews 5★ para que seas un anfitrión
                  hands-free.
                </p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-ocean">15.5%</span>
                <span className="text-muted-foreground">
                  por reserva gestionada
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
              {quickWins.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-muted/40 border border-border/60"
                >
                  <span className="w-9 h-9 rounded-full bg-ocean-light text-ocean flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </span>
                  <span className="text-sm font-medium text-foreground leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <a
                href="https://wa.me/51989856864?text=Quiero%20el%20Plan%20Happy%20Stay%2015.5%25"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-ocean text-primary-foreground font-semibold shadow-soft hover:shadow-card transition w-full sm:w-auto"
              >
                Agenda una llamada
              </a>
              <p className="text-xs text-muted-foreground">
                Incluye coordinación de limpieza (cobro al huésped) y upgrades
                opcionales de diseño premium.
              </p>
            </div>
          </article>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {featureGroups.map((group, index) => {
            const Icon = group.icon;
            const styles =
              accentStyles[group.accent as keyof typeof accentStyles];

            return (
              <ScrollReveal key={group.title} delay={index * 60}>
                <article className="p-6 rounded-2xl bg-card border border-border/50 shadow-soft h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                        styles?.icon ?? "bg-ocean-light text-ocean"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </span>
                    <h4 className="font-display text-lg font-semibold text-foreground">
                      {group.title}
                    </h4>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-0.5">
                          <Check className="w-4 h-4 text-ocean" />
                        </span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
