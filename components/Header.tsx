import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl ${scrolled ? 'bg-primary-600 text-white' : 'bg-white text-primary-700'}`}>
            AG
          </div>
          <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>
            GOODS
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Services', 'Safety', 'Fleet', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className={`text-sm font-medium transition-colors ${scrolled ? 'text-slate-600 hover:text-primary-600' : 'text-blue-100 hover:text-white'}`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <div className={`flex items-center gap-2 text-sm font-medium ${scrolled ? 'text-slate-600' : 'text-blue-100'}`}>
            <Phone size={16} />
            <span>1800-555-000</span>
          </div>
          <button className={`${scrolled ? 'bg-primary-600 hover:bg-primary-700 shadow-primary-500/30 text-white' : 'bg-white text-primary-700 hover:bg-blue-50'} px-5 py-2.5 rounded-lg text-sm font-bold transition-all hover:scale-105 shadow-lg`}>
            Get a Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden ${scrolled ? 'text-slate-800' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t p-4 shadow-lg md:hidden flex flex-col gap-4">
          {['Services', 'Safety', 'Fleet', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-slate-700 font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="h-px bg-slate-100 my-2"></div>
          <button className="bg-primary-600 text-white w-full py-3 rounded-lg font-semibold">
            Get a Quote
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;