import React, { useState, useEffect } from 'react';
import { SearchIcon, UserIcon, ShoppingBagIcon } from './Icon';

interface HeaderProps {
    onNavigate: (page: 'home' | 'dining' | 'bedroom' | 'living' | 'office') => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isShopDropdownOpen, setShopDropdownOpen] = useState(false);
  const navLinks = ['Home', 'About', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (page: 'home' | 'dining' | 'bedroom' | 'living' | 'office') => {
    onNavigate(page);
    setShopDropdownOpen(false); // Close dropdown on navigation
  };
  
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
            <button onClick={() => handleNavigation('home')} className="text-sm tracking-wider uppercase font-poppins hover:text-gold-accent transition-colors duration-300">Home</button>
            <div 
                className="relative -my-4 py-4"
                onMouseEnter={() => setShopDropdownOpen(true)}
                onMouseLeave={() => setShopDropdownOpen(false)}
            >
                <button className="text-sm tracking-wider uppercase font-poppins hover:text-gold-accent transition-colors duration-300 flex items-center">
                    Shop
                    <svg className={`w-4 h-4 ml-1 transition-transform duration-300 ${isShopDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div 
                    className={`
                        absolute top-full left-0 mt-2 w-48 bg-beige shadow-lg rounded-md py-2
                        transition-all duration-300 ease-in-out
                        ${isShopDropdownOpen 
                            ? 'opacity-100 translate-y-0 visible' 
                            : 'opacity-0 -translate-y-2 invisible'
                        }
                    `}
                >
                    <button onClick={() => handleNavigation('living')} className="block w-full text-left px-4 py-2 text-sm text-matte-black hover:bg-gold-accent hover:text-white transition-colors duration-200">Living Room</button>
                    <button onClick={() => handleNavigation('dining')} className="block w-full text-left px-4 py-2 text-sm text-matte-black hover:bg-gold-accent hover:text-white transition-colors duration-200">Dining Room</button>
                    <button onClick={() => handleNavigation('bedroom')} className="block w-full text-left px-4 py-2 text-sm text-matte-black hover:bg-gold-accent hover:text-white transition-colors duration-200">Bedroom</button>
                    <button onClick={() => handleNavigation('office')} className="block w-full text-left px-4 py-2 text-sm text-matte-black hover:bg-gold-accent hover:text-white transition-colors duration-200">Office</button>
                </div>
            </div>
          </nav>

          {/* Centered Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <button onClick={() => handleNavigation('home')} className="font-playfair text-3xl font-bold tracking-widest">AURA</button>
          </div>

          {/* Right Navigation & Icons */}
          <div className="flex items-center justify-end">
             <nav className="hidden md:flex items-center space-x-8">
              {navLinks.slice(1).map(link => (
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