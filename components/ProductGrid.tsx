import React from 'react';
import ProductCard from './ProductCard';
import type { Product } from '../types';

const products: Product[] = [
  {
    id: 1,
    name: 'Verona Italian Sofa',
    category: 'Sofas',
    price: '$4,200',
    imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Artisan Marble Table',
    category: 'Coffee Tables',
    price: '$1,850',
    imageUrl: 'https://i.pinimg.com/736x/02/0e/15/020e151474299e267ad1468408b5c6ed.jpg',
  },
  {
    id: 3,
    name: 'Aura Pendant Lamp',
    category: 'Lighting',
    price: '$780',
    imageUrl: 'https://i.pinimg.com/736x/df/55/c1/df55c1b291781e011eb2fdc516219e0c.jpg',
  },
  {
    id: 4,
    name: 'Abstract Canvas No. 3',
    category: 'Wall Art',
    price: '$1,200',
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1945&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Eames Lounge Chair',
    category: 'Chairs',
    price: '$5,995',
    imageUrl: 'https://images.unsplash.com/photo-1506898667547-42e22a46e125?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Serene Sculpted Vase',
    category: 'Decor',
    price: '$320',
    imageUrl: 'https://i.pinimg.com/736x/dd/c9/d5/ddc9d5c082e37d36f18ec485364b7324.jpg',
  },
];

const ProductGrid: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-matte-black">Featured Collection</h2>
          <p className="text-lg text-taupe mt-2">Handpicked pieces for the discerning eye.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;