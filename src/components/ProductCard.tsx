import React from 'react';
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/700.css";

interface ProductCardProps {
  image: string;
  discount: number;
  title: string;
  description: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ image, title, description }) => {
  return (
    <div className="flex flex-col items-center max-w-sm mx-auto font-['Playfair_Display',serif]">
      <div className="relative mb-6 w-full">
        <img src={image} alt={title} className="w-full h-80 object-cover rounded-lg shadow-lg" />
     
      </div>
      <h3 className="text-3xl font-bold text-[#2e4c79] mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 text-center text-lg">{description}</p>
      <button className="border-2 border-[#2e4c79] text-[#2e4c79] font-bold py-3 px-6 text-xl rounded-lg hover:bg-[#2e4c79] hover:text-white transition-colors">
        SHOP NOW
      </button>
    </div>
  );
};