
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Fence, Shield, LayoutGrid, DoorClosed, ArrowRight } from "lucide-react";

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
      <div className="text-center space-y-6">
        <div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center text-white shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-heading font-bold mb-4 text-primary">
            {title}
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
          <Link 
            to={link} 
            className="inline-flex items-center text-accent font-semibold hover:text-primary transition-colors group bg-accent/10 px-4 py-2 rounded-full hover:bg-accent/20"
          >
            Learn More
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
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
    <section className="py-16 md:py-24 bg-gradient-to-b from-secondary via-white to-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-accent/10 rounded-full"></div>
      
      <div className="container-custom relative">
        <div className="text-center mb-12 slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="professional-badge mb-4 inline-block">What we offer</span>
          <h2 className="section-title">Our Services</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Discover our comprehensive range of fencing and deck solutions tailored to your unique needs and preferences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
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

        <div className="text-center fade-in" style={{ animationDelay: '0.5s' }}>
          <Button asChild size="lg" className="btn-primary">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
