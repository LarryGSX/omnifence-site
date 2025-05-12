import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Fence, Shield, Check, ArrowRight } from "lucide-react";

interface ServiceProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  image?: string;
  reversed?: boolean;
}

const ServiceSection = ({ id, title, description, features, image, reversed = false }: ServiceProps) => {
  return (
    <section id={id} className="py-20 relative border-b border-gray-200 last:border-b-0">
      <div className={`absolute top-1/2 ${reversed ? 'right-0' : 'left-0'} w-20 h-[80%] bg-accent/5 -z-10 ${reversed ? 'rounded-l-full' : 'rounded-r-full'}`}></div>
      <div className="container-custom">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${reversed ? 'md:flex-row-reverse' : ''}`}>
          <div className={`${reversed ? 'md:order-2' : ''} slide-up`} style={{ animationDelay: '0.2s' }}>
            <span className="accent-badge mb-4 inline-block">{title}</span>
            <h2 className="section-title mb-4">{title}</h2>
            <p className="text-lg text-gray-700 mb-6">{description}</p>
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start group">
                  <div className="mr-4 bg-primary/10 p-2 rounded-full group-hover:bg-accent/20 transition-colors duration-300">
                    <Check className="h-5 w-5 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="bg-accent text-secondary-foreground hover:bg-accent/90 hover-scale">
              <Link to="/contact" className="inline-flex items-center">
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className={`${reversed ? 'md:order-1' : ''} slide-up`} style={{ animationDelay: '0.3s' }}>
            <div className="bg-gray-200 rounded-lg min-h-[400px] flex items-center justify-center overflow-hidden group hover:shadow-xl transition-all duration-300">
              {image ? (
                <img src={image} alt={title} className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500" />
              ) : (
                <div className="text-center p-6">
                  <div className="bg-primary/10 p-4 rounded-full inline-block mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                    <Fence className="h-16 w-16 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <p className="text-lg font-medium text-primary">Service Image Placeholder</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      id: "residential",
      title: "Residential Fencing",
      description: "Enhance your home's security, privacy, and curb appeal with our custom residential fencing solutions. We offer a wide range of materials, styles, and designs to match your property's aesthetic and meet your specific needs.",
      features: [
        "Privacy fences for backyard seclusion",
        "Decorative fencing to enhance property aesthetics",
        "Security fencing for family safety",
        "Pet and child-friendly options",
        "Custom gates and entryways"
      ]
    },
    {
      id: "commercial",
      title: "Commercial Fencing",
      description: "Protect your business or commercial property with durable, professional fencing solutions designed for security, durability, and visual appeal. Our commercial fencing options are built to last while maintaining a professional appearance.",
      features: [
        "High-security perimeter fencing",
        "Property boundary demarcation",
        "Parking area and facility protection",
        "Access control integration",
        "Custom branding opportunities"
      ],
      reversed: true
    },
    {
      id: "decks",
      title: "Custom Deck Building",
      description: "Transform your outdoor living space with a custom-designed deck that extends your home's usable area and creates the perfect setting for relaxation or entertainment. Our decks are built with premium materials for lasting beauty and durability.",
      features: [
        "Multi-level deck designs",
        "Composite and natural wood options",
        "Custom railings and stairs",
        "Built-in seating and planters",
        "Pergolas and shade structures"
      ]
    },
    {
      id: "repair",
      title: "Fence Repair & Maintenance",
      description: "Extend the life of your existing fence with our professional repair and maintenance services. From minor fixes to major renovations, we can restore your fence to optimal condition and appearance.",
      features: [
        "Post replacement and stabilization",
        "Panel and picket replacement",
        "Gate repair and adjustment",
        "Staining and sealing",
        "Storm damage restoration"
      ],
      reversed: true
    },
    {
      id: "gates",
      title: "Gates & Automation",
      description: "Enhance security and convenience with our custom gate solutions and automation services. From decorative entryway gates to full automation systems, we provide options that combine functionality with style.",
      features: [
        "Residential and commercial gate designs",
        "Electric gate operators",
        "Access control systems",
        "Intercom integration",
        "Pedestrian and driveway gates"
      ]
    }
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 md:py-32">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487252665478-49b61b47f302')] bg-cover bg-center" style={{ opacity: 0.4 }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent z-[11] opacity-50"></div>
        <div className="container-custom relative z-20">
          <div className="max-w-3xl mx-auto text-center slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="accent-badge mb-4 inline-block">Our Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Our Fencing & Deck Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Discover our comprehensive range of professional fencing and deck solutions designed to enhance your property.
            </p>
            <Button asChild size="lg" className="bg-accent text-secondary-foreground hover:bg-accent/90 hover-scale">
              <Link to="/contact" className="inline-flex items-center">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-primary/30 to-transparent"></div>
      </section>

      {/* Service Navigation */}
      <section className="py-8 bg-secondary sticky top-0 z-50 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service, index) => (
              <a
                key={index}
                href={`#${service.id}`}
                className="px-4 py-2 bg-white rounded-full shadow-sm hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, index) => (
        <ServiceSection
          key={index}
          id={service.id}
          title={service.title}
          description={service.description}
          features={service.features}
          reversed={service.reversed}
        />
      ))}

      {/* Materials Section */}
      <section className="py-20 bg-secondary relative">
        <div className="absolute top-1/2 left-0 w-20 h-[80%] bg-accent/5 -z-10 rounded-r-full"></div>
        <div className="container-custom">
          <div className="text-center mb-12 slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="accent-badge mb-4 inline-block">Materials</span>
            <h2 className="section-title">Materials We Use</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              We source only the highest quality materials for our fencing and deck projects, ensuring durability, aesthetics, and value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Wood",
                description: "Cedar, pine, redwood, and other species selected for their natural beauty and durability."
              },
              {
                title: "Vinyl/PVC",
                description: "Low-maintenance, durable plastic materials available in various styles and colors."
              },
              {
                title: "Aluminum",
                description: "Lightweight, corrosion-resistant metal ideal for ornamental and security fencing."
              },
              {
                title: "Composite",
                description: "Engineered wood-plastic blend combining natural appearance with enhanced durability."
              }
            ].map((material, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm text-center group hover:shadow-xl transition-all duration-300 slide-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="bg-primary/10 p-3 rounded-full inline-block mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <Shield className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-primary">{material.title}</h3>
                <p className="text-gray-600">
                  {material.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-primary">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487252665478-49b61b47f302')] bg-cover bg-center" style={{ opacity: 0.4 }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent z-[11] opacity-50"></div>
        <div className="container-custom relative z-20">
          <div className="max-w-3xl mx-auto text-center slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Contact us today for a free consultation and quote. Our team is ready to bring your vision to life.
            </p>
            <Button asChild size="lg" className="bg-accent text-secondary-foreground hover:bg-accent/90 hover-scale">
              <Link to="/contact" className="inline-flex items-center">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-primary/30 to-transparent"></div>
      </section>
    </main>
  );
};

export default Services;
