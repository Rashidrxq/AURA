import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

interface HomeOfficeCollectionProps {
  onNavigate: () => void;
}

const HomeOfficeCollection: React.FC<HomeOfficeCollectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 md:py-28 bg-beige overflow-x-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <AnimateOnScroll initialClass="opacity-0 -translate-x-10" finalClass="opacity-100 translate-x-0">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-matte-black leading-tight">
                The Home Office Collection
              </h2>
              <p className="font-poppins text-lg text-taupe mt-4 max-w-md mx-auto lg:mx-0">
                Elevate your productivity with our collection of home office essentials. Designed for focus, comfort, and style, creating an environment where your best work can flourish.
              </p>
              <button 
                onClick={onNavigate}
                className="mt-8 bg-gold-accent text-white font-poppins uppercase tracking-widest text-sm font-semibold px-10 py-4 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg">
                Shop Office
              </button>
            </div>
          </AnimateOnScroll>

          {/* Image Collage */}
          <AnimateOnScroll initialClass="opacity-0 translate-x-10" finalClass="opacity-100 translate-x-0" delay={200}>
            <div className="relative h-[500px] w-full">
                <img 
                    src="https://i.pinimg.com/736x/2b/c2/70/2bc2705b637d7f9e31a19f291e0a2472.jpg" 
                    alt="A modern, minimalist home office with a sleek wooden desk and ergonomic chair."
                    className="absolute top-0 right-0 w-[80%] h-[80%] object-cover rounded-lg shadow-2xl"
                />
                <img 
                    src="https://i.pinimg.com/736x/8e/de/3f/8ede3f3a8b410f93c126563a03d63b2f.jpg"
                    alt="A stylish white office chair with gold accents."
                    className="absolute bottom-0 left-0 w-[55%] h-[55%] object-cover rounded-lg shadow-2xl border-8 border-beige"
                />
                 <img 
                    src="https://i.pinimg.com/736x/5b/44/2c/5b442c3b0646c1f10cf2b291b7d50d75.jpg"
                    alt="A close-up of a well-organized bookshelf with minimalist decor."
                    className="absolute top-[15%] left-[10%] w-[40%] h-[40%] object-cover rounded-lg shadow-2xl border-4 border-beige transform rotate-3"
                />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default HomeOfficeCollection;