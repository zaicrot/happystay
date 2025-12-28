import { useEffect, useState, useRef, RefObject } from 'react';

interface ParallaxOptions {
  speed?: number; // -1 to 1, negative = opposite direction
  direction?: 'vertical' | 'horizontal';
}

export const useParallax = <T extends HTMLElement>(
  options: ParallaxOptions = {}
): [RefObject<T>, { transform: string }] => {
  const { speed = 0.3, direction = 'vertical' } = options;
  const ref = useRef<T>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distanceFromCenter = elementCenter - viewportCenter;
      
      // Calculate parallax offset based on element position
      const parallaxOffset = distanceFromCenter * speed * -0.1;
      setOffset(parallaxOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  const transform = direction === 'vertical' 
    ? `translateY(${offset}px)` 
    : `translateX(${offset}px)`;

  return [ref, { transform }];
};

// Component wrapper for parallax effect
interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  scale?: number;
}

export const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  className = '',
  speed = 0.3,
  scale = 1.1,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Only apply effect when element is in viewport
      if (rect.bottom < 0 || rect.top > windowHeight) return;
      
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distanceFromCenter = elementCenter - viewportCenter;
      
      const parallaxOffset = distanceFromCenter * speed * -0.15;
      setOffset(parallaxOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-100 ease-out"
        style={{
          transform: `translateY(${offset}px) scale(${scale})`,
        }}
      />
    </div>
  );
};

// Parallax container for backgrounds
interface ParallaxContainerProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  as?: keyof JSX.IntrinsicElements;
}

export const ParallaxContainer: React.FC<ParallaxContainerProps> = ({
  children,
  className = '',
  speed = 0.2,
  as: Component = 'div',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.bottom < 0 || rect.top > windowHeight) return;
      
      const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
      const parallaxOffset = (scrollProgress - 0.5) * speed * 100;
      setOffset(parallaxOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        transform: `translateY(${offset}px)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      {children}
    </div>
  );
};
