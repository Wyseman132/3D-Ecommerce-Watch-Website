import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, ChevronDown } from 'lucide-react';
import { PRODUCTS } from '../constants';

const Shop: React.FC = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-dark-900">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-8">
          <div>
            <h1 className="text-5xl font-display font-bold text-white mb-4">All Timepieces</h1>
            <p className="text-gray-400 max-w-lg">
                Explore our exclusive range of Swiss-made luxury watches, designed for those who value precision and elegance.
            </p>
          </div>
          <button 
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center space-x-2 text-gold-400 border border-gold-400 px-6 py-2 mt-6 md:mt-0 hover:bg-gold-400 hover:text-black transition-all"
          >
            <Filter className="w-4 h-4" />
            <span className="uppercase text-xs font-bold tracking-widest">Filters</span>
          </button>
        </div>

        {/* Filters (Expandable) */}
        {filterOpen && (
             <div className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-8 bg-dark-800 p-8 rounded-sm animate-fade-in-down">
                <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Collection</h4>
                    <div className="space-y-2 text-sm text-gray-400">
                        <label className="flex items-center space-x-2"><input type="checkbox" className="accent-gold-400" /> <span>Royal Chrono</span></label>
                        <label className="flex items-center space-x-2"><input type="checkbox" className="accent-gold-400" /> <span>Abyss Diver</span></label>
                        <label className="flex items-center space-x-2"><input type="checkbox" className="accent-gold-400" /> <span>Velocita</span></label>
                    </div>
                </div>
                <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Material</h4>
                    <div className="space-y-2 text-sm text-gray-400">
                        <label className="flex items-center space-x-2"><input type="checkbox" className="accent-gold-400" /> <span>Gold</span></label>
                        <label className="flex items-center space-x-2"><input type="checkbox" className="accent-gold-400" /> <span>Titanium</span></label>
                        <label className="flex items-center space-x-2"><input type="checkbox" className="accent-gold-400" /> <span>Steel</span></label>
                    </div>
                </div>
                <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Price Range</h4>
                    <input type="range" min="5000" max="50000" className="w-full accent-gold-400" />
                    <div className="flex justify-between text-xs text-gray-400 mt-2">
                        <span>$5,000</span>
                        <span>$50,000+</span>
                    </div>
                </div>
             </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {PRODUCTS.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="group">
               <div className="aspect-square bg-dark-800 relative overflow-hidden mb-6">
                  {/* Decorative Circle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 border border-white/5 rounded-full group-hover:scale-105 transition-transform duration-700" />
                  
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover mix-blend-overlay opacity-60 group-hover:opacity-100 transition-opacity duration-500" 
                  />
                  
                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <button className="w-full bg-white text-black py-3 uppercase text-xs font-bold tracking-widest hover:bg-gold-400 transition-colors">
                          View Details
                      </button>
                  </div>
               </div>
               
               <div className="text-center">
                  <h3 className="text-2xl font-display text-white mb-1 group-hover:text-gold-400 transition-colors">{product.name}</h3>
                  <p className="text-xs text-gold-400 uppercase tracking-widest mb-2">{product.specs.movement}</p>
                  <p className="text-gray-400">${product.price.toLocaleString()}</p>
               </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
