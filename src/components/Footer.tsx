import logo from "../assets/logo.png";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-muted/50">
      <div className="container py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <a
              rel="noreferrer noopener"
              href="/"
              className="font-bold text-xl flex items-center"
            >
               <img src={logo} alt="Logo" className="w-12 h-12" />
              Juta Teknologi
            </a>
            <p className="mt-4 text-muted-foreground">
              Revolutionizing WhatsApp Business with AI-powered chatbots and automation solutions.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Product</h3>
            <a href="#" className="text-muted-foreground hover:text-primary">AI Chatbot</a>
            <a href="#" className="text-muted-foreground hover:text-primary">Workflows</a>
            <a href="#" className="text-muted-foreground hover:text-primary">Integrations</a>
            <a href="#" className="text-muted-foreground hover:text-primary">Pricing</a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Resources</h3>
            <a href="#" className="text-muted-foreground hover:text-primary">Documentation</a>
            <a href="#" className="text-muted-foreground hover:text-primary">API Reference</a>
            <a href="#" className="text-muted-foreground hover:text-primary">Blog</a>
            <a href="#" className="text-muted-foreground hover:text-primary">Case Studies</a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Company</h3>
            <a href="#" className="text-muted-foreground hover:text-primary">About Us</a>
            <a href="#" className="text-muted-foreground hover:text-primary">Careers</a>
            <a href="#" className="text-muted-foreground hover:text-primary">Contact</a>
            <a href="#" className="text-muted-foreground hover:text-primary">Partners</a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Legal</h3>
            <a href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary">Cookie Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary">GDPR Compliance</a>
          </div>
        </div>
      </div>

      <div className="container pb-14 text-center border-t border-muted-foreground/20 pt-8">
        <p className="text-muted-foreground">
          &copy; {new Date().getFullYear()} Juta Teknologi Sdn Bhd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};