import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Ruler, Shield, Clock, Hammer, Check, Fence, LayoutGrid, DoorClosed } from "lucide-react";
import BackgroundBubbles from "@/components/ui/background-bubbles";
import ServicesOverview from "@/components/ServicesOverview";

const Services = () => {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 md:py-32">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd')] bg-cover bg-center" style={{ opacity: 0.4 }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent z-[11] opacity-50"></div>
        <div className="container-custom relative z-20">
          <div className="max-w-3xl mx-auto text-center slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="accent-badge mb-4 inline-block">Our Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Expert Fencing & Deck Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              From custom designs to professional installation, we deliver quality craftsmanship for your outdoor spaces.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-primary/30 to-transparent"></div>
      </section>

      {/* Main Services */}
      <section className="py-20 relative">
        <BackgroundBubbles position="right" />
        <div className="container-custom">
          <div className="text-center mb-12 slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="accent-badge mb-4 inline-block">What We Offer</span>
            <h2 className="section-title">Our Services</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              Comprehensive fencing and deck solutions tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Residential Fencing */}
            <div className="service-card slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-4 hover-scale">
                <Fence className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                <span className="accent-border-bottom">Residential Fencing</span>
              </h3>
              <p className="text-gray-600 mb-4">Custom-designed residential fences that enhance your home's security, privacy, and curb appeal.</p>
              <Link 
                to="/services#residential" 
                className="text-primary font-medium inline-flex items-center link-underline"
              >
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Commercial Fencing */}
            <div className="service-card slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-4 hover-scale">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                <span className="accent-border-bottom">Commercial Fencing</span>
              </h3>
              <p className="text-gray-600 mb-4">Secure and durable fencing solutions for businesses, schools, and other commercial properties.</p>
              <Link 
                to="/services#commercial" 
                className="text-primary font-medium inline-flex items-center link-underline"
              >
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Custom Deck Building */}
            <div className="service-card slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-4 hover-scale">
                <LayoutGrid className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                <span className="accent-border-bottom">Custom Deck Building</span>
              </h3>
              <p className="text-gray-600 mb-4">Beautiful, functional decks designed to extend your living space and increase property value.</p>
              <Link 
                to="/services#decks" 
                className="text-primary font-medium inline-flex items-center link-underline"
              >
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Gates & Gate Operators */}
            <div className="service-card slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-4 hover-scale">
                <DoorClosed className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                <span className="accent-border-bottom">Gates & Gate Operators</span>
              </h3>
              <p className="text-gray-600 mb-4">Automated and manual gate solutions that combine security with convenience for both residential and commercial properties.</p>
              <Link 
                to="/services#gates" 
                className="text-primary font-medium inline-flex items-center link-underline"
              >
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary relative">
        <BackgroundBubbles position="left" />
        <div className="container-custom">
          <div className="text-center mb-12 slide-up" style={{ animationDelay: '0.6s' }}>
            <span className="accent-badge mb-4 inline-block">How We Work</span>
            <h2 className="section-title">Our Process</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              A streamlined approach to delivering exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center slide-up" style={{ animationDelay: '0.7s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-primary">Consultation</h3>
              <p className="text-gray-600">
                We discuss your needs, preferences, and project requirements in detail.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center slide-up" style={{ animationDelay: '0.8s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-primary">Design & Quote</h3>
              <p className="text-gray-600">
                We create a custom design and provide a detailed quote for your approval.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center slide-up" style={{ animationDelay: '0.9s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-primary">Installation</h3>
              <p className="text-gray-600">
                Our skilled team handles the installation with precision and care.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center slide-up" style={{ animationDelay: '1s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-primary">Quality Check</h3>
              <p className="text-gray-600">
                We perform thorough quality checks to ensure your complete satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 relative">
        <BackgroundBubbles position="right" />
        <div className="container-custom">
          <div className="text-center mb-12 slide-up" style={{ animationDelay: '1.1s' }}>
            <span className="accent-badge mb-4 inline-block">Our Advantages</span>
            <h2 className="section-title">Why Choose Omni Fence</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              Experience the difference of working with a trusted industry leader.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Experience */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 slide-up" style={{ animationDelay: '1.2s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-primary">Years of Experience</h3>
              <p className="text-gray-600">
                With over a decade of experience, we've perfected our craft and built a reputation for excellence.
              </p>
            </div>

            {/* Quality Materials */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 slide-up" style={{ animationDelay: '1.3s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-primary">Quality Materials</h3>
              <p className="text-gray-600">
                We use only premium materials that meet or exceed industry standards for durability and beauty.
              </p>
            </div>

            {/* Expert Team */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 slide-up" style={{ animationDelay: '1.4s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Hammer className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-primary">Expert Team</h3>
              <p className="text-gray-600">
                Our skilled craftsmen are trained professionals who take pride in their work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-primary">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd')] bg-cover bg-center" style={{ opacity: 0.4 }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent z-[11] opacity-50"></div>
        <div className="container-custom relative z-20">
          <div className="max-w-3xl mx-auto text-center slide-up" style={{ animationDelay: '1.5s' }}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Contact us today for a free consultation and quote on your fencing or deck project.
            </p>
            <Button asChild size="lg" className="bg-accent text-secondary-foreground hover:bg-accent/90 hover-scale">
              <Link to="/contact" className="inline-flex items-center">
                Get Started
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
