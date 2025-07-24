import { Check, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { formatPrice } from '../data/pricing.js';

const PricingCard = ({ plan }) => {
  const handleChoosePlan = () => {
    window.open('https://discord.gg/Zaxns4Gumb', '_blank');
  };

  return (
    <div className="relative p-6 rounded-2xl transition-all duration-300 oxley-card-outline oxley-card-gradient cursor-pointer">
      {/* Plan Header */}
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
        <div className="flex items-baseline justify-center mb-2">
          <span className="text-3xl font-bold text-foreground">{formatPrice(plan.price)}</span>
          <span className="text-muted-foreground ml-1">/{plan.period}</span>
        </div>
        <p className="text-sm text-muted-foreground">{plan.players || plan.ram}</p>
      </div>

      {/* Plan Features */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center text-sm">
          <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
          <span className="text-foreground">{plan.storage}</span>
        </div>
        <div className="flex items-center text-sm">
          <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
          <span className="text-foreground">{plan.bandwidth}</span>
        </div>
        {plan.players && (
          <div className="flex items-center text-sm">
            <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
            <span className="text-foreground">{plan.players}</span>
          </div>
        )}
      </div>

      {/* CTA Button */}
      <Button 
        onClick={handleChoosePlan}
        className="w-full oxley-button-cursor oxley-glow-hover"
      >
        <Zap className="h-4 w-4 mr-2" />
        Choose Plan
      </Button>
    </div>
  );
};

export default PricingCard;

