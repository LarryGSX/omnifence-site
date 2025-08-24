import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Users } from "lucide-react";
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
        {/* Enhanced gradient overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/40 to-black/70"></div>
      </div>

      {/* Content Container */}
      <div className="container-custom relative z-30 flex items-center min-h-screen py-24">
        <div className="grid lg:grid-cols-5 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="lg:col-span-3 text-white space-y-8">
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="trust-indicator bg-white/15 text-white border-white/30 backdrop-blur-sm">
                <Shield className="w-4 h-4" />
                <span>Licensed & Insured</span>
              </div>
              <div className="trust-indicator bg-white/15 text-white border-white/30 backdrop-blur-sm">
                <Award className="w-4 h-4" />
                <span>15+ Years Experience</span>
              </div>
              <div className="trust-indicator bg-white/15 text-white border-white/30 backdrop-blur-sm">
                <Users className="w-4 h-4" />
                <span>500+ Happy Customers</span>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                Tulsa's Trusted Fencing & <span className="text-accent">Custom Deck</span> Experts
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
                Quality craftsmanship, innovative designs, and exceptional service for your residential or commercial property throughout Greater Tulsa.
              </p>
            </div>

            {/* Enhanced Value Props with better layout */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-white font-medium">Free Professional Consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-white font-medium">Lifetime Warranty Available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-white font-medium">Premium Materials Only</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-white font-medium">Expert Installation Team</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="btn-accent">
                <Link to="/quote" className="inline-flex items-center">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="btn-secondary bg-white/10 border-2 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Enhanced Stats Cards */}
          <div className="lg:col-span-2 hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="professional-card bg-white/95 backdrop-blur-sm text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-gray-600 font-semibold text-sm uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="professional-card bg-white/95 backdrop-blur-sm text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600 font-semibold text-sm uppercase tracking-wider">Projects Done</div>
              </div>
              <div className="professional-card bg-white/95 backdrop-blur-sm text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-gray-600 font-semibold text-sm uppercase tracking-wider">Satisfaction</div>
              </div>
              <div className="professional-card bg-white/95 backdrop-blur-sm text-center">
                <div className="text-4xl font-bold text-primary mb-2">A+</div>
                <div className="text-gray-600 font-semibold text-sm uppercase tracking-wider">BBB Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary via-primary/20 to-transparent z-40"></div>
    </section>
  );
};

export default Hero;