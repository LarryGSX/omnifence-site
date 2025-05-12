
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const LocationCTA = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="bg-primary rounded-lg p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <MapPin className="w-12 h-12 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Find Your Local Omni Fence & Deck Service
            </h2>
            <p className="text-lg mb-8 text-white/90">
              We provide professional fencing and deck services in multiple locations. 
              Visit your local page to learn more about specific services in your area.
            </p>
            <Button asChild size="lg" className="bg-accent text-secondary-foreground hover:bg-accent/90">
              <Link to="/locations/template">Find Your Location</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationCTA;
