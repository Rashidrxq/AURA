import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const timelineEvents = [
    {
        year: '2015',
        title: 'The Vision',
        description: 'AURA was founded with a simple yet profound vision: to create furniture that is not just an object in a room, but a part of a home\'s story. It started with a sketchbook and a passion for timeless design.'
    },
    {
        year: '2017',
        title: 'First Workshop',
        description: 'Our first small workshop opened, a space where design concepts were brought to life by skilled artisans. We focused on natural materials and handcrafted quality from day one.'
    },
    {
        year: '2020',
        title: 'Online Debut',
        description: 'We launched our first online store, bringing AURA\'s curated collection to a wider audience. Our focus was on creating a digital experience as refined as our furniture.'
    },
    {
        year: '2023',
        title: 'Sustainable Pledge',
        description: 'AURA officially committed to using only sustainably sourced wood and eco-friendly materials, ensuring our designs are as kind to the planet as they are beautiful in your home.'
    },
    {
        year: 'Today',
        title: 'The Future of Living',
        description: 'We continue to explore the intersection of modern design and timeless craftsmanship, innovating for the future while staying true to our core values of quality, beauty, and sustainability.'
    }
];


const AboutPage: React.FC = () => {
    return (
        <>
            <section 
                className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('https://i.pinimg.com/564x/e3/37/17/e3371757820a30b050f214436573715c.jpg')" }}
            >
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 text-center text-ivory p-4">
                    <AnimateOnScroll initialClass="opacity-0 translate-y-5" finalClass="opacity-100 translate-y-0">
                        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-4 leading-tight">
                            About AURA
                        </h1>
                    </AnimateOnScroll>
                    <AnimateOnScroll initialClass="opacity-0 translate-y-5" finalClass="opacity-100 translate-y-0" delay={200}>
                        <p className="font-poppins text-lg md:text-xl max-w-2xl mx-auto font-light">
                            Crafting timeless spaces with furniture designed for modern living.
                        </p>
                    </AnimateOnScroll>
                </div>
            </section>

            <section className="py-20 md:py-28 bg-beige">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <AnimateOnScroll initialClass="opacity-0 -translate-x-10" finalClass="opacity-100 translate-x-0">
                            <img src="https://i.pinimg.com/564x/4b/2c/a2/4b2ca24767177546152a129071c77f72.jpg" alt="AURA's workshop" className="rounded-lg shadow-xl w-full h-auto object-cover" />
                        </AnimateOnScroll>
                         <AnimateOnScroll initialClass="opacity-0 translate-x-10" finalClass="opacity-100 translate-x-0">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-matte-black">Our Philosophy</h2>
                                <p className="text-taupe mt-4 leading-relaxed">
                                    At AURA, we believe that a home should be a sanctuary. Our philosophy is rooted in the idea of "quiet luxury" — creating pieces that are beautiful in their simplicity, exceptional in their quality, and timeless in their design. We focus on clean lines, natural materials, and meticulous craftsmanship to create furniture that doesn't just fill a space, but completes it.
                                </p>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28 bg-ivory">
                <div className="container mx-auto px-6 max-w-3xl">
                    <AnimateOnScroll initialClass="opacity-0 translate-y-5" finalClass="opacity-100 translate-y-0">
                         <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-matte-black">Our Journey</h2>
                            <p className="text-lg text-taupe mt-2">From a simple idea to a celebrated brand.</p>
                        </div>
                    </AnimateOnScroll>

                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-taupe/20" aria-hidden="true"></div>
                        
                        <div className="space-y-16">
                            {timelineEvents.map((event, index) => (
                                <AnimateOnScroll key={index} initialClass="opacity-0 translate-y-5" finalClass="opacity-100 translate-y-0" threshold={0.5}>
                                    <div className="relative pl-12 md:pl-0">
                                        <div className="md:flex md:items-center md:justify-center">
                                            {/* Dot on the timeline */}
                                            <div className="absolute left-4 top-2 md:left-1/2 w-4 h-4 bg-gold-accent rounded-full -translate-x-1/2 -translate-y-1/2 border-4 border-ivory"></div>
                                            
                                            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:order-2'}`}>
                                                <p className="font-semibold text-gold-accent text-lg">{event.year}</p>
                                                <h3 className="font-playfair font-bold text-2xl text-matte-black mt-1">{event.title}</h3>
                                                <p className="text-taupe mt-2 text-sm leading-relaxed">{event.description}</p>
                                            </div>
                                             <div className="hidden md:block md:w-1/2"></div>
                                        </div>
                                    </div>
                                </AnimateOnScroll>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;