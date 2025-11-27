import React from 'react';
import { Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-dark-900 text-white min-h-screen">
       <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
             <span className="text-gold-400 uppercase tracking-widest font-bold mb-4 block">The Legacy</span>
             <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">A Century of Precision</h1>
             <p className="text-xl text-gray-400 leading-relaxed">
                SWISS was born from a singular vision: to create timepieces that are not merely instruments, but heirlooms. 
                For over 100 years, our artisans have pushed the boundaries of horology, blending traditional craftsmanship with avant-garde materials.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
             <div className="aspect-[4/3] bg-dark-800 rounded-sm overflow-hidden relative">
                <img src="https://picsum.photos/800/600?grayscale" alt="Watchmaker" className="object-cover w-full h-full opacity-60 hover:opacity-80 transition-opacity duration-500" />
             </div>
             <div>
                <h3 className="text-3xl font-display font-bold mb-6">Master Craftsmanship</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                   Every SWISS watch undergoes over 500 individual quality checks. Our master watchmakers spend dozens of hours hand-assembling movements that contain hundreds of microscopic parts. 
                   It is a labor of love, patience, and obsession.
                </p>
                <div className="grid grid-cols-2 gap-6">
                   <div className="border-l border-gold-400 pl-4">
                      <span className="text-3xl font-bold block text-white">1924</span>
                      <span className="text-sm text-gray-500 uppercase">Established</span>
                   </div>
                   <div className="border-l border-gold-400 pl-4">
                      <span className="text-3xl font-bold block text-white">450+</span>
                      <span className="text-sm text-gray-500 uppercase">Patents</span>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

export default About;
