import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary-foreground text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12 text-center md:text-left">
            {/* Company Info */}
            <div className="md:col-span-2 flex flex-col items-center md:items-start">
              <div className="flex items-center space-x-2 mb-4">
                <img src="/Omni_Fence_Logo_NoText.png" alt="Omni Fence & Deck Logo" className="h-8 w-auto" />
                <span className="text-xl font-heading font-bold">Omni Fence & Deck</span>
              </div>
              <p className="text-white/80 mb-6 max-w-md">
                Tulsa's premier fencing and custom deck specialists. Quality craftsmanship and exceptional service for residential and commercial properties throughout Oklahoma.
              </p>
              <Button asChild className="btn-accent w-fit">
                <Link to="/quote">Get a Quote</Link>
              </Button>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-heading font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/services" className="text-white/80 hover:text-primary transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="text-white/80 hover:text-primary transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/locations" className="text-white/80 hover:text-primary transition-colors">
                    Locations
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-heading font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                  <a href="tel:9187083668" className="hover:text-primary transition-colors">
                    (918) 708-3668
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                  <a href="mailto:sales@omnifence.net" className="hover:text-primary transition-colors">
                    sales@omnifence.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/20 text-center">
          <p className="text-white/60">
            © {currentYear} Omni Fence and Deck. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
