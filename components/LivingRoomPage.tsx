import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface LivingRoomPageProps {
  products: Product[];
  onProductSelect: (product: Product) => void;
}

const LivingRoomPage: React.FC<LivingRoomPageProps> = ({ products, onProductSelect }) => {
  
  const productCategories = [
    'Sofas',
    'Coffee Tables',
    'Accent Chairs',
    'Bookshelves & Consoles'
  ];

  return (
    <>
      <section 
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://i.pinimg.com/564x/b8/6f/a0/b86fa04effa09d36b815b3c3c126622b.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-ivory p-4">
          <AnimateOnScroll initialClass="opacity-0 translate-y-5" finalClass="opacity-100 translate-y-0">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-4 leading-tight">
              Living Room Collection
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll initialClass="opacity-0 translate-y-5" finalClass="opacity-100 translate-y-0" delay={200}>
            <p className="font-poppins text-lg md:text-xl max-w-2xl mx-auto font-light">
              Spaces designed for comfort, connection, and timeless appeal.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {productCategories.map(category => (
        <section key={category} className="py-16 md:py-20 bg-beige">
          <div className="container mx-auto px-6">
            <AnimateOnScroll initialClass="opacity-0 translate-y-5" finalClass="opacity-100 translate-y-0">
              <div className="text-left mb-12">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-matte-black">{category}</h2>
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
              {products.filter(p => p.subCategory === category).map((product, index) => (
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
      ))}
    </>
  );
};

export default LivingRoomPage;
