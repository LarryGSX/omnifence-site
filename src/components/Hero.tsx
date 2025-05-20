import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import type { FC } from "react";

const Hero: FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/Hero_Image_1.jpg",
    "/Hero_Image_3.jpg",
    "/Hero_Image_4.jpg",
    "/Hero_Image_5.jpg",
    "/Hero_Image_6.jpg",
    "/Hero_Image_7.jpeg",
    "/Hero_Image_8.jpeg",
    "/Hero_Image_9.jpeg",
    "/Hero_Image_10.jpg",
    "/Hero_Image_11.jpg",
    "/Hero_Image_12.jpg",
  ];

  // Auto-advance carousel every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
    // Reset timer by clearing and setting a new interval
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    // Reset timer by clearing and setting a new interval
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Blue Tint */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Hero_Image_11.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content Container */}
      <div className="container-custom relative z-30 h-full flex items-center min-h-screen">
        {/* Left Side - Text Content */}
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

        {/* Right Side - Image Carousel */}
        <div className="hidden md:block w-[45%] h-full relative">
          <div className="relative w-full h-[600px] rounded-xl overflow-hidden shadow-2xl bg-black/10">
            {/* Carousel Images */}
            {images.map((src, index) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={src}
                  alt={`Fence Image ${index + 1}`}
                  className="w-full h-full object-cover object-center rounded-xl"
                  style={{ transform: 'scale(1.02)' }}
                />
              </div>
            ))}

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary to-transparent z-40"></div>
    </section>
  );
};

export default Hero;