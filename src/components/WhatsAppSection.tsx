import React from 'react';
import wsLogo from '../assets/ws.png';

export const WhatsAppSection: React.FC = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello Katin Life, I'm interested in your Egyptian cotton bedding and want to #knowmysheeet");
    window.open(`https://api.whatsapp.com/send?phone=60167447938&text=${message}`, '_blank');
  };

  return (
    <section 
      className="w-full py-4 cursor-pointer" 
      style={{ backgroundColor: '#2e4e73' }}
      onClick={openWhatsApp}
    >
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