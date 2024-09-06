import React from 'react';
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/700.css";
import ot1 from '../assets/ot1.png';
import ot2 from '../assets/ot2.png';
import ot3 from '../assets/ot3.png';
import ot4 from '../assets/ot4.png';
import ot5 from '../assets/ot5.png';
import ot6 from '../assets/ot6.png';

export const OekoTex: React.FC = () => {
  return (
    <div className="font-['Playfair_Display',serif]">
      {/* Hero Section */}
      <div className="w-full">
        <img src={ot1} alt="Oeko-Tex Hero" className="w-full h-auto" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-[#2e4c79] mb-6 text-center">What Sets Us Apart?</h2>
        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          At Katin Life, we understand that true luxury transcends the realms of plush fabrics and elegant designs—it involves a deep responsibility to our customers and the environment. Our OKEOTEX certification is a badge of honor that distinguishes our bedding as a safe, high-quality choice in a crowded market.
        </p>

        {/* Oeko-Tex Standard 100 Image */}
        <div className="w-full mb-12">
          <img src={ot2} alt="Oeko-Tex Standard 100" className="w-full h-auto" />
        </div>



        {/* Additional Sections */}
        <div className="mt-16 space-y-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8">
              <h3 className="text-2xl font-bold text-[#2e4c79] mb-4">Safety and Purity</h3>
              <p className="text-gray-700">
                When you choose Katin Life, you choose bedding that prioritizes your safety. Our OKEOTEX certification guarantees that every thread, stitch, and finish has undergone rigorous testing, ensuring the absence of harmful substances. Sleep with confidence, knowing that your bedding is free from allergens and toxins, creating a pure and serene environment for your rest.
              </p>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <img src={ot3} alt="Safety and Purity" className="w-full h-auto rounded-lg" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 md:pl-8">
              <h3 className="text-2xl font-bold text-[#2e4c79] mb-4">Quality Craftsmanship</h3>
              <p className="text-gray-700">
                Luxury at Katin Life is synonymous with quality. Our OKEOTEX certified bedding goes beyond offering a plush surface—it embodies our commitment to delivering uncompromised quality. Each product is crafted with meticulous attention to detail, providing you with not just a comfortable night's sleep but a premium experience that stands the test of time.
              </p>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <img src={ot4} alt="Quality Craftsmanship" className="w-full h-auto rounded-lg" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8">
              <h3 className="text-2xl font-bold text-[#2e4c79] mb-4">Environmental Stewardship</h3>
              <p className="text-gray-700">
                As custodians of the environment, we take pride in our eco-friendly practices. The OKEOTEX certification aligns with our mission to minimize our ecological footprint. When you choose Katin Life, you're choosing bedding that not only cares for you but also for the planet, contributing to a sustainable and responsible future.
              </p>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <img src={ot5} alt="Environmental Stewardship" className="w-full h-auto rounded-lg" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 md:pl-8">
              <h3 className="text-2xl font-bold text-[#2e4c79] mb-4">Trust in Transparency</h3>
              <p className="text-gray-700">
                In a world where trust is paramount, Katin Life stands as a brand committed to transparency. Our OKEOTEX certification is a guarantee that we meet and exceed industry standards, providing you with the peace of mind that your choice in bedding aligns with the highest levels of quality and safety.
              </p>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <img src={ot6} alt="Trust in Transparency" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-[#2e4c79] mb-4">Experience the Katin Life Difference</h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Elevate your sleep sanctuary with Katin Life's OKEOTEX certified bedding. Immerse yourself in the perfect synergy of luxury, safety, and environmental responsibility. As you embark on a journey with us, discover a world where each night is a celebration of well-being and indulgence. Choose Katin Life—where your comfort and peace of mind come first.
          </p>
        </div>
      </div>
    </div>
  );
};