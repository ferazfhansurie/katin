
import Slider from 'react-slick';
import { ProductCard } from './ProductCard';
import { Link } from 'react-router-dom'; // Add this import
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png"; // You'll need to import this
import product5 from "../assets/product5.png"; // You'll need to import this
import product6 from "../assets/product6.png"; // You'll need to import this
import product7 from "../assets/product7.png"; // You'll need to import this
import product8 from "../assets/product8.png"; // You'll need to import this
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    image: product1,

    title: 'Snow White',
    description: 'Pristine, pure, sophisticated',
    slug: 'snow-white' // Add this field
  },
  {
    image: product2,
    discount: 20,
    title: 'Deep Grey',
    description: 'Dark, muted, elegant',
     slug: 'deep-grey'
  },
  {
    image: product3,

    title: 'Silver Smoke',
    description: 'Misty, metallic, subtle',
    slug: 'silver-smoke'
  },
  {
    image: product4, // You'll need to import this

    title: 'Midnight Black',
    description: 'Dark, dramatic, powerful',
    slug: 'midnight-black'
  },
  {
    image: product5, // You'll need to import this

    title: 'Pearl Beige',
    description: 'Warm, soft, timeless',
    slug: 'pearl-beige'
  },
  {
    image: product6, // You'll need to import this

    title: 'Aqua Dew',
    description: 'Fresh, serene, tranquil',
    slug: 'aqua-dew'
  
  },
  {
    image: product7, // You'll need to import this

    title: 'Almond Latte',
    description: 'Creamy, serene, relaxing',
    slug: 'almond-latte'
  },
  {
    image: product8, // You'll need to import this

    title: 'Eco-Luxe Bath Towel',
    description: 'Plush, pure, luxurious',
    slug: 'eco-luxe-bath-towel'
  },
];

export const Pricing: React.FC = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="container mx-auto px-4 py-12">
 <Slider {...settings} className="product-slider" aria-label="Product carousel">
          {products.map((product) => (
            <div key={product.slug} className="px-2">
              <Link to={`/product/${product.slug}`}>
                <ProductCard {...product} />
              </Link>
            </div>
          ))}
        </Slider>
    </section>
  );
};