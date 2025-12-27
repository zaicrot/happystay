import { Waves, Shield, UtensilsCrossed, Dumbbell, Wifi, Sun } from 'lucide-react';

const benefits = [
  {
    icon: Waves,
    title: 'Frente a la playa',
    description: 'Despierta con el sonido del mar y disfruta de acceso directo a la arena.',
    color: 'ocean',
  },
  {
    icon: Shield,
    title: 'Total seguridad',
    description: 'Vigilancia 24/7 y acceso controlado para tu tranquilidad absoluta.',
    color: 'seafoam',
  },
  {
    icon: UtensilsCrossed,
    title: 'Cocina equipada',
    description: 'Prepara tus comidas favoritas con electrodomésticos premium.',
    color: 'sand-dark',
  },
  {
    icon: Dumbbell,
    title: 'Gimnasio y piscina',
    description: 'Mantén tu rutina de ejercicio con vista al océano.',
    color: 'ocean',
  },
  {
    icon: Wifi,
    title: 'Zona de trabajo',
    description: 'WiFi de alta velocidad y espacios pensados para trabajo remoto.',
    color: 'seafoam',
  },
  {
    icon: Sun,
    title: 'Terrazas privadas',
    description: 'Tu espacio personal para disfrutar atardeceres inolvidables.',
    color: 'sand-dark',
  },
];

const Benefits = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-seafoam-light text-seafoam font-medium text-sm mb-4">
            Lo que ofrecemos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Todo lo que necesitas,
            <span className="text-seafoam"> nada que te falte</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Cada detalle pensado para que solo te preocupes por disfrutar.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <article
                key={benefit.title}
                className="group p-8 rounded-3xl bg-card border border-border/50 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 ${
                    benefit.color === 'ocean'
                      ? 'bg-ocean-light text-ocean'
                      : benefit.color === 'seafoam'
                      ? 'bg-seafoam-light text-seafoam'
                      : 'bg-sand text-sand-dark'
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
