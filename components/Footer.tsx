import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                AG
              </div>
              <span className="text-xl font-bold tracking-tight">GOODS</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Pioneering the future of Indian logistics through technology-driven transport and a commitment to national growth.
            </p>
            <div className="flex gap-4 pt-2">
               <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors"><Facebook size={16} /></a>
               <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors"><Twitter size={16} /></a>
               <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors"><Instagram size={16} /></a>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6 text-slate-300">Core Services</h4>
            <ul className="space-y-4 text-sm text-slate-400">
               <li><a href="#" className="hover:text-white transition-colors">Inter-state Haulage</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Express Delivery</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Supply Chain Solutions</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Project Cargo</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6 text-slate-300">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400">
               <li><a href="#" className="hover:text-white transition-colors">About Our Journey</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Sustainability Goals</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Safety Protocols</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Media Kit</a></li>
            </ul>
          </div>

          {/* Connectivity */}
          <div>
             <h4 className="font-bold text-sm uppercase tracking-wider mb-6 text-slate-300">Connectivity</h4>
             <ul className="space-y-6 text-sm text-slate-400">
                <li className="flex gap-3">
                   <MapPin className="text-primary-500 shrink-0" size={18} />
                   <span>Plot 45, Logistics Zone, Sector 18, Gurugram, Haryana</span>
                </li>
                <li className="flex gap-3">
                   <Phone className="text-primary-500 shrink-0" size={18} />
                   <span>24/7 National Hotline: 1800-555-800</span>
                </li>
                <li className="flex gap-3">
                   <Mail className="text-primary-500 shrink-0" size={18} />
                   <span>support@aggoods.in</span>
                </li>
             </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; 2024 AG Goods Logistics Group. Proudly supporting Make in India.</p>
          <div className="flex gap-6">
             <a href="#" className="hover:text-white">Privacy Policy</a>
             <a href="#" className="hover:text-white">Terms of Service</a>
             <a href="#" className="hover:text-white">GST Information</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
