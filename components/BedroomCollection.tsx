import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

interface BedroomCollectionProps {
  onNavigate: () => void;
}

const BedroomCollection: React.FC<BedroomCollectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 md:py-28 bg-beige overflow-x-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <AnimateOnScroll initialClass="opacity-0 -translate-x-10" finalClass="opacity-100 translate-x-0">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-matte-black leading-tight">
                The Bedroom Collection
              </h2>
              <p className="font-poppins text-lg text-taupe mt-4 max-w-md mx-auto lg:mx-0">
                Create your personal sanctuary. Our bedroom collection combines serene aesthetics with unparalleled comfort for a space that is both restful and refined.
              </p>
              <button 
                onClick={onNavigate}
                className="mt-8 bg-gold-accent text-white font-poppins uppercase tracking-widest text-sm font-semibold px-10 py-4 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg">
                Shop Bedroom
              </button>
            </div>
          </AnimateOnScroll>

          {/* Image Collage */}
          <AnimateOnScroll initialClass="opacity-0 translate-x-10" finalClass="opacity-100 translate-x-0" delay={200}>
            <div className="relative h-[500px] w-full">
                <img 
                    src="https://i.pinimg.com/736x/2f/36/53/2f36538b37f40004a43f822837a4a25c.jpg" 
                    alt="A modern, serene bedroom with a low-profile bed, wooden accents, and soft, natural light."
                    className="absolute top-0 right-0 w-[80%] h-[80%] object-cover rounded-lg shadow-2xl"
                />
                <img 
                    src="https://i.pinimg.com/736x/8f/a0/0b/8fa00b3c7e11a681d115e8071f1b0a5e.jpg"
                    alt="A sleek wooden dresser with minimalist decor."
                    className="absolute bottom-0 left-0 w-[55%] h-[55%] object-cover rounded-lg shadow-2xl border-8 border-beige"
                />
                 <img 
                    src="https://i.pinimg.com/736x/d1/29/73/d12973b7e71f30741c2b0c1be7c95e92.jpg"
                    alt="A close-up of a modern nightstand with a stylish lamp."
                    className="absolute top-[15%] left-[10%] w-[40%] h-[40%] object-cover rounded-lg shadow-2xl border-4 border-beige transform rotate-3"
                />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default BedroomCollection;