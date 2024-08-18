import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { SponsorsComponent } from "./components/Sponsors";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import CursorDot from './components/CursorDot'
import { LongLetter } from "./components/LongLetter";
import { StepByStepGuide } from "./components/Guide";
import { Comparison } from "./components/Comparison"
import { ChatbotWidget } from "./components/ChatbotWidget";
import "./App.css";

function App() {
  return (
    <>
      <CursorDot />
      <Navbar />
      <Hero />
      <LongLetter />
      <Pricing />
      <SponsorsComponent />
      <About />
      <StepByStepGuide />
      <Comparison />
      <FAQ />
      <Cta />
      <Footer />
      <ScrollToTop />
      <ChatbotWidget />
    </>
  );
}

export default App;