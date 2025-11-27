import React, { Suspense, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Stage, OrbitControls } from '@react-three/drei';
import { Star, Shield, Truck, RefreshCw, Plus, Minus } from 'lucide-react';
import { PRODUCTS } from '../constants';
import ProceduralWatch from '../components/3d/ProceduralWatch';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState(PRODUCTS[0]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const found = PRODUCTS.find(p => p.id === id);
    if (found) setProduct(found);
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="pt-24 min-h-screen bg-dark-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* 3D Viewport - Sticky on Desktop */}
          <div className="w-full lg:w-3/5 h-[50vh] lg:h-[80vh] bg-dark-800 rounded-sm relative overflow-hidden lg:sticky lg:top-24">
            <div className="absolute top-6 left-6 z-10 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                 <span className="flex items-center text-xs font-bold uppercase tracking-widest text-gold-400">
                    <RefreshCw className="w-3 h-3 mr-2" /> 360&deg; Interactive View
                 </span>
            </div>
            
            <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
               <Suspense fallback={null}>
                  <Stage environment="city" intensity={0.5} contactShadow={{ opacity: 0.4, blur: 2 }}>
                     <ProceduralWatch colors={product.colors} />
                  </Stage>
               </Suspense>
               <OrbitControls autoRotate autoRotateSpeed={0.5} makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.5} />
            </Canvas>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center">
             <div className="mb-2">
                <span className="text-gold-400 uppercase tracking-widest text-xs font-bold">New Arrival</span>
             </div>
             <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{product.name}</h1>
             <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-light">${product.price.toLocaleString()}</span>
                <div className="flex items-center text-gold-400 text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-gray-500 ml-2">(12 Reviews)</span>
                </div>
             </div>

             <p className="text-gray-400 leading-relaxed mb-8 border-b border-white/10 pb-8">
                {product.description}
             </p>

             {/* Specs Grid */}
             <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-white/5 rounded-sm">
                    <span className="block text-gray-500 text-xs uppercase mb-1">Movement</span>
                    <span className="font-display font-medium text-sm">{product.specs.movement}</span>
                </div>
                <div className="p-4 bg-white/5 rounded-sm">
                    <span className="block text-gray-500 text-xs uppercase mb-1">Case</span>
                    <span className="font-display font-medium text-sm">{product.specs.case}</span>
                </div>
                <div className="p-4 bg-white/5 rounded-sm">
                    <span className="block text-gray-500 text-xs uppercase mb-1">Water Resistance</span>
                    <span className="font-display font-medium text-sm">{product.specs.waterResistance}</span>
                </div>
                <div className="p-4 bg-white/5 rounded-sm">
                    <span className="block text-gray-500 text-xs uppercase mb-1">Strap</span>
                    <span className="font-display font-medium text-sm">{product.specs.strap}</span>
                </div>
             </div>

             {/* Actions */}
             <div className="flex space-x-4 mb-8">
                <div className="flex items-center border border-white/20 rounded-sm">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 hover:bg-white/10"><Minus className="w-4 h-4"/></button>
                    <span className="px-4 font-bold">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 hover:bg-white/10"><Plus className="w-4 h-4"/></button>
                </div>
                <button className="flex-1 bg-gold-400 text-black font-bold uppercase tracking-widest hover:bg-white transition-colors">
                    Add to Cart
                </button>
             </div>

             {/* Trust Indicators */}
             <div className="space-y-4 text-sm text-gray-400">
                <div className="flex items-center space-x-3">
                    <Truck className="w-5 h-5 text-gold-400" />
                    <span>Free insured worldwide shipping</span>
                </div>
                <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-gold-400" />
                    <span>5-Year International Warranty</span>
                </div>
             </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
