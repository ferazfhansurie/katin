import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "../assets/1 from Postimages.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3 from Postimages.png";
import image4 from "../assets/4 from Postimages.png";
import banner1 from "../assets/banner.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
import banner4 from "../assets/banner4.png";
import banner5 from "../assets/banner5.png";

const images = [image1, image2, image3, image4];
const banners = [banner1, banner2, banner3, banner4, banner5];

export const ImageCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    <section className="relative w-full bg-gray-100 py-12"> {/* Increased vertical padding */}
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden shadow-lg"> {/* Added shadow for separation */}
          <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black/30 rounded-full p-2 hover:bg-black/50 transition-colors">
            <ChevronLeft size={24} />
          </button>
          <div 
            className="flex transition-transform duration-500 ease-in-out" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((img, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <img 
                  src={img} 
                  alt={`Slide ${index + 1}`} 
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black/30 rounded-full p-2 hover:bg-black/50 transition-colors">
            <ChevronRight size={24} />
          </button>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <span 
                key={index} 
                className={`h-2 w-2 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'} transition-colors`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Full-width banners */}
      <div className="w-full py-10">
        {banners.map((banner, index) => (
          <div key={index} className="w-full">
            <img 
              src={banner} 
              alt={`Banner ${index + 1}`} 
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};