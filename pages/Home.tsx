import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float, ContactShadows, PresentationControls } from '@react-three/drei';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Shield, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import ProceduralWatch from '../components/3d/ProceduralWatch';
import { PRODUCTS } from '../constants';

// Fix for missing JSX types in the current environment
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      spotLight: any;
    }
  }
}

const FeatureCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors rounded-xl text-center md:text-left group">
    <div className="inline-block p-4 rounded-full bg-gold-400/10 mb-6 group-hover:scale-110 transition-transform">
      <Icon className="w-8 h-8 text-gold-400" />
    </div>
    <h3 className="text-xl font-display font-bold text-white mb-2">{title}</h3>
    <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
  </div>
);

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative h-screen w-full bg-dark-900 overflow-hidden flex flex-col lg:flex-row">
        {/* Text Content */}
        <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-20 pt-24 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold-400 tracking-[0.3em] text-xs font-bold uppercase mb-4 block">
              Swiss Engineering
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight mb-6">
              Time That <br /> Defines <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">Excellence</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-md mb-10 font-light">
              Experience the fusion of tradition and innovation. The SWISS collection represents the pinnacle of luxury horology.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/shop"
                className="bg-gold-400 text-black px-10 py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 rounded-sm"
              >
                Shop Now
              </Link>
              <Link
                to="/about"
                className="border border-white/20 text-white px-10 py-4 font-bold uppercase tracking-widest hover:border-gold-400 hover:text-gold-400 transition-all duration-300 rounded-sm"
              >
                Discover
              </Link>
            </div>
          </motion.div>
        </div>

        {/* 3D Canvas */}
        <div className="absolute inset-0 lg:relative lg:w-1/2 h-[50vh] lg:h-full z-0 lg:z-10 opacity-60 lg:opacity-100 pointer-events-none lg:pointer-events-auto">
             <div className="w-full h-full cursor-grab active:cursor-grabbing">
                <Canvas shadows camera={{ position: [0, 0, 10], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                    <Environment preset="city" />
                    <Suspense fallback={null}>
                        <PresentationControls
                            global
                            zoom={0.8}
                            rotation={[0, -Math.PI / 4, 0]}
                            polar={[-Math.PI / 4, Math.PI / 4]}
                            azimuth={[-Math.PI / 4, Math.PI / 4]}
                        >
                            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                                <ProceduralWatch 
                                    scale={1.2} 
                                    colors={{ case: '#FFD700', dial: '#000000', strap: '#1a1a1a' }}
                                />
                            </Float>
                        </PresentationControls>
                        <ContactShadows position={[0, -4, 0]} opacity={0.4} scale={20} blur={2.5} far={4.5} />
                    </Suspense>
                </Canvas>
             </div>
        </div>
        
        {/* Gradient Overlay for Mobile readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent lg:hidden pointer-events-none" />
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-dark-800">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
                icon={Clock} 
                title="Swiss Movement" 
                desc="Powered by our proprietary automatic calibers, ensuring precision within -2/+2 seconds per day." 
            />
            <FeatureCard 
                icon={Shield} 
                title="Lifetime Warranty" 
                desc="Every SWISS timepiece is covered by an international warranty honoring our commitment to quality." 
            />
            <FeatureCard 
                icon={Activity} 
                title="Sapphire Crystal" 
                desc="Scratch-resistant domed sapphire crystal with double-sided anti-reflective coating." 
            />
        </div>
      </section>

      {/* COLLECTION HIGHLIGHT */}
      <section className="py-32 bg-dark-900 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
               <span className="text-gold-400 font-bold uppercase tracking-widest text-xs mb-2 block">Our Masterpieces</span>
               <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Featured Collection</h2>
            </div>
            <Link to="/shop" className="group flex items-center text-gray-400 hover:text-gold-400 mt-6 md:mt-0 transition-colors">
                <span className="uppercase tracking-widest text-sm font-medium mr-2">View All Watches</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {PRODUCTS.map((product) => (
                 <Link to={`/product/${product.id}`} key={product.id} className="group relative block">
                    <div className="aspect-[3/4] bg-dark-800 relative overflow-hidden rounded-sm">
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                             <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                                <span className="text-white text-xs uppercase tracking-widest font-bold">View 3D Model</span>
                             </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-xl text-white font-display font-bold mb-1 group-hover:text-gold-400 transition-colors">{product.name}</h3>
                        <p className="text-gray-500 text-sm mb-3">{product.tagline}</p>
                        <p className="text-gold-400 font-medium">${product.price.toLocaleString()}</p>
                    </div>
                 </Link>
             ))}
          </div>
        </div>
      </section>

      {/* STORY TEASER */}
      <section className="py-24 bg-dark-800 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gold-400/5 -skew-x-12 transform origin-top-right" />
         <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
                    Crafted for the <br /><span className="italic text-gold-400">Extraordinary</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-10">
                    Founded in Geneva, SWISS has been synonymous with perfection for over a century. Each timepiece is assembled by hand, undergoing rigorous testing to ensure it meets our exacting standards. We don't just measure time; we honour it.
                </p>
                <Link to="/about" className="inline-block border-b border-gold-400 text-gold-400 pb-1 hover:text-white hover:border-white transition-all">
                    Read Our Story
                </Link>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;