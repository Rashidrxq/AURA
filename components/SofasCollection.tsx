import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

interface SofasCollectionProps {
  onNavigate: () => void;
}

const SofasCollection: React.FC<SofasCollectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 md:py-28 bg-ivory overflow-x-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Collage */}
          <AnimateOnScroll initialClass="opacity-0 -translate-x-10" finalClass="opacity-100 translate-x-0" delay={200}>
            <div className="relative h-[500px] w-full">
                <img 
                    src="https://i.pinimg.com/736x/b2/41/1f/b2411f278a85ecc8b18592f07cbd42db.jpg" 
                    alt="A modern minimalist living room with a comfortable beige sofa."
                    className="absolute top-0 left-0 w-[80%] h-[80%] object-cover rounded-lg shadow-2xl"
                />
                <img 
                    src="https://i.pinimg.com/736x/a5/bb/b9/a5bbb979f0086ec4967acfb94467951c.jpg"
                    alt="Close up of a textured white boucle sofa."
                    className="absolute bottom-0 right-0 w-[55%] h-[55%] object-cover rounded-lg shadow-2xl border-8 border-ivory"
                />
                 <img 
                    src="https://i.pinimg.com/736x/69/f9/e9/69f9e96084aed50bfd1ad0b1cdaef056.jpg"
                    alt="An elegant curved sofa in a high-ceiling room."
                    className="absolute top-[15%] right-[10%] w-[40%] h-[40%] object-cover rounded-lg shadow-2xl border-4 border-ivory transform -rotate-3"
                />
            </div>
          </AnimateOnScroll>

          {/* Text Content */}
          <AnimateOnScroll initialClass="opacity-0 translate-x-10" finalClass="opacity-100 translate-x-0">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-matte-black leading-tight">
                The Sofa Collection
              </h2>
              <p className="font-poppins text-lg text-taupe mt-4 max-w-md mx-auto lg:mx-0">
                Center your living space with our collection of exceptional sofas. Designed for comfort, built to last, and styled for timeless appeal.
              </p>
              <button 
                onClick={onNavigate}
                className="mt-8 bg-gold-accent text-white font-poppins uppercase tracking-widest text-sm font-semibold px-10 py-4 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg">
                Shop All Sofas
              </button>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default SofasCollection;
