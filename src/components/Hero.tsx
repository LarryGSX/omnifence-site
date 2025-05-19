import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="relative min-h-screen bg-primary overflow-hidden">
      {/* Text Safe Zone (left 55%) with 32px safety margin */}
      <div className="container-custom relative z-30 h-full flex items-center min-h-screen">
        <div id="hero-content" className="w-full md:w-[55%] pt-20 pb-20 md:pb-0 slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="accent-badge mb-4 inline-block bg-accent text-secondary-foreground font-semibold rounded-full px-4 py-1 shadow-md">
            Premier Outdoor Provider
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Professional Fencing & Deck Solutions
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

      {/* Scattered Images - never overlap text safe zone */}
      <div className="absolute inset-0 z-10 pointer-events-none select-none">
        {/* Feature Photos (280-320px) */}
        {/* 1. Top Right Feature */}
        <div className="hidden md:block absolute top-[60px] right-[60px] w-[320px] aspect-[4/3] rounded-xl shadow-2xl transform rotate-3 z-40 overflow-hidden">
          <img src="/Hero_Image_11.jpg" alt="Fence Modern" className="w-full h-full object-cover rounded-xl brightness-110 contrast-110" onError={e => e.currentTarget.style.display='none'} />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        {/* 2. Center Feature */}
        <div className="absolute top-[260px] left-[420px] w-[300px] aspect-[4/3] rounded-xl shadow-2xl transform rotate-2 z-22 overflow-hidden">
          <img src="/Hero_Image_9.jpeg" alt="Fence Accent" className="w-full h-full object-cover rounded-xl brightness-110 contrast-110" onError={e => e.currentTarget.style.display='none'} />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        {/* 3. Bottom Feature */}
        <div className="absolute bottom-[60px] left-[600px] w-[280px] aspect-[4/3] rounded-xl shadow-2xl transform rotate-3 z-14 overflow-hidden">
          <img src="/Hero_Image_5.jpg" alt="Custom Design" className="w-full h-full object-cover rounded-xl brightness-110 contrast-110" onError={e => e.currentTarget.style.display='none'} />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Mid-sized Photos (220-260px) */}
        {/* 4. Top Left */}
        <div className="hidden md:block absolute top-[60px] left-[70px] w-[260px] aspect-[4/3] rounded-xl shadow-2xl transform -rotate-3 z-10 overflow-hidden">
          <img src="/Hero_Image_1.jpg" alt="Fence Installation" className="w-full h-full object-cover rounded-xl brightness-110 contrast-110" onError={e => e.currentTarget.style.display='none'} />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        {/* 5. Top Center */}
        <div className="hidden md:block absolute top-[40px] left-[540px] w-[240px] aspect-[4/3] rounded-xl shadow-2xl transform rotate-4 z-15 overflow-hidden">
          <img src="/Hero_Image_7.jpeg" alt="Fence Detail" className="w-full h-full object-cover rounded-xl brightness-110 contrast-110" onError={e => e.currentTarget.style.display='none'} />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        {/* 6. Top Right */}
        <div className="absolute top-[200px] right-[60px] w-[220px] aspect-[4/3] rounded-xl shadow-2xl transform rotate-2 z-20 overflow-hidden">
          <img src="/Hero_Image_2.jpeg" alt="Deck Construction" className="w-full h-full object-cover rounded-xl brightness-110 contrast-110" onError={e => e.currentTarget.style.display='none'} />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        {/* 7. Middle Right */}
        <div className="absolute top-[320px] right-[260px] w-[240px] aspect-[4/3] rounded-xl shadow-2xl transform -rotate-4 z-25 overflow-hidden">
          <img src="/Hero_Image_8.jpeg" alt="Fence Gate" className="w-full h-full object-cover rounded-xl brightness-110 contrast-110" onError={e => e.currentTarget.style.display='none'} />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        {/* 8. Bottom Left */}
        <div className="hidden md:block absolute bottom-[80px] left-[80px] w-[220px] aspect-[4/3] rounded-xl shadow-2xl transform rotate-2 z-16 overflow-hidden">
          <img src="/Hero_Image_6.jpg" alt="Quality Work" className="w-full h-full object-cover rounded-xl brightness-110 contrast-110" onError={e => e.currentTarget.style.display='none'} />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        {/* 9. Bottom Right */}
        <div className="hidden md:block absolute bottom-[80px] right-[120px] w-[240px] aspect-[4/3] rounded-xl shadow-2xl transform -rotate-2 z-19 overflow-hidden">
          <img src="/Hero_Image_4.jpg" alt="Professional Installation" className="w-full h-full object-cover rounded-xl brightness-110 contrast-110" onError={e => e.currentTarget.style.display='none'} />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Small Accent Photos (200-220px) */}
        {/* 10. Top Center Left */}
        <div className="hidden md:block absolute top-[80px] left-[340px] w-[200px] aspect-[3/4] rounded-xl shadow-2xl transform rotate-2 z-12 overflow-hidden">
          <img src="/Hero_Image_10.jpg" alt="Fence Feature" className="w-full h-full object-cover rounded-xl brightness-110 contrast-110" onError={e => e.currentTarget.style.display='none'} />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        {/* 11. Middle Left */}
        <div className="hidden md:block absolute top-[320px] left-[120px] w-[210px] aspect-[4/3] rounded-xl shadow-2xl transform -rotate-2 z-18 overflow-hidden">
          <img src="/Hero_Image_3.jpg" alt="Custom Fence Design" className="w-full h-full object-cover rounded-xl brightness-110 contrast-110" onError={e => e.currentTarget.style.display='none'} />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        {/* 12. Bottom Center Left */}
        <div className="hidden md:block absolute bottom-[60px] left-[340px] w-[200px] aspect-[4/3] rounded-xl shadow-2xl transform -rotate-2 z-11 overflow-hidden">
          <img src="/Hero_Image_12.jpg" alt="Fence Accent 2" className="w-full h-full object-cover rounded-xl brightness-110 contrast-110" onError={e => e.currentTarget.style.display='none'} />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary to-transparent z-40"></div>
    </section>
  );
};

export default Hero;