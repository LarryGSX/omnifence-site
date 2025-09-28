import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle nav link clicks with scroll to top
  const handleNavClick = () => {
    closeMenu();
    // Small delay to ensure navigation happens first
    setTimeout(() => window.scrollTo(0, 0), 100);
  };

  return (
    <>
      {/* Top Bar with Phone Number - Now Sticky */}
      <div className="w-full bg-primary text-white py-2 sticky top-0 z-[101]">
        <div className="container-custom">
          <div className="flex items-center justify-center">
            <Phone className="h-4 w-4 mr-2" />
            <span>Call us now! </span>
            <a href="tel:9187083668" className="ml-1 font-semibold hover:text-white hover:underline transition-all duration-200">
              (918) 708-3668
            </a>
          </div>
        </div>
      </div>

      <header className="w-full bg-white shadow-sm sticky top-16 md:top-10 z-[100]">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2" onClick={handleNavClick}>
              <img src="/Omni_Fence_Logo_NoText.png" alt="Omni Fence & Deck Logo" className="h-8 w-auto" />
              <span className="text-xl font-heading font-bold text-primary">Omni Fence & Deck</span>
            </Link>

            {/* Desktop Navigation - Centered between logo and CTA */}
            <nav className="hidden md:flex items-center space-x-12 absolute left-1/2 transform -translate-x-1/2">
              <Link to="/services" className="font-medium hover:text-primary transition-colors" onClick={handleNavClick}>Services</Link>
              <Link to="/gallery" className="font-medium hover:text-primary transition-colors" onClick={handleNavClick}>Gallery</Link>
              <Link to="/locations" className="font-medium hover:text-primary transition-colors" onClick={handleNavClick}>Locations</Link>
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <Button asChild className="btn-accent">
                <Link to="/quote" onClick={handleNavClick}>Get a Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-primary" />
              ) : (
                <Menu className="h-6 w-6 text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={cn(
            "fixed inset-y-0 right-0 z-[102] w-full bg-white transform transition-transform duration-300 ease-in-out md:hidden",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <Link to="/" className="flex items-center space-x-2" onClick={handleNavClick}>
                <img src="/Omni_Fence_Logo_NoText.png" alt="Omni Fence & Deck Logo" className="h-8 w-auto" />
                <span className="text-xl font-heading font-bold text-primary">Omni Fence & Deck</span>
              </Link>
              <button 
                className="p-2" 
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-primary" />
              </button>
            </div>
            <nav className="flex flex-col space-y-6 text-lg font-medium">
              <Link to="/services" className="hover:text-primary transition-colors" onClick={handleNavClick}>Services</Link>
              <Link to="/gallery" className="hover:text-primary transition-colors" onClick={handleNavClick}>Gallery</Link>
              <Link to="/locations" className="hover:text-primary transition-colors" onClick={handleNavClick}>Locations</Link>
            </nav>
            <div className="mt-auto">
              <Button asChild className="btn-accent w-full">
                <Link to="/quote" onClick={handleNavClick}>Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
