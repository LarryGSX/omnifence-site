import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Check, Handshake, ArrowRight } from "lucide-react";
import BackgroundBubbles from "@/components/ui/background-bubbles";

const AboutUs = () => {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 md:py-32">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd')] bg-cover bg-center" style={{ opacity: 0.4 }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent z-[11] opacity-50"></div>
        <div className="container-custom relative z-20">
          <div className="max-w-3xl mx-auto text-center slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="accent-badge mb-4 inline-block">Est. 2010</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              About Omni Fence and Deck
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              A team of dedicated professionals committed to quality, innovation, and exceptional service.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-primary/30 to-transparent"></div>
      </section>

      {/* Our Story */}
      <section className="py-20 relative">
        <BackgroundBubbles position="right" />
        <div className="container-custom">
          <div className="max-w-3xl mx-auto slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="section-title text-center mb-8">Our Story</h2>
            <div className="prose max-w-none">
              <p className="text-lg mb-6 text-gray-700">
                Omni Fence and Deck was founded with a simple mission: to provide high-quality fencing and deck solutions with exceptional customer service. What began as a small, local operation has grown into a trusted name in the industry, serving multiple communities with the same dedication to craftsmanship and customer satisfaction that defined our beginnings.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                Our journey started when our founders recognized a gap in the market for a fencing company that combined traditional craftsmanship with modern, tech-driven processes. They envisioned a company that would not only deliver superior products but would also transform the customer experience through innovation, transparency, and attention to detail.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                Today, Omni Fence and Deck stands as a testament to that vision. We've grown by prioritizing quality over quantity, building relationships over transactions, and constantly seeking ways to improve and innovate in our industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-secondary relative">
        <BackgroundBubbles position="left" />
        <div className="container-custom">
          <div className="text-center mb-12 slide-up" style={{ animationDelay: '0.3s' }}>
            <span className="accent-badge mb-4 inline-block">Core Principles</span>
            <h2 className="section-title">Our Mission & Values</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              The principles that guide everything we do at Omni Fence and Deck.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">Our Mission</h3>
              <p className="text-lg text-gray-700 mb-8">
                To enhance properties and lives through expertly crafted fencing and deck solutions that balance beauty, functionality, and durability, delivered with unmatched customer service and technological innovation.
              </p>
              
              <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">Our Vision</h3>
              <p className="text-lg text-gray-700">
                To set the industry standard for quality, innovation, and customer satisfaction in fencing and deck solutions, becoming the most trusted and sought-after provider in every community we serve.
              </p>
            </div>

            <div className="space-y-8 slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-start group hover:scale-105 transition-transform duration-300">
                <div className="mr-4 bg-primary/10 p-3 rounded-full group-hover:bg-accent/20 transition-colors duration-300">
                  <Check className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-semibold mb-2 text-primary">Quality Craftsmanship</h4>
                  <p className="text-gray-600">
                    We never compromise on materials or workmanship, ensuring every project meets our exacting standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start group hover:scale-105 transition-transform duration-300">
                <div className="mr-4 bg-primary/10 p-3 rounded-full group-hover:bg-accent/20 transition-colors duration-300">
                  <Shield className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-semibold mb-2 text-primary">Integrity & Transparency</h4>
                  <p className="text-gray-600">
                    We operate with honesty and openness in all aspects of our business, from pricing to project timelines.
                  </p>
                </div>
              </div>

              <div className="flex items-start group hover:scale-105 transition-transform duration-300">
                <div className="mr-4 bg-primary/10 p-3 rounded-full group-hover:bg-accent/20 transition-colors duration-300">
                  <Handshake className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-semibold mb-2 text-primary">Customer-Centric Approach</h4>
                  <p className="text-gray-600">
                    We prioritize our customers' needs, preferences, and satisfaction at every stage of the process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 relative">
        <BackgroundBubbles position="right" />
        <div className="container-custom">
          <div className="text-center mb-12 slide-up" style={{ animationDelay: '0.6s' }}>
            <span className="accent-badge mb-4 inline-block">Meet the Team</span>
            <h2 className="section-title">Our Leadership Team</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              Meet the dedicated professionals who lead Omni Fence and Deck.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center group slide-up" style={{ animationDelay: '0.7s' }}>
              <div className="w-48 h-48 rounded-full bg-gray-200 mx-auto mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a" alt="John Smith" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-1 text-primary">John Smith</h3>
              <p className="text-accent font-medium mb-3">Founder & CEO</p>
              <p className="text-gray-600">
                With over 20 years of experience in the construction industry, John leads our team with a focus on quality and innovation.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center group slide-up" style={{ animationDelay: '0.8s' }}>
              <div className="w-48 h-48 rounded-full bg-gray-200 mx-auto mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" alt="Sarah Johnson" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-1 text-primary">Sarah Johnson</h3>
              <p className="text-accent font-medium mb-3">Operations Director</p>
              <p className="text-gray-600">
                Sarah ensures our projects run smoothly from start to finish, overseeing our team of skilled craftsmen.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center group slide-up" style={{ animationDelay: '0.9s' }}>
              <div className="w-48 h-48 rounded-full bg-gray-200 mx-auto mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" alt="Michael Williams" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-1 text-primary">Michael Williams</h3>
              <p className="text-accent font-medium mb-3">Design Specialist</p>
              <p className="text-gray-600">
                Michael brings creative vision and technical expertise to every project, helping clients realize their ideal outdoor spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Quality Commitment */}
      <section className="py-20 bg-secondary relative">
        <BackgroundBubbles position="left" />
        <div className="container-custom">
          <div className="max-w-3xl mx-auto slide-up" style={{ animationDelay: '1s' }}>
            <span className="accent-badge mb-4 inline-block">Our Promise</span>
            <h2 className="section-title text-center mb-8">Our Commitment to Quality & Safety</h2>
            <div className="prose max-w-none">
              <p className="text-lg mb-6 text-gray-700">
                At Omni Fence and Deck, quality and safety are not just priorities—they're foundational principles that guide every aspect of our work. We believe that superior results come from a commitment to excellence at every stage of the process, from initial design to final installation.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                Our quality assurance program includes rigorous material selection, comprehensive training for all team members, and detailed inspections throughout the project lifecycle. We use only premium-grade materials that meet or exceed industry standards, ensuring that your fence or deck will stand the test of time.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                Safety is equally paramount in our operations. Our team adheres to strict safety protocols on every job site, protecting both our workers and your property. We maintain full insurance coverage and ensure compliance with all local building codes and regulations, giving you peace of mind throughout the project.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                This unwavering commitment to quality and safety has earned us the trust of countless homeowners and businesses across our service areas. When you choose Omni Fence and Deck, you're choosing a partner dedicated to delivering exceptional results safely, efficiently, and to your complete satisfaction.
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
          <div className="max-w-3xl mx-auto text-center slide-up" style={{ animationDelay: '1.1s' }}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Contact our team today to discuss your fencing or deck project and experience the Omni Fence difference.
            </p>
            <Button asChild size="lg" className="bg-accent text-secondary-foreground hover:bg-accent/90 hover-scale">
              <Link to="/contact" className="inline-flex items-center">
                Get in Touch
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

export default AboutUs;
