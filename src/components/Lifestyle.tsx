import { ScrollReveal } from '@/hooks/useScrollReveal';
import { ParallaxImage } from '@/hooks/useParallax';
import lifestyleCouple from '@/assets/lifestyle-couple.jpg';
import lifestyleFamily from '@/assets/lifestyle-family.jpg';
import lifestyleFriends from '@/assets/lifestyle-friends.jpg';
import lifestyleRemote from '@/assets/lifestyle-remote.jpg';

const lifestyleImages = [
  {
    src: lifestyleCouple,
    alt: 'Pareja disfrutando en la playa al atardecer',
    caption: 'Parejas',
    rotation: -3,
  },
  {
    src: lifestyleFamily,
    alt: 'Familia feliz jugando en la arena',
    caption: 'Familias',
    rotation: 2,
  },
  {
    src: lifestyleFriends,
    alt: 'Amigos disfrutando en el beach bar',
    caption: 'Amigos',
    rotation: -2,
  },
  {
    src: lifestyleRemote,
    alt: 'Trabajo remoto con vista al mar',
    caption: 'Nómadas digitales',
    rotation: 3,
  },
];

const Lifestyle = () => {
  return (
    <section id="lifestyle" className="py-20 lg:py-32 bg-gradient-coastal overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-card text-ocean font-medium text-sm mb-4 shadow-soft">
            Experiencia real
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Momentos que
            <span className="text-ocean"> perduran</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Cada estancia es una historia. Descubre cómo nuestros huéspedes viven HappyStay.
          </p>
        </ScrollReveal>

        {/* Polaroid Mosaic Grid with Parallax */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
          {lifestyleImages.map((image, index) => (
            <ScrollReveal
              key={image.caption}
              delay={index * 150}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <div
                className="group relative"
                style={{
                  transform: `rotate(${image.rotation}deg)`,
                }}
              >
                <div className="bg-card p-3 pb-12 rounded-lg shadow-card hover:shadow-float transition-all duration-500 hover:scale-105 hover:rotate-0 w-64 md:w-72">
                  <ParallaxImage
                    src={image.src}
                    alt={image.alt}
                    className="rounded aspect-[3/4]"
                    speed={0.15 + index * 0.05}
                    scale={1.12}
                  />
                  <p className="absolute bottom-4 left-0 right-0 text-center font-display text-lg text-foreground">
                    {image.caption}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Marquee */}
        <ScrollReveal delay={400} className="mt-20 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap flex">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8 mr-8">
                <span className="text-2xl md:text-3xl font-display text-ocean/30">
                  Tu hogar frente al mar
                </span>
                <span className="text-2xl md:text-3xl font-display text-seafoam/30">•</span>
                <span className="text-2xl md:text-3xl font-display text-ocean/30">
                  Descansa sin preocupaciones
                </span>
                <span className="text-2xl md:text-3xl font-display text-seafoam/30">•</span>
                <span className="text-2xl md:text-3xl font-display text-ocean/30">
                  Vacaciones perfectas
                </span>
                <span className="text-2xl md:text-3xl font-display text-seafoam/30">•</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Lifestyle;
