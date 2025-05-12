
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import LocationCTA from "@/components/LocationCTA";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="relative">
        <ServicesOverview />
        <div className="absolute top-1/2 left-0 w-20 h-[80%] bg-accent/5 -z-10 rounded-r-full"></div>
      </div>
      <WhyChooseUs />
      <Testimonials />
      <LocationCTA />
    </main>
  );
};

export default Index;
