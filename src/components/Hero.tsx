import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Hero_Image_11.jpg"
          alt="Professional fence installation in Tulsa, Oklahoma"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="container-custom relative z-30 h-full flex items-center justify-center min-h-screen">
        {/* Centered Text Content */}
        <div className="w-full max-w-3xl text-center slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="accent-badge mb-4 inline-block bg-accent text-secondary-foreground font-semibold rounded-full px-4 py-1 shadow-md">
            Premier Outdoor Provider
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] [text-shadow:_2px_2px_2px_rgb(0_0_0_/_40%)] border-2 border-white/20 rounded-lg p-4 backdrop-blur-sm">
            Tulsa's Trusted Fencing & Custom Deck Experts
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Quality craftsmanship, innovative designs, and exceptional service for your residential or commercial property throughout Greater Tulsa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-secondary-foreground hover:bg-accent/90 hover-scale">
              <Link to="/quote" className="inline-flex items-center">
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

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary to-transparent z-40"></div>
    </section>
  );
};

export default Hero;