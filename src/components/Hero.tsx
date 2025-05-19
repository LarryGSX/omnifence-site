import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="relative h-screen bg-primary">
      {/* Image Wrapper */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/80 z-20"></div>
        
        {/* Hero Images */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full max-w-7xl mx-auto">
            {/* Image 1 */}
            <div className="absolute top-[10%] left-[10%] w-[45%] aspect-[4/3] rounded-lg shadow-xl transform -rotate-3 z-10">
              <img 
                src="/Hero_Image_1.jpg" 
                alt="Fence Installation" 
                className="w-full h-full object-cover rounded-lg opacity-70"
              />
            </div>
            
            {/* Image 2 */}
            <div className="absolute top-[15%] right-[10%] w-[45%] aspect-[4/3] rounded-lg shadow-xl transform rotate-3 z-20">
              <img 
                src="/Hero_Image_2.jpeg" 
                alt="Deck Construction" 
                className="w-full h-full object-cover rounded-lg opacity-70"
              />
            </div>
            
            {/* Image 3 */}
            <div className="absolute bottom-[15%] left-[15%] w-[45%] aspect-[4/3] rounded-lg shadow-xl transform rotate-2 z-30">
              <img 
                src="/Hero_Image_3.jpg" 
                alt="Custom Fence Design" 
                className="w-full h-full object-cover rounded-lg opacity-70"
              />
            </div>
            
            {/* Image 4 */}
            <div className="absolute bottom-[10%] right-[15%] w-[45%] aspect-[4/3] rounded-lg shadow-xl transform -rotate-2 z-40">
              <img 
                src="/Hero_Image_4.jpg" 
                alt="Professional Installation" 
                className="w-full h-full object-cover rounded-lg opacity-70"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-50 h-full flex items-center">
        <div className="max-w-3xl slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="accent-badge mb-4 inline-block">Premier Outdoor Provider</span>
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

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary to-transparent z-40"></div>
    </section>
  );
};

export default Hero;