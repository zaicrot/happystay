import { UtensilsCrossed, Car, Bike } from 'lucide-react';

const services = [
  {
    icon: UtensilsCrossed,
    title: 'Chef en casa',
    description: 'Disfruta de una experiencia gastronómica sin salir. Menús personalizados preparados por chefs locales.',
    price: 'Desde $80 USD',
  },
  {
    icon: Bike,
    title: 'Cuatrimotos',
    description: 'Explora las playas y cenotes cercanos con nuestros tours en cuatrimoto con guía incluido.',
    price: 'Desde $60 USD',
  },
  {
    icon: Car,
    title: 'Transporte privado',
    description: 'Servicio de taxi privado desde el aeropuerto y para tus actividades durante tu estancia.',
    price: 'Desde $40 USD',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-seafoam-light text-seafoam font-medium text-sm mb-4">
            Servicios adicionales
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Experiencias
            <span className="text-seafoam"> extra</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Complementa tu estancia con servicios exclusivos para huéspedes HappyStay.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group relative p-8 rounded-3xl bg-card border border-border/50 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              >
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
