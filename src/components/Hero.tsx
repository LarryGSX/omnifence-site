import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { FC } from "react";
import OptimizedImage from "@/components/OptimizedImage";
const Hero: FC = () => {
  return <section className="relative h-screen overflow-hidden">
      {/* Background Image - Restored to full vibrancy */}
      <div className="absolute inset-0 z-0">
        <OptimizedImage src="/Hero_Image_11.jpg" alt="Professional fence installation in Tulsa, Oklahoma" className="w-full h-full object-cover" />
        {/* Minimal gradient overlay only at bottom for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="container-custom relative z-30 h-full flex items-start justify-center h-screen pt-24 md:pt-32">
        {/* Text Content - Positioned in top third to showcase fence */}
        <div className="w-full max-w-3xl text-center slide-up" style={{
        animationDelay: '0.1s'
      }}>
          
          {/* Enhanced text shadows and subtle backdrop for readability without dulling image */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 [text-shadow:_0_4px_8px_rgb(0_0_0_/_80%),_0_2px_4px_rgb(0_0_0_/_90%)] border border-white/40 rounded-lg p-4 md:p-6 backdrop-blur-[1px] bg-gradient-to-b from-black/20 via-black/15 to-black/25">
            Tulsa's Trusted Fencing & Custom Deck Experts
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 [text-shadow:_0_3px_6px_rgb(0_0_0_/_70%),_0_1px_3px_rgb(0_0_0_/_80%)] backdrop-blur-[0.5px] bg-black/10 rounded-lg p-3">
            Quality craftsmanship, innovative designs, and exceptional service for your residential or commercial property throughout Greater Tulsa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 hover-scale shadow-lg">
              <Link to="/quote" className="inline-flex items-center">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            {/* Maintaining improved contrast for Explore Services button */}
            <Button asChild size="lg" variant="outline" className="bg-white/15 text-white border-2 border-white hover:bg-white hover:text-primary transition-all duration-300 shadow-lg backdrop-blur-sm">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>

    </section>;
};
export default Hero;