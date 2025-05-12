
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-primary py-20 md:py-32">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487252665478-49b61b47f302')] bg-cover bg-center"
        style={{ opacity: 0.4 }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent z-[11] opacity-50"></div>
      <div className="container-custom relative z-20">
        <div className="max-w-3xl slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="accent-badge mb-4 inline-block">Professional & Reliable</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Professional Fencing <span className="text-accent">&</span> Deck Solutions
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Quality craftsmanship, innovative designs, and exceptional service for your residential or commercial property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-accent text-secondary-foreground hover:bg-accent/90 hover-scale">
              <Link to="/contact" className="inline-flex items-center">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-primary/30 to-transparent"></div>
    </section>
  );
};

export default Hero;
