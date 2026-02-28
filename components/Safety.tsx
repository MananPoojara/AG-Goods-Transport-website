import React from 'react';
import { Shield, RefreshCw, Smartphone } from 'lucide-react';

const Safety: React.FC = () => {
  return (
    <section id="safety" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10">
               <img 
                 src="https://images.unsplash.com/photo-1542385151-efd90007e2cc?auto=format&fit=crop&q=80&w=800" 
                 alt="Safety First Driver" 
                 className="w-full h-auto object-cover"
               />
               <div className="absolute inset-0 bg-blue-900/10"></div>
            </div>
            {/* Decor blob */}
            <div className="absolute -bottom-10 -left-10 w-full h-full bg-slate-100 rounded-3xl -z-10"></div>
          </div>

          <div className="lg:w-1/2">
             <span className="text-primary-600 font-bold tracking-widest text-xs uppercase mb-2 block">Safety Standards</span>
             <h2 className="text-4xl font-bold text-slate-900 mb-8">
               Security in Every <span className="text-primary-600">Kilometer</span> We Drive
             </h2>

             <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 mb-1">Certified Driver Training</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Rigorous background checks and defensive driving certifications for all our personnel.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <RefreshCw size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 mb-1">Preventive Maintenance</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Every vehicle undergoes a 50-point safety check before every inter-state journey.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 shrink-0">
                    <Smartphone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 mb-1">Advanced Telematics</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">IoT-enabled sensors for real-time monitoring of fuel, speed, and engine health.</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Safety;
