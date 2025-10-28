import React from 'react';
import type { Product } from '../types';
import AnimateOnScroll from './AnimateOnScroll';

interface ProductCardProps {
  product: Product;
  onProductSelect: (product: Product) => void;
  animationIndex: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onProductSelect, animationIndex }) => {
  return (
    <AnimateOnScroll
      initialClass="opacity-0 translate-y-5"
      finalClass="opacity-100 translate-y-0"
      delay={animationIndex * 100}
      threshold={0.1}
    >
      <div className="group cursor-pointer" onClick={() => onProductSelect(product)}>
        <div className="overflow-hidden rounded-lg bg-gray-200">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>
        <div className="mt-2 text-center px-2">
          <h3 className="text-base font-playfair text-matte-black truncate">{product.name}</h3>
          <p className="mt-1 text-xs text-taupe/80 uppercase tracking-wider">{product.subCategory || product.category}</p>
          <p className="mt-1 text-sm font-semibold text-matte-black">{product.price}</p>
        </div>
      </div>
    </AnimateOnScroll>
  );
};

export default ProductCard;