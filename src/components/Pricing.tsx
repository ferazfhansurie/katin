import React from 'react';
import { ProductCard } from './ProductCard';
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";

const products = [
  {
    image: product1,
    discount: 45,
    title: 'Snow White',
    description: 'Pristine, pure, sophisticated',
  },
  {
    image: product2,
    discount: 20,
    title: 'Deep Grey',
    description: 'Dark, muted, elegant',
  },
  {
    image: product3,
    discount: 20,
    title: 'Silver Smoke',
    description: 'Misty, metallic, subtle',
  },
];

export const Pricing: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};