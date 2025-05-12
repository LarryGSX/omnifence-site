
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Fence, Shield, Check, MapPin } from "lucide-react";

const LocationTemplate = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container-custom text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Best Fence Company in [Location Name]
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Professional fencing and deck solutions for [Location Name] homeowners and businesses. 
              Quality craftsmanship, exceptional service, and lasting results guaranteed.
            </p>
            <Button asChild size="lg" className="bg-accent text-secondary-foreground hover:bg-accent/90">
              <Link to="/contact">Get a Free Quote in [Location Name]</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed mb-6">
              Welcome to Omni Fence and Deck in [Location Name]. We're proud to serve the [Location Name] community 
              with high-quality fencing and deck solutions. Our team of local experts understands the unique needs 
              and preferences of [Location Name] residents, ensuring each project perfectly complements your property
              and meets your specific requirements.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              From traditional wooden fences that blend with [Local Landmark Mention] to modern vinyl solutions 
              that withstand [Location Name]'s weather conditions, we provide a wide range of options to enhance 
              your property's security, privacy, and curb appeal.
            </p>
            <p className="text-lg leading-relaxed">
              Contact our [Location Name] team today at [Local Phone Number] to discuss your project and schedule 
              a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Services in Location */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Services in [Location Name]</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              Discover our comprehensive range of fencing and deck solutions available to [Location Name] residents and businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Fence className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-3">Residential Fencing</h3>
              <p className="text-gray-600 mb-4">
                Enhance your [Location Name] home with custom fencing solutions designed for security, 
                privacy, and aesthetic appeal. We offer various materials and styles to complement your property.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-3">Commercial Fencing</h3>
              <p className="text-gray-600 mb-4">
                Secure your [Location Name] business with durable, professional fencing solutions. 
                From retail properties to industrial facilities, we deliver reliable security barriers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Check className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-3">Custom Deck Building</h3>
              <p className="text-gray-600 mb-4">
                Expand your living space with a custom-designed deck perfect for [Location Name] outdoor living. 
                We create beautiful, durable decks tailored to your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose Omni Fence in [Location Name]</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              We're committed to delivering exceptional results and customer satisfaction in [Location Name].
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="mr-4 bg-primary/10 p-2 rounded-full">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold mb-2">Local Expertise</h3>
                <p className="text-gray-600">
                  Our team knows [Location Name] inside and out. We understand local regulations, 
                  building codes, and the unique challenges of the area.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 bg-primary/10 p-2 rounded-full">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold mb-2">Quality Materials</h3>
                <p className="text-gray-600">
                  We use only premium materials that withstand [Location Name]'s specific weather conditions 
                  and environmental factors for lasting results.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 bg-primary/10 p-2 rounded-full">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold mb-2">Exceptional Service</h3>
                <p className="text-gray-600">
                  Our [Location Name] team provides attentive, responsive service from initial consultation 
                  to project completion and beyond.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 bg-primary/10 p-2 rounded-full">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold mb-2">Trusted By Locals</h3>
                <p className="text-gray-600">
                  We've built a strong reputation in [Location Name] through years of reliable service 
                  and countless satisfied customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our [Location Name] Service Area</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              We proudly serve [Location Name] and the surrounding areas.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="bg-gray-200 w-full h-80 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-10 w-10 text-primary mx-auto mb-3" />
                <p className="text-lg font-medium">Map of [Location Name] Service Area</p>
                <p className="text-gray-500">(Map will be embedded here)</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg mb-6">
              Our [Location Name] office is located at [Local Address if applicable].
              <br />
              Contact us at [Local Phone Number] for service in this area.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Contact Our [Location Name] Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">[Location Name] Customer Testimonials</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              Here's what our [Location Name] customers have to say about their experience with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex mb-4 text-accent">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <blockquote className="mb-4 text-gray-700 italic">"The team at Omni Fence did an amazing job on our backyard fence. They were professional, efficient, and the quality of work exceeded our expectations."</blockquote>
              <div className="font-medium">
                <p className="text-secondary-foreground">John D.</p>
                <p className="text-gray-500 text-sm">[Location Name] Homeowner</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex mb-4 text-accent">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <blockquote className="mb-4 text-gray-700 italic">"From initial consultation to completion, Omni Fence was a pleasure to work with. Our new privacy fence is exactly what we wanted and has completely transformed our yard."</blockquote>
              <div className="font-medium">
                <p className="text-secondary-foreground">Lisa M.</p>
                <p className="text-gray-500 text-sm">[Location Name] Resident</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex mb-4 text-accent">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <blockquote className="mb-4 text-gray-700 italic">"As a business owner in [Location Name], I needed a secure, professional fence installed quickly. Omni Fence delivered on time, on budget, and with outstanding results."</blockquote>
              <div className="font-medium">
                <p className="text-secondary-foreground">Robert J.</p>
                <p className="text-gray-500 text-sm">Local Business Owner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Start Your [Location Name] Project?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Contact our [Location Name] team today for a free consultation and quote. We're ready to bring your vision to life.
            </p>
            <Button asChild size="lg" className="bg-accent text-secondary-foreground hover:bg-accent/90">
              <Link to="/contact">Get a Free Quote in [Location Name]</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LocationTemplate;
