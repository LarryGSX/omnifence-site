import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";

const LocationCTA = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="absolute top-0 left-1/4 w-16 h-16 bg-accent/10 rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-primary/5 rounded-full translate-y-1/2"></div>
      <div className="container-custom">
        <div className="bg-primary rounded-lg p-8 md:p-12 text-white relative overflow-hidden slide-up">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -translate-x-1/3 translate-y-1/3"></div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-sm rounded-full mb-6 hover-scale">
              <MapPin className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Find Your Local Omni Fence & Deck Service
            </h2>
            <p className="text-lg mb-8 text-white/90">
              We provide professional fencing and deck services in multiple locations. 
              Visit your local page to learn more about specific services in your area.
            </p>
            <Button asChild size="lg" className="hover-scale">
              <Link to="/locations" className="inline-flex items-center">
                Find Your Location
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationCTA;
