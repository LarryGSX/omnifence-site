
import { useState } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  location: string;
}

const Testimonial = ({ quote, author, location }: TestimonialProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col transition-all duration-300 hover:shadow-lg">
      <div className="flex mb-4 text-primary">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        ))}
      </div>
      <blockquote className="flex-grow text-gray-700 italic mb-6 leading-relaxed">"{quote}"</blockquote>
      <div className="border-t border-gray-100 pt-4">
        <p className="font-semibold text-gray-900">{author}</p>
        <p className="text-primary text-sm font-medium">{location}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Omni Fence replaced our entire fence last year. We've been very happy with their work over the intervening year. Highly recommend them!",
      author: "Elliott Ridgway",
      location: "Homeowner"
    },
    {
      quote: "Omni Fence replaced a worn section of fence for me. Easy to get a quote, easy to get scheduled, and great workmanship. They also beat other places on price so win/win/win! I will use them again for my next replacement.",
      author: "Scott Persson",
      location: "Residential Client"
    },
    {
      quote: "I wouldn't hesitate to recommend Omni Fence to a friend or relative. Everything on the proposal was just as the job was completed. The installer kept the area clean and the fences look great. These guys have pride in their work.",
      author: "Scott Burch",
      location: "Homeowner"
    },
    {
      quote: "I've dealt with Omni for years on various jobs in a professional context. They do great work, and are always the company I refer to my customers needing a fence built, modified, or repaired.",
      author: "Nick Carson",
      location: "Professional Contractor"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      <div className="container-custom">
        <div className="text-center mb-12 slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2 inline-block">Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with us.
          </p>
        </div>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent className="-ml-2">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 p-2 flex">
                <Testimonial
                  quote={testimonial.quote}
                  author={testimonial.author}
                  location={testimonial.location}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6">
            <CarouselPrevious className="relative mr-2 hover:bg-primary/10 border-primary/20" />
            <CarouselNext className="relative ml-2 hover:bg-primary/10 border-primary/20" />
          </div>
        </Carousel>
      </div>
      
      <div className="absolute -bottom-6 right-0 w-24 h-24 bg-primary/5 rounded-full"></div>
      <div className="absolute -bottom-3 right-24 w-12 h-12 bg-primary/10 rounded-full"></div>
    </section>
  );
};

export default Testimonials;
