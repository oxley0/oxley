import { ArrowRight, Star, Users, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center oxley-gradient overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl oxley-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl oxley-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/50 border border-border mb-8 oxley-glow">
            <Star className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium">Premium Hosting Solutions</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="oxley-text-gradient">Oxley Hosting</span>
            <br />
            <span className="text-foreground">Premium Performance</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience lightning-fast hosting with our cutting-edge infrastructure. 
            From shared hosting to dedicated servers, we power your digital success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-4 oxley-glow-hover cursor-pointer" onClick={() => window.open('https://discord.gg/Zaxns4Gumb', '_blank')}>
              <Zap className="h-5 w-5 mr-2" />
              View Pricing
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 oxley-border-gradient cursor-pointer">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-primary mr-2" />
                <span className="text-3xl font-bold text-foreground">10K+</span>
              </div>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Shield className="h-6 w-6 text-primary mr-2" />
                <span className="text-3xl font-bold text-foreground">99.9%</span>
              </div>
              <p className="text-muted-foreground">Uptime Guarantee</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Zap className="h-6 w-6 text-primary mr-2" />
                <span className="text-3xl font-bold text-foreground">24/7</span>
              </div>
              <p className="text-muted-foreground">Expert Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 oxley-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

