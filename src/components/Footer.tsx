import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display text-2xl tracking-wider">
                Akriti SRP Rokect JV
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Building Nepal's infrastructure with excellence, integrity, and
              dedication since 2015.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-4 text-secondary">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {[
                "Home",
                "About Us",
                "Services",
                "Projects",
                "Gallery",
                "Contact",
              ].map((link) => (
                <Link
                  key={link}
                  to={`/${link === "Home" ? "" : link.toLowerCase().replace(" ", "-").replace("about-us", "about")}`}
                  className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg mb-4 text-secondary">
              Our Services
            </h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <span>Road Construction</span>
              <span>Bridge Construction</span>
              <span>Building Construction</span>
              <span>Infrastructure Development</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-4 text-secondary">
              Contact Info
            </h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-secondary shrink-0" />
                <span>Gulmi, Lumbini Province, Nepal</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary shrink-0" />
                <span>+977-9827514282</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary shrink-0" />
                <span>info@aakritisrp.com.np</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Akriti SRP Rokect JV. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
