import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Fence, Shield, Check, MapPin, ArrowRight } from "lucide-react";

const delayClasses = ["delay-400", "delay-500", "delay-600", "delay-700"];

const LocationTemplate = () => {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-primary py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/80"></div>
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center slide-up delay-100">
            <span className="accent-badge mb-4 inline-block">Local Service</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white">
              Best Fence Company in [Location Name]
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Professional fencing and deck solutions for [Location Name] homeowners and businesses.
              Quality craftsmanship, exceptional service, and lasting results guaranteed.
            </p>
            <Button asChild size="lg" className="hover-scale">
              <Link to="/contact" className="inline-flex items-center">
                Get a Free Quote in [Location Name]
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 relative">
        <div className="absolute top-1/2 left-0 w-20 h-[80%] bg-accent/5 -z-10 rounded-r-full"></div>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto slide-up delay-200">
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              Welcome to Omni Fence and Deck in [Location Name]. We're proud to serve the [Location Name] community
              with high-quality fencing and deck solutions. Our team of local experts understands the unique needs
              and preferences of [Location Name] residents, ensuring each project perfectly complements your property
              and meets your specific requirements.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              From traditional wooden fences that blend with [Local Landmark Mention] to modern vinyl solutions
              that withstand [Location Name]'s weather conditions, we provide a wide range of options to enhance
              your property's security, privacy, and curb appeal.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Contact our [Location Name] team today at [Local Phone Number] to discuss your project and schedule
              a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Services in Location */}
      <section className="py-20 bg-secondary relative">
        <div className="container-custom">
          <div className="text-center mb-12 slide-up delay-300">
            <span className="accent-badge mb-4 inline-block">Our Services</span>
            <h2 className="section-title">Our Services in [Location Name]</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              Discover our comprehensive range of fencing and deck solutions available to [Location Name] residents and businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover-scale transition-all duration-300 slide-up delay-400">
              <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Fence className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">Residential Fencing</h3>
              <p className="text-gray-600 mb-4">
                Enhance your [Location Name] home with custom fencing solutions designed for security,
                privacy, and aesthetic appeal. We offer various materials and styles to complement your property.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover-scale transition-all duration-300 slide-up delay-500">
              <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">Commercial Fencing</h3>
              <p className="text-gray-600 mb-4">
                Secure your [Location Name] business with durable, professional fencing solutions.
                From retail properties to industrial facilities, we deliver reliable security barriers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover-scale transition-all duration-300 slide-up delay-600">
              <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">Custom Deck Building</h3>
              <p className="text-gray-600 mb-4">
                Expand your living space with a custom-designed deck perfect for [Location Name] outdoor living.
                We create beautiful, durable decks tailored to your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 relative">
        <div className="container-custom">
          <div className="text-center mb-12 slide-up delay-300">
            <span className="accent-badge mb-4 inline-block">Why Choose Us</span>
            <h2 className="section-title">Why Choose Omni Fence in [Location Name]</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              We're committed to delivering exceptional results and customer satisfaction in [Location Name].
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Local Expertise",
                description: "Our team knows [Location Name] inside and out. We understand local regulations, building codes, and the unique challenges of the area."
              },
              {
                title: "Quality Materials",
                description: "We use only premium materials that withstand [Location Name]'s specific weather conditions and environmental factors for lasting results."
              },
              {
                title: "Exceptional Service",
                description: "Our [Location Name] team provides attentive, responsive service from initial consultation to project completion and beyond."
              },
              {
                title: "Trusted By Locals",
                description: "We've built a strong reputation in [Location Name] through years of reliable service and countless satisfied customers."
              }
            ].map((item, index) => (
              <div key={index} className={`flex items-start slide-up ${delayClasses[index]}`}>
                <div className="mr-4 bg-primary/10 p-3 rounded-full">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary relative">
        <div className="container-custom">
          <div className="text-center mb-12 slide-up delay-300">
            <span className="accent-badge mb-4 inline-block">Service Area</span>
            <h2 className="section-title">Our [Location Name] Service Area</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              We proudly serve [Location Name] and the surrounding areas.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md slide-up delay-400">
            <div className="bg-gray-100 w-full h-80 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-xl font-medium">Map of [Location Name] Service Area</p>
                <p className="text-gray-500">(Map will be embedded here)</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center slide-up delay-500">
            <p className="text-lg mb-6 text-gray-700">
              Our [Location Name] office is located at [Local Address if applicable].
              <br />
              Contact us at [Local Phone Number] for service in this area.
            </p>
            <Button asChild size="lg" className="hover-scale">
              <Link to="/contact" className="inline-flex items-center">
                Contact Our [Location Name] Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <section className="py-20 relative">
        <div className="container-custom">
          <div className="text-center mb-12 slide-up delay-300">
            <span className="accent-badge mb-4 inline-block">Testimonials</span>
            <h2 className="section-title">[Location Name] Customer Testimonials</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              Here's what our [Location Name] customers have to say about their experience with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Omni Fence replaced our entire fence last year. We've been very happy with their work over the intervening year. Highly recommend them!",
                name: "Elliott Ridgway",
                role: "Homeowner"
              },
              {
                quote: "Omni Fence replaced a worn section of fence for me. Easy to get a quote, easy to get scheduled, and great workmanship. They also beat other places on price so win/win/win! I will use them again for my next replacement.",
                name: "Scott Persson",
                role: "Residential Client"
              },
              {
                quote: "I've dealt with Omni for years on various jobs in a professional context. They do great work, and are always the company I refer to my customers needing a fence built, modified, or repaired.",
                name: "Nick Carson",
                role: "Professional Contractor"
              }
            ].map((testimonial, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-md p-8 hover-scale transition-all duration-300 slide-up ${delayClasses[index]}`}>
                <div className="flex mb-4 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <blockquote className="mb-6 text-gray-700 italic text-lg">"{testimonial.quote}"</blockquote>
                <div className="font-medium">
                  <p className="text-secondary-foreground text-lg">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/80"></div>
        <div className="absolute inset-0 bg-[url('/images/cta-bg.jpg')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center slide-up delay-300">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Transform Your [Location Name] Property?</h2>
            <p className="text-xl mb-8 text-white/90">
              Contact us today for a free consultation and quote. Let's discuss how we can enhance your property with our premium fencing and deck solutions.
            </p>
            <Button asChild size="lg" className="hover-scale">
              <Link to="/contact" className="inline-flex items-center">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LocationTemplate;
