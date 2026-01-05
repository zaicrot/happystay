import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Properties from "@/components/Properties";
import Benefits from "@/components/Benefits";
import Lifestyle from "@/components/Lifestyle";
import PropertyDetails from "@/components/PropertyDetails";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import CustomCursor from "@/components/CustomCursor";
import WhyHappyStay from "@/components/WhyHappyStay";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Properties />
        <Benefits />
        <WhyHappyStay />
        <Lifestyle />
        <PropertyDetails />
        <Gallery />
        <Testimonials />
        <Services />
        <FAQ />
        <ContactForm />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Index;
