import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary-foreground text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12 text-center md:text-left">
            {/* Company Info */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center space-x-2 mb-4">
                <img src="/Omni_Fence_Logo_NoText.png" alt="Omni Fence & Deck Logo" className="h-8 w-auto" />
                <span className="text-xl font-heading font-bold">Omni Fence & Deck</span>
              </div>
              <p className="text-white/80 mb-4 max-w-sm">
                Tulsa's premier fencing and custom deck specialists. Quality craftsmanship and exceptional service for residential and commercial properties throughout Oklahoma.
              </p>
            </div>

            {/* Services */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-heading font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/services#residential-fencing" className="text-white/80 hover:text-primary transition-colors">
                    Residential Fencing
                  </Link>
                </li>
                <li>
                  <Link to="/services#commercial-fencing" className="text-white/80 hover:text-primary transition-colors">
                    Commercial Fencing
                  </Link>
                </li>
                <li>
                  <Link to="/services#custom-decks" className="text-white/80 hover:text-primary transition-colors">
                    Custom Decks
                  </Link>
                </li>
                <li>
                  <Link to="/services#gates-operators" className="text-white/80 hover:text-primary transition-colors">
                    Gates & Gate Operators
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Quick Links */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-heading font-semibold mb-4">Contact & Links</h3>
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <Phone className="h-4 w-4 text-accent" />
                  <a href="tel:9181234567" className="hover:text-primary transition-colors">
                    (918) 123-4567
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <Mail className="h-4 w-4 text-accent" />
                  <a href="mailto:info@omnifence.com" className="hover:text-primary transition-colors">
                    info@omnifence.com
                  </a>
                </div>
              </div>
              <ul className="space-y-2">
                <li>
                  <Link to="/services" className="text-white/80 hover:text-primary transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/locations" className="text-white/80 hover:text-primary transition-colors">
                    Service Areas
                  </Link>
                </li>
                <li>
                  <Link to="/quote" className="text-white/80 hover:text-primary transition-colors">
                    Get a Quote
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/20 text-center md:flex md:justify-between md:text-left">
          <p className="text-white/60 mb-3 md:mb-0">
            © {currentYear} Omni Fence and Deck. All rights reserved.
          </p>
          <p className="text-white/60">
            Designed and developed by Lovable
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
