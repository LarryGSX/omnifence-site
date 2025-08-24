import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Particles } from "@/components/ui/particles";
import type { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with seamless design */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Hero_Image_11.jpg"
          alt="Professional fence installation in Tulsa, Oklahoma"
          className="w-full h-full object-cover"
        />
        {/* Subtle gradient overlay for seamless text integration */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>

      {/* Particles effect for enhanced visual appeal */}
      <Particles
        className="absolute inset-0 z-10"
        quantity={50}
        staticity={30}
        ease={80}
        size={0.8}
        color="#1F75FE"
        vx={0.1}
        vy={0.1}
      />

      {/* Content Container */}
      <div className="container-custom relative z-30 h-full flex items-start justify-center min-h-screen pt-24 md:pt-32">
        {/* Text Content with seamless backdrop */}
        <div className="w-full max-w-3xl text-center slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="accent-badge mb-4 inline-block bg-accent/20 text-primary font-semibold rounded-full px-4 py-2 shadow-clean">
            Premier Outdoor Provider
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 [text-shadow:_0_4px_8px_rgb(0_0_0_/_60%)] backdrop-blur-sm bg-black/20 rounded-2xl p-6 border-0">
            Tulsa's Trusted Fencing & Custom Deck Experts
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-8 [text-shadow:_0_2px_4px_rgb(0_0_0_/_50%)] backdrop-blur-sm bg-black/15 rounded-xl p-4 border-0">
            Quality craftsmanship, innovative designs, and exceptional service for your residential or commercial property throughout Greater Tulsa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-secondary-foreground hover:bg-accent/90 hover-scale shadow-clean-lg">
              <Link to="/quote" className="inline-flex items-center">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="bg-white/20 text-white border-2 border-white/60 hover:bg-white hover:text-primary transition-all duration-300 shadow-clean backdrop-blur-sm">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Seamless bottom transition - no harsh borders */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white via-white/80 to-transparent z-40"></div>
    </section>
  );
};

export default Hero;