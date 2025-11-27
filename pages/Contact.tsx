import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-dark-900 text-white min-h-screen">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-display font-bold text-center mb-16">Contact Concierge</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
           {/* Form */}
           <div className="bg-dark-800 p-8 md:p-12 rounded-sm border border-white/5">
              <h3 className="text-2xl font-display mb-8">Send a Message</h3>
              <form className="space-y-6">
                 <div className="grid grid-cols-2 gap-6">
                    <div>
                       <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">First Name</label>
                       <input type="text" className="w-full bg-dark-900 border border-white/10 p-4 text-white focus:border-gold-400 focus:outline-none transition-colors" />
                    </div>
                    <div>
                       <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
                       <input type="text" className="w-full bg-dark-900 border border-white/10 p-4 text-white focus:border-gold-400 focus:outline-none transition-colors" />
                    </div>
                 </div>
                 <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                    <input type="email" className="w-full bg-dark-900 border border-white/10 p-4 text-white focus:border-gold-400 focus:outline-none transition-colors" />
                 </div>
                 <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
                    <textarea rows={5} className="w-full bg-dark-900 border border-white/10 p-4 text-white focus:border-gold-400 focus:outline-none transition-colors"></textarea>
                 </div>
                 <button className="w-full bg-gold-400 text-black font-bold uppercase tracking-widest py-4 hover:bg-white transition-colors">
                    Send Inquiry
                 </button>
              </form>
           </div>

           {/* Info */}
           <div className="flex flex-col justify-center space-y-12">
              <div>
                 <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-white/5 rounded-full text-gold-400"><MapPin /></div>
                    <h4 className="text-xl font-display font-bold">Flagship Boutique</h4>
                 </div>
                 <p className="text-gray-400 pl-16">
                    12 Place de la Fusterie<br/>
                    1204 Geneva, Switzerland
                 </p>
              </div>

              <div>
                 <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-white/5 rounded-full text-gold-400"><Phone /></div>
                    <h4 className="text-xl font-display font-bold">Phone Support</h4>
                 </div>
                 <p className="text-gray-400 pl-16">
                    +41 22 555 0199<br/>
                    Mon-Fri, 9am - 6pm CET
                 </p>
              </div>

              <div>
                 <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-white/5 rounded-full text-gold-400"><Mail /></div>
                    <h4 className="text-xl font-display font-bold">Email</h4>
                 </div>
                 <p className="text-gray-400 pl-16">
                    concierge@swiss-watches.com
                 </p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
