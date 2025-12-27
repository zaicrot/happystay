import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="footer" className="py-16 lg:py-20 bg-card border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">H</span>
              </div>
              <span className="font-display text-xl font-semibold text-foreground">
                HappyStay
              </span>
            </a>
            <p className="text-muted-foreground max-w-md mb-6">
              Alojamientos premium frente al mar en Playa del Carmen. Tu hogar lejos de casa, con todas las comodidades para unas vacaciones perfectas.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-sand flex items-center justify-center text-muted-foreground hover:text-ocean hover:bg-ocean-light transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-sand flex items-center justify-center text-muted-foreground hover:text-ocean hover:bg-ocean-light transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Enlaces</h4>
            <ul className="space-y-3">
              <li>
                <a href="#properties" className="text-muted-foreground hover:text-ocean transition-colors">
                  Alojamientos
                </a>
              </li>
              <li>
                <a href="#lifestyle" className="text-muted-foreground hover:text-ocean transition-colors">
                  Experiencias
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-ocean transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-ocean transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-ocean flex-shrink-0" />
                <span>Playa del Carmen, Q. Roo, México</span>
              </li>
              <li>
                <a
                  href="tel:+521234567890"
                  className="flex items-center gap-3 text-muted-foreground hover:text-ocean transition-colors"
                >
                  <Phone className="w-5 h-5 text-ocean flex-shrink-0" />
                  <span>+52 1 234 567 890</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hola@happystay.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-ocean transition-colors"
                >
                  <Mail className="w-5 h-5 text-ocean flex-shrink-0" />
                  <span>hola@happystay.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 HappyStay. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-ocean transition-colors">
              Privacidad
            </a>
            <a href="#" className="hover:text-ocean transition-colors">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
