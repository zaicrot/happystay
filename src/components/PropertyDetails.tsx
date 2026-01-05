import { ScrollReveal } from "@/hooks/useScrollReveal";
import { ParallaxImage } from "@/hooks/useParallax";
import detailKitchen from "@/assets/detail-kitchen.jpg";
import detailTerrace from "@/assets/detail-terrace.jpg";
import property2 from "@/assets/property-2.jpg";

const details = [
  {
    step: "01",
    title: "Espacios pensados para disfrutar",
    description:
      "Alojamientos cómodos, bien ubicados y totalmente equipados para que disfrutes como en casa.",
    image: property2,
  },
  {
    step: "02",
    title: "Selección cuidada",
    description:
      "Cada propiedad se elige por su confort, estilo y funcionalidad. Playa y experiencias premium son nuestra especialidad.",
    image: detailKitchen,
  },
  {
    step: "03",
    title: "Atención personalizada",
    description:
      "Proceso de reserva fácil y seguro, con un anfitrión 5★ disponible durante toda tu estadía.",
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
            Sobre nosotros
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Happy Stay, tu hogar lejos de casa
          </h2>
          <p className="text-lg text-muted-foreground">
            Ofrecemos experiencias de alojamiento inolvidables con espacios
            cómodos, bien ubicados y listos para disfrutar sin preocupaciones.
          </p>
        </ScrollReveal>

        {/* Step-by-step Layout */}
        <div className="space-y-12 lg:space-y-24">
          {details.map((detail, index) => (
            <ScrollReveal
              key={detail.step}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={100}
            >
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-16 items-center`}
              >
                {/* Image with Parallax */}
                <div className="flex-1 w-full">
                  <div className="relative group rounded-3xl shadow-card">
                    <ParallaxImage
                      src={detail.image}
                      alt={detail.title}
                      className="w-full h-72 lg:h-96 rounded-3xl"
                      speed={0.2}
                      scale={1.15}
                    />
                    {/* Step Number Floating */}
                    <div className="absolute top-6 left-6 w-16 h-16 rounded-2xl bg-card/90 backdrop-blur-sm flex items-center justify-center shadow-soft animate-float z-10">
                      <span className="font-display text-2xl font-bold text-ocean">
                        {detail.step}
                      </span>
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
