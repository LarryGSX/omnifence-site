import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! We'll be in touch soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 md:py-32">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487252665478-49b61b47f302')] bg-cover bg-center" style={{ opacity: 0.4 }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent z-[11] opacity-50"></div>
        <div className="container-custom relative z-20">
          <div className="max-w-3xl mx-auto text-center slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="accent-badge mb-4 inline-block">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Have questions or ready to start your project? Get in touch with our team today.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-primary/30 to-transparent"></div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 relative">
        <div className="absolute top-1/2 right-0 w-20 h-[80%] bg-accent/5 -z-10 rounded-l-full"></div>
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="slide-up" style={{ animationDelay: '0.2s' }}>
              <span className="accent-badge mb-4 inline-block">Send Message</span>
              <h2 className="text-2xl font-heading font-semibold mb-6 text-primary">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="John Smith" 
                    required 
                    className="focus:border-accent focus:ring-accent/20"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="john@example.com" 
                    required 
                    className="focus:border-accent focus:ring-accent/20"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    placeholder="(555) 123-4567" 
                    required 
                    className="focus:border-accent focus:ring-accent/20"
                  />
                </div>
                <div>
                  <Label htmlFor="location">Your Location</Label>
                  <Input 
                    id="location" 
                    name="location" 
                    value={formData.location} 
                    onChange={handleChange} 
                    placeholder="City, State" 
                    required 
                    className="focus:border-accent focus:ring-accent/20"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Tell us about your project or inquiry..." 
                    rows={5} 
                    required 
                    className="focus:border-accent focus:ring-accent/20"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-accent text-secondary-foreground hover:bg-accent/90 hover-scale"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="slide-up" style={{ animationDelay: '0.3s' }}>
              <span className="accent-badge mb-4 inline-block">Contact Info</span>
              <h2 className="text-2xl font-heading font-semibold mb-6 text-primary">Get in Touch</h2>
              <p className="text-lg text-gray-700 mb-8">
                Have questions about our services or want to discuss your project? 
                Contact us using the form or reach out directly through the following channels:
              </p>

              <div className="space-y-8 mb-8">
                <div className="flex items-start group hover:scale-105 transition-transform duration-300">
                  <div className="mr-4 bg-primary/10 p-3 rounded-full group-hover:bg-accent/20 transition-colors duration-300">
                    <Phone className="h-5 w-5 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-1 text-primary">Phone</h3>
                    <p className="text-gray-700">(555) 123-4567</p>
                    <p className="text-gray-500 text-sm">Mon-Fri: 8am-6pm</p>
                  </div>
                </div>

                <div className="flex items-start group hover:scale-105 transition-transform duration-300">
                  <div className="mr-4 bg-primary/10 p-3 rounded-full group-hover:bg-accent/20 transition-colors duration-300">
                    <Mail className="h-5 w-5 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-1 text-primary">Email</h3>
                    <p className="text-gray-700">info@omnifence.com</p>
                    <p className="text-gray-500 text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start group hover:scale-105 transition-transform duration-300">
                  <div className="mr-4 bg-primary/10 p-3 rounded-full group-hover:bg-accent/20 transition-colors duration-300">
                    <MapPin className="h-5 w-5 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-1 text-primary">Locations</h3>
                    <p className="text-gray-700">Serving multiple areas</p>
                    <p className="text-gray-500 text-sm">See our location pages for details</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary p-6 rounded-lg group hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-heading font-semibold mb-3 text-primary">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Map Placeholder */}
      <section className="py-20 bg-secondary relative">
        <div className="absolute top-1/2 left-0 w-20 h-[80%] bg-accent/5 -z-10 rounded-r-full"></div>
        <div className="container-custom">
          <div className="text-center mb-12 slide-up" style={{ animationDelay: '0.4s' }}>
            <span className="accent-badge mb-4 inline-block">Service Areas</span>
            <h2 className="section-title">Our Service Areas</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              We proudly serve the following locations and surrounding areas.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md group hover:shadow-xl transition-all duration-300 slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="bg-gray-200 w-full h-96 flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-full inline-block mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <MapPin className="h-12 w-12 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <p className="text-xl font-medium text-primary">Service Area Map</p>
                <p className="text-gray-500">(Map will be embedded here)</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center slide-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-lg">
              Not sure if we service your area? <a href="#" className="text-primary font-medium hover:text-accent transition-colors duration-300">Contact us</a> to find out!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
