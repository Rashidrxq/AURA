import React from 'react';
import { FacebookIcon, InstagramIcon, ChatIcon } from './Icon';

interface FooterProps {
  onChatToggle: () => void;
}

const Footer: React.FC<FooterProps> = ({ onChatToggle }) => {
  return (
    <footer 
      className="relative bg-cover bg-center font-poppins text-beige"
      style={{ backgroundImage: "url('https://i.pinimg.com/736x/e8/95/19/e89519fea9a8e9acc46b616347afc4ac.jpg')" }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-matte-black/60 backdrop-blur-sm"></div>

      <div className="relative container mx-auto px-6 py-20 z-10">
        {/* Top section with newsletter */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-ivory">Join The AURA World</h2>
          <p className="mt-4 text-beige/80">
            Be the first to know about new arrivals, exclusive offers, and design inspiration.
          </p>
          <div className="flex mt-8 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              aria-label="Email address"
              className="bg-transparent text-ivory placeholder-beige/50 px-5 py-3 w-full border border-taupe/60 focus:outline-none focus:ring-2 focus:ring-gold-accent transition-all duration-300" 
            />
            <button 
              aria-label="Subscribe to newsletter"
              className="bg-gold-accent text-matte-black px-8 py-3 font-semibold uppercase tracking-wider text-sm hover:bg-opacity-90 transition-colors duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Links section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
             <a href="#" className="font-playfair text-2xl font-bold tracking-widest text-ivory">AURA</a>
             <p className="mt-4 text-sm text-beige/70 leading-relaxed">
              Crafting timeless spaces with furniture designed for modern living.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold tracking-wider text-ivory uppercase">Shop</h3>
            <nav className="mt-4 space-y-3 text-sm">
              <a href="#" className="block text-beige/70 hover:text-gold-accent transition-colors duration-300">Sofas</a>
              <a href="#" className="block text-beige/70 hover:text-gold-accent transition-colors duration-300">Tables</a>
              <a href="#" className="block text-beige/70 hover:text-gold-accent transition-colors duration-300">Bedroom</a>
              <a href="#" className="block text-beige/70 hover:text-gold-accent transition-colors duration-300">Lighting</a>
            </nav>
          </div>
          <div>
            <h3 className="font-semibold tracking-wider text-ivory uppercase">Company</h3>
            <nav className="mt-4 space-y-3 text-sm">
              <a href="#" className="block text-beige/70 hover:text-gold-accent transition-colors duration-300">About Us</a>
              <a href="#" className="block text-beige/70 hover:text-gold-accent transition-colors duration-300">Journal</a>
              <a href="#" className="block text-beige/70 hover:text-gold-accent transition-colors duration-300">Contact</a>
               <a href="#" className="block text-beige/70 hover:text-gold-accent transition-colors duration-300">FAQs</a>
            </nav>
          </div>
           <div>
            <h3 className="font-semibold tracking-wider text-ivory uppercase">Support</h3>
            <nav className="mt-4 space-y-3 text-sm">
              <a href="#" className="block text-beige/70 hover:text-gold-accent transition-colors duration-300">Shipping & Returns</a>
              <a href="#" className="block text-beige/70 hover:text-gold-accent transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="block text-beige/70 hover:text-gold-accent transition-colors duration-300">Terms of Service</a>
            </nav>
          </div>
        </div>

        {/* Bottom section with copyright and socials */}
        <div className="mt-16 pt-8 border-t border-taupe/30 flex flex-col md:flex-row justify-between items-center text-center">
          <p className="text-sm text-beige/60 mb-4 md:mb-0">&copy; {new Date().getFullYear()} AURA Interiors. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
             <button 
                onClick={onChatToggle} 
                className="w-12 h-12 flex items-center justify-center rounded-full bg-taupe/40 border border-taupe/60 text-beige/80 hover:bg-gold-accent hover:text-matte-black hover:border-gold-accent transition-all duration-300"
                aria-label="Open chat assistant"
              >
                <ChatIcon className="w-6 h-6" />
              </button>
            <div className="flex space-x-4">
                <a href="#" aria-label="Facebook" className="w-10 h-10 flex items-center justify-center rounded-full bg-taupe/20 border border-taupe/40 text-beige/80 hover:bg-gold-accent hover:text-matte-black hover:border-gold-accent transition-all duration-300">
                    <FacebookIcon className="h-5 w-5" />
                </a>
                <a href="#" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center rounded-full bg-taupe/20 border border-taupe/40 text-beige/80 hover:bg-gold-accent hover:text-matte-black hover:border-gold-accent transition-all duration-300">
                    <InstagramIcon className="h-5 w-5" />
                </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
