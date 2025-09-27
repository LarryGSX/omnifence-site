import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { 
  Fence, 
  Shield, 
  Hammer, 
  KeyRound, 
  CheckCircle, 
  Award, 
  Clock,
  Star
} from "lucide-react";

const Services = () => {
  // Mock project images - using existing hero images as placeholders
  const projectImages = [
    "/Hero_Image_1.jpg",
    "/Hero_Image_2.jpeg", 
    "/Hero_Image_3.jpg",
    "/Hero_Image_4.jpg",
    "/Hero_Image_5.jpg",
    "/Hero_Image_6.jpg"
  ];

  const services = [
    {
      id: "residential-fencing",
      title: "Residential Fencing",
      icon: <Fence className="h-8 w-8" />,
      description: "Transform your home with custom-designed residential fences that perfectly blend security, privacy, and curb appeal. From classic wooden privacy fences to modern vinyl and aluminum options, we create solutions that enhance your property value while reflecting your personal style.",
      features: ["Privacy & Security", "Custom Designs", "Premium Materials", "Professional Installation"],
      gallery: projectImages.slice(0, 4)
    },
    {
      id: "commercial-fencing",
      title: "Commercial Fencing", 
      icon: <Shield className="h-8 w-8" />,
      description: "Protect your business with industrial-grade fencing solutions designed for durability and security. We specialize in chain-link, steel, and high-security fencing systems that meet commercial standards while maintaining professional aesthetics for your property.",
      features: ["High Security", "Industrial Grade", "Code Compliance", "Rapid Installation"],
      gallery: projectImages.slice(1, 5)
    },
    {
      id: "custom-decks",
      title: "Custom Decks",
      icon: <Hammer className="h-8 w-8" />,
      description: "Extend your living space with beautifully crafted custom decks that become the heart of your outdoor entertainment. Our expert craftsmen use premium materials and innovative designs to create decks that are both functional and stunning focal points for your home.",
      features: ["Custom Design", "Premium Materials", "Multi-Level Options", "Built to Last"],
      gallery: projectImages.slice(2, 6)
    },
    {
      id: "gates-operators",
      title: "Gates & Gate Operators",
      icon: <KeyRound className="h-8 w-8" />,
      description: "Experience the perfect combination of security and convenience with our automated gate systems. From elegant residential entry gates to heavy-duty commercial access controls, we provide complete gate solutions including installation, automation, and ongoing maintenance.",
      features: ["Automated Systems", "Remote Access", "Security Integration", "24/7 Support"],
      gallery: projectImages.slice(0, 4)
    }
  ];

  const trustBadges = [
    { icon: <Award className="h-5 w-5" />, text: "Licensed & Insured" },
    { icon: <Clock className="h-5 w-5" />, text: "10+ Years Experience" },
    { icon: <CheckCircle className="h-5 w-5" />, text: "Quality Guarantee" },
    { icon: <Star className="h-5 w-5" />, text: "5-Star Reviews" }
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/Hero_Image_3.jpg')" }}
        ></div>
        <div className="container-custom relative z-20 h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="accent-badge mb-4 inline-block bg-accent/20 text-white">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Expert Fencing & Deck Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              From custom designs to professional installation, we deliver quality craftsmanship 
              that transforms your outdoor spaces.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {trustBadges.map((badge, index) => (
                <Badge key={index} variant="outline" className="bg-white/10 text-white border-white/20 px-4 py-2">
                  {badge.icon}
                  <span className="ml-2">{badge.text}</span>
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-16 slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="accent-badge mb-4 inline-block">What We Offer</span>
            <h2 className="section-title">Our Premium Services</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              Comprehensive fencing and deck solutions tailored to your specific needs, 
              backed by years of expertise and commitment to excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card 
                key={service.id}
                id={service.id}
                className="scroll-mt-24 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-accent hover:border-primary flex flex-col"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      {service.icon}
                    </div>
                    <Button asChild className="btn-accent">
                      <Link to="/quote" state={{ service: service.id }}>
                        Get Quote
                      </Link>
                    </Button>
                  </div>
                  <CardTitle className="text-2xl font-heading text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex flex-col h-full">
                  <div className="flex-grow space-y-6">
                    <CardDescription className="text-base leading-relaxed text-gray-700">
                      {service.description}
                    </CardDescription>

                    {/* Features List */}
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Project Gallery Carousel */}
                    <div className="relative">
                      <h4 className="font-semibold mb-3 text-primary">Recent Projects</h4>
                      <Carousel className="w-full">
                        <CarouselContent>
                          {service.gallery.map((image, imageIndex) => (
                            <CarouselItem key={imageIndex} className="basis-1/2">
                              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                                <img
                                  src={image}
                                  alt={`${service.title} project ${imageIndex + 1}`}
                                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />
                      </Carousel>
                    </div>
                  </div>

                  {/* CTA Section - Fixed at bottom */}
                  <div className="pt-4 mt-auto">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button asChild className="flex-1 btn-primary">
                        <Link to="/quote" state={{ service: service.id }}>
                          Get Free Estimate
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="flex-1">
                        <Link to="/gallery">
                          See Gallery
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonial Pull-Quote */}
          <div className="bg-primary/5 rounded-lg p-8 text-center slide-up" style={{ animationDelay: '0.7s' }}>
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <blockquote className="text-xl font-medium text-gray-800 mb-4">
              "Omni Fence transformed our backyard with a beautiful custom deck and privacy fence. 
              The quality is outstanding and the team was professional throughout the entire process."
            </blockquote>
            <cite className="text-primary font-semibold">- Sarah M., Tulsa Homeowner</cite>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Get a free consultation and personalized quote for your fencing or deck project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-secondary-foreground hover:bg-accent/90">
              <Link to="/quote">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              <a href="tel:9181234567">Call (918) 123-4567</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
