import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

interface DiningCollectionProps {
  onNavigate: () => void;
}

const DiningCollection: React.FC<DiningCollectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 md:py-28 bg-ivory overflow-x-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Collage */}
          <AnimateOnScroll initialClass="opacity-0 -translate-x-10" finalClass="opacity-100 translate-x-0" delay={200}>
            <div className="relative h-[500px] w-full">
                <img 
                    src="https://i.pinimg.com/736x/5b/72/e1/5b72e1535b6b8a2f183204dc6312a0e4.jpg" 
                    alt="A modern, luxurious dining room with a long wooden table and stylish chairs."
                    className="absolute top-0 left-0 w-[80%] h-[80%] object-cover rounded-lg shadow-2xl"
                />
                <img 
                    src="https://i.pinimg.com/736x/e1/01/f4/e101f435c2b0d8a1c7a828812f71f11c.jpg"
                    alt="Close up of elegant dining chairs with woven details."
                    className="absolute bottom-0 right-0 w-[55%] h-[55%] object-cover rounded-lg shadow-2xl border-8 border-ivory"
                />
                 <img 
                    src="https://i.pinimg.com/736x/a2/a4/0f/a2a40f252f4c2f6d8955b2521c7d3d19.jpg"
                    alt="Sleek modern bar stools at a kitchen island."
                    className="absolute top-[15%] right-[10%] w-[40%] h-[40%] object-cover rounded-lg shadow-2xl border-4 border-ivory transform -rotate-3"
                />
            </div>
          </AnimateOnScroll>

          {/* Text Content */}
          <AnimateOnScroll initialClass="opacity-0 translate-x-10" finalClass="opacity-100 translate-x-0">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-matte-black leading-tight">
                The Dining Collection
              </h2>
              <p className="font-poppins text-lg text-taupe mt-4 max-w-md mx-auto lg:mx-0">
                Gather in style. Our dining collection is crafted to be the heart of your home, where memories are made and conversations linger.
              </p>
              <button 
                onClick={onNavigate}
                className="mt-8 bg-gold-accent text-white font-poppins uppercase tracking-widest text-sm font-semibold px-10 py-4 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg">
                Shop Dining
              </button>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default DiningCollection;
