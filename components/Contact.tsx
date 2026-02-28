import React from 'react';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-slate-50 rounded-[40px] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            
            {/* Form Section */}
            <div className="lg:w-5/12 p-8 md:p-16 bg-white">
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Start Your</h2>
               <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-6">Logistics Journey</h2>
               <p className="text-slate-500 mb-8">Speak with our regional logistics experts for a customized quote tailored to your business needs.</p>
               
               <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                     <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Name</label>
                        <input type="text" placeholder="Your Name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors" />
                     </div>
                     <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Phone Number</label>
                        <input type="text" placeholder="+91" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors" />
                     </div>
                  </div>
                  
                  <div>
                     <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Cargo Type</label>
                     <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors text-slate-600 appearance-none">
                        <option>Select Cargo Type</option>
                        <option>General Freight</option>
                        <option>Perishables</option>
                     </select>
                  </div>

                  <div>
                     <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Requirements</label>
                     <textarea rows={3} placeholder="Detail your pickup and drop-off locations..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors resize-none"></textarea>
                  </div>

                  <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all mt-4 shadow-lg shadow-primary-500/20">
                     SEND INQUIRY <Send size={18} />
                  </button>
               </form>
            </div>

            {/* Map Visualization Section */}
            <div className="lg:w-7/12 relative min-h-[400px]">
               {/* Using an image as a placeholder for a complex map visualization as requested */}
               <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" 
                  alt="Map Coverage" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent"></div>
               
               {/* Floating Card on Map */}
               <div className="absolute bottom-8 left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs backdrop-blur-md bg-white/90">
                  <div className="flex items-start gap-3">
                     <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0"></div>
                     <div>
                        <h4 className="font-bold text-slate-900 text-sm">Regional Head Office</h4>
                        <p className="text-xs text-slate-500 mt-1">Industrial Hub, Gurugram, India</p>
                        <p className="text-[10px] text-slate-400 mt-2 pt-2 border-t border-slate-200">
                           Supporting Mike in India efforts with localized logistics solutions across 250+ districts.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
