import {
  UtensilsCrossed,
  Car,
  Bike,
  Clock3,
  Percent,
  Waves,
} from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Clock3,
    title: "Check-in anticipado / late check-out",
    description:
      "Flexibilidad para entrar o salir antes según disponibilidad y con un fee preferencial.",
    price: "Coordinar con el host",
  },
  {
    icon: UtensilsCrossed,
    title: "Limpiezas adicionales",
    description:
      "Housekeeping extra durante tu estadía para mantener todo impecable.",
    price: "Precio por servicio",
  },
  {
    icon: Percent,
    title: "Descuentos locales",
    description:
      "Restaurantes aliados y experiencias con tarifa preferencial para huéspedes Happy Stay.",
    price: "Beneficios exclusivos",
  },
  {
    icon: Waves,
    title: "Surf, yoga o cerámica",
    description:
      "Clases y talleres con instructores de confianza a pasos de la playa.",
    price: "Agenda tu horario",
  },
  {
    icon: Bike,
    title: "Alquiler de cuatrimotos",
    description:
      "Vive la aventura con rutas guiadas y equipos listos para rodar.",
    price: "Desde $60 USD",
  },
  {
    icon: Car,
    title: "Servicio de taxi",
    description:
      "Traslados cómodos y seguros desde el aeropuerto, Lima o cualquier punto.",
    price: "Tarifa según ruta",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-seafoam-light text-seafoam font-medium text-sm mb-4">
            Otros servicios
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Sube el ticket promedio con extras
          </h2>
          <p className="text-lg text-muted-foreground">
            Check-in anticipado, experiencias y beneficios locales para que tu
            estadía valga aún más.
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.title} delay={index * 150}>
                <article className="group relative p-8 rounded-3xl bg-card border border-border/50 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full">
                  {/* Background Blob */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-seafoam-light rounded-full opacity-50 blur-2xl group-hover:scale-150 transition-transform duration-700" />

                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-seafoam-light text-seafoam flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-8 h-8" />
                    </div>

                    <h3 className="font-display text-xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-seafoam/10 text-seafoam font-medium text-sm">
                      {service.price}
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
