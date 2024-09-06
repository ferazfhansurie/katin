import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { WhatsAppButton } from "./components/ChatbotWidget";
import { CaseStudies } from "./components/CaseStudy";
import { Testimonials } from "./components/Testimonials";
import "./App.css";
import { WhatsAppSection } from './components/WhatsAppSection';
import { ImageCarousel } from './components/ImageCarousel';
import { Shop } from './components/Shop';
import { ProductDetail } from './components/ProductDetail';
import { Reseller } from './components/Reseller';
import { Contact } from './components/Contact';
import { OekoTex } from './components/OekoTex';
import { Threadcount } from './components/Threadcount';
import { EgyptianCotton } from './components/EgyptianCotton';
import { TermsAndConditions } from './components/TermsAndConditions';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { ReturnsAndRefunds } from './components/ReturnsAndRefunds';

function HomePage() {
  return (
    <>
      <Hero />
      <Pricing />
      <WhatsAppSection />
      <ImageCarousel />
      <Testimonials />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
        <Route path="/reseller" element={<Reseller />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/oeko-tex" element={<OekoTex />} />
        <Route path="/threadcount" element={<Threadcount />} />
        <Route path="/egyptian-cotton" element={<EgyptianCotton />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/returns-and-refunds" element={<ReturnsAndRefunds />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* Other routes */}
        </Routes>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </Router>
  );
}

export default App;