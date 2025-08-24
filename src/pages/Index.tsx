import { useEffect } from "react";
import Hero from "@/components/Hero";
import ShortQuoteForm from "@/components/ShortQuoteForm";
import ServicesOverview from "@/components/ServicesOverview";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import LocationCTA from "@/components/LocationCTA";

const Index = () => {
  useEffect(() => {
    document.title = "Tulsa's Trusted Fencing & Custom Deck Experts | Omni Fence & Deck";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional fencing and custom deck installation in Tulsa, OK and surrounding areas. Residential & commercial services with quality craftsmanship and exceptional customer service.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professional fencing and custom deck installation in Tulsa, OK and surrounding areas. Residential & commercial services with quality craftsmanship and exceptional customer service.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <main>
      <Hero />
      <ShortQuoteForm />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
      <LocationCTA />
    </main>
  );
};

export default Index;
