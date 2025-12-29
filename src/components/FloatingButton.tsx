import { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';

const FloatingButton = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`group w-14 h-14 rounded-full bg-ocean text-primary-foreground shadow-float flex items-center justify-center transition-all duration-500 hover:scale-110 hover:bg-ocean-dark ${
          showScrollTop 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Volver arriba"
      >
        <ArrowUp className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
      </button>

      {/* Contact Button */}
      <button
        onClick={scrollToContact}
        className="group relative w-14 h-14 rounded-full bg-seafoam text-primary-foreground shadow-float flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-seafoam-dark animate-float"
        aria-label="Contactar"
      >
        <MessageCircle className="w-6 h-6" />
        
        {/* Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-seafoam animate-ping opacity-30" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-card text-foreground text-sm font-medium rounded-lg shadow-soft opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          ¿Necesitas ayuda?
        </span>
      </button>
    </div>
  );
};

export default FloatingButton;
