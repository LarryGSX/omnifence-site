
import { Cog, Shield, Check, Handshake } from "lucide-react";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: string;
}

const Feature = ({ title, description, icon, delay }: FeatureProps) => {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left slide-up" style={{ animationDelay: delay }}>
      <div className="inline-flex p-3 rounded-full bg-primary text-white mb-4 hover-scale shadow-clean">
        {icon}
      </div>
      <h3 className="text-xl font-heading font-semibold mb-3">
        <span className="accent-border-bottom">{title}</span>
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      title: "Tech-Driven Process",
      description: "We leverage modern technology for accurate estimates, efficient project management, and superior results.",
      icon: <Cog className="h-6 w-6" />,
      delay: "0.1s"
    },
    {
      title: "Quality Craftsmanship",
      description: "Our skilled professionals ensure every project is completed to the highest standards using premium materials.",
      icon: <Check className="h-6 w-6" />,
      delay: "0.2s"
    },
    {
      title: "Safety Focus",
      description: "We prioritize safety on every job site for our team members and your property through rigorous standards.",
      icon: <Shield className="h-6 w-6" />,
      delay: "0.3s"
    },
    {
      title: "Professionalism",
      description: "From initial consultation to project completion, we deliver exceptional customer service and communication.",
      icon: <Handshake className="h-6 w-6" />,
      delay: "0.4s"
    }
  ];

  return (
    <section className="py-16 md:py-24 relative">
      {/* Subtle background elements - no harsh borders */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/3 rounded-full translate-y-1/4 -translate-x-1/4"></div>
      
      <div className="container-custom relative">
        <div className="text-center mb-12 slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="accent-badge mb-2 inline-block">Why Us</span>
          <h2 className="section-title">Why Choose Omni Fence and Deck</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Our commitment to excellence sets us apart from the competition, delivering exceptional results on every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
