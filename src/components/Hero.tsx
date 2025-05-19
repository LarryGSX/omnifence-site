import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="relative min-h-screen bg-primary overflow-hidden">
      {/* Text Safe Zone (left 55%) */}
      <div className="container-custom relative z-30 h-full flex items-center min-h-screen">
        <div className="w-full md:w-[55%] pt-20 pb-20 md:pb-0 slide-up" style={{ animationDelay: '0.1s' }}>
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

      {/* Scattered Images - never overlap text safe zone */}
      <div className="absolute inset-0 z-10 pointer-events-none select-none">
        {/* Top Left (above text) */}
        <div className="hidden md:block absolute top-[3%] left-[4%] w-[21vw] min-w-[170px] max-w-[300px] aspect-[4/3] rounded-xl shadow-2xl transform -rotate-2 z-10 overflow-hidden">
          <img src="/Hero_Image_1.jpg" alt="Fence Installation" className="w-full h-full object-cover rounded-xl brightness-110 contrast-110" onError={e => e.currentTarget.style.display='none'} />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        {/* Top Center */}
        <div className="hidden md:block absolute top-[1%] left-[30%] w-[18vw] min-w-[140px] max-w-[250px] aspect-[4/3] rounded-xl shadow-2xl transform rotate-2 z-15 overflow-hidden">
          <img src="/Hero_Image_7.jpeg" alt="Fence Detail" className="w-full h-full object-cover rounded-xl brightness-110 contrast-110" onError={e => e.currentTarget.style.display='none'} />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        {/* Top Right */}
        <div className="absolute top-[5%] right-[7%] w-[23vw] min-w-[180px] max-w-[320px] aspect-[4/3] rounded-xl shadow-2xl transform rotate-3 z-20 overflow-hidden">
          <img src="/Hero_Image_2.jpeg" alt="Deck Construction" className="w-full h-full object-cover rounded-xl brightness-110 contrast-110" onError={e => e.currentTarget.style.display='none'} />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        {/* Middle Right (beside text) */}
        <div className="absolute top-[34%] right-[2%] w-[20vw] min-w-[150px] max-w-[260px] aspect-[4/3] rounded-xl shadow-2xl transform -rotate-2 z-30 overflow-hidden">
          <img src="/Hero_Image_3.jpg" alt="Custom Fence Design" className="w-full h-full object-cover rounded-xl brightness-110 contrast-110" onError={e => e.currentTarget.style.display='none'} />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        {/* Center Right */}
        <div className="hidden md:block absolute top-[52%] right-[16%] w-[15vw] min-w-[110px] max-w-[180px] aspect-[4/3] rounded-xl shadow-2xl transform rotate-2 z-25 overflow-hidden">
          <img src="/Hero_Image_8.jpeg" alt="Fence Gate" className="w-full h-full object-cover rounded-xl brightness-110 contrast-110" onError={e => e.currentTarget.style.display='none'} />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        {/* Bottom Right */}
        <div className="absolute bottom-[8%] right-[12%] w-[19vw] min-w-[130px] max-w-[220px] aspect-[4/3] rounded-xl shadow-2xl transform rotate-3 z-20 overflow-hidden">
          <img src="/Hero_Image_4.jpg" alt="Professional Installation" className="w-full h-full object-cover rounded-xl brightness-110 contrast-110" onError={e => e.currentTarget.style.display='none'} />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        {/* Bottom Center (below text) */}
        <div className="absolute bottom-[6%] left-[36%] w-[20vw] min-w-[140px] max-w-[240px] aspect-[4/3] rounded-xl shadow-2xl transform -rotate-2 z-10 overflow-hidden">
          <img src="/Hero_Image_5.jpg" alt="Custom Design" className="w-full h-full object-cover rounded-xl brightness-110 contrast-110" onError={e => e.currentTarget.style.display='none'} />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        {/* Bottom Left (below text, smaller) */}
        <div className="hidden md:block absolute bottom-[14%] left-[12%] w-[13vw] min-w-[90px] max-w-[140px] aspect-[4/3] rounded-xl shadow-2xl transform rotate-2 z-20 overflow-hidden">
          <img src="/Hero_Image_6.jpg" alt="Quality Work" className="w-full h-full object-cover rounded-xl brightness-110 contrast-110" onError={e => e.currentTarget.style.display='none'} />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        {/* Bottom Far Left */}
        <div className="hidden md:block absolute bottom-[22%] left-[2%] w-[12vw] min-w-[80px] max-w-[120px] aspect-[4/3] rounded-xl shadow-2xl transform -rotate-3 z-12 overflow-hidden">
          <img src="/Hero_Image_9.jpeg" alt="Fence Accent" className="w-full h-full object-cover rounded-xl brightness-110 contrast-110" onError={e => e.currentTarget.style.display='none'} />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary to-transparent z-40"></div>
    </section>
  );
};

export default Hero;