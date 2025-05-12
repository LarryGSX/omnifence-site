
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Fence, Shield, Check } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
      <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-heading font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to={link} 
        className="text-primary font-medium inline-flex items-center hover:underline"
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
      link: "/services#residential"
    },
    {
      title: "Commercial Fencing",
      description: "Secure and durable fencing solutions for businesses, schools, and other commercial properties.",
      icon: <Shield className="h-6 w-6" />,
      link: "/services#commercial"
    },
    {
      title: "Custom Deck Building",
      description: "Beautiful, functional decks designed to extend your living space and increase property value.",
      icon: <Check className="h-6 w-6" />,
      link: "/services#decks"
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Services</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Discover our comprehensive range of fencing and deck solutions tailored to your unique needs and preferences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
            />
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
