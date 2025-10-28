import React, { useState, useEffect } from 'react';
import type { Product } from '../types';
import { HeartIcon, ChevronDownIcon } from './Icon';
import AnimateOnScroll from './AnimateOnScroll';


interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border-b border-taupe/20">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center py-5 text-left"
            >
                <h3 className="text-sm uppercase tracking-widest font-semibold text-matte-black">{title}</h3>
                <ChevronDownIcon className={`w-5 h-5 text-taupe transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="pb-6 text-sm text-taupe leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
    )
}


interface ProductDetailPageProps {
  product: Product;
  onClose: () => void;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, onClose }) => {
    const [quantity, setQuantity] = useState(1);
    const [activeImage, setActiveImage] = useState(product.gallery ? product.gallery[0] : product.imageUrl);

    useEffect(() => {
        setActiveImage(product.gallery ? product.gallery[0] : product.imageUrl);
        setQuantity(1);
    }, [product]);

    const handleQuantityChange = (amount: number) => {
        setQuantity(prev => Math.max(1, prev + amount));
    };

    const mainGallery = product.gallery || [product.imageUrl];

    return (
        <div className="bg-beige text-matte-black animate-fade-in min-h-screen">
             <div className="container mx-auto px-6 pt-28 pb-20 md:pb-24">
                 <AnimateOnScroll initialClass="opacity-0" finalClass="opacity-100">
                    <button 
                        onClick={onClose} 
                        className="group flex items-center text-xs font-semibold text-taupe hover:text-gold-accent transition-colors duration-300 mb-8"
                    >
                        <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                        Back to Collection
                    </button>
                 </AnimateOnScroll>

                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column: Image Gallery */}
                    <div className="lg:sticky top-28 self-start">
                       <AnimateOnScroll initialClass="opacity-0" finalClass="opacity-100">
                           <div className="aspect-square bg-white rounded-lg shadow-sm mb-4">
                                <img 
                                    src={activeImage} 
                                    alt={`${product.name} - main view`}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                           </div>
                           {mainGallery.length > 1 && (
                            <div className="grid grid-cols-5 gap-3">
                                {mainGallery.map((img, index) => (
                                    <div 
                                        key={index}
                                        className={`aspect-square bg-white rounded-md cursor-pointer border-2 transition-all ${activeImage === img ? 'border-gold-accent' : 'border-transparent hover:border-taupe/50'}`}
                                        onClick={() => setActiveImage(img)}
                                    >
                                        <img 
                                            src={img}
                                            alt={`${product.name} - thumbnail ${index + 1}`}
                                            className="w-full h-full object-cover rounded-sm"
                                        />
                                    </div>
                                ))}
                            </div>
                           )}
                       </AnimateOnScroll>
                    </div>

                    {/* Right Column: Details */}
                    <div>
                        <AnimateOnScroll initialClass="opacity-0 translate-y-5" finalClass="opacity-100 translate-y-0" delay={100}>
                            <p className="text-xs uppercase tracking-widest text-taupe">{product.category}</p>
                            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-matte-black mt-2">{product.name}</h1>
                            <p className="font-poppins text-2xl text-gold-accent mt-4">{product.price}</p>
                            
                            <p className="text-taupe/90 text-sm leading-relaxed mt-6 border-t border-taupe/20 pt-6">{product.description}</p>

                            <div className="mt-8 flex items-center space-x-4">
                                <label className="text-sm font-semibold">Quantity:</label>
                                <div className="flex items-center border border-taupe/30 rounded-full">
                                    <button onClick={() => handleQuantityChange(-1)} className="px-3 py-1.5 text-lg text-taupe hover:text-gold-accent transition-colors">-</button>
                                    <span className="px-4 text-sm">{quantity}</span>
                                    <button onClick={() => handleQuantityChange(1)} className="px-3 py-1.5 text-lg text-taupe hover:text-gold-accent transition-colors">+</button>
                                </div>
                            </div>

                            <div className="mt-8 flex items-stretch space-x-3">
                                <button className="flex-grow bg-matte-black text-ivory font-poppins uppercase tracking-widest text-xs font-semibold px-8 py-4 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg">
                                    Add to Bag
                                </button>
                                <button className="flex-shrink-0 w-14 h-14 flex items-center justify-center border-2 border-taupe/30 rounded-full text-taupe hover:border-gold-accent hover:text-gold-accent transition-all duration-300">
                                    <HeartIcon className="w-6 h-6"/>
                                </button>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>

            {/* About the Product Section */}
            {product.about && product.about.length > 0 && (
                <div className="bg-ivory py-20 md:py-24">
                    <div className="container mx-auto px-6 space-y-20">
                        {product.about.map((item, index) => (
                            <AnimateOnScroll initialClass="opacity-0 translate-y-10" finalClass="opacity-100 translate-y-0" key={index}>
                                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
                                    <div className={`aspect-video lg:aspect-square ${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                                        <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover rounded-lg shadow-lg"/>
                                    </div>
                                    <div className="text-center lg:text-left">
                                        <h2 className="font-playfair text-3xl font-bold text-matte-black">{item.title}</h2>
                                        <p className="text-taupe mt-4 leading-relaxed">{item.content}</p>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            )}
            
            {/* Specifications Section */}
            {(product.details?.length > 0 || product.schematicUrl) && (
                 <div className="bg-beige py-20 md:py-24">
                    <div className="container mx-auto px-6 max-w-4xl">
                         <AnimateOnScroll initialClass="opacity-0 translate-y-5" finalClass="opacity-100 translate-y-0">
                            <h2 className="text-center font-playfair text-3xl md:text-4xl font-bold text-matte-black mb-10">Specifications</h2>
                            {product.details && product.details.length > 0 && (
                                <Accordion title="Details">
                                    <ul className="space-y-2 list-disc list-inside">
                                        {product.details.map((detail, index) => <li key={index}>{detail}</li>)}
                                    </ul>
                                </Accordion>
                            )}

                            {(product.schematicUrl || product.dimensions || product.specifications) && (
                                <Accordion title="Technical Details">
                                    {product.schematicUrl && (
                                        <img src={product.schematicUrl} alt={`${product.name} schematic`} className="w-full h-auto mb-6 rounded-md bg-white p-4 border border-taupe/10"/>
                                    )}
                                    {(product.dimensions || product.specifications) && (
                                        <div className="border-t border-taupe/20">
                                            {product.dimensions && Object.entries(product.dimensions).map(([key, value]) => (
                                                <div key={key} className="flex justify-between py-3 border-b border-taupe/20">
                                                    <span className="font-semibold text-matte-black">{key}</span>
                                                    <span>{value}</span>
                                                </div>
                                            ))}
                                            {product.specifications && product.specifications.map(spec => (
                                                <div key={spec.name} className="flex justify-between py-3 border-b border-taupe/20">
                                                    <span className="font-semibold text-matte-black">{spec.name}</span>
                                                    <span className="text-right">{spec.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </Accordion>
                            )}
                         </AnimateOnScroll>
                    </div>
                 </div>
            )}


            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fade-in {
                    animation: fadeIn 0.5s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default ProductDetailPage;