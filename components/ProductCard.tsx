
import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden rounded-lg bg-gray-200">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-xl font-playfair text-matte-black">{product.name}</h3>
        <p className="mt-1 text-sm text-taupe/80">{product.category}</p>
        <p className="mt-2 text-md font-semibold text-matte-black">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
