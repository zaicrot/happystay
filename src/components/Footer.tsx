import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="py-16 lg:py-20 bg-card border-t border-border/50"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="HappyStay logo"
                className="h-10 w-10 rounded-xl object-cover border border-border/60 shadow-sm"
              />
              <span className="font-display text-xl font-semibold text-foreground">
                HappyStay
              </span>
            </a>
            <p className="text-muted-foreground max-w-md mb-6">
              Tu hogar lejos de casa. Alojamientos premium y gestión profesional
              de Airbnb para que disfrutes sin preocupaciones.
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
            <h4 className="font-display font-bold text-foreground mb-4">
              Enlaces
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-muted-foreground hover:text-ocean transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-ocean transition-colors"
                >
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a
                  href="#properties"
                  className="text-muted-foreground hover:text-ocean transition-colors"
                >
                  Airbnbs
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-muted-foreground hover:text-ocean transition-colors"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-muted-foreground hover:text-ocean transition-colors"
                >
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-ocean flex-shrink-0" />
                <span>Costa Peruana 2182 · Playa Señoritas</span>
              </li>
              <li>
                <a
                  href="tel:+51989856864"
                  className="flex items-center gap-3 text-muted-foreground hover:text-ocean transition-colors"
                >
                  <Phone className="w-5 h-5 text-ocean flex-shrink-0" />
                  <span>+51 989 856 864</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@happystay.pe"
                  className="flex items-center gap-3 text-muted-foreground hover:text-ocean transition-colors"
                >
                  <Mail className="w-5 h-5 text-ocean flex-shrink-0" />
                  <span>contacto@happystay.pe</span>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground mt-2">
                  <Mail className="w-5 h-5 text-ocean flex-shrink-0" />
                  <span>wsmith@happystay.pe</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 HappyStay. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-ocean transition-colors">
              Privacidad
            </a>
            <a href="#" className="hover:text-ocean transition-colors">
              Términos
            </a>
            <a
              href="https://valece.vercel.app/klein-code"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ocean transition-colors opacity-60 hover:opacity-100"
            >
              Hecho por KLEIN CODE
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
