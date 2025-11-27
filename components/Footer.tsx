import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 border-t border-white/5 pt-20 pb-10 text-center md:text-left">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold text-white tracking-widest">SWISS</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Crafting eternity, one second at a time. Experience the pinnacle of Swiss horology.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-gold-400 font-bold uppercase tracking-widest mb-6 text-xs">Collections</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">Royal Chrono</li>
              <li className="hover:text-white cursor-pointer transition-colors">Abyss Diver</li>
              <li className="hover:text-white cursor-pointer transition-colors">Velocita</li>
              <li className="hover:text-white cursor-pointer transition-colors">Limited Editions</li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold-400 font-bold uppercase tracking-widest mb-6 text-xs">Support</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">Customer Care</li>
              <li className="hover:text-white cursor-pointer transition-colors">Warranty</li>
              <li className="hover:text-white cursor-pointer transition-colors">Store Locator</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-gold-400 font-bold uppercase tracking-widest mb-6 text-xs">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold-400 hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold-400 hover:text-black transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold-400 hover:text-black transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} SWISS Watch Co. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
