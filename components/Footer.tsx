import React from 'react';
import { FacebookIcon, InstagramIcon, PinterestIcon } from './Icon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-matte-black text-beige font-poppins">
      <div className="container mx-auto px-6 py-16">
        {/* Top section with links and newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand and Newsletter */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#" className="font-playfair text-2xl font-bold tracking-widest text-ivory">AURA</a>
            <p className="mt-4 text-sm text-beige/70 leading-relaxed">
              Experience the art of living with our curated collection of timeless furniture.
            </p>
            <div className="mt-6">
              <p className="font-semibold text-ivory">Join Our World</p>
              <div className="flex mt-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  aria-label="Email address"
                  className="bg-taupe/80 text-ivory placeholder-beige/50 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gold-accent transition-all duration-300" 
                />
                <button 
                  aria-label="Subscribe to newsletter"
                  className="bg-gold-accent text-matte-black px-4 py-2 font-semibold hover:bg-opacity-90 transition-colors duration-300">
                  &rarr;
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-span-1">
            <h3 className="font-semibold tracking-wider text-ivory uppercase">Shop</h3>
            <nav className="mt-4 space-y-3 text-sm">
              <a href="#" className="block text-beige/70 hover:text-gold-accent transition-colors duration-300">New Arrivals</a>
              <a href="#" className="block text-beige/70 hover:text-gold-accent transition-colors duration-300">Sofas</a>
              <a href="#" className="block text-beige/70 hover:text-gold-accent transition-colors duration-300">Tables</a>
              <a href="#" className="block text-beige/70 hover:text-gold-accent transition-colors duration-300">Lighting</a>
            </nav>
          </div>
          <div className="col-span-1">
            <h3 className="font-semibold tracking-wider text-ivory uppercase">Company</h3>
            <nav className="mt-4 space-y-3 text-sm">
              <a href="#" className="block text-beige/70 hover:text-gold-accent transition-colors duration-300">About Us</a>
              <a href="#" className="block text-beige/70 hover:text-gold-accent transition-colors duration-300">Journal</a>
              <a href="#" className="block text-beige/70 hover:text-gold-accent transition-colors duration-300">Contact</a>
            </nav>
          </div>
          <div className="col-span-1">
            <h3 className="font-semibold tracking-wider text-ivory uppercase">Support</h3>
            <nav className="mt-4 space-y-3 text-sm">
              <a href="#" className="block text-beige/70 hover:text-gold-accent transition-colors duration-300">FAQs</a>
              <a href="#" className="block text-beige/70 hover:text-gold-accent transition-colors duration-300">Shipping & Returns</a>
              <a href="#" className="block text-beige/70 hover:text-gold-accent transition-colors duration-300">Privacy Policy</a>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-10 border-taupe/50" />

        {/* Bottom section with copyright and socials */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center">
          <p className="text-sm text-taupe/80 mb-4 md:mb-0">&copy; {new Date().getFullYear()} AURA Interiors. All Rights Reserved.</p>
          <div className="flex space-x-5 text-beige">
            <a href="#" className="hover:text-gold-accent transition-colors duration-300" aria-label="Facebook"><FacebookIcon className="h-5 w-5" /></a>
            <a href="#" className="hover:text-gold-accent transition-colors duration-300" aria-label="Instagram"><InstagramIcon className="h-5 w-5" /></a>
            <a href="#" className="hover:text-gold-accent transition-colors duration-300" aria-label="Pinterest"><PinterestIcon className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
