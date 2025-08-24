
import { Cog, Shield, Check, Handshake } from "lucide-react";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: string;
}

const Feature = ({ title, description, icon, delay }: FeatureProps) => {
  return (
    <div className="professional-card text-center slide-up" style={{ animationDelay: delay }}>
      <div className="relative mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-3xl flex items-center justify-center text-white mx-auto shadow-lg">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>
      <h3 className="text-xl font-heading font-bold mb-4 text-primary">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
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
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full translate-y-1/4 -translate-x-1/4"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative">
        <div className="text-center mb-12 slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="professional-badge mb-4 inline-block">Why Us</span>
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
