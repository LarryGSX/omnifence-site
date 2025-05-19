
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Fence, Shield, LayoutGrid, DoorClosed } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  delay: string;
}

const ServiceCard = ({ title, description, icon, link, delay }: ServiceCardProps) => {
  return (
    <div className="service-card slide-up" style={{ animationDelay: delay }}>
      <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-4 hover-scale">
        {icon}
      </div>
      <h3 className="text-xl font-heading font-semibold mb-3">
        <span className="accent-border-bottom">{title}</span>
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to={link} 
        className="text-primary font-medium inline-flex items-center link-underline"
      >
        Learn more
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};

const ServicesOverview = () => {
  const services = [
    {
      title: "Residential Fencing",
      description: "Custom-designed residential fences that enhance your home's security, privacy, and curb appeal.",
      icon: <Fence className="h-6 w-6" />,
      link: "/services#residential",
      delay: "0.1s"
    },
    {
      title: "Commercial Fencing",
      description: "Secure and durable fencing solutions for businesses, schools, and other commercial properties.",
      icon: <Shield className="h-6 w-6" />,
      link: "/services#commercial",
      delay: "0.2s"
    },
    {
      title: "Custom Deck Building",
      description: "Beautiful, functional decks designed to extend your living space and increase property value.",
      icon: <LayoutGrid className="h-6 w-6" />,
      link: "/services#decks",
      delay: "0.3s"
    },
    {
      title: "Gates & Gate Operators",
      description: "Automated and manual gate solutions that combine security with convenience for both residential and commercial properties.",
      icon: <DoorClosed className="h-6 w-6" />,
      link: "/services#gates",
      delay: "0.4s"
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
      <div className="container-custom">
        <div className="text-center mb-12 slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="accent-badge mb-2 inline-block">What we offer</span>
          <h2 className="section-title">Our Services</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Discover our comprehensive range of fencing and deck solutions tailored to your unique needs and preferences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
              delay={service.delay}
            />
          ))}
        </div>

        <div className="text-center fade-in" style={{ animationDelay: '0.4s' }}>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 hover-scale">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
