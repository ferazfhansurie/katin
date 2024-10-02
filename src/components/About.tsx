import React from 'react';
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/700.css";
import aboutImage from '../assets/about.png';
import aboutImage1 from '../assets/about1.png';
import aboutImage2 from '../assets/about2.png';

export const About: React.FC = () => {
  return (
    <div className="font-['Playfair_Display',serif]">
      {/* Hero section */}
      <div className="relative h-[300px] sm:h-[400px] bg-gray-800">
        <img 
          src={aboutImage} 
          alt="About Us" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content section */}
      <div className="container mx-auto px-4 py-8 sm:py-16 flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 sm:pr-8 mb-8 sm:mb-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2e4c79] mb-4 sm:mb-6">The Katin Life Story</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-4">
            At Katin Life, our journey began with a vision shared by 
            three best friends who recognized a significant gap in the 
            market. They observed that the unparalleled comfort and 
            enduring quality of Egyptian cotton bedding were often out 
            of reach for many customers. Fueled by a passion for 
            delivering luxurious sleep experiences to a wider audience, 
            they embarked on a mission to make premium bedding accessible 
            without compromising on quality.
          </p>
          {/* Add more paragraphs as needed */}
        </div>
        <div className="w-full sm:w-1/2 flex justify-center items-center">
          <img 
            src={aboutImage1}
            alt="Lotus Flowers" 
            className="w-full sm:max-w-[80%] h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Quality Assurance section */}
      <div className="container mx-auto px-4 py-8 sm:py-16 flex flex-col-reverse sm:flex-row">
        <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
          <img 
            src={aboutImage2}
            alt="Quality Assurance" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full sm:w-1/2 sm:pl-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2e4c79] mb-4 sm:mb-6">Quality Assurance</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-4">
            At the heart of Katin Life's commitment to excellence is our 
            ownership of a state-of-the-art factory dedicated to 
            crafting premium bedding. This hands-on approach ensures 
            that every aspect of the production process adheres to the 
            highest standards. We take pride in our certifications, 
            including OKEOTEX certification, which guarantees that our 
            products are free from harmful substances. Moreover, our 
            ethical work certification reflects our dedication to fair 
            labor practices, ensuring that everyone involved in the 
            creation of our bedding is treated with respect and dignity. 
            As part of our unwavering commitment to authenticity, our 
            products proudly bear the Egyptian Cotton Certified label, 
            assuring you of the genuine luxury that only Egyptian cotton 
            can provide.
          </p>
        </div>
      </div>
       {/* Craftsmanship and Tradition section */}
   <div className="container mx-auto px-4 py-8 sm:py-16 flex flex-col sm:flex-row">
     <div className="w-full sm:w-2/3 sm:pr-8 mb-8 sm:mb-0">
       <h2 className="text-3xl sm:text-4xl font-bold text-[#2e4c79] mb-4 sm:mb-6">Craftsmanship and Tradition</h2>
       <p className="text-base sm:text-lg text-gray-700 mb-4">
       Embracing the legacy of ancient Egyptian craftsmanship, Katin Life is more than a brand – it's a celebration of tradition and artistry. Our bedding is meticulously crafted with a keen attention to detail, ensuring that each piece is a testament to the timeless elegance inspired by centuries-old techniques. We honor the heritage of Egyptian cotton, infusing our products with a touch of history while creating an atmosphere of unparalleled comfort.

When you choose Katin Life, you choose more than just bedding; you choose the embodiment of craftsmanship, tradition, and the pursuit of exceptional sleep.

Step into the world of Katin Life, where every thread tells a story of dedication, quality, and the enduring allure of Egyptian cotton.
       </p>
     </div>
     <div className="w-full sm:w-1/3">
       <img 
         src={aboutImage2}
         alt="Craftsmanship and Tradition" 
         className="w-full h-auto rounded-lg shadow-lg"
       />
     </div>
   </div>
    </div>
  );
};