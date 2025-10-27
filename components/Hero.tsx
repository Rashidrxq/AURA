
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://i.pinimg.com/736x/f9/c8/df/f9c8df7533d0125f26d51798abd29e5c.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 text-center text-ivory p-4">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-4 leading-tight">
          Timeless Design for Modern Living
        </h1>
        <p className="font-poppins text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light">
          Discover our curated collection of luxury furniture, crafted with passion and precision to elevate your space.
        </p>
        <button className="bg-gold-accent text-white font-poppins uppercase tracking-widest text-sm font-semibold px-10 py-4 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
