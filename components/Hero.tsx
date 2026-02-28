import React from 'react';
import { ArrowRight, MapPin, Truck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[85vh] flex flex-col justify-center bg-slate-900 pb-20">
        {/* Background - Video/Image Placeholder */}
        <div className="absolute inset-0 z-0 overflow-hidden">
             {/* Note: This is where the video would go. */}
             <img 
                 src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2070&auto=format&fit=crop" 
                 alt="Highway Transport" 
                 className="w-full h-full object-cover opacity-60"
             />
             {/* Blue Overlay matching the theme */}
             <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
             <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-transparent"></div>
        </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <div className="max-w-4xl">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-800/50 border border-blue-400/30 backdrop-blur-md text-blue-200 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
              Global Logistics Partner
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black italic text-white leading-[0.9] tracking-tighter mb-8 shadow-sm">
              <span className="block">RELIABLE</span>
              <span className="block text-blue-400">TRUCKING</span>
              <span className="block">SOLUTIONS</span>
            </h1>
            
            {/* Description */}
            <p className="text-base md:text-lg text-blue-50 max-w-xl leading-relaxed mb-10 font-medium">
              Precision-engineered logistics for heavy-duty requirements. 
              We move your business forward with industry-leading safety protocols and real-time intelligence.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-16">
              <button className="group flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-lg font-bold transition-all transform hover:translate-x-1 shadow-lg shadow-blue-900/50">
                Request Freight Quote <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
              </button>
              <button className="px-8 py-4 rounded-lg font-bold text-white border border-blue-300/30 hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm">
                View Fleet
              </button>
            </div>
        </div>
      </div>

      {/* Floating Search Widget */}
      <div className="container mx-auto px-4 md:px-6 relative z-20">
         <div className="bg-white rounded-xl shadow-2xl shadow-slate-900/20 p-4 border border-slate-100 flex flex-col lg:flex-row gap-4 items-center">
             
             {/* From */}
             <div className="flex-1 w-full relative group">
                 <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-500 transition-colors">
                     <MapPin size={20} />
                 </div>
                 <div className="absolute left-11 top-2.5 text-[10px] font-bold text-slate-400 uppercase">From</div>
                 <input type="text" defaultValue="Mumbai, MH" className="w-full h-14 pl-11 pr-4 pt-4 bg-slate-50 rounded-lg border-transparent focus:bg-white focus:ring-2 focus:ring-primary-100 outline-none text-sm font-bold text-slate-700" />
             </div>

             {/* To */}
             <div className="flex-1 w-full relative group">
                 <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-500 transition-colors">
                     <MapPin size={20} />
                 </div>
                 <div className="absolute left-11 top-2.5 text-[10px] font-bold text-slate-400 uppercase">To</div>
                 <input type="text" defaultValue="Delhi, DL" className="w-full h-14 pl-11 pr-4 pt-4 bg-slate-50 rounded-lg border-transparent focus:bg-white focus:ring-2 focus:ring-primary-100 outline-none text-sm font-bold text-slate-700" />
             </div>

             {/* Truck Type */}
             <div className="flex-1 w-full relative group">
                 <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-500 transition-colors">
                     <Truck size={20} />
                 </div>
                 <div className="absolute left-11 top-2.5 text-[10px] font-bold text-slate-400 uppercase">Transport Mode</div>
                 <select className="w-full h-14 pl-11 pr-4 pt-4 bg-slate-50 rounded-lg border-transparent focus:bg-white focus:ring-2 focus:ring-primary-100 outline-none text-sm font-bold text-slate-700 appearance-none cursor-pointer">
                     <option>Full Truck Load (FTL)</option>
                     <option>Part Truck Load (PTL)</option>
                     <option>Container</option>
                 </select>
             </div>

             <button className="bg-primary-700 text-white px-8 py-3.5 rounded-lg font-bold text-sm hover:bg-primary-800 transition-colors w-full lg:w-auto shadow-lg shadow-primary-900/20 whitespace-nowrap">
                 Check Availability
             </button>
         </div>
         {/* Live Indicator */}
         <div className="flex items-center gap-2 mt-3 ml-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-blue-100">Live logistics network active</span>
         </div>
      </div>
    </div>
  );
};

export default Hero;