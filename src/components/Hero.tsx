import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="relative h-screen bg-gradient-to-br from-blue-200 via-blue-100 to-white">
      {/* Image Wrapper */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Hero Images */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full max-w-7xl mx-auto">
            {/* Image 1 */}
            <div className="absolute top-[10%] left-[5%] w-[38%] aspect-[4/3] rounded-xl shadow-2xl transform -rotate-2 z-10 overflow-hidden">
              <img 
                src="/Hero_Image_1.jpg" 
                alt="Fence Installation" 
                className="w-full h-full object-cover rounded-xl brightness-105 contrast-110"
              />
              <div className="absolute inset-0 bg-white/40" />
            </div>
            {/* Image 2 */}
            <div className="absolute top-[18%] right-[7%] w-[38%] aspect-[4/3] rounded-xl shadow-2xl transform rotate-2 z-20 overflow-hidden">
              <img 
                src="/Hero_Image_2.jpeg" 
                alt="Deck Construction" 
                className="w-full h-full object-cover rounded-xl brightness-105 contrast-110"
              />
              <div className="absolute inset-0 bg-white/40" />
            </div>
            {/* Image 3 */}
            <div className="absolute bottom-[18%] left-[13%] w-[38%] aspect-[4/3] rounded-xl shadow-2xl transform rotate-1 z-30 overflow-hidden">
              <img 
                src="/Hero_Image_3.jpg" 
                alt="Custom Fence Design" 
                className="w-full h-full object-cover rounded-xl brightness-105 contrast-110"
              />
              <div className="absolute inset-0 bg-white/40" />
            </div>
            {/* Image 4 */}
            <div className="absolute bottom-[10%] right-[13%] w-[38%] aspect-[4/3] rounded-xl shadow-2xl transform -rotate-1 z-40 overflow-hidden">
              <img 
                src="/Hero_Image_4.jpg" 
                alt="Professional Installation" 
                className="w-full h-full object-cover rounded-xl brightness-105 contrast-110"
              />
              <div className="absolute inset-0 bg-white/40" />
            </div>
          </div>
        </div>
      </div>
      {/* Content with text-specific gradient overlay */}
      <div className="container-custom relative z-50 h-full flex items-center">
        <div className="absolute left-0 top-0 w-full h-full pointer-events-none z-[-1]">
          <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-white/80 via-white/60 to-transparent" />
        </div>
        <div className="max-w-3xl slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="accent-badge mb-4 inline-block">Premier Outdoor Provider</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6">
            Professional Fencing <span className="text-accent">&</span> Deck Solutions
          </h1>
          <p className="text-xl md:text-2xl text-primary/90 mb-8">
            Quality craftsmanship, innovative designs, and exceptional service for your residential or commercial property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-accent text-secondary-foreground hover:bg-accent/90 hover-scale">
              <Link to="/contact" className="inline-flex items-center">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-primary border-primary hover:bg-primary/10">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-200 to-transparent z-40"></div>
    </section>
  );
};

export default Hero;