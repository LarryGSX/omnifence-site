
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin } from "lucide-react";
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
    <main>
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container-custom text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Have questions or ready to start your project? Get in touch with our team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-heading font-semibold mb-6">Send Us a Message</h2>
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
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-heading font-semibold mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-700 mb-8">
                Have questions about our services or want to discuss your project? 
                Contact us using the form or reach out directly through the following channels:
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-1">Phone</h3>
                    <p className="text-gray-700">(555) 123-4567</p>
                    <p className="text-gray-500 text-sm">Mon-Fri: 8am-6pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-1">Email</h3>
                    <p className="text-gray-700">info@omnifence.com</p>
                    <p className="text-gray-500 text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-1">Locations</h3>
                    <p className="text-gray-700">Serving multiple areas</p>
                    <p className="text-gray-500 text-sm">See our location pages for details</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-heading font-semibold mb-3">Business Hours</h3>
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
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Service Areas</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              We proudly serve the following locations and surrounding areas.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="bg-gray-200 w-full h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-3" />
                <p className="text-xl font-medium">Service Area Map</p>
                <p className="text-gray-500">(Map will be embedded here)</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg">
              Not sure if we service your area? <a href="#" className="text-primary font-medium hover:underline">Contact us</a> to find out!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
