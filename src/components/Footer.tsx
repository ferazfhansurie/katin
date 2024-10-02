import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/700.css";
import logo from "../assets/logo.png";
import headerBackground from "../assets/header.png";

export const Footer: React.FC = () => {
  return (
    <footer 
      className="text-white py-12 font-['Playfair_Display',serif] bg-cover bg-center"
      style={{ backgroundImage: `url(${headerBackground})` }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Center align content on mobile */}
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="Katin Logo" className="w-20 h-20" />
            <p className="mt-4 text-xl font-bold">#KNOWYOURSHEET</p>
          </div>
          
          {/* Center align content on mobile */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Katin', path: '/about' },
                { name: 'Shop', path: '/shop' },
                { name: 'Reseller', path: '/reseller' },
                { name: 'Contact Us', path: '/contact' },
                { name: 'Bulk Purchase', path: '/bulk-purchase' },
                { name: 'Oeko-Tex', path: '/oeko-tex' },
                { name: 'Threadcount', path: '/threadcount' },
                { name: 'Egyptian Cotton', path: '/egyptian-cotton' },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:underline">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Center align content on mobile */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              {[
                { name: 'Terms & Conditions', path: '/terms-and-conditions' },
                { name: 'Returns & Refunds', path: '/returns-and-refunds' },
                { name: 'Privacy Policy', path: '/privacy-policy' },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:underline">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Center align content on mobile */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Let's Talk</h3>
            <p>contact@katin.life</p>
            <p>+6016-7447938</p>
            {/* Center align social icons on mobile */}
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="https://www.facebook.com/Katinlife/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/katinlife.official/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};