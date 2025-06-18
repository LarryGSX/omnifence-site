import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, CheckCircle, Star } from "lucide-react";

const Locations = () => {
  const locations = [
    {
      id: "tulsa-ok",
      city: "Tulsa",
      state: "OK",
      zipCodes: ["74101", "74102", "74103", "74104", "74105"],
      isHeadquarters: true,
      phone: "(918) 123-4567",
      description: "Our headquarters and primary service area. Full service coverage with same-day estimates available.",
      serviceLevel: "Full Service",
      features: ["Same-Day Estimates", "Emergency Repairs", "Full Installation Team", "Material Warehouse"]
    },
    {
      id: "broken-arrow-ok",
      city: "Broken Arrow",
      state: "OK", 
      zipCodes: ["74011", "74012", "74013"],
      isHeadquarters: false,
      phone: "(918) 123-4567",
      description: "Extended service area with regular scheduling and full installation services.",
      serviceLevel: "Full Service",
      features: ["Scheduled Service", "Full Installation", "Free Estimates", "Warranty Support"]
    },
    {
      id: "bixby-ok",
      city: "Bixby",
      state: "OK",
      zipCodes: ["74008"],
      isHeadquarters: false,
      phone: "(918) 123-4567", 
      description: "Regular service area with scheduled appointments and comprehensive installation.",
      serviceLevel: "Full Service",
      features: ["Scheduled Service", "Full Installation", "Free Estimates", "Warranty Support"]
    },
    {
      id: "owasso-ok",
      city: "Owasso",
      state: "OK",
      zipCodes: ["74055"],
      isHeadquarters: false,
      phone: "(918) 123-4567",
      description: "Extended service coverage with professional installation and consultation services.",
      serviceLevel: "Full Service", 
      features: ["Professional Consultation", "Full Installation", "Free Estimates", "Quality Guarantee"]
    },
    {
      id: "jenks-ok",
      city: "Jenks",
      state: "OK",
      zipCodes: ["74037"],
      isHeadquarters: false,
      phone: "(918) 123-4567",
      description: "Service area with scheduled installations and comprehensive project support.",
      serviceLevel: "Full Service",
      features: ["Project Planning", "Full Installation", "Free Estimates", "Material Delivery"]
    },
    {
      id: "sapulpa-ok", 
      city: "Sapulpa",
      state: "OK",
      zipCodes: ["74066"],
      isHeadquarters: false,
      phone: "(918) 123-4567",
      description: "Extended service area with professional installation and customer support.",
      serviceLevel: "Full Service",
      features: ["Professional Service", "Full Installation", "Free Estimates", "Customer Support"]
    }
  ];

  const serviceHighlights = [
    { icon: <CheckCircle className="h-5 w-5" />, text: "Licensed & Insured" },
    { icon: <Clock className="h-5 w-5" />, text: "Free Estimates" },
    { icon: <Star className="h-5 w-5" />, text: "Quality Guarantee" },
    { icon: <Phone className="h-5 w-5" />, text: "Local Support" }
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 md:py-28">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/Hero_Image_8.jpeg')" }}
        ></div>
        <div className="container-custom relative z-20">
          <div className="max-w-4xl mx-auto text-center slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="accent-badge mb-4 inline-block bg-accent/20 text-white">
              Service Areas
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Serving Tulsa & Surrounding Areas
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Professional fencing and deck services throughout the Greater Tulsa metropolitan area. 
              Quality craftsmanship delivered right to your door.
            </p>

            {/* Service Highlights */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {serviceHighlights.map((highlight, index) => (
                <Badge key={index} variant="outline" className="bg-white/10 text-white border-white/20 px-4 py-2">
                  {highlight.icon}
                  <span className="ml-2">{highlight.text}</span>
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-16 slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="accent-badge mb-4 inline-block">Where We Serve</span>
            <h2 className="section-title">Our Service Locations</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              From our headquarters in Tulsa, we proudly serve the entire Greater Tulsa area 
              with professional fencing and deck installation services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {locations.map((location, index) => (
              <Card 
                key={location.id}
                className={`
                  relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 
                  ${location.isHeadquarters 
                    ? 'ring-2 ring-accent border-accent bg-gradient-to-br from-accent/5 to-primary/5' 
                    : 'border-t-4 border-primary hover:border-accent'
                  }
                `}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                {location.isHeadquarters && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-accent text-secondary-foreground font-semibold">
                      <Star className="h-4 w-4 mr-1" />
                      Headquarters
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center mb-2">
                      <MapPin className="h-6 w-6 text-primary mr-2" />
                      <div>
                        <CardTitle className={`text-2xl font-heading ${location.isHeadquarters ? 'text-primary' : 'text-gray-800'}`}>
                          {location.city}, {location.state}
                        </CardTitle>
                        <p className="text-sm text-gray-600 mt-1">
                          ZIP: {location.zipCodes.join(", ")}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <Badge variant="secondary" className="w-fit">
                    {location.serviceLevel}
                  </Badge>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {location.description}
                  </CardDescription>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary text-sm">Available Services:</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {location.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-3 w-3 text-accent mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm">
                        <Phone className="h-4 w-4 text-primary mr-2" />
                        <a href={`tel:${location.phone}`} className="text-primary font-medium hover:underline">
                          {location.phone}
                        </a>
                      </div>
                      <Button asChild size="sm" className={location.isHeadquarters ? 'btn-accent' : 'btn-primary'}>
                        <Link to="/quote" state={{ location: location.id }}>
                          Get Quote
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-white rounded-lg p-8 shadow-lg text-center slide-up" style={{ animationDelay: '0.9s' }}>
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">
              Don't See Your Area Listed?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always expanding our service areas! Contact us to see if we can serve your location. 
              Special arrangements may be available for larger projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-primary">
                <Link to="/quote">Get a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:9181234567">Call (918) 123-4567</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-16 bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="section-title">Our Service Area</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proudly serving the Greater Tulsa metropolitan area with professional installation and customer service.
            </p>
          </div>
          
          {/* Placeholder for future map integration */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center mb-6">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-gray-600">Interactive service area map coming soon</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              Future enhancement: Interactive map showing service areas and recent project locations
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Contact us today for a free estimate on your fencing or deck project. 
            We're here to serve the Greater Tulsa area with quality and professionalism.
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

export default Locations; 