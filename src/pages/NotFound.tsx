import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import BackgroundBubbles from "@/components/ui/background-bubbles";

const NotFound = () => {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 md:py-32">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd')] bg-cover bg-center" style={{ opacity: 0.4 }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent z-[11] opacity-50"></div>
        <div className="container-custom relative z-20">
          <div className="max-w-3xl mx-auto text-center slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="accent-badge mb-4 inline-block">Error 404</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Page Not Found
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-primary/30 to-transparent"></div>
      </section>

      {/* Content Section */}
      <section className="py-20 relative">
        <BackgroundBubbles position="right" />
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">Let's Get You Back on Track</h2>
              <p className="text-gray-600 mb-8">
                Don't worry! You can return to our homepage or use the navigation menu to find what you're looking for.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline" className="hover-scale">
                  <Link to="/" className="inline-flex items-center">
                    <Home className="mr-2 h-5 w-5" />
                    Go to Homepage
                  </Link>
                </Button>
                <Button asChild className="hover-scale">
                  <Link to="/quote" className="inline-flex items-center">
                    Contact Support
                    <ArrowLeft className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="bg-secondary rounded-lg p-8">
              <h3 className="text-xl font-heading font-semibold mb-4 text-primary">Common Pages</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/services" className="text-gray-600 hover:text-primary transition-colors duration-300">
                  • Our Services
                </Link>
                <Link to="/" className="text-gray-600 hover:text-primary transition-colors duration-300">
                  • Home
                </Link>
                <Link to="/quote" className="text-gray-600 hover:text-primary transition-colors duration-300">
                  • Contact Us
                </Link>
                <Link to="/gallery" className="text-gray-600 hover:text-primary transition-colors duration-300">
                  • Project Gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
