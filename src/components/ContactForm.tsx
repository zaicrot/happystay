import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Calendar,
  Users,
  Mail,
  Phone,
  User,
  MessageSquare,
  Check,
} from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
  guests: string;
  checkIn: string;
  checkOut: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  guests?: string;
  checkIn?: string;
  checkOut?: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    guests: "",
    checkIn: "",
    checkOut: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    return /^[+]?[\d\s-]{8,}$/.test(phone);
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = "Teléfono inválido";
    }

    if (
      formData.guests &&
      (parseInt(formData.guests) < 1 || parseInt(formData.guests) > 20)
    ) {
      newErrors.guests = "Número de huéspedes inválido";
    }

    if (formData.checkIn && formData.checkOut) {
      const checkInDate = new Date(formData.checkIn);
      const checkOutDate = new Date(formData.checkOut);
      if (checkOutDate <= checkInDate) {
        newErrors.checkOut = "La fecha de salida debe ser posterior";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      toast({
        title: "Error de validación",
        description: "Por favor, revisa los campos marcados",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Construir el mensaje para WhatsApp
    const whatsappMessage = `
*Reserva o delega tu Airbnb*

Cuéntanos qué necesitas: reservar tu próxima estadía o que administremos tu propiedad con operación completa

---

*Datos del solicitante:*
Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}
${formData.guests ? `Huéspedes: ${formData.guests}` : ""}
${formData.checkIn ? `Check-in: ${formData.checkIn}` : ""}
${formData.checkOut ? `Check-out: ${formData.checkOut}` : ""}
${formData.message ? `Mensaje: ${formData.message}` : ""}
    `.trim();

    // Número de WhatsApp (reemplazar con el número real)
    const whatsappNumber = "+51989856864";
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Simular delay y mostrar mensaje
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "¡Redirigiendo a WhatsApp!",
      description: "Se abrirá WhatsApp con tu mensaje",
    });

    // Redirigir a WhatsApp después de un pequeño delay
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 500);
  };

  if (isSubmitted) {
    return (
      <section id="contacto" className="py-24 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-primary" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                ¡Mensaje enviado a WhatsApp!
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Tu solicitud ha sido preparada y se debe abrir WhatsApp
                automáticamente. Si no se abre, puedes hacer clic en el botón de
                abajo para enviarlo manualmente.
              </p>
              <Button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    guests: "",
                    checkIn: "",
                    checkOut: "",
                    message: "",
                  });
                }}
                variant="outline"
                className="border-primary/20 hover:bg-primary/5"
              >
                Nuevo mensaje
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Contáctanos
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
              Reserva o delega tu Airbnb
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Cuéntanos qué necesitas: reservar tu próxima estadía o que
              administremos tu propiedad con operación completa.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-5">
                {/* Left side - Info */}
                <div className="md:col-span-2 bg-primary p-8 md:p-10 text-primary-foreground">
                  <h3 className="font-display text-2xl mb-6">
                    Información de contacto
                  </h3>
                  <p className="text-primary-foreground/80 mb-8">
                    Escríbenos y coordinamos tu reserva o la gestión de tu
                    propiedad en minutos.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-primary-foreground/60">
                          Email
                        </p>
                        <p className="font-medium">contacto@happystay.pe</p>
                        <p className="font-medium">wsmith@happystay.pe</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-primary-foreground/60">
                          Teléfono / WhatsApp
                        </p>
                        <p className="font-medium">+51 989 856 864</p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="mt-12 pt-8 border-t border-primary-foreground/10">
                    <p className="text-sm text-primary-foreground/60 mb-2">
                      Horario de atención
                    </p>
                    <p className="text-primary-foreground/80">
                      Lunes a Viernes: 9:00 - 20:00
                      <br />
                      Sábados: 10:00 - 14:00
                    </p>
                  </div>
                </div>

                {/* Right side - Form */}
                <div className="md:col-span-3 p-8 md:p-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="text-foreground flex items-center gap-2"
                        >
                          <User className="w-4 h-4 text-muted-foreground" />
                          Nombre completo *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Tu nombre"
                          className={`bg-secondary/50 border-border/50 focus:border-primary ${
                            errors.name ? "border-destructive" : ""
                          }`}
                        />
                        {errors.name && (
                          <p className="text-destructive text-sm">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-foreground flex items-center gap-2"
                        >
                          <Mail className="w-4 h-4 text-muted-foreground" />
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="tu@email.com"
                          className={`bg-secondary/50 border-border/50 focus:border-primary ${
                            errors.email ? "border-destructive" : ""
                          }`}
                        />
                        {errors.email && (
                          <p className="text-destructive text-sm">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Phone & Guests */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className="text-foreground flex items-center gap-2"
                        >
                          <Phone className="w-4 h-4 text-muted-foreground" />
                          Teléfono
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+34 600 000 000"
                          className={`bg-secondary/50 border-border/50 focus:border-primary ${
                            errors.phone ? "border-destructive" : ""
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-destructive text-sm">
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="guests"
                          className="text-foreground flex items-center gap-2"
                        >
                          <Users className="w-4 h-4 text-muted-foreground" />
                          Número de huéspedes
                        </Label>
                        <Input
                          id="guests"
                          name="guests"
                          type="number"
                          min="1"
                          max="20"
                          value={formData.guests}
                          onChange={handleChange}
                          placeholder="2"
                          className={`bg-secondary/50 border-border/50 focus:border-primary ${
                            errors.guests ? "border-destructive" : ""
                          }`}
                        />
                        {errors.guests && (
                          <p className="text-destructive text-sm">
                            {errors.guests}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Dates */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="checkIn"
                          className="text-foreground flex items-center gap-2"
                        >
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          Fecha de entrada
                        </Label>
                        <Input
                          id="checkIn"
                          name="checkIn"
                          type="date"
                          value={formData.checkIn}
                          onChange={handleChange}
                          min={new Date().toISOString().split("T")[0]}
                          className="bg-secondary/50 border-border/50 focus:border-primary"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="checkOut"
                          className="text-foreground flex items-center gap-2"
                        >
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          Fecha de salida
                        </Label>
                        <Input
                          id="checkOut"
                          name="checkOut"
                          type="date"
                          value={formData.checkOut}
                          onChange={handleChange}
                          min={
                            formData.checkIn ||
                            new Date().toISOString().split("T")[0]
                          }
                          className={`bg-secondary/50 border-border/50 focus:border-primary ${
                            errors.checkOut ? "border-destructive" : ""
                          }`}
                        />
                        {errors.checkOut && (
                          <p className="text-destructive text-sm">
                            {errors.checkOut}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-foreground flex items-center gap-2"
                      >
                        <MessageSquare className="w-4 h-4 text-muted-foreground" />
                        Mensaje o requisitos especiales
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Cuéntanos sobre tu viaje ideal, preferencias especiales o cualquier pregunta..."
                        rows={4}
                        className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base font-medium transition-all duration-300 hover:shadow-lg"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg
                            className="animate-spin h-5 w-5"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Enviando...
                        </span>
                      ) : (
                        "Enviar Solicitud"
                      )}
                    </Button>

                    <p className="text-center text-sm text-muted-foreground">
                      Al enviar este formulario, aceptas nuestra{" "}
                      <a href="#" className="text-primary hover:underline">
                        política de privacidad
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactForm;
