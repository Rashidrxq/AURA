import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const MirrorsCollection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-beige overflow-x-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <AnimateOnScroll initialClass="opacity-0 -translate-x-10" finalClass="opacity-100 translate-x-0">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-matte-black leading-tight">
                The Reflections Collection
              </h2>
              <p className="font-poppins text-lg text-taupe mt-4 max-w-md mx-auto lg:mx-0">
                Discover mirrors that do more than reflect. They transform spaces, 
                create illusions of depth, and capture light with artistic elegance.
              </p>
              <button className="mt-8 bg-gold-accent text-white font-poppins uppercase tracking-widest text-sm font-semibold px-10 py-4 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg">
                Explore Mirrors
              </button>
            </div>
          </AnimateOnScroll>

          {/* Image */}
          <AnimateOnScroll initialClass="opacity-0 translate-x-10" finalClass="opacity-100 translate-x-0" delay={200}>
            <div>
              <img 
                src="https://i.pinimg.com/736x/61/25/24/612524496477a8b1d90fa1bc7570d211.jpg" 
                alt="An elegant, large arched mirror leaning against a wall in a beautifully styled room."
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default MirrorsCollection;