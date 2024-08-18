import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Sponsors() {
  const sponsorImages = [
    'https://assets.cdn.filesafe.space/LckX7xmrOUBw8j9G2nUr/media/66ab34c8e33315b9eca1ef66.png',
    'https://firebasestorage.googleapis.com/v0/b/onboarding-a5fcb.appspot.com/o/Image%20with%20removed%20background.png?alt=media&token=6491f11f-6241-4fea-b331-b421b9833468',
    'https://firebasestorage.googleapis.com/v0/b/onboarding-a5fcb.appspot.com/o/Image%20with%20removed%20background%20(1).png?alt=media&token=f30075ad-bc33-4d00-aadd-273cb35f1750',
    'https://firebasestorage.googleapis.com/v0/b/onboarding-a5fcb.appspot.com/o/Upload%20Image%20removebg-preview.png?alt=media&token=4bc39adc-63f2-41e9-889f-187d612ba12c',
    'https://assets.cdn.filesafe.space/LckX7xmrOUBw8j9G2nUr/media/66ab36268899dc12dc80f4c1.png',
    'https://firebasestorage.googleapis.com/v0/b/onboarding-a5fcb.appspot.com/o/RemoveBG%20Preview.png?alt=media&token=bd9e20c7-4644-4fb9-b618-f71269f1900e',
    'https://assets.cdn.filesafe.space/LckX7xmrOUBw8j9G2nUr/media/66ab40fea7243b020ee1f58f.png'
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <div className="sponsor-carousel">
      <Slider {...settings}>
        {sponsorImages.map((url, index) => (
          <div key={index} className="px-2">
            <img src={url} alt={`Sponsor ${index + 1}`} className="h-14.5 w-auto mx-auto object-contain" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export const SponsorsComponent = () => {
  return (
    <section
      id="sponsors"
      className="container pt-24 sm:py-32"
    >
        <h2 className="text-center text-2xl lg:text-4xl font-bold mb-8 text-primary dark:text-white">
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Trusted
        </span>{' '}
        By Businesses in Malaysia by Malaysians 🇲🇾 
      </h2>
      <Sponsors />
    </section>
  );
};