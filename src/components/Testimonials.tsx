
import { useState } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TestimonialProps {
  quote: string;
  author: string;
  location: string;
}

const Testimonial = ({ quote, author, location }: TestimonialProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex mb-4 text-accent">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        ))}
      </div>
      <blockquote className="mb-4 text-lg text-gray-700 italic">"{quote}"</blockquote>
      <div className="font-medium">
        <p className="text-secondary-foreground">{author}</p>
        <p className="text-gray-500 text-sm">{location}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Omni Fence delivered exceptional quality and service. Our new fence not only looks beautiful but was completed ahead of schedule. Highly recommended!",
      author: "Michael R.",
      location: "Homeowner"
    },
    {
      quote: "Professional from start to finish. The team was courteous, knowledgeable, and the workmanship is outstanding. Our new deck has transformed our backyard.",
      author: "Sarah T.",
      location: "Residential Client"
    },
    {
      quote: "As a commercial property manager, I've worked with many contractors. Omni Fence stands out for their reliability, attention to detail, and excellent communication.",
      author: "David L.",
      location: "Property Manager"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with us.
          </p>
        </div>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 p-2">
                <Testimonial
                  quote={testimonial.quote}
                  author={testimonial.author}
                  location={testimonial.location}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6">
            <CarouselPrevious className="relative mr-2" />
            <CarouselNext className="relative ml-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
