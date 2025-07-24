import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import StarfallBackground from './components/StarfallBackground';
import './App.css';

function App() {
  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground no-select">
      <StarfallBackground />
      <Header />
      <main>
        <Hero />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
