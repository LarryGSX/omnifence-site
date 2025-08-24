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
    <main className="overflow-hidden">
      <Hero />
      
      {/* Seamless quote form section */}
      <section aria-label="Quick Quote Form" className="relative">
        <ShortQuoteForm />
      </section>
      
      {/* Seamless services section */}
      <section aria-label="Services Overview" className="relative">
        <ServicesOverview />
      </section>
      
      {/* Seamless why choose us section */}
      <section aria-label="Why Choose Us" className="py-16 bg-seamless">
        <WhyChooseUs />
      </section>
      
      {/* Seamless testimonials section */}
      <section aria-label="Customer Testimonials" className="py-16 bg-seamless-alt">
        <Testimonials />
      </section>
      
      {/* Seamless location CTA section */}
      <section aria-label="Service Areas" className="py-16 bg-seamless">
        <LocationCTA />
      </section>
    </main>
  );
};

export default Index;
