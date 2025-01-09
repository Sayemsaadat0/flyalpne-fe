'use client';

import { Heart, Plus, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { products } from './dummyData';

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1   lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="group relative  bg-white p-6 rounded-lg transition-all duration-300 hover:bg-[#227989]"
        >
          {product.discount && (
            <span className="absolute z-20 top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
              -{product.discount}%
            </span>
          )}
          <div className="relative aspect-square mb-4 z-0">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="space-y-2">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              {product.category && <p className="text-white text-sm mb-4">{product.category}</p>}
              <div className="flex items-center gap-4">
                <button className="h-8 px-4 flex-1 flex justify-center items-center rounded-full font-bold gap-2 shadow-lg text-gray-600 bg-white  hover:bg-white/90">
                  <ShoppingCart />
                  Buy
                </button>

                <button className=" bg-[rgba(255,255,255,0.21)] h-8 w-8 rounded-full flex justify-center items-center  hover:bg-white/90">
                  <Heart className="w-4 h-4" />
                </button>

                <button className=" bg-[rgba(255,255,255,0.21)] h-8 w-8 rounded-full flex justify-center items-center  hover:bg-white/90">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
            <h3 className="font-medium group-hover:text-white">{product.name}</h3>
            <p className="text-blue-600 group-hover:text-white">$ {product.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
