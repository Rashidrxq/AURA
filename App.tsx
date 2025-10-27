import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import MirrorsCollection from './components/MirrorsCollection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  return (
    <div className="bg-beige text-taupe font-poppins">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <ProductGrid />
        <MirrorsCollection />
      </main>
      <Footer />
    </div>
  );
};

export default App;