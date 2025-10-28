import React from 'react';
import ProductCard from './ProductCard';
import type { Product } from '../types';
import AnimateOnScroll from './AnimateOnScroll';

interface ProductGridProps {
  products: Product[];
  onProductSelect: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onProductSelect }) => {
  return (
    <section className="py-20 md:py-28 bg-beige">
      <div className="container mx-auto px-6">
        <AnimateOnScroll initialClass="opacity-0 translate-y-5" finalClass="opacity-100 translate-y-0">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-matte-black">Featured Collection</h2>
            <p className="text-lg text-taupe mt-2">Handpicked pieces for the discerning eye.</p>
          </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {products.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onProductSelect={onProductSelect} 
              animationIndex={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;