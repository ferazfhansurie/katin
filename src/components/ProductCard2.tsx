import React from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps2 {
  image: string;
  title: string;
  description: string;
  slug: string;
}

export const ProductCard2: React.FC<ProductCardProps2> = ({ image, title, description, slug }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-100 p-4 rounded-lg mb-4 w-full">
        <img src={image} alt={title} className="w-full h-auto object-contain" />
      </div>
      <h3 className="text-3xl font-bold text-[#2e4c79] mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 text-center">{description}</p>
      <Link 
        to={`/product/${slug}`}
        className="border-2 border-[#2e4c79] text-[#2e4c79] font-bold py-2 px-8 hover:bg-[#2e4c79] hover:text-white transition-colors"
      >
        SHOP NOW
      </Link>
    </div>
  );
};