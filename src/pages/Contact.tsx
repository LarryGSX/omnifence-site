import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import BackgroundBubbles from "@/components/ui/background-bubbles";

const Contact = () => {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 md:py-32">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd')] bg-cover bg-center" style={{ opacity: 0.4 }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent z-[11] opacity-50"></div>
        <div className="container-custom relative z-20">
          <div className="max-w-3xl mx-auto text-center slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="accent-badge mb-4 inline-block">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              We're here to help with your fencing and deck needs. Reach out to us today.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-primary/30 to-transparent"></div>
      </section>

      {/* Contact Information */}
      <section className="py-20 relative">
        <BackgroundBubbles position="right" />
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="slide-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="section-title mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="fencing">Fencing</option>
                    <option value="deck">Deck Building</option>
                    <option value="repair">Repair & Maintenance</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full bg-accent text-secondary-foreground hover:bg-accent/90 hover-scale">
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 slide-up" style={{ animationDelay: '0.3s' }}>
              <div>
                <h2 className="section-title mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Have questions or ready to start your project? We're here to help. Reach out to us through any of the following methods.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="mr-4 bg-primary/10 p-3 rounded-full group-hover:bg-accent/20 transition-colors duration-300">
                    <Phone className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-sm text-gray-500">Mon-Fri: 8am - 6pm</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="mr-4 bg-primary/10 p-3 rounded-full group-hover:bg-accent/20 transition-colors duration-300">
                    <Mail className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">Email</h3>
                    <p className="text-gray-600">info@omnifence.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="mr-4 bg-primary/10 p-3 rounded-full group-hover:bg-accent/20 transition-colors duration-300">
                    <MapPin className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">Office Location</h3>
                    <p className="text-gray-600">123 Fence Street</p>
                    <p className="text-gray-600">Anytown, ST 12345</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="mr-4 bg-primary/10 p-3 rounded-full group-hover:bg-accent/20 transition-colors duration-300">
                    <Clock className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-primary mb-3">Service Area</h3>
                <p className="text-gray-600 mb-4">
                  We proudly serve the following areas:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Anytown and surrounding areas</li>
                  <li>• Neighboring City</li>
                  <li>• County Region</li>
                  <li>• Up to 50 miles radius</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary relative">
        <BackgroundBubbles position="left" />
        <div className="container-custom">
          <div className="text-center mb-12 slide-up" style={{ animationDelay: '0.4s' }}>
            <span className="accent-badge mb-4 inline-block">Find Us</span>
            <h2 className="section-title">Our Location</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              Visit our office or get directions to our location.
            </p>
          </div>

          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg slide-up" style={{ animationDelay: '0.5s' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425882426699!3d40.74076987932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1683901234567!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <BackgroundBubbles position="right" />
        <div className="container-custom">
          <div className="text-center mb-12 slide-up" style={{ animationDelay: '0.6s' }}>
            <span className="accent-badge mb-4 inline-block">Common Questions</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              Find answers to common questions about our services and process.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6 slide-up" style={{ animationDelay: '0.7s' }}>
            {[
              {
                question: "What areas do you serve?",
                answer: "We serve Anytown and surrounding areas within a 50-mile radius. Contact us to confirm if we cover your location."
              },
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on scope and complexity. A standard fence installation typically takes 1-3 days, while custom deck projects may take 1-2 weeks. We'll provide a detailed timeline during consultation."
              },
              {
                question: "Do you offer free estimates?",
                answer: "Yes, we provide free, detailed estimates for all projects. Our estimates include material costs, labor, and any additional services required."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, checks, and cash payments. We also offer financing options for larger projects."
              },
              {
                question: "Do you handle permits?",
                answer: "Yes, we can assist with obtaining necessary permits for your project. We're familiar with local building codes and regulations."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-primary mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
