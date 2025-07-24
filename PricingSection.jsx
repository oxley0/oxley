import { useState } from 'react';
import { Server, Cpu, HardDrive, Gamepad2, Code, Database } from 'lucide-react';
import PricingCard from './PricingCard.jsx';
import { sharedHostingPlans, dedicatedHostingPlans } from '../data/pricing.js';

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState('shared');
  const [selectedSharedPlan, setSelectedSharedPlan] = useState('samp');
  const [selectedDedicatedPlan, setSelectedDedicatedPlan] = useState('epyc-7302');

  const getIcon = (planId) => {
    switch (planId) {
      case 'samp':
      case 'openmp':
        return <Gamepad2 className="h-6 w-6" />;
      case 'nodejs':
        return <Code className="h-6 w-6" />;
      case 'python':
        return <Database className="h-6 w-6" />;
      case 'epyc-7302':
      case 'ryzen-7950x3d':
        return <Cpu className="h-6 w-6" />;
      default:
        return <Server className="h-6 w-6" />;
    }
  };

  const currentSharedPlan = sharedHostingPlans.find(plan => plan.id === selectedSharedPlan);
  const currentDedicatedPlan = dedicatedHostingPlans.find(plan => plan.id === selectedDedicatedPlan);

  return (
    <section className="py-20 bg-background" id="pricing">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="oxley-text-gradient">Pricing Plans</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect hosting solution for your needs. All plans include our premium features and 24/7 support.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-card rounded-lg p-1 border border-border">
            <button
              onClick={() => setActiveTab('shared')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 cursor-pointer ${
                activeTab === 'shared'
                  ? 'bg-primary text-primary-foreground oxley-glow'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Server className="h-4 w-4 mr-2 inline" />
              Shared Hosting
            </button>
            <button
              onClick={() => setActiveTab('dedicated')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 cursor-pointer ${
                activeTab === 'dedicated'
                  ? 'bg-primary text-primary-foreground oxley-glow'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <HardDrive className="h-4 w-4 mr-2 inline" />
              Dedicated Hosting
            </button>
          </div>
        </div>

        {/* Shared Hosting Content */}
        {activeTab === 'shared' && (
          <div id="shared">
            {/* Shared Hosting Plan Selector */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {sharedHostingPlans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedSharedPlan(plan.id)}
                  className={`flex items-center px-6 py-3 rounded-lg border transition-all duration-300 cursor-pointer ${
                    selectedSharedPlan === plan.id
                      ? 'bg-primary text-primary-foreground border-primary oxley-glow'
                      : 'bg-card text-foreground border-border hover:border-primary/50'
                  }`}
                >
                  {getIcon(plan.id)}
                  <span className="ml-2 font-medium">{plan.name}</span>
                </button>
              ))}
            </div>

            {/* Selected Plan Details */}
            {currentSharedPlan && (
              <div className="mb-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{currentSharedPlan.name}</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">{currentSharedPlan.description}</p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
                  {currentSharedPlan.features.map((feature, index) => (
                    <div key={index} className="bg-card p-4 rounded-lg border border-border text-center">
                      <p className="text-sm text-foreground">{feature}</p>
                    </div>
                  ))}
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {currentSharedPlan.plans.map((plan, index) => (
                    <PricingCard key={index} plan={plan} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Dedicated Hosting Content */}
        {activeTab === 'dedicated' && (
          <div id="dedicated">
            {/* Dedicated Hosting Plan Selector */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {dedicatedHostingPlans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedDedicatedPlan(plan.id)}
                  className={`flex items-center px-6 py-3 rounded-lg border transition-all duration-300 cursor-pointer ${
                    selectedDedicatedPlan === plan.id
                      ? 'bg-primary text-primary-foreground border-primary oxley-glow'
                      : 'bg-card text-foreground border-border hover:border-primary/50'
                  }`}
                >
                  {getIcon(plan.id)}
                  <span className="ml-2 font-medium">{plan.name}</span>
                </button>
              ))}
            </div>

            {/* Selected Dedicated Plan Details */}
            {currentDedicatedPlan && (
              <div className="mb-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{currentDedicatedPlan.name}</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">{currentDedicatedPlan.description}</p>
                </div>

                {/* Server Specs */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground">CPU</p>
                    <p className="font-medium text-foreground">{currentDedicatedPlan.specs.cpu}</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground">Cores</p>
                    <p className="font-medium text-foreground">{currentDedicatedPlan.specs.cores}</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground">Frequency</p>
                    <p className="font-medium text-foreground">{currentDedicatedPlan.specs.frequency}</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground">RAM</p>
                    <p className="font-medium text-foreground">{currentDedicatedPlan.specs.ram}</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground">Storage</p>
                    <p className="font-medium text-foreground">{currentDedicatedPlan.specs.storage}</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground">Network</p>
                    <p className="font-medium text-foreground">{currentDedicatedPlan.specs.network}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
                  {currentDedicatedPlan.features.map((feature, index) => (
                    <div key={index} className="bg-card p-4 rounded-lg border border-border text-center">
                      <p className="text-sm text-foreground">{feature}</p>
                    </div>
                  ))}
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {currentDedicatedPlan.plans.map((plan, index) => (
                    <PricingCard key={index} plan={plan} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingSection;

