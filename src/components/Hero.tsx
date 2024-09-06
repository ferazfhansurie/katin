import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero from "../assets/hero.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";
import feature4 from "../assets/feature4.png";

import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/700.css";

const productFeatures = [
  { image: feature1, title: "EGYPTIAN COTTON" },
  { image: feature2, title: "HIGH THREAD COUNT" },
  { image: feature3, title: "OEKO-TEX CERTIFIED" },
  { image: feature4, title: "CHEMICAL FREE" },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [hero, hero2, hero3];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full font-['Playfair_Display',serif]">
      <div className="relative h-[calc(65vh-64px)] overflow-hidden">
        <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-4xl z-10 text-white bg-black/30 rounded-full p-2">
          <ChevronLeft />
        </button>
        <div 
            className="flex transition-transform duration-500 ease-in-out h-full" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((img, index) => (
              <img 
                key={index}
                src={img} 
                alt={`Slide ${index + 1}`} 
                className="w-full h-full object-cover flex-shrink-0"
              />
            ))}
          </div>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-4xl z-10 text-white bg-black/30 rounded-full p-2">
          <ChevronRight />
        </button>
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <span 
              key={index} 
              className={`h-2 w-2 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-500'}`}
            />
          ))}
        </div>
        
      </div>
      
      <div className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-4 gap-8">
          {productFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <img 
                src={feature.image} 
                alt={feature.title} 
                className="w-45 h-45 object-contain mx-auto mb-4" 
              />
              <h4 className="text-[#2e4c79] font-bold text-xl">
                {feature.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};