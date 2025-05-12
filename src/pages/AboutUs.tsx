
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Check, Handshake } from "lucide-react";

const AboutUs = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container-custom text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              About Omni Fence and Deck
            </h1>
            <p className="text-xl mb-8 text-white/90">
              A team of dedicated professionals committed to quality, innovation, and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center mb-8">Our Story</h2>
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                Omni Fence and Deck was founded with a simple mission: to provide high-quality fencing and deck solutions with exceptional customer service. What began as a small, local operation has grown into a trusted name in the industry, serving multiple communities with the same dedication to craftsmanship and customer satisfaction that defined our beginnings.
              </p>
              <p className="text-lg mb-4">
                Our journey started when our founders recognized a gap in the market for a fencing company that combined traditional craftsmanship with modern, tech-driven processes. They envisioned a company that would not only deliver superior products but would also transform the customer experience through innovation, transparency, and attention to detail.
              </p>
              <p className="text-lg mb-4">
                Today, Omni Fence and Deck stands as a testament to that vision. We've grown by prioritizing quality over quantity, building relationships over transactions, and constantly seeking ways to improve and innovate in our industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Mission & Values</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              The principles that guide everything we do at Omni Fence and Deck.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 mb-6">
                To enhance properties and lives through expertly crafted fencing and deck solutions that balance beauty, functionality, and durability, delivered with unmatched customer service and technological innovation.
              </p>
              
              <h3 className="text-2xl font-heading font-semibold mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700">
                To set the industry standard for quality, innovation, and customer satisfaction in fencing and deck solutions, becoming the most trusted and sought-after provider in every community we serve.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 bg-primary/10 p-2 rounded-full">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-semibold mb-2">Quality Craftsmanship</h4>
                  <p className="text-gray-600">
                    We never compromise on materials or workmanship, ensuring every project meets our exacting standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 bg-primary/10 p-2 rounded-full">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-semibold mb-2">Integrity & Transparency</h4>
                  <p className="text-gray-600">
                    We operate with honesty and openness in all aspects of our business, from pricing to project timelines.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 bg-primary/10 p-2 rounded-full">
                  <Handshake className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-semibold mb-2">Customer-Centric Approach</h4>
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
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Leadership Team</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              Meet the dedicated professionals who lead Omni Fence and Deck.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-48 h-48 rounded-full bg-gray-200 mx-auto mb-6"></div>
              <h3 className="text-xl font-heading font-semibold mb-1">John Smith</h3>
              <p className="text-primary font-medium mb-3">Founder & CEO</p>
              <p className="text-gray-600">
                With over 20 years of experience in the construction industry, John leads our team with a focus on quality and innovation.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-48 h-48 rounded-full bg-gray-200 mx-auto mb-6"></div>
              <h3 className="text-xl font-heading font-semibold mb-1">Sarah Johnson</h3>
              <p className="text-primary font-medium mb-3">Operations Director</p>
              <p className="text-gray-600">
                Sarah ensures our projects run smoothly from start to finish, overseeing our team of skilled craftsmen.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-48 h-48 rounded-full bg-gray-200 mx-auto mb-6"></div>
              <h3 className="text-xl font-heading font-semibold mb-1">Michael Williams</h3>
              <p className="text-primary font-medium mb-3">Design Specialist</p>
              <p className="text-gray-600">
                Michael brings creative vision and technical expertise to every project, helping clients realize their ideal outdoor spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Quality Commitment */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center mb-8">Our Commitment to Quality & Safety</h2>
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                At Omni Fence and Deck, quality and safety are not just priorities—they're foundational principles that guide every aspect of our work. We believe that superior results come from a commitment to excellence at every stage of the process, from initial design to final installation.
              </p>
              <p className="text-lg mb-4">
                Our quality assurance program includes rigorous material selection, comprehensive training for all team members, and detailed inspections throughout the project lifecycle. We use only premium-grade materials that meet or exceed industry standards, ensuring that your fence or deck will stand the test of time.
              </p>
              <p className="text-lg mb-4">
                Safety is equally paramount in our operations. Our team adheres to strict safety protocols on every job site, protecting both our workers and your property. We maintain full insurance coverage and ensure compliance with all local building codes and regulations, giving you peace of mind throughout the project.
              </p>
              <p className="text-lg mb-4">
                This unwavering commitment to quality and safety has earned us the trust of countless homeowners and businesses across our service areas. When you choose Omni Fence and Deck, you're choosing a partner dedicated to delivering exceptional results safely, efficiently, and to your complete satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Contact our team today to discuss your fencing or deck project and experience the Omni Fence difference.
            </p>
            <Button asChild size="lg" className="bg-accent text-secondary-foreground hover:bg-accent/90">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
