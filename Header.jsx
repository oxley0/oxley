import { useState } from 'react';
import { Menu, X, Server, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Server className="h-8 w-8 text-primary oxley-pulse" />
              <div className="absolute inset-0 h-8 w-8 text-primary/30 oxley-float">
                <Shield className="h-8 w-8" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold oxley-text-gradient">Oxley</h1>
              <p className="text-xs text-muted-foreground">Premium Hosting</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#shared" className="text-foreground hover:text-primary transition-colors">
              Shared Hosting
            </a>
            <a href="#dedicated" className="text-foreground hover:text-primary transition-colors">
              Dedicated Hosting
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <Button className="oxley-glow-hover cursor-pointer" onClick={() => window.open('https://discord.gg/Zaxns4Gumb', '_blank')}>
              <Zap className="h-4 w-4 mr-2" />
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#shared" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Shared Hosting
              </a>
              <a 
                href="#dedicated" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Dedicated Hosting
              </a>
              <a 
                href="#contact" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="w-full oxley-glow-hover cursor-pointer" onClick={() => window.open('https://discord.gg/Zaxns4Gumb', '_blank')}>
                <Zap className="h-4 w-4 mr-2" />
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

