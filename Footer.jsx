import { Server, Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border" id="contact">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Server className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-2xl font-bold oxley-text-gradient">Oxley</h3>
                <p className="text-xs text-muted-foreground">Premium Hosting</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Oxley Hosting provides premium web hosting solutions with cutting-edge technology, 
              reliable infrastructure, and exceptional customer support. Your success is our mission.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#shared" className="text-muted-foreground hover:text-primary transition-colors">Shared Hosting</a></li>
              <li><a href="#dedicated" className="text-muted-foreground hover:text-primary transition-colors">Dedicated Hosting</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground">
                <Mail className="h-4 w-4 mr-3 text-primary" />
                <span>support@oxleyhosting.com</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Phone className="h-4 w-4 mr-3 text-primary" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-start text-muted-foreground">
                <MapPin className="h-4 w-4 mr-3 text-primary mt-1" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Oxley Hosting. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

