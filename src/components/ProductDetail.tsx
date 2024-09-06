import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { WhatsAppSection } from './WhatsAppSection';

import sw1 from '../assets/sw1.png';
import sw2 from '../assets/sw2.png';
import sw3 from '../assets/sw3.png';
import sw4 from '../assets/sw4.png';
import dg1 from '../assets/dg1.png';
import dg2 from '../assets/dg2.png';
import dg3 from '../assets/dg3.png';
import dg4 from '../assets/dg4.png';
import ss1 from '../assets/ss1.png';
import ss2 from '../assets/ss2.png';
import ss3 from '../assets/ss3.png';
import ss4 from '../assets/ss4.png';


import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/700.css";

const products = {
  'snow-white': {
    title: 'Snow White',
    description: `The Snow White Bedset, made from luxurious Egyptian cotton, offers an unparalleled blend of opulence and comfort. Its long-staple fibers create a silky, breathable fabric that transforms your bed into a haven of tranquility. What sets it apart is its Oeko-Tex certification, ensuring that every component is free from harmful substances. This commitment to environmental responsibility adds a layer of assurance to the already lavish experience. The crisp, clean white design complements any decor, making it a timeless choice that aligns with your values. The Snow White Bedset isn't just bedding; it's a statement of elegance and conscientious living.`,
    images: [sw1, sw2, sw3, sw4],
  },
  'deep-grey': {
    title: 'Deep Grey',
    description: `Elevate your bedroom aesthetic with the Deep Grey Bedset, meticulously designed for a perfect blend of sophistication and comfort. The deep grey egyptian cotton fabric, chosen for its timeless elegance, adds a chic and versatile touch to your space. Experience the luxurious softness of this bedset, transforming your bedtime routine into an indulgent experience. With a cooling sensation, it ensures a tranquil night's sleep, making it ideal for those seeking a refreshing repose. Committed to quality and sustainability, the Deep Grey Bedset proudly holds Oeko-Tex certification, providing a bedding choice that is not only stylish but also free from harmful substances.`,
    images: [dg1, dg2, dg3, dg4],
  },
  'silver-smoke': {
    title: 'Silver Smoke',
    description: `Experience the epitome of modern luxury with the Silver Smoke Bedset, meticulously crafted from exquisite Egyptian cotton. The silver smoke color, chosen for its contemporary allure, effortlessly blends into diverse decor styles, imparting a versatile and chic ambiance to your bedroom. Revel in the opulence of its plush fabric, as the Egyptian cotton ensures a sumptuously soft touch for an indulgent nightly experience. Designed for a tranquil night's sleep, the Silver Smoke Bedset features a cooling sensation, catering to those who seek both style and comfort. With Oeko-Tex certification, this bedset proudly upholds rigorous standards, guaranteeing it is free from harmful substances.`,
    images: [ss1, ss2, ss3, ss4],
  },
};

export const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [currentImage, setCurrentImage] = useState('');
  const [selectedSize, setSelectedSize] = useState('Queen');
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (slug && products[slug as keyof typeof products]) {
      setProduct(products[slug as keyof typeof products]);
      setCurrentImage(products[slug as keyof typeof products].images[0]);
    }
  }, [slug]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const openWhatsApp = () => {
    const message = encodeURIComponent(`Hi Katin Life, I'm looking for a ${product.title} ${selectedSize} Size 4 In 1 Set`);
    window.open(`https://api.whatsapp.com/send?phone=60167447938&text=${message}`, '_blank');
  };

  return (
    <div className="font-['Playfair_Display',serif]">
      <div className="container mx-auto px-4 py-8">
        <div className="text-sm breadcrumbs mb-4">
          <ul>
            <li><a href="/">Home</a></li> 
            <li>Egyptian Cotton Bedsheet</li>
          </ul>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <img src={currentImage} alt={product.title} className="w-full h-auto rounded-lg shadow-lg mb-4" />
            <div className="flex space-x-2">
              {product.images.map((img: string, index: number) => (
                <img 
                  key={index}
                  src={img} 
                  alt={`${product.title} ${index + 1}`} 
                  className="w-24 h-24 object-cover cursor-pointer rounded-md"
                  onClick={() => setCurrentImage(img)}
                />
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h1 className="text-4xl font-bold text-[#2e4c79] mb-4">{product.title}</h1>
            <p className="text-gray-700 mb-6">{product.description}</p>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#2e4c79] mb-2">Details:</h2>
              <div className="flex space-x-2 mb-4">
                {['King', 'Queen', 'Single'].map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 rounded ${selectedSize === size ? 'bg-[#2e4c79] text-white' : 'bg-gray-200 text-[#2e4c79]'}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <ul className="list-disc list-inside mb-4">
                <li>Sets: 4 IN 1 Bedset includes a 1 fitted bedsheet, 2 Pillowcase and 1 Duvet Cover</li>
                <li>Texture: Luxuriously soft, Silky sateen weave for a cool and smooth feel texture</li>
                <li>Material: 100% Pure Egyptian Cotton</li>
              </ul>
            </div>
            <button 
              onClick={openWhatsApp}
              className="bg-green-500 text-white font-bold py-2 px-8 rounded hover:bg-green-600 transition-colors flex items-center mb-6"
            >
              <img src="https://i.postimg.cc/1tHqrKbF/N88bXEv.png" alt="WhatsApp" className="w-6 h-6 mr-2" />
              Purchase via WhatsApp
            </button>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#2e4c79] mb-2">Shipping & Returns:</h3>
              <ul className="list-disc list-inside">
                <li>Free shipping on orders of Two Sets of More</li>
                <li>10 days easy returns</li>
                <li>Shipped same or next business day</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-[#2e4c79] mb-2">How to Purchase via WhatsApp:</h3>
              <ol className="list-decimal list-inside">
                <li>Go through our catalog after you message our official WhatsApp for biz</li>
                <li>Select color and size</li>
                <li>Give your name, address, preferred time and date for delivery</li>
                <li>Share bank transfer payment receipt</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 pb-20">
        <WhatsAppSection />
      </div>
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-[#2e4c79] mb-12 text-center">Our Sizes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-[#2e4c79] mb-4">Bedsheets</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#f0f4f8]">
                  <th className="border p-2 text-left">Size</th>
                  <th className="border p-2 text-left">Length</th>
                  <th className="border p-2 text-left">Width</th>
                  <th className="border p-2 text-left">Height</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">King</td>
                  <td className="border p-2">193cm</td>
                  <td className="border p-2">183cm</td>
                  <td className="border p-2">40cm</td>
                </tr>
                <tr>
                  <td className="border p-2">Queen</td>
                  <td className="border p-2">193cm</td>
                  <td className="border p-2">153cm</td>
                  <td className="border p-2">40cm</td>
                </tr>
                <tr>
                  <td className="border p-2">Single</td>
                  <td className="border p-2">193cm</td>
                  <td className="border p-2">94cm</td>
                  <td className="border p-2">40cm</td>
                </tr>
              </tbody>
            </table>
          
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[#2e4c79] mb-4">Duvet Cover</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#f0f4f8]">
                  <th className="border p-2 text-left">Size</th>
                  <th className="border p-2 text-left">Length</th>
                  <th className="border p-2 text-left">Width</th>
                  <th className="border p-2 text-left">Height</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">King</td>
                  <td className="border p-2">240cm</td>
                  <td className="border p-2">210cm</td>
                  <td className="border p-2">-</td>
                </tr>
                <tr>
                  <td className="border p-2">Queen</td>
                  <td className="border p-2">210cm</td>
                  <td className="border p-2">210cm</td>
                  <td className="border p-2">-</td>
                </tr>
                <tr>
                  <td className="border p-2">Single</td>
                  <td className="border p-2">153cm</td>
                  <td className="border p-2">210cm</td>
                  <td className="border p-2">-</td>
                </tr>
              </tbody>
            </table>
          
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[#2e4c79] mb-4">Pillow Case</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#f0f4f8]">
                  <th className="border p-2 text-left">Size</th>
                  <th className="border p-2 text-left">Length</th>
                  <th className="border p-2 text-left">Width</th>
                  <th className="border p-2 text-left">Height</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Standard</td>
                  <td className="border p-2">50cm</td>
                  <td className="border p-2">75cm</td>
                  <td className="border p-2">26cm</td>
                </tr>
              </tbody>
            </table>
           
          </div>
        </div>
      </div>
    </div>
  );
};