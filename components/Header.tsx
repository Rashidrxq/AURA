import React, { useState, useEffect } from 'react';
import { SearchIcon, UserIcon, ShoppingBagIcon } from './Icon';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navLinks = ['Home', 'Shop', 'About', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClasses = `
    ${isScrolled
      ? 'fixed bg-beige/95 backdrop-blur-sm shadow-lg text-matte-black'
      : 'absolute bg-transparent text-ivory'
    }
    top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out
  `;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Left Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.slice(0, 2).map(link => (
              <a key={link} href="#" className="text-sm tracking-wider uppercase font-poppins hover:text-gold-accent transition-colors duration-300">{link}</a>
            ))}
          </nav>

          {/* Centered Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <a href="#" className="font-playfair text-3xl font-bold tracking-widest">AURA</a>
          </div>

          {/* Right Navigation & Icons */}
          <div className="flex items-center justify-end">
             <nav className="hidden md:flex items-center space-x-8">
              {navLinks.slice(2, 4).map(link => (
                <a key={link} href="#" className="text-sm tracking-wider uppercase font-poppins hover:text-gold-accent transition-colors duration-300">{link}</a>
              ))}
            </nav>
            <div className="flex items-center space-x-6 ml-8">
                <button aria-label="Search" className="hover:text-gold-accent transition-colors duration-300"><SearchIcon className="h-5 w-5"/></button>
                <button aria-label="User profile" className="hover:text-gold-accent transition-colors duration-300"><UserIcon className="h-5 w-5"/></button>
                <button aria-label="Shopping bag" className="hover:text-gold-accent transition-colors duration-300"><ShoppingBagIcon className="h-5 w-5"/></button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
