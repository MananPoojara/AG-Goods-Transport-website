import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import QuoteSection from './components/Quote';
import Safety from './components/Safety';
import Fleet from './components/Fleet';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TruckModal from './components/TruckModal';
import { Truck } from './types';

const App: React.FC = () => {
  const [selectedTruck, setSelectedTruck] = useState<Truck | null>(null);

  const handleOpenTruck = (truck: Truck) => {
    setSelectedTruck(truck);
  };

  const handleCloseTruck = () => {
    setSelectedTruck(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-primary-500 selection:text-white">
      <Header />
      
      <main>
        <Hero />
        <QuoteSection />
        <Services />
        <Safety />
        <Fleet onTruckSelect={handleOpenTruck} />
        <Contact />
      </main>

      <Footer />

      {selectedTruck && (
        <TruckModal 
          truck={selectedTruck} 
          isOpen={!!selectedTruck} 
          onClose={handleCloseTruck} 
        />
      )}
    </div>
  );
};

export default App;
