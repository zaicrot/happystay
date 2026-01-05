import { ScrollReveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿A qué hora es el check-in y el check-out?",
    answer:
      "Check-in desde las 3:00 p.m. y check-out hasta las 11:00 a.m. Ofrecemos early check-in y late check-out según disponibilidad.",
  },
  {
    question: "¿El alojamiento tiene WiFi?",
    answer:
      "Sí, WiFi de alta velocidad pensado para teletrabajo y videollamadas sin cortes.",
  },
  {
    question: "¿Hay estacionamiento disponible?",
    answer:
      "Contamos con estacionamiento en el edificio o cochera privada según la propiedad. Confírmalo al reservar.",
  },
  {
    question: "¿Hay horarios de silencio?",
    answer:
      "Sí, respetamos normas de convivencia y silencio a partir de las 10:00 p.m. para cuidar a todos los huéspedes.",
  },
  {
    question: "¿Está permitido hacer fiestas o eventos?",
    answer:
      "No se permiten fiestas. Filtramos huéspedes y aplicamos protocolos para mantener la tranquilidad del edificio.",
  },
  {
    question: "¿Dónde está ubicado el alojamiento?",
    answer:
      "Punta Hermosa, Playa Señoritas y Playa Caballeros. Consulta cada ficha para dirección exacta.",
  },
];

const FAQ = () => (
  <section id="faq" className="py-20 lg:py-32 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-block px-4 py-2 rounded-full bg-ocean-light text-ocean font-medium text-sm mb-4">
          Preguntas frecuentes
        </span>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Resolviendo tus dudas rápido
        </h2>
        <p className="text-lg text-muted-foreground">
          Si necesitas algo más, escríbenos y te ayudamos en minutos.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <Accordion
          type="single"
          collapsible
          className="max-w-3xl mx-auto bg-card border border-border/50 rounded-2xl shadow-soft divide-y divide-border/60"
        >
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className="px-6 py-4 text-left text-foreground font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollReveal>
    </div>
  </section>
);

export default FAQ;
