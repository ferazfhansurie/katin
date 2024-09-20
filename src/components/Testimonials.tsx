import React, { useState, useEffect } from 'react';
import { Avatar } from "./ui/avatar";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/700.css";
import test from "../assets/test.png";
import test2 from "../assets/test2.png";
import test3 from "../assets/test3.png";
interface TestimonialProps {
  image: string;
  name: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: test,
    name: "ISABEL",
    comment: "I must say that I own a set of Katin sheets and they feel so silky and soft. They are, without a doubt, the nicest, the highest quality sheets I've ever owned. Pure luxury!"
  },
  {
    image: test2,
    name: "NUR AFIQAH",
    comment: "Super soft 100% Egyptian cotton bedding. Love how it feels when I get into bed. My 4 years old loves it too!"
  },
  {
    image: test3,
    name: "ANDREW CHIN",
    comment: "Luxurious and smooth Egyptian cotton sheets are best for a good restful sleep. This is why it is my second purchase. Delivery is done super quick too!"
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-white font-['Playfair_Display',serif]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#2e4c79] mb-12">Our Testimonials</h2>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 flex flex-col items-center">
                <Avatar className="w-24 h-24 mb-6">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover rounded-full" />
                </Avatar>
                <div className="bg-[#2e4c79] text-white p-6 rounded-lg text-center max-w-md">
                  <h3 className="font-bold text-xl mb-4">{testimonial.name}</h3>
                  <p className="text-sm">{testimonial.comment}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full mx-2 ${
                  currentIndex === index ? 'bg-[#2e4c79]' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};