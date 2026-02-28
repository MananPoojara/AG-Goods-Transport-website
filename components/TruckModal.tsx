import React from 'react';
import { X, Weight, Move, Fuel, CheckCircle, Calendar } from 'lucide-react';
import { Truck } from '../types';

interface TruckModalProps {
  truck: Truck;
  isOpen: boolean;
  onClose: () => void;
}

const TruckModal: React.FC<TruckModalProps> = ({ truck, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-5xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/50 hover:bg-slate-100 rounded-full transition-colors"
        >
          <X size={20} className="text-slate-500" />
        </button>

        {/* Left Side - Image */}
        <div className="md:w-1/2 bg-slate-100 relative min-h-[300px] md:min-h-full flex items-center justify-center p-8 group">
            <div className="absolute inset-0">
                <img 
                    src={truck.image} 
                    alt={truck.name} 
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent md:bg-gradient-to-r md:from-transparent md:to-white/10" />
                
                {/* Brand watermark */}
                <div className="absolute top-6 left-6 flex items-center gap-2">
                   <div className="bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded">AG GOODS</div>
                </div>
            </div>
        </div>

        {/* Right Side - Details & Form */}
        <div className="md:w-1/2 p-8 md:p-10 overflow-y-auto max-h-[90vh] md:max-h-full">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                <p className="text-primary-600 font-bold text-xs uppercase tracking-wider">
                Heavy Duty Excellence
                </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif">
              {truck.name}
            </h2>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-slate-50 text-slate-600 rounded-lg shrink-0">
                   <Weight size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase">Payload Capacity</p>
                  <p className="text-slate-900 font-bold">{truck.payload}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-slate-50 text-slate-600 rounded-lg shrink-0">
                   <Move size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase">Cargo Dimensions</p>
                  <p className="text-slate-900 font-bold">{truck.dimensions}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-slate-50 text-slate-600 rounded-lg shrink-0">
                   <Fuel size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase">Fuel Type</p>
                  <p className="text-slate-900 font-bold">{truck.fuelType}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-slate-50 text-slate-600 rounded-lg shrink-0">
                   <CheckCircle size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase">Ideal For</p>
                  <p className="text-slate-900 font-bold">{truck.idealFor}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form Box */}
          <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
            <div className="flex items-center gap-2 mb-6 text-slate-800">
               <Calendar className="text-primary-600" size={24} />
               <h3 className="font-bold text-lg">Book with AG Goods</h3>
            </div>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all bg-white"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email Address</label>
                    <input 
                    type="email" 
                    placeholder="email@example.com" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all bg-white"
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Pickup Date</label>
                    <input 
                    type="date" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all bg-white text-slate-600"
                    />
                </div>
              </div>

              <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary-500/30 transition-all active:scale-[0.98] mt-4 uppercase tracking-wide">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TruckModal;