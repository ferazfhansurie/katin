import React from 'react';
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/700.css";
import ec from '../assets/ec.png';
import ec1 from '../assets/ec1.png';
import ec2 from '../assets/ec2.png';
import ec3 from '../assets/ec3.png';
import ec4 from '../assets/ec4.png';

export const EgyptianCotton: React.FC = () => {
  return (
    <div className="font-['Playfair_Display',serif]">
      {/* Hero Section */}
      <div className="relative w-full">
        <img src={ec} alt="Egyptian Cotton" className="w-full h-auto" />
      
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-[#2e4c79] mb-6 text-center">
          Egyptian cotton is renowned for its quality and luxurious feel
        </h2>

        {/* Exceptional Softness */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 md:pr-8">
            <h3 className="text-2xl font-bold text-[#2e4c79] mb-4">Exceptional Softness</h3>
            <p className="text-gray-700">
              Katin Life exclusively uses Egyptian cotton, celebrated for its extraordinary softness. Our bedding offers a luxurious and velvety feel, providing a premium level of comfort for a restful night's sleep.
            </p>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <img src={ec1} alt="Exceptional Softness" className="w-full h-auto rounded-lg" />
          </div>
        </div>

        {/* Durability and Longevity */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-16">
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-2xl font-bold text-[#2e4c79] mb-4">Durability and Longevity</h3>
            <p className="text-gray-700">
              Katin Life's Egyptian cotton bedding is crafted with the finest, long-staple fibers. This results in a durable and long-lasting fabric that withstands the test of time. Choose our bedding for a product that maintains its quality and comfort through countless nights.
            </p>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <img src={ec2} alt="Durability and Longevity" className="w-full h-auto rounded-lg" />
          </div>
        </div>

        {/* Breathable Comfort */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-[#2e4c79] mb-4">Breathable Comfort</h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Egyptian cotton is naturally breathable, allowing air to circulate and regulate temperature. With Katin Life's bedding, experience a comfortable and cool sleep environment, ensuring you stay cozy in any season.
          </p>
        </div>

        {/* Elegant Aesthetic */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-16">
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-2xl font-bold text-[#2e4c79] mb-4">Elegant Aesthetic</h3>
            <p className="text-gray-700">
              Elevate your bedroom with the sophisticated aesthetic of Katin Life's Egyptian cotton bedding. The high-quality weave of the fabric, coupled with its inherent luster, creates a polished and elegant appearance that enhances the overall ambiance of your sleep space.
            </p>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <img src={ec3} alt="Elegant Aesthetic" className="w-full h-auto rounded-lg" />
          </div>
        </div>

        {/* Full-width Image */}
        <div className="w-full">
          <img src={ec4} alt="Egyptian Cotton Bedding" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};