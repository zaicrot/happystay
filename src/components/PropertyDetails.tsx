import { ScrollReveal } from '@/hooks/useScrollReveal';
import detailKitchen from '@/assets/detail-kitchen.jpg';
import detailTerrace from '@/assets/detail-terrace.jpg';
import property2 from '@/assets/property-2.jpg';

const details = [
  {
    step: '01',
    title: 'Dormitorios de ensueño',
    description: 'Camas king size con ropa de cama premium y blackout total para un descanso perfecto.',
    image: property2,
  },
  {
    step: '02',
    title: 'Cocina gourmet',
    description: 'Electrodomésticos de acero inoxidable, utensilios completos y todo lo necesario para cocinar.',
    image: detailKitchen,
  },
  {
    step: '03',
    title: 'Terrazas con vista',
    description: 'Tu espacio privado para disfrutar del amanecer y atardecer con vistas panorámicas.',
    image: detailTerrace,
  },
];

const PropertyDetails = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="max-w-2xl mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-sand text-sand-dark font-medium text-sm mb-4">
            Detalles premium
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Cada rincón,
            <span className="text-sand-dark"> pensado para ti</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Atención al detalle en cada espacio. Calidad que se siente.
          </p>
        </ScrollReveal>

        {/* Step-by-step Layout */}
        <div className="space-y-12 lg:space-y-24">
          {details.map((detail, index) => (
            <ScrollReveal
              key={detail.step}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={100}
            >
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 lg:gap-16 items-center`}
              >
                {/* Image */}
                <div className="flex-1 w-full">
                  <div className="relative group overflow-hidden rounded-3xl shadow-card">
                    <img
                      src={detail.image}
                      alt={detail.title}
                      className="w-full h-72 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Step Number Floating */}
                    <div className="absolute top-6 left-6 w-16 h-16 rounded-2xl bg-card/90 backdrop-blur-sm flex items-center justify-center shadow-soft animate-float">
                      <span className="font-display text-2xl font-bold text-ocean">{detail.step}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 lg:max-w-md">
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    {detail.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {detail.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
