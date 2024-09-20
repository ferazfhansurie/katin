import React from 'react';
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/700.css";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ image, title, description,}) => {
  return (
    <div className="flex flex-col items-center px-2 font-['Playfair_Display',serif]">
      <div className="relative mb-4 w-full aspect-[4/3]">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-lg shadow-lg" />
        
      </div>
      <h3 className="text-2xl font-bold text-[#2e4c79] mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 text-center text-base">{description}</p>
      <button className="border-2 border-[#2e4c79] text-[#2e4c79] font-bold py-2 px-4 text-lg rounded-lg hover:bg-[#2e4c79] hover:text-white transition-colors">
        SHOP NOW
      </button>
    </div>
  );
};