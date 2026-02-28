import React from 'react';
import { Quote } from 'lucide-react';

const QuoteSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 text-center px-4">
      <div className="max-w-4xl mx-auto relative">
        <div className="flex justify-center mb-6">
            <Quote size={48} className="text-primary-200" />
        </div>
        <h3 className="text-2xl md:text-3xl font-serif italic text-slate-800 leading-normal mb-8">
          "Driving the backbone of our economy with <span className="text-primary-600 not-italic font-sans font-bold">Pan-India Connectivity</span>. We are committed to the Make in India initiative, ensuring every shipment strengthens our nation's progress."
        </h3>
        <p className="text-xs font-bold text-slate-400 tracking-[0.2em] uppercase">— National Logistics Excellence</p>
      </div>
    </section>
  );
};

export default QuoteSection;
