import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const LightingCollection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-ivory overflow-x-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Collage */}
          <AnimateOnScroll initialClass="opacity-0 -translate-x-10" finalClass="opacity-100 translate-x-0" delay={200}>
            <div className="relative h-[500px] w-full">
                <img 
                    src="https://i.pinimg.com/736x/f4/19/22/f4192299a0e6704b2b2361245a4a08e0.jpg" 
                    alt="A modern dining room illuminated by a stunning, large chandelier."
                    className="absolute top-0 left-0 w-[80%] h-[80%] object-cover rounded-lg shadow-2xl"
                />
                <img 
                    src="https://i.pinimg.com/736x/8e/71/3b/8e713b6329e7949397e5552391605333.jpg"
                    alt="An elegant, modern table lamp with a soft glow on a side table."
                    className="absolute bottom-0 right-0 w-[55%] h-[55%] object-cover rounded-lg shadow-2xl border-8 border-ivory"
                />
                 <img 
                    src="https://i.pinimg.com/736x/a0/0b/c8/a00bc851167b2d5f7b827727ac40f4e2.jpg"
                    alt="A sleek, minimalist floor lamp standing in the corner of a room."
                    className="absolute top-[15%] right-[10%] w-[40%] h-[40%] object-cover rounded-lg shadow-2xl border-4 border-ivory transform -rotate-3"
                />
            </div>
          </AnimateOnScroll>

          {/* Text Content */}
          <AnimateOnScroll initialClass="opacity-0 translate-x-10" finalClass="opacity-100 translate-x-0">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-matte-black leading-tight">
                The Lighting Collection
              </h2>
              <p className="font-poppins text-lg text-taupe mt-4 max-w-md mx-auto lg:mx-0">
                Illuminate your world with our collection of designer lighting. From statement chandeliers to subtle ambient lamps, each piece is crafted to create a warm, inviting, and sophisticated atmosphere.
              </p>
              <button className="mt-8 bg-gold-accent text-white font-poppins uppercase tracking-widest text-sm font-semibold px-10 py-4 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg">
                Shop Lighting
              </button>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default LightingCollection;