import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { WhatsAppSection } from './WhatsAppSection';

import sw1 from '../assets/sw1.png';
import sw2 from '../assets/sw2.png';
import sw3 from '../assets/sw3.png';
import sw4 from '../assets/sw4.png';
import sw5 from '../assets/sw5.png';
import dg1 from '../assets/dg1.png';
import dg2 from '../assets/dg2.png';
import dg3 from '../assets/dg3.png';
import dg4 from '../assets/dg4.png';
import dg5 from '../assets/dg5.png';
import ss1 from '../assets/ss1.png';
import ss2 from '../assets/ss2.png';
import ss3 from '../assets/ss3.png';
import ss4 from '../assets/ss4.png';
import ss5 from '../assets/ss5.png';
import ad1 from '../assets/ad1.png';
import ad2 from '../assets/ad2.png';
import ad3 from '../assets/ad3.png';
import ad4 from '../assets/ad4.png';
import ad5 from '../assets/ad5.png';
import pb1 from '../assets/pb1.png';
import pb2 from '../assets/pb2.png';
import pb3 from '../assets/pb3.png';
import pb4 from '../assets/pb4.png';
import pb5 from '../assets/pb5.png';
import al1 from '../assets/al1.png';
import al2 from '../assets/al2.png';
import al3 from '../assets/al3.png';
import al4 from '../assets/al4.png';
import al5 from '../assets/al5.png';
import mb1 from '../assets/mb1.png';
import mb2 from '../assets/mb2.png';
import mb3 from '../assets/mb3.png';
import mb4 from '../assets/mb4.png';
import mb5 from '../assets/mb5.png';
import el1 from '../assets/el1.png';
import el2 from '../assets/el2.png';
import el3 from '../assets/el3.png';
import el4 from '../assets/el4.png';
import el5 from '../assets/el5.png';

import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/700.css";

const products = {
  'snow-white': {
    title: 'Snow White Bedset',
    description: `Elevate your sleep experience with our Snow White Bedset, crafted from the finest Egyptian cotton. The long-staple fibers create an incredibly soft, breathable fabric that ensures comfort night after night. Known for its durability and smooth texture, this bedset brings a touch of hotel-like luxury to your home.

What sets it apart is its Oeko-Tex certification, meaning it's free from harmful chemicals, giving you peace of mind about its safety for both you and the environment. The timeless crisp white design fits effortlessly into any bedroom decor, adding a fresh and clean aesthetic.

With the Snow White Bedset, you're not just buying bedding—you're investing in a lifestyle of comfort, elegance, and eco-conscious living.`,
    images: [sw1, sw2, sw3, sw4, sw5],
  },
  'deep-grey': {
    title: 'Deep Grey Bedset',
    description: `The Deep Grey Bedset offers a perfect mix of modern design and cozy comfort. Made from premium Egyptian cotton, it boasts a soft, breathable fabric that feels as good as it looks. The rich grey hue provides a versatile, minimalist aesthetic that suits any bedroom style.

Certified by Oeko-Tex, this bedset is free from harmful chemicals, ensuring a safe, eco-conscious sleep environment. The Deep Grey Bedset is the ultimate choice for those who love clean lines, modern design, and unmatched comfort.`,
    images: [dg1, dg2, dg3, dg4, dg5],
  },
  'silver-smoke': {
    title: 'Silver Smoke Bedset',
    description: `Discover refined luxury with our Silver Smoke Bedset, crafted from the highest quality Egyptian cotton. Its soft, silky fabric drapes effortlessly, offering both comfort and style. The elegant silver-grey tone adds a contemporary touch to any bedroom, balancing between modern chic and timeless design.

This bedset is also Oeko-Tex certified, ensuring it's free from harmful chemicals and safe for both your family and the environment. The Silver Smoke Bedset is perfect for those who value subtle elegance and high-end comfort.`,
    images: [ss1, ss2, ss3, ss4, ss5],
  },
  'aqua-dew': {
    title: 'Aqua Dew Bedset',
    description: `Transform your bedroom into a serene retreat with the Aqua Dew Bedset. Made from premium Egyptian cotton, its luxurious softness and breathability will make every night feel like a getaway. The light, refreshing aqua shade brings a calming vibe that soothes the senses and refreshes your decor.

Certified by Oeko-Tex, this bedset is free from harmful chemicals, so you can rest easy knowing you're making a safe and sustainable choice. The Aqua Dew Bedset is perfect for those who seek both style and comfort in their sleep space.`,
    images: [ad1, ad2, ad3, ad4, ad5],
  },
  'pearl-beige': {
    title: 'Pearl Beige Bedset',
    description: `Embrace the warmth of the Pearl Beige Bedset, a perfect blend of luxury and comfort. Crafted from fine Egyptian cotton, this bedset offers a silky, breathable feel that enhances your sleep experience. The soft beige tone adds a cozy and inviting touch to any bedroom, pairing well with both modern and classic decor.

With its Oeko-Tex certification, you can trust that it's free from harmful substances, making it a safe, eco-friendly choice. The Pearl Beige Bedset is ideal for those who appreciate understated elegance with uncompromised quality.`,
 
    images: [al1, al2, al3, al4, al5],
  },
  'almond-latte': {
    title: 'Almond Latte Bedset',
    description: `Wrap yourself in the soft embrace of the Almond Latte Bedset, made from luxurious Egyptian cotton. The gentle, creamy almond hue creates a warm and inviting ambiance, perfect for a cozy bedroom atmosphere. This bedset's silky texture and breathable fabric deliver exceptional comfort night after night.

With its Oeko-Tex certification, the Almond Latte Bedset ensures both safety and sustainability, making it the perfect choice for those who want a soft, neutral look with a focus on quality and eco-conscious living.`,
images: [pb1, pb2, pb3, pb4, pb5],
  },
  'midnight-black': {
    title: 'Midnight Black Bedset',
    description: `Make a statement with the Midnight Black Bedset, crafted from luxurious Egyptian cotton. Its smooth, ultra-soft texture offers unparalleled comfort, while the deep black color exudes modern sophistication. This bold and elegant bedset is perfect for creating a striking contrast in your bedroom decor.

Oeko-Tex certified for a chemical-free guarantee, the Midnight Black Bedset ensures both style and safety. Elevate your sleep with this sleek and sophisticated choice that combines comfort with an edge.`,
    images: [mb1, mb2, mb3, mb4, mb5],
  },
  'eco-luxe-bath-towel': {
    title: 'Eco-Luxe Bath Towel',
    description: `Upgrade your bath experience with the Eco-Luxe Bath Towel, crafted from premium, eco-friendly materials. Its plush, absorbent texture provides a spa-like feel, while the pure white color adds a touch of timeless elegance to your bathroom.

This towel is Oeko-Tex certified, ensuring it's free from harmful chemicals and gentle on your skin. With its luxurious softness and sustainable production, the Eco-Luxe Bath Towel is perfect for those who want a high-end, eco-conscious addition to their daily routine.`,
    images: [el1, el2, el3, el4, el5],
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
    const message = encodeURIComponent(
      product.title === 'Eco-Luxe Bath Towel'
        ? `Hi Katin Life, I'm looking for a ${product.title}`
        : `Hi Katin Life, I'm looking for a ${product.title} ${selectedSize} Size 4 In 1 Set`
    );
    window.open(`https://api.whatsapp.com/send?phone=60167447938&text=${message}`, '_blank');
  };
  return (
    <div className="font-['Playfair_Display',serif]">
      <div className="container mx-auto px-4 py-8">
        
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <img src={currentImage} alt={product.title} className="w-full h-auto rounded-lg shadow-lg mb-4" />
            <div className="flex justify-between">
              {product.images.map((img: string, index: number) => (
                <img 
                  key={index}
                  src={img} 
                  alt={`${product.title} ${index + 1}`} 
                  className="w-16 h-16 md:w-24 md:h-24 object-cover cursor-pointer rounded-md"
                  onClick={() => setCurrentImage(img)}
                />
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h1 className="text-4xl font-bold text-[#2e4c79] mb-4 text-center md:text-left">{product.title}</h1>
            <p className="text-gray-700 mb-6 text-center md:text-left">{product.description}</p>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#2e4c79] mb-2">Details:</h2>
              {product.title === 'Eco-Luxe Bath Towel' ? (
                <div>
                  <button
                    className="px-4 py-2 rounded bg-[#2e4c79] text-white"
                  >
                    Bath Towel
                  </button>
                  <ul className="list-disc list-inside mt-4">
                    <li>100% pure cotton, 600 GSM for a soft, plush feel.</li>
                    <li>Highly absorbent and durable for everyday use.</li>
                    <li>Oeko-Tex certified, free from harmful chemicals.</li>
                  </ul>
                </div>
              ) : (
                <div>
                  <div className="flex space-x-2 mb-4">
                    {['Super King', 'King', 'Queen', 'Single'].map((size) => (
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
              )}
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
      {product.title !== 'Eco-Luxe Bath Towel' && (
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
      )}
    </div>
  );
};