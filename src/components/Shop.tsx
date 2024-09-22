import React from 'react';
import { ProductCard2 } from './ProductCard2';
import shopHero from "../assets/shop.png";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import { WhatsAppSection } from './WhatsAppSection';
import feature1 from "../assets/shopf1.png";
import feature2 from "../assets/shopf2.png";
import feature3 from "../assets/shopf3.png";
import feature4 from "../assets/shopf4.png";

import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/700.css";

// Add new product imports
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";

const products = [
  {
    image: product1,
    title: 'Snow White',
    description: 'Pristine, pure, sophisticated',
    slug: 'snow-white'
  },
  {
    image: product2,
    title: 'Deep Grey',
    description: 'Dark, muted, elegant',
    slug: 'deep-grey'
  },
  {
    image: product3,
    title: 'Silver Smoke',
    description: 'Misty, metallic, subtle',
    slug: 'silver-smoke'
  },
  {
    image: product4,
    title: 'Midnight Black',
    description: 'Dark, dramatic, powerful',
    slug: 'midnight-black'

  },
  {
    image: product5,

    title: 'Almond Latte',
    description: 'Creamy, serene, relaxing',
    slug: 'almond-latte'
  },
  {
    image: product6,
    title: 'Aqua Dew',
    description: 'Fresh, serene, tranquil',
    slug: 'aqua-dew'

  },
  {
    image: product7,
    title: 'Pearl Beige',
    description: 'Warm, soft, timeless',
    slug: 'pearl-beige'
  },
  {
    image: product8,
    title: 'Eco-Luxe Bath Towel',
    description: 'Plush, pure, luxurious',
    slug: 'eco-luxe-bath-towel'
  },
];

const productFeatures = [
  { image: feature1, title: "EGYPTIAN COTTON" },
  { image: feature2, title: "HIGH THREAD COUNT" },
  { image: feature3, title: "OEKO-TEX CERTIFIED" },
  { image: feature4, title: "CHEMICAL FREE" },
];

export const Shop: React.FC = () => {
  return (
    <div className="font-['Playfair_Display',serif]">
      {/* Hero Section */}
      <div className="relative h-[300px] mb-12">
        <img 
          src={shopHero} 
          alt="Shop Hero" 
          className="w-full h-full object-cover"
        />
     
      </div>

      {/* Product Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {products.map((product, index) => (
            <ProductCard2 key={index} {...product} />
          ))}
        </div>
      </section>
      <WhatsAppSection />
      <div className="container mx-auto px-4 mt-8 pt-12 pb-16 py-12 ">

</div>
    </div>
  );
};