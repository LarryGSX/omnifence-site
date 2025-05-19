
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary-foreground text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/Omni_Fence_Logo_NoText.png" alt="Omni Fence & Deck Logo" className="h-8 w-auto" />
              <span className="text-xl font-heading font-bold">Omni Fence & Deck</span>
            </div>
            <p className="text-white/80 mb-4">
              Professional fencing and deck solutions with a tech-driven approach for residential and commercial properties.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <span>info@omnifence.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Serving multiple locations</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#residential" className="text-white/80 hover:text-accent transition-colors">
                  Residential Fencing
                </Link>
              </li>
              <li>
                <Link to="/services#commercial" className="text-white/80 hover:text-accent transition-colors">
                  Commercial Fencing
                </Link>
              </li>
              <li>
                <Link to="/services#decks" className="text-white/80 hover:text-accent transition-colors">
                  Custom Deck Building
                </Link>
              </li>
              <li>
                <Link to="/services#repair" className="text-white/80 hover:text-accent transition-colors">
                  Fence Repair & Maintenance
                </Link>
              </li>
              <li>
                <Link to="/services#gates" className="text-white/80 hover:text-accent transition-colors">
                  Gates & Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/locations/template" className="text-white/80 hover:text-accent transition-colors">
                  Locations
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Empty column to replace the Legal section */}
          <div></div>
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
