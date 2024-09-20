import React from 'react';
import wsLogo from '../assets/ws.png';

export const WhatsAppSection: React.FC = () => {
  return (
    <section className="w-full py-4" style={{ backgroundColor: '#2e4e73' }}>
      <div className="container mx-auto px-4 flex justify-center items-center">
        <img 
          src={wsLogo} 
          alt="WhatsApp Logo" 
          className="w-22 h-22"
        />
      </div>
    </section>
  );
};