import React from 'react';
import { Truck as TruckType } from '../types';
import { TRUCKS } from '../constants';

interface FleetProps {
  onTruckSelect: (truck: TruckType) => void;
}

const Fleet: React.FC<FleetProps> = ({ onTruckSelect }) => {
  return (
    <section id="fleet" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary-600 font-bold tracking-widest text-xs uppercase mb-2 block">Our Fleet</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">India's Versatile Fleet Range</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRUCKS.map((truck) => (
            <div key={truck.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group">
              <div className="h-56 overflow-hidden relative">
                 <img 
                    src={truck.image} 
                    alt={truck.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                 />
                 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm">
                    {truck.tagline}
                 </div>
              </div>
              
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{truck.name}</h3>
                <p className="text-slate-500 text-sm mb-6 line-clamp-2">{truck.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mt-auto pt-6 border-t border-slate-100">
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase">Payload</span>
                    <span className="block font-semibold text-slate-900">{truck.payload}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase">Route</span>
                    <span className="block font-semibold text-slate-900">{truck.routeType}</span>
                  </div>
                </div>

                <button 
                  onClick={() => onTruckSelect(truck)}
                  className="w-full mt-6 py-3 rounded-xl border-2 border-slate-100 font-bold text-slate-600 hover:border-primary-600 hover:text-primary-600 hover:bg-primary-50 transition-all"
                >
                  View Details & Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
