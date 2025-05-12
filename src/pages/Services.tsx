
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Fence, Shield, Check } from "lucide-react";

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
    <section id={id} className="py-16 border-b border-gray-200 last:border-b-0">
      <div className="container-custom">
        <div className={`grid md:grid-cols-2 gap-8 items-center ${reversed ? 'md:flex-row-reverse' : ''}`}>
          <div className={`${reversed ? 'md:order-2' : ''}`}>
            <h2 className="section-title mb-4">{title}</h2>
            <p className="text-lg text-gray-700 mb-6">{description}</p>
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button asChild>
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
          <div className={`${reversed ? 'md:order-1' : ''} bg-gray-200 rounded-lg min-h-[300px] flex items-center justify-center`}>
            {image ? (
              <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
            ) : (
              <div className="text-center p-6">
                <Fence className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-lg font-medium">Service Image Placeholder</p>
              </div>
            )}
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
    <main>
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container-custom text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Our Fencing & Deck Services
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Discover our comprehensive range of professional fencing and deck solutions designed to enhance your property.
            </p>
            <Button asChild size="lg" className="bg-accent text-secondary-foreground hover:bg-accent/90">
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Navigation */}
      <section className="py-8 bg-secondary">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#residential" className="px-4 py-2 bg-white rounded-full shadow-sm hover:bg-primary hover:text-white transition-colors">Residential Fencing</a>
            <a href="#commercial" className="px-4 py-2 bg-white rounded-full shadow-sm hover:bg-primary hover:text-white transition-colors">Commercial Fencing</a>
            <a href="#decks" className="px-4 py-2 bg-white rounded-full shadow-sm hover:bg-primary hover:text-white transition-colors">Custom Decks</a>
            <a href="#repair" className="px-4 py-2 bg-white rounded-full shadow-sm hover:bg-primary hover:text-white transition-colors">Repair & Maintenance</a>
            <a href="#gates" className="px-4 py-2 bg-white rounded-full shadow-sm hover:bg-primary hover:text-white transition-colors">Gates & Automation</a>
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
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Materials We Use</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              We source only the highest quality materials for our fencing and deck projects, ensuring durability, aesthetics, and value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-heading font-semibold mb-3">Wood</h3>
              <p className="text-gray-600">
                Cedar, pine, redwood, and other species selected for their natural beauty and durability.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-heading font-semibold mb-3">Vinyl/PVC</h3>
              <p className="text-gray-600">
                Low-maintenance, durable plastic materials available in various styles and colors.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-heading font-semibold mb-3">Aluminum</h3>
              <p className="text-gray-600">
                Lightweight, corrosion-resistant metal ideal for ornamental and security fencing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-heading font-semibold mb-3">Composite</h3>
              <p className="text-gray-600">
                Engineered wood-plastic blend combining natural appearance with enhanced durability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Contact us today for a free consultation and quote. Our team is ready to bring your vision to life.
            </p>
            <Button asChild size="lg" className="bg-accent text-secondary-foreground hover:bg-accent/90">
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
