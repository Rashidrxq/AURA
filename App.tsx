import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import MostSelledItems from './components/MostSelledItems';
import ProductDetailPage from './components/ProductDetailPage';
import MirrorsCollection from './components/MirrorsCollection';
import SofasCollection from './components/SofasCollection';
import BedroomCollection from './components/BedroomCollection';
import DiningCollection from './components/DiningCollection';
import HomeOfficeCollection from './components/HomeOfficeCollection';
import LightingCollection from './components/LightingCollection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { Product } from './types';
import SupportAssistant from './components/SupportAssistant';
import DiningPage from './components/DiningPage';
import BedroomPage from './components/BedroomPage';
import LivingRoomPage from './components/LivingRoomPage';
import OfficePage from './components/OfficePage';

const products: Product[] = [
  {
    id: 1,
    name: 'Velvet Dream Sofa',
    category: 'Sofas',
    price: '$1,299.00',
    imageUrl: 'https://i.pinimg.com/564x/b3/b6/2a/b3b62a6a0968652932d0c2c31d102a90.jpg',
    gallery: [
        'https://i.pinimg.com/564x/b3/b6/2a/b3b62a6a0968652932d0c2c31d102a90.jpg',
        'https://i.pinimg.com/564x/e8/87/2c/e8872c696057a73a61c5e165430855c8.jpg',
        'https://i.pinimg.com/564x/d1/8a/82/d18a82a170589a1168478d162f13a0a3.jpg',
        'https://i.pinimg.com/564x/f3/e6/5a/f3e65a6e8b4e7a2b2e8a6d0c9f0a0d9e.jpg'
    ],
    description: 'An embodiment of comfort and style, this plush velvet sofa features clean lines and a timeless silhouette. Its deep seating and soft cushions invite you to unwind in luxury.',
    details: ['Upholstered in high-performance velvet.', 'Kiln-dried hardwood frame.', 'High-density foam cushions.', 'Available in 5 rich colors.'],
     about: [
        {
            title: 'Unmatched Comfort & Style',
            content: 'The Velvet Dream Sofa is more than just a piece of furniture; it\'s an experience. The high-density foam cushions provide the perfect balance of support and softness, while the performance velvet is both luxuriously soft and remarkably durable, standing up to everyday life with grace.',
            imageUrl: 'https://i.pinimg.com/564x/2c/7a/8b/2c7a8b6f3b7b6c5b966c4c688b1f9f2d.jpg'
        },
        {
            title: 'Crafted to Last',
            content: 'Built on a foundation of a solid, kiln-dried hardwood frame, this sofa is designed for longevity. Every joint is reinforced, ensuring stability and durability for years to come. Our commitment to quality means you can relax in both comfort and confidence.',
            imageUrl: 'https://i.pinimg.com/564x/0c/a6/8d/0ca68d4076f8f53a1f813c0b05b36712.jpg'
        }
    ],
    schematicUrl: 'https://i.imgur.com/v82M7sL.png',
    dimensions: {
      Height: '70cm',
      'Seat Height': '44cm',
      'Seat Depth': '60cm',
    },
    specifications: [
      { name: 'Structure', value: 'Solid Wood, Multilayer Plywood' },
      { name: 'Suspension', value: 'Elastic Webbing' },
      { name: 'Seat & Backrest', value: 'Multilayer HR Foam, Polyester Wadding' },
      { name: 'Legs H 19cm', value: 'Solid Wood, included Silicone Pads' },
      { name: 'Upholstery', value: 'Fabric' },
    ],
    materialOptions: [
        {
            title: 'Suggested Fabric Colours',
            options: [
                { name: 'Orsetto 900', value: '#EAE0D1' },
                { name: 'Mazurka 700', value: '#5C3E3A' },
                { name: 'Rico 200', value: '#B5943B' },
            ]
        },
        {
            title: 'Wooden Legs',
            options: [
                { name: 'Oak - Natural', value: '#D4B895' },
                { name: 'Oak - Black', value: '#282828' },
                { name: 'Walnut - Natural', value: '#6F4E37' },
            ]
        }
    ]
  },
  {
    id: 2,
    name: 'Artisan Marble Table',
    category: 'Tables',
    price: '$799.00',
    imageUrl: 'https://i.pinimg.com/736x/02/0e/15/020e151474299e267ad1468408b5c6ed.jpg',
    description: 'A statement piece of natural art, this coffee table features a solid block of Italian Carrara marble, polished to a fine sheen to reveal its unique veining.',
    details: ['100% solid Carrara marble.', 'Polished, non-porous surface.', 'Each piece is unique.', 'Substantial weight requires professional handling.'],
    schematicUrl: 'https://i.imgur.com/jE1Yx2D.png',
  },
  {
    id: 3,
    name: 'Aura Pendant Lamp',
    category: 'Lighting',
    price: '$450.00',
    imageUrl: 'https://i.pinimg.com/736x/df/55/c1/df55c1b291781e011eb2fdc516219e0c.jpg',
    description: 'The Aura Pendant Lamp, with its warm, diffused light and organic shape, creates an intimate and inviting atmosphere. A modern classic for any room.',
    details: ['Hand-blown glass shade.', 'Matte black hardware.', 'Adjustable cord length.', 'Dimmable with compatible switch.']
  },
  {
    id: 4,
    name: 'Luxe Bouclé Chair',
    category: 'Chairs',
    price: '$650.00',
    imageUrl: 'https://i.pinimg.com/564x/9b/6c/42/9b6c423c445653b6f93539c890f85461.jpg',
    description: 'Sink into the irresistible softness of our Luxe Bouclé Chair. Its sculptural curves and textured fabric make it a cozy yet sophisticated accent piece.',
    details: ['High-quality bouclé upholstery.', 'Solid wood internal frame.', 'Ergonomic, comfortable design.', 'Available in Ivory and Taupe.']
  },
  {
    id: 5,
    name: 'Serene Sculpted Vase',
    category: 'Decor',
    price: '$180.00',
    imageUrl: 'https://i.pinimg.com/736x/dd/c9/d5/ddc9d5c082e37d36f18ec485364b7324.jpg',
    description: 'An elegant, sculptural ceramic vase that adds an artistic and serene touch to any surface. Its matte finish and organic form are perfect for minimalist and modern interiors.',
    details: ['Handcrafted ceramic.', 'Matte white finish.', 'Watertight for fresh flowers.', 'Dimensions: 12" H x 7" W.']
  },
  {
    id: 6,
    name: 'Abstract Framed Art',
    category: 'Wall Art',
    price: '$320.00',
    imageUrl: 'https://i.pinimg.com/564x/e7/71/39/e77139c15975127044f23b367098921b.jpg',
    description: 'A captivating piece of abstract art that brings a sense of calm and sophistication. Featuring neutral tones and subtle textures, framed in solid oak.',
    details: ['Giclée print on archival paper.', 'Solid light oak frame.', 'Includes mounting hardware.', 'Artist: Anonymous.']
  }
];

const mostSelledProducts: Product[] = [
    {
    id: 10,
    name: 'Platform Canopy Bed',
    category: 'Beds',
    price: '$2,199.00',
    imageUrl: 'https://i.pinimg.com/564x/49/b7/db/49b7db44e51044ba3863a16a18f4a13d.jpg',
    description: 'A minimalist masterpiece, this canopy bed creates a serene and architectural focal point in any bedroom.',
    details: [],
    schematicUrl: 'https://i.imgur.com/83pTo2s.png',
  },
  {
    id: 11,
    name: 'Luxe Linen Pillow Set',
    category: 'Pillows',
    price: '$250.00',
    imageUrl: 'https://i.pinimg.com/564x/f3/89/35/f3893573340733b97b0a1f025f7fc866.jpg',
    description: 'A set of three designer linen pillows, perfect for adding a touch of texture and understated luxury.',
    details: []
  },
  {
    id: 12,
    name: 'Hand-Woven Wool Rug',
    category: 'Rugs',
    price: '$980.00',
    imageUrl: 'https://i.pinimg.com/564x/ac/e1/e3/ace1e3678083c6f092b0365b212af2c6.jpg',
    description: 'Anchor your space with this beautifully textured, hand-woven wool rug in a versatile neutral palette.',
    details: []
  },
  {
    id: 3,
    name: 'Aura Pendant Lamp',
    category: 'Lighting',
    price: '$450.00',
    imageUrl: 'https://i.pinimg.com/736x/df/55/c1/df55c1b291781e011eb2fdc516219e0c.jpg',
    description: 'The Aura Pendant Lamp, with its warm, diffused light and organic shape, creates an intimate atmosphere.',
    details: []
  },
    {
    id: 13,
    name: 'Modern Fluted Side Table',
    category: 'Tables',
    price: '$420.00',
    imageUrl: 'https://i.pinimg.com/564x/5b/1a/87/5b1a87e503e1b1b11b5a51353b5d32c5.jpg',
    description: 'A sculptural side table with fluted details, crafted from solid oak to add character to any corner.',
    details: []
  },
  {
    id: 14,
    name: 'Cashmere Throw Blanket',
    category: 'Decor',
    price: '$350.00',
    imageUrl: 'https://i.pinimg.com/564x/d1/2c/31/d12c31a7420584b9148d8847849646c1.jpg',
    description: 'Indulge in the unparalleled softness of a pure cashmere throw, perfect for cozy evenings.',
    details: []
  },
  {
    id: 1,
    name: 'Velvet Dream Sofa',
    category: 'Sofas',
    price: '$1,299.00',
    imageUrl: 'https://i.pinimg.com/564x/b3/b6/2a/b3b62a6a0968652932d0c2c31d102a90.jpg',
    description: 'An embodiment of comfort and style, this plush velvet sofa features clean lines and a timeless silhouette.',
    details: []
  },
  {
    id: 15,
    name: 'Arched Floor Mirror',
    category: 'Mirrors',
    price: '$550.00',
    imageUrl: 'https://i.pinimg.com/564x/a4/c8/f1/a4c8f184715f5a89895c1a17951c82f0.jpg',
    description: 'A full-length arched mirror with a thin brass frame, designed to make any space feel larger and brighter.',
    details: []
  },
  {
    id: 16,
    name: 'Leather Bar Stool',
    category: 'Chairs',
    price: '$380.00',
    imageUrl: 'https://i.pinimg.com/564x/8a/70/4e/8a704e0e64c20e5c9f53c89b278f2e3c.jpg',
    description: 'A sleek and comfortable bar stool upholstered in genuine leather with a minimalist metal frame.',
    details: []
  },
    {
    id: 5,
    name: 'Serene Sculpted Vase',
    category: 'Decor',
    price: '$180.00',
    imageUrl: 'https://i.pinimg.com/736x/dd/c9/d5/ddc9d5c082e37d36f18ec485364b7324.jpg',
    description: 'An elegant, sculptural ceramic vase that adds an artistic and serene touch to any surface.',
    details: []
  },
  {
    id: 17,
    name: 'Plush Bouclé Ottoman',
    category: 'Seating',
    price: '$480.00',
    imageUrl: 'https://i.pinimg.com/564x/dc/77/8e/dc778e3488880a133182b2a60a4f50dc.jpg',
    description: 'A versatile and cozy ottoman wrapped in soft bouclé fabric, perfect as a footrest or extra seating.',
    details: []
  },
];

const diningProducts: Product[] = [
    // Dining Tables
    { id: 20, name: 'Marble Top Dining Table', category: 'Dining', subCategory: 'Dining Tables', price: '₹48,000', imageUrl: 'https://i.pinimg.com/564x/8c/b5/a4/8cb5a4d3550307dd79d86392c61d5630.jpg', description: 'Elegant marble surface with gold metal legs, seats 6.', details: [], schematicUrl: 'https://i.imgur.com/k2tC8dC.png' },
    { id: 21, name: 'Oak Wood Dining Table', category: 'Dining', subCategory: 'Dining Tables', price: '₹32,000', imageUrl: 'https://i.pinimg.com/564x/96/98/99/969899f181d125341d341910d1828c2c.jpg', description: 'Minimal Scandinavian design with solid wood finish.', details: [] },
    { id: 22, name: 'Glass & Steel Dining Table', category: 'Dining', subCategory: 'Dining Tables', price: '₹39,500', imageUrl: 'https://i.pinimg.com/564x/9e/02/79/9e027926487e4a11545b2069b7636e89.jpg', description: 'Modern industrial style with a clear tempered glass top.', details: [] },
    { id: 23, name: 'Extendable Family Dining Table', category: 'Dining', subCategory: 'Dining Tables', price: '₹44,000', imageUrl: 'https://i.pinimg.com/564x/39/10/a4/3910a4a51e62674258b4b732b137f8f9.jpg', description: 'Expandable 4-to-8 seater with smooth folding mechanism.', details: [] },
    // Dining Chairs
    { id: 24, name: 'Velvet Upholstered Chair Set', category: 'Dining', subCategory: 'Dining Chairs', price: '₹18,000', imageUrl: 'https://i.pinimg.com/564x/33/71/3a/33713a8435c24942f2759881682703f8.jpg', description: 'Soft velvet fabric with curved backrest and gold legs (Set of 2).', details: [] },
    { id: 25, name: 'Wooden Dining Chairs', category: 'Dining', subCategory: 'Dining Chairs', price: '₹22,000', imageUrl: 'https://i.pinimg.com/564x/2c/80/c8/2c80c8839213123533890f588a8d11e5.jpg', description: 'Classic solid oak design for timeless comfort (Set of 4).', details: [] },
    { id: 26, name: 'Modern Metal Frame Chair Set', category: 'Dining', subCategory: 'Dining Chairs', price: '₹15,000', imageUrl: 'https://i.pinimg.com/564x/e7/09/25/e70925c3016a5d465355c3c0f135158b.jpg', description: 'Sleek, lightweight, and perfect for contemporary homes (Set of 2).', details: [] },
    { id: 27, name: 'Cane Back Dining Chairs', category: 'Dining', subCategory: 'Dining Chairs', price: '₹17,500', imageUrl: 'https://i.pinimg.com/564x/3f/82/c9/3f82c9e843f562203e3a47d2b65029d2.jpg', description: 'Natural cane texture with wooden frame — warm and cozy vibe (Set of 2).', details: [] },
    // Bar Stools
    { id: 28, name: 'Leather Bar Stool', category: 'Dining', subCategory: 'Bar Stools', price: '₹14,000', imageUrl: 'https://i.pinimg.com/564x/78/3f/76/783f76a5992e10a8d388f6c374977286.jpg', description: 'High-back leather seat with matte black steel legs.', details: [] },
    { id: 29, name: 'Wooden Counter Stool', category: 'Dining', subCategory: 'Bar Stools', price: '₹9,500', imageUrl: 'https://i.pinimg.com/564x/9b/6c/42/9b6c423c445653b6f93539c890f85461.jpg', description: 'Minimal and sturdy design for kitchen islands.', details: [] },
    { id: 30, name: 'Adjustable Swivel Stool', category: 'Dining', subCategory: 'Bar Stools', price: '₹12,000', imageUrl: 'https://i.pinimg.com/564x/93/4b/f5/934bf513513a893c8340d86926839e55.jpg', description: '360° rotation with chrome finish — modern café style.', details: [] },
    { id: 31, name: 'Rattan Bar Stool', category: 'Dining', subCategory: 'Bar Stools', price: '₹10,800', imageUrl: 'https://i.pinimg.com/564x/53/39/38/533938449c258d929b4b045da151475c.jpg', description: 'Boho-inspired bar seating with handwoven detailing.', details: [] },
    // Sideboards & Cabinets
    { id: 32, name: 'Walnut Sideboard Cabinet', category: 'Dining', subCategory: 'Sideboards & Cabinets', price: '₹29,000', imageUrl: 'https://i.pinimg.com/564x/24/e9/93/24e9933758f844a42e557b4474768f5c.jpg', description: '3-door spacious storage with soft-close drawers.', details: [] },
    { id: 33, name: 'Modern White Buffet Cabinet', category: 'Dining', subCategory: 'Sideboards & Cabinets', price: '₹27,500', imageUrl: 'https://i.pinimg.com/564x/a4/4f/70/a44f70643ed2949708453123893a02a4.jpg', description: 'Glossy surface with gold handles — chic modern look.', details: [] },
    { id: 34, name: 'Glass Display Cabinet', category: 'Dining', subCategory: 'Sideboards & Cabinets', price: '₹25,000', imageUrl: 'https://i.pinimg.com/564x/3b/09/b9/3b09b9c9f2b8429b9a674175b9ec59b5.jpg', description: 'Perfect for showcasing dinnerware and collectibles.', details: [] },
    { id: 35, name: 'Rustic Wooden Storage Cabinet', category: 'Dining', subCategory: 'Sideboards & Cabinets', price: '₹21,800', imageUrl: 'https://i.pinimg.com/564x/33/93/96/33939634812f84974d0847936a56e074.jpg', description: 'Handcrafted texture with brass knobs and natural wood grains.', details: [] },
];

const bedroomProducts: Product[] = [
    // Beds
    { id: 40, name: 'Canopy Platform Bed', category: 'Bedroom', subCategory: 'Beds', price: '₹75,000', imageUrl: 'https://i.pinimg.com/564x/6a/31/8a/6a318a3722b5155f9f31da81190f818d.jpg', description: 'A statement piece that combines modern lines with a classic canopy.', details: [], schematicUrl: 'https://i.imgur.com/83pTo2s.png' },
    { id: 41, name: 'Bouclé Upholstered Bed', category: 'Bedroom', subCategory: 'Beds', price: '₹68,000', imageUrl: 'https://i.pinimg.com/564x/21/8d/8a/218d8a7c21c272186175b642e128df32.jpg', description: 'Soft, textured bouclé fabric envelops this inviting and luxurious bed frame.', details: [] },
    { id: 42, name: 'Solid Oak Platform Bed', category: 'Bedroom', subCategory: 'Beds', price: '₹55,000', imageUrl: 'https://i.pinimg.com/564x/87/42/47/8742471a2da3186c63b4b53112354e60.jpg', description: 'Minimalist and timeless, crafted from solid oak for a serene atmosphere.', details: [] },
    { id: 43, name: 'Rattan Headboard Bed', category: 'Bedroom', subCategory: 'Beds', price: '₹62,000', imageUrl: 'https://i.pinimg.com/564x/c7/21/f8/c721f8342137993a40b3b3a32504b500.jpg', description: 'Natural, hand-woven rattan headboard brings warmth and texture.', details: [] },
    // Nightstands
    { id: 44, name: 'Fluted Wooden Nightstand', category: 'Bedroom', subCategory: 'Nightstands', price: '₹15,000', imageUrl: 'https://i.pinimg.com/564x/c9/4c/32/c94c320704dc17de2e3f53c150c82156.jpg', description: 'Sculptural fluted detailing adds a touch of modern elegance.', details: [] },
    { id: 45, name: 'Marble Top Nightstand', category: 'Bedroom', subCategory: 'Nightstands', price: '₹18,500', imageUrl: 'https://i.pinimg.com/564x/a4/6a/6a/a46a6a575e7a931a783852de2d8541e2.jpg', description: 'A luxurious touch of marble for your bedside essentials.', details: [] },
    { id: 46, name: 'Minimalist Floating Nightstand', category: 'Bedroom', subCategory: 'Nightstands', price: '₹12,000', imageUrl: 'https://i.pinimg.com/564x/c1/f2/a5/c1f2a58b5b707475d55b8e967272719c.jpg', description: 'Wall-mounted design for a clean, contemporary, and spacious feel.', details: [] },
    // Dressers
    { id: 47, name: 'Wide Oak 6-Drawer Dresser', category: 'Bedroom', subCategory: 'Dressers', price: '₹45,000', imageUrl: 'https://i.pinimg.com/564x/9a/99/38/9a9938749a37659b85c21966cb4b150c.jpg', description: 'Spacious and stylish, with clean lines and ample storage in solid oak.', details: [] },
    { id: 48, name: 'Cane Front 3-Drawer Dresser', category: 'Bedroom', subCategory: 'Dressers', price: '₹38,000', imageUrl: 'https://i.pinimg.com/564x/ef/76/4a/ef764a819c629231f415309d57a4a12c1.jpg', description: 'Natural cane webbing on drawer fronts for a warm, textural element.', details: [] },
    // Wardrobes
    { id: 49, name: 'Modern 2-Door Wardrobe', category: 'Bedroom', subCategory: 'Wardrobes', price: '₹65,000', imageUrl: 'https://i.pinimg.com/564x/11/49/a5/1149a5b3f75aff96628b7dd551e18a28.jpg', description: 'Sleek and minimalist wardrobe with integrated handles and soft-close doors.', details: [] },
];

const livingRoomProducts: Product[] = [
    // Sofas
    { ...products[0], subCategory: 'Sofas' }, // Velvet Dream Sofa
    { id: 50, name: 'Modular Sectional Sofa', category: 'Living Room', subCategory: 'Sofas', price: '₹95,000', imageUrl: 'https://i.pinimg.com/564x/54/a8/f5/54a8f5597a7a5f606334d743a4175314.jpg', description: 'A versatile sectional that adapts to your space and style.', details: [] },
    { id: 51, name: 'Leather Chesterfield Sofa', category: 'Living Room', subCategory: 'Sofas', price: '₹1,20,000', imageUrl: 'https://i.pinimg.com/564x/c2/f3/98/c2f398a58f4a6431a47b1542f771c56b.jpg', description: 'A timeless icon of sophistication, with deep button tufting and rich leather.', details: [] },
    // Coffee Tables
    { ...products[1], subCategory: 'Coffee Tables' }, // Artisan Marble Table
    { id: 52, name: 'Round Oak Coffee Table', category: 'Living Room', subCategory: 'Coffee Tables', price: '₹28,000', imageUrl: 'https://i.pinimg.com/564x/43/63/0a/43630a90520fb255a6d3aad401127056.jpg', description: 'A classic round coffee table with a warm, natural oak finish.', details: [] },
    { id: 53, name: 'Nesting Coffee Tables', category: 'Living Room', subCategory: 'Coffee Tables', price: '₹32,000', imageUrl: 'https://i.pinimg.com/564x/3b/2b/9c/3b2b9c2400d3d528b848c8b006c52a37.jpg', description: 'A set of two tables that can be nested or separated for flexible styling.', details: [] },
    // Accent Chairs
    { ...products[3], subCategory: 'Accent Chairs' }, // Luxe Bouclé Chair
    { id: 54, name: 'Leather Sling Chair', category: 'Living Room', subCategory: 'Accent Chairs', price: '₹35,000', imageUrl: 'https://i.pinimg.com/564x/0f/25/89/0f258957454247814b7e80459a99863a.jpg', description: 'An effortlessly stylish chair with a relaxed leather sling and solid wood frame.', details: [] },
    { id: 55, name: 'Emerald Velvet Armchair', category: 'Living Room', subCategory: 'Accent Chairs', price: '₹42,000', imageUrl: 'https://i.pinimg.com/564x/b8/08/49/b8084992525381a8b965f70093d58a5f.jpg', description: 'A jewel-toned armchair that adds a pop of sophisticated color and comfort.', details: [] },
    // Bookshelves & Consoles
    { id: 56, name: 'Minimalist Wall Shelf', category: 'Living Room', subCategory: 'Bookshelves & Consoles', price: '₹18,000', imageUrl: 'https://i.pinimg.com/564x/6c/27/a2/6c27a264e03b22b0f449a0d8591350a4.jpg', description: 'Sleek, floating shelves for a modern and uncluttered display.', details: [] },
    { id: 57, name: 'Fluted Media Console', category: 'Living Room', subCategory: 'Bookshelves & Consoles', price: '₹48,000', imageUrl: 'https://i.pinimg.com/564x/8a/89/88/8a89886a87752e259b626456a0c5af56.jpg', description: 'An elegant media console with trendy fluted details and ample storage.', details: [] },
    { id: 58, name: 'Tall Metal Bookshelf', category: 'Living Room', subCategory: 'Bookshelves & Consoles', price: '₹36,000', imageUrl: 'https://i.pinimg.com/564x/87/00/36/87003636f324a0dff5b1062a4d3527e0.jpg', description: 'An industrial-chic bookshelf with a strong metal frame and wooden shelves.', details: [] },
];

const officeProducts: Product[] = [
    // Desks
    { id: 60, name: 'Minimalist Oak Desk', category: 'Office', subCategory: 'Desks', price: '₹35,000', imageUrl: 'https://i.pinimg.com/564x/a0/9c/0d/a09c0d12e6d9c66f272a74479b183427.jpg', description: 'A clean and simple workspace crafted from solid oak.', details: [] },
    { id: 61, name: 'Executive Walnut Desk', category: 'Office', subCategory: 'Desks', price: '₹52,000', imageUrl: 'https://i.pinimg.com/564x/24/37/b8/2437b86e8853b0e5138385223c2a3820.jpg', description: 'A commanding presence with a rich walnut finish and ample surface area.', details: [] },
    // Office Chairs
    { id: 62, name: 'Ergonomic Mesh Chair', category: 'Office', subCategory: 'Office Chairs', price: '₹22,000', imageUrl: 'https://i.pinimg.com/564x/e7/0d/23/e70d23f360980590823521a0a581e967.jpg', description: 'Designed for comfort and support during long work hours.', details: [] },
    { id: 63, name: 'Bouclé Swivel Chair', category: 'Office', subCategory: 'Office Chairs', price: '₹28,000', imageUrl: 'https://i.pinimg.com/564x/31/5a/2a/315a2af80f7451e06c11b151a3a41c6d.jpg', description: 'A stylish and cozy addition to any modern home office.', details: [] },
    // Bookshelves
    { ...livingRoomProducts.find(p => p.id === 58) as Product, subCategory: 'Bookshelves', category: 'Office' }, // Tall Metal Bookshelf
    { id: 64, name: 'Leaning Wall Bookshelf', category: 'Office', subCategory: 'Bookshelves', price: '₹25,000', imageUrl: 'https://i.pinimg.com/564x/90/e1/97/90e197e5330a5c4973347c61c162608.jpg', description: 'A space-saving design that leans elegantly against the wall.', details: [] },
    // Storage
    { id: 65, name: 'Low File Cabinet', category: 'Office', subCategory: 'Storage', price: '₹18,000', imageUrl: 'https://i.pinimg.com/564x/d1/81/25/d1812548074d306b49c71c1f510b6159.jpg', description: 'Keep your documents organized in this sleek, modern file cabinet.', details: [] },
    { id: 66, name: 'Modern Storage Credenza', category: 'Office', subCategory: 'Storage', price: '₹38,000', imageUrl: 'https://i.pinimg.com/564x/e4/f7/a2/e4f7a281895a975760846067f08d5117.jpg', description: 'A stylish solution for all your office storage needs.', details: [] },
];


type Page = 'home' | 'dining' | 'bedroom' | 'living' | 'office';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleNavigate = (page: Page) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedProduct(null); // Clear selected product when navigating
    setTimeout(() => {
      setCurrentPage(page);
    }, 300);
  };

  const handleProductSelect = (product: Product) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
        setSelectedProduct(product);
    }, 300);
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };

  const toggleChat = () => setIsChatOpen(!isChatOpen);
  const closeChat = () => setIsChatOpen(false);

  const renderPage = () => {
    if (selectedProduct) {
      return <ProductDetailPage product={selectedProduct} onClose={handleCloseDetail} />;
    }
    switch (currentPage) {
      case 'dining':
        return <DiningPage products={diningProducts} onProductSelect={handleProductSelect} />;
       case 'bedroom':
        return <BedroomPage products={bedroomProducts} onProductSelect={handleProductSelect} />;
      case 'living':
        return <LivingRoomPage products={livingRoomProducts} onProductSelect={handleProductSelect} />;
      case 'office':
        return <OfficePage products={officeProducts} onProductSelect={handleProductSelect} />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <ProductGrid products={products} onProductSelect={handleProductSelect} />
            <MostSelledItems products={mostSelledProducts} onProductSelect={handleProductSelect} />
            <MirrorsCollection />
            <SofasCollection onNavigate={() => handleNavigate('living')} />
            <BedroomCollection onNavigate={() => handleNavigate('bedroom')} />
            <DiningCollection onNavigate={() => handleNavigate('dining')} />
            <HomeOfficeCollection onNavigate={() => handleNavigate('office')} />
            <LightingCollection />
          </>
        );
    }
  };

  return (
    <div className="bg-ivory text-matte-black font-poppins antialiased">
      <CustomCursor />
      <Header onNavigate={handleNavigate} />
      
      <main>{renderPage()}</main>

      <Footer onChatToggle={toggleChat} />
      <SupportAssistant isOpen={isChatOpen} onClose={closeChat} />
    </div>
  );
};

export default App;