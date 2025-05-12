
import { Cog, Shield, Check, Handshake } from "lucide-react";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Feature = ({ title, description, icon }: FeatureProps) => {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <div className="inline-flex p-3 rounded-full bg-primary text-white mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-heading font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      title: "Tech-Driven Process",
      description: "We leverage modern technology for accurate estimates, efficient project management, and superior results.",
      icon: <Cog className="h-6 w-6" />
    },
    {
      title: "Quality Craftsmanship",
      description: "Our skilled professionals ensure every project is completed to the highest standards using premium materials.",
      icon: <Check className="h-6 w-6" />
    },
    {
      title: "Safety Focus",
      description: "We prioritize safety on every job site for our team members and your property through rigorous standards.",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Professionalism",
      description: "From initial consultation to project completion, we deliver exceptional customer service and communication.",
      icon: <Handshake className="h-6 w-6" />
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center mb-12">
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
