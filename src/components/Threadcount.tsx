import React from 'react';
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/700.css";
import tc from '../assets/tc.png';
import tc2 from '../assets/tc2.png';
import tc3 from '../assets/tc3.png';
import tc4 from '../assets/tc4.png';
import tc5 from '../assets/tc5.png';

export const Threadcount: React.FC = () => {
  return (
    <div className="font-['Playfair_Display',serif]">
      {/* Hero Section */}
      <div className="w-full">
        <img src={tc} alt="Threadcount Hero" className="w-full h-auto" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-[#2e4c79] mb-6 text-center">Understanding Thread Count</h2>
        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Thread count is more than just a number—it's a promise of quality and comfort. At Katin Life, we believe in educating our customers about the true meaning of thread count and its impact on your sleep experience.
        </p>

        {/* Features */}
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8">
              <h3 className="text-2xl font-bold text-[#2e4c79] mb-4">Supreme Softness</h3>
              <p className="text-gray-700">
                Our 900-thread count Egyptian cotton bedding delivers an unparalleled level of softness. The increased thread density creates a smooth and velvety texture, ensuring a luxurious touch that invites you to unwind and relax in the lap of comfort.
              </p>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <img src={tc2} alt="Supreme Softness" className="w-full h-auto rounded-lg" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8">
              <h3 className="text-2xl font-bold text-[#2e4c79] mb-4">Unmatched Durability</h3>
              <p className="text-gray-700">
                Katin Life's commitment to quality is evident in the durability of our bedding. The high thread count contributes to a tight weave, making the fabric more resistant to wear and tear. Experience bedding that not only feels luxurious but also stands the test of time.
              </p>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <img src={tc3} alt="Unmatched Durability" className="w-full h-auto rounded-lg" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8">
              <h3 className="text-2xl font-bold text-[#2e4c79] mb-4">Breathable Opulence</h3>
              <p className="text-gray-700">
                Despite the high thread count, our Egyptian cotton bedding maintains excellent breathability. The finely woven fabric allows for optimal airflow, ensuring a comfortable sleep environment. Enjoy the perfect balance of opulence and breathability with Katin Life.
              </p>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <img src={tc4} alt="Breathable Opulence" className="w-full h-auto rounded-lg" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8">
              <h3 className="text-2xl font-bold text-[#2e4c79] mb-4">Aesthetically Refined</h3>
              <p className="text-gray-700">
                Elevate your bedroom decoration with the refined aesthetic of our 900-thread count Egyptian cotton bedding. The tight weave creates a sleek and polished appearance, adding a touch of sophistication to your sleep space.
              </p>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <img src={tc5} alt="Aesthetically Refined" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-16 text-center">
          <p className="text-gray-700 max-w-3xl mx-auto">
            Choose Katin Life for an indulgent experience where the thread count isn't just a number but a testament to the superior quality and luxury we bring to your bedroom. Invest in bedding that goes beyond expectations, offering a combination of softness, durability, breathability, and aesthetic appeal.
          </p>
        </div>
      </div>
    </div>
  );
};