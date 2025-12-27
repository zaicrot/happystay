import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Properties from '@/components/Properties';
import Benefits from '@/components/Benefits';
import Lifestyle from '@/components/Lifestyle';
import PropertyDetails from '@/components/PropertyDetails';
import Testimonials from '@/components/Testimonials';
import Services from '@/components/Services';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Properties />
        <Benefits />
        <Lifestyle />
        <PropertyDetails />
        <Testimonials />
        <Services />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
