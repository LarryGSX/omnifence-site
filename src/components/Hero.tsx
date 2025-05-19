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
      {/*
        Collage Layout Rules:
        - No image covers #hero-content (headline, subtext, buttons); min 48px margin.
        - No voids >250px between images; no image >120px from #hero-content.
        - Any image <180px wide is scaled up by ~25% (desktop).
        - Allow up to 10% overlap, never over central fence lines; randomize z-index.
        - Tablet: 75% width, all images visible.
        - Mobile: Hide 3 least-important images (hidden sm:block), maintain 24px margin around #hero-content.
        - pointer-events-none on all images.
      */}
      <div className="absolute inset-0 z-10 pointer-events-none select-none">
        {/* Top Left (Hero_Image_1) - scaled up, closer to content */}
        <div className="hidden md:block absolute top-[-10px] left-[1%] w-[240px] md:w-[180px] lg:w-[240px] aspect-[4/3] rounded-xl shadow-2xl transform -rotate-2 z-10 overflow-hidden">
          <img src="/Hero_Image_1.jpg" alt="Fence Installation" className="w-full h-full object-cover rounded-xl brightness-110 contrast-110" onError={e => e.currentTarget.style.display='none'} />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        {/* Top Center Left (Hero_Image_10) - vertical, scaled up */}
        <div className="hidden md:block absolute top-[30px] left-[15%] w-[140px] md:w-[110px] lg:w-[140px] aspect-[3/4] rounded-xl shadow-2xl transform rotate-1 z-12 overflow-hidden">
          <img src="/Hero_Image_10.jpg" alt="Fence Feature" className="w-full h-full object-cover rounded-xl brightness-110 contrast-110" onError={e => e.currentTarget.style.display='none'} />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        {/* Top Center (Hero_Image_7) - moved to fill gap */}
        <div className="hidden md:block absolute top-[0px] left-[28%] w-[180px] md:w-[135px] lg:w-[180px] aspect-[4/3] rounded-xl shadow-2xl transform rotate-2 z-15 overflow-hidden">
          <img src="/Hero_Image_7.jpeg" alt="Fence Detail" className="w-full h-full object-cover rounded-xl brightness-110 contrast-110" onError={e => e.currentTarget.style.display='none'} />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        {/* Top Middle (Hero_Image_9) - slightly larger, overlap with 7 */}
        <div className="hidden md:block absolute top-[60px] left-[38%] w-[160px] md:w-[120px] lg:w-[160px] aspect-[4/3] rounded-xl shadow-2xl transform -rotate-2 z-16 overflow-hidden">
          <img src="/Hero_Image_9.jpeg" alt="Fence Accent" className="w-full h-full object-cover rounded-xl brightness-110 contrast-110" onError={e => e.currentTarget.style.display='none'} />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        {/* Top Center Right (Hero_Image_11) - large, in front */}
        <div className="hidden md:block absolute top-[10px] right-[20%] w-[300px] md:w-[225px] lg:w-[300px] aspect-[4/3] rounded-xl shadow-2xl transform rotate-3 z-40 overflow-hidden">
          <img src="/Hero_Image_11.jpg" alt="Fence Modern" className="w-full h-full object-cover rounded-xl brightness-110 contrast-110" onError={e => e.currentTarget.style.display='none'} />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        {/* Top Right (Hero_Image_2) - moved down to fill gap */}
        <div className="absolute top-[90px] right-[3%] w-[200px] md:w-[150px] lg:w-[200px] aspect-[4/3] rounded-xl shadow-2xl transform rotate-3 z-20 overflow-hidden">
          <img src="/Hero_Image_2.jpeg" alt="Deck Construction" className="w-full h-full object-cover rounded-xl brightness-110 contrast-110" onError={e => e.currentTarget.style.display='none'} />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        {/* Middle Right (Hero_Image_3) - overlap with 2, fill right gap */}
        <div className="absolute top-[220px] right-[5%] w-[170px] md:w-[128px] lg:w-[170px] aspect-[4/3] rounded-xl shadow-2xl transform -rotate-2 z-30 overflow-hidden">
          <img src="/Hero_Image_3.jpg" alt="Custom Fence Design" className="w-full h-full object-cover rounded-xl brightness-110 contrast-110" onError={e => e.currentTarget.style.display='none'} />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        {/* Center Right (Hero_Image_8) - fill lower right gap, hide on mobile */}
        <div className="hidden md:block absolute top-[340px] right-[18%] w-[120px] md:w-[90px] lg:w-[120px] aspect-[4/3] rounded-xl shadow-2xl transform rotate-2 z-25 overflow-hidden sm:block">
          <img src="/Hero_Image_8.jpeg" alt="Fence Gate" className="w-full h-full object-cover rounded-xl brightness-110 contrast-110" onError={e => e.currentTarget.style.display='none'} />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        {/* Bottom Right (Hero_Image_4) - fill bottom right, overlap with 8 */}
        <div className="absolute bottom-[60px] right-[8%] w-[160px] md:w-[120px] lg:w-[160px] aspect-[4/3] rounded-xl shadow-2xl transform rotate-3 z-20 overflow-hidden">
          <img src="/Hero_Image_4.jpg" alt="Professional Installation" className="w-full h-full object-cover rounded-xl brightness-110 contrast-110" onError={e => e.currentTarget.style.display='none'} />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        {/* Bottom Center (Hero_Image_5) - scaled up, fill lower center */}
        <div className="absolute bottom-[40px] left-[38%] w-[180px] md:w-[135px] lg:w-[180px] aspect-[4/3] rounded-xl shadow-2xl transform -rotate-2 z-10 overflow-hidden">
          <img src="/Hero_Image_5.jpg" alt="Custom Design" className="w-full h-full object-cover rounded-xl brightness-110 contrast-110" onError={e => e.currentTarget.style.display='none'} />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        {/* Bottom Center Left (Hero_Image_12) - hide on mobile */}
        <div className="hidden md:block absolute bottom-[80px] left-[22%] w-[120px] md:w-[90px] lg:w-[120px] aspect-[4/3] rounded-xl shadow-2xl transform rotate-2 z-11 overflow-hidden sm:block">
          <img src="/Hero_Image_12.jpg" alt="Fence Accent 2" className="w-full h-full object-cover rounded-xl brightness-110 contrast-110" onError={e => e.currentTarget.style.display='none'} />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        {/* Bottom Left (Hero_Image_6) - scaled up, fill lower left */}
        <div className="hidden md:block absolute bottom-[100px] left-[6%] w-[150px] md:w-[112px] lg:w-[150px] aspect-[4/3] rounded-xl shadow-2xl transform rotate-2 z-20 overflow-hidden">
          <img src="/Hero_Image_6.jpg" alt="Quality Work" className="w-full h-full object-cover rounded-xl brightness-110 contrast-110" onError={e => e.currentTarget.style.display='none'} />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        {/* New Image (optional, fill stubborn gap) */}
        <div className="hidden md:block absolute top-[260px] left-[60%] w-[120px] md:w-[90px] lg:w-[120px] aspect-[4/3] rounded-xl shadow-2xl transform -rotate-4 z-18 overflow-hidden sm:block">
          <img src="/img/fences/extra1.jpg" alt="Extra Fence" className="w-full h-full object-cover rounded-xl brightness-110 contrast-110" onError={e => e.currentTarget.style.display='none'} />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary to-transparent z-40"></div>
    </section>
  );
};

export default Hero;