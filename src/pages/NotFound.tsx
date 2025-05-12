import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-secondary relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-20 h-[80%] bg-accent/5 -z-10 rounded-r-full"></div>
      <div className="absolute top-1/2 right-0 w-20 h-[80%] bg-accent/5 -z-10 rounded-l-full"></div>
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="accent-badge mb-4 inline-block">Error 404</span>
          <h1 className="text-6xl md:text-8xl font-heading font-bold text-primary mb-6">404</h1>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild size="lg" className="bg-accent text-secondary-foreground hover:bg-accent/90 hover-scale">
            <Link to="/" className="inline-flex items-center">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
