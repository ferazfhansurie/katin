import { useState } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logo from "../assets/logo.png";
import headerBackground from "../assets/header.png";
import { useNavigate } from 'react-router-dom';
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/700.css";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/shop", label: "Shop" },
  { href: "/reseller", label: "Reseller" },
  { href: "/contact", label: "Contact" },
  { href: "/oeko-tex", label: "Oeko-Tex" },
  { href: "/threadcount", label: "Threadcount" },
  { href: "/egyptian-cotton", label: "Egyptian Cotton" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleNavigation = (href: string) => {
    setIsOpen(false);
    navigate(href);
  };

  return (
    <header 
      className="sticky top-0 z-40 w-full text-white font-['Playfair_Display',serif]"
      style={{
        backgroundImage: `url(${headerBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-16 px-4 w-screen flex justify-between items-center">
          {/* Left side: Logo */}
          <NavigationMenuItem>
            <a href="/" className="font-bold text-xl flex items-center">
              <img src={logo} alt="Katin Life" className="h-8 mr-2" />
              <span>Katin Life</span>
            </a>
          </NavigationMenuItem>

          {/* Center: Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {routeList.map(({ href, label }: RouteProps) => (
              <a
                key={label}
                href={href}
                onClick={(e) => { e.preventDefault(); handleNavigation(href); }}
                className="text-sm font-medium transition-colors hover:text-green-200"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="lg:hidden">
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="bg-transparent"
              style={{
                backgroundImage: `url(${headerBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <SheetHeader>
                <SheetTitle className="font-bold text-xl text-white">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {routeList.map(({ href, label }: RouteProps) => (
                  <a
                    key={label}
                    href={href}
                    onClick={(e) => { e.preventDefault(); handleNavigation(href); }}
                    className="text-lg font-medium text-white hover:text-green-200"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};