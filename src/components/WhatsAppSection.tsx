import React from 'react';
import whatsappImage from '../assets/whatsappimage.png';

export const WhatsAppSection: React.FC = () => {
  return (
    <section className="w-full">
      <img 
        src={whatsappImage} 
        alt="WhatsApp To Order" 
        className="w-full h-auto"
      />
    </section>
  );
};