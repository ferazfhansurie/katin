import React, { useState } from 'react';
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/700.css";

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`
    );
    window.open(`https://api.whatsapp.com/send?phone=60167447938&text=${whatsappMessage}`, '_blank');
    
    // Reset form fields after submission
    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="container mx-auto px-4 py-8 font-['Playfair_Display',serif]">
      <h1 className="text-4xl font-bold text-[#2e4c79] mb-8 text-center">Contact Us</h1>
      
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8">
          <div className="mb-4">
            <iframe
              width="100%"
              height="300"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://www.openstreetmap.org/export/embed.html?bbox=103.87551280170596%2C1.3230245799227354%2C103.87951280170596%2C1.3270245799227354&amp;layer=mapnik&amp;marker=1.3250245799227354%2C103.87751280170596"
              style={{ border: '1px solid #ccc' }}
            ></iframe>
          </div>
          <div>
            <p className="font-bold">Katin Life by</p>
            <p>KAPITAL TECHNOLOGIES PTE LTD</p>
            <p>9012 TAMPINES STREET 93, #02-211</p>
            <p>TAMPINES INDUSTRIAL PARK A</p>
            <p>SINGAPORE (528845)</p>
            <br />
            <p>AYER@8, A2-2, 3A, JALAN P8G, PRESINT 8,</p>
            <p>62250 WILAYAH PERSEKUTUAN PUTRAJAYA, MALAYSIA</p>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 px-4">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-2 mb-4">
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email*"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md appearance-none"
                required
              >
                <option value="">Subject*</option>
                <option value="general">General Inquiry</option>
                <option value="support">Support</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>
            <div className="mb-4">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                rows={4}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#2e4c79] text-white font-bold py-2 px-4 rounded hover:bg-[#1e3c69] transition-colors"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};