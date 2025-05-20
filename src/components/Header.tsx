import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar with Phone Number */}
      <div className="w-full bg-primary text-white py-2">
        <div className="container-custom">
          <div className="flex items-center justify-center">
            <Phone className="h-4 w-4 mr-2" />
            <span>Call us now! </span>
            <a href="tel:9181234567" className="ml-1 font-semibold hover:text-accent transition-colors">
              (918) 123-4567
            </a>
          </div>
        </div>
      </div>

      <header className="w-full bg-white shadow-sm sticky top-0 z-[100]">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <img src="/Omni_Fence_Logo_NoText.png" alt="Omni Fence & Deck Logo" className="h-8 w-auto" />
              <span className="text-xl font-heading font-bold text-primary">Omni Fence & Deck</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="font-medium hover:text-primary transition-colors">Home</Link>
              <Link to="/services" className="font-medium hover:text-primary transition-colors">Services</Link>
              <Link to="/locations/template" className="font-medium hover:text-primary transition-colors">Locations</Link>
              <Link to="/about" className="font-medium hover:text-primary transition-colors">About Us</Link>
              <Link to="/contact" className="font-medium hover:text-primary transition-colors">Contact</Link>
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <Button asChild className="btn-accent">
                <Link to="/contact">Get a Quote</Link>
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
            "fixed inset-y-0 right-0 z-50 w-full bg-white transform transition-transform duration-300 ease-in-out md:hidden",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
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
              <Link to="/" className="hover:text-primary transition-colors" onClick={closeMenu}>Home</Link>
              <Link to="/services" className="hover:text-primary transition-colors" onClick={closeMenu}>Services</Link>
              <Link to="/locations/template" className="hover:text-primary transition-colors" onClick={closeMenu}>Locations</Link>
              <Link to="/about" className="hover:text-primary transition-colors" onClick={closeMenu}>About Us</Link>
              <Link to="/contact" className="hover:text-primary transition-colors" onClick={closeMenu}>Contact</Link>
            </nav>
            <div className="mt-auto">
              <Button asChild className="btn-accent w-full" onClick={closeMenu}>
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
