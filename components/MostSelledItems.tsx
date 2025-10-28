import React from 'react';
import type { Product } from '../types';
import AnimateOnScroll from './AnimateOnScroll';

interface MostSelledItemsProps {
  products: Product[];
  onProductSelect: (product: Product) => void;
}

const MostSelledItems: React.FC<MostSelledItemsProps> = ({ products, onProductSelect }) => {
  // Split products for two rows
  const midIndex = Math.ceil(products.length / 2);
  const row1Products = products.slice(0, midIndex);
  const row2Products = products.slice(midIndex);

  const ProductCarousel = ({ items, reverse = false }: { items: Product[], reverse?: boolean }) => (
    <div className="flex w-max">
      <div className={`flex ${reverse ? 'animate-infinite-scroll-reverse' : 'animate-infinite-scroll'} pause-animation`}>
        {[...items, ...items].map((product, index) => (
          <div key={`${product.id}-${index}`} className="w-64 flex-shrink-0 mx-4" onClick={() => onProductSelect(product)}>
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-xl transition-shadow duration-300">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-base font-playfair text-matte-black truncate">{product.name}</h3>
                <p className="mt-1 text-sm font-semibold text-taupe">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="container mx-auto px-6">
        <AnimateOnScroll initialClass="opacity-0 translate-y-5" finalClass="opacity-100 translate-y-0">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-matte-black">Most-Loved Pieces</h2>
            <p className="text-lg text-taupe mt-2">Discover the items our customers love the most.</p>
          </div>
        </AnimateOnScroll>
      </div>
      <div className="group w-full overflow-hidden relative" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
        <div className="mb-8">
            <ProductCarousel items={row1Products} />
        </div>
        <div>
            <ProductCarousel items={row2Products} reverse />
        </div>
      </div>
    </section>
  );
};

export default MostSelledItems;