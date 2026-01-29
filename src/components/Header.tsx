import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IMAGES } from "@/constants/images";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const getLinkClass = (path: string) => {
    return `transition-colors font-medium ${
      isActive(path) 
        ? "text-primary font-semibold" 
        : "text-muted-foreground hover:text-primary"
    }`;
  };

  return (
    <>
      {/* Skip to main content link for keyboard users */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Skip to main content
      </a>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm" role="banner">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={IMAGES.logoSimple.src} 
              alt={IMAGES.logoSimple.alt}
              className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            <Link to="/" className={getLinkClass("/")}>
              Home
            </Link>
            <Link to="/about" className={getLinkClass("/about")}>
              About
            </Link>
            <Link to="/why-house-calls" className={getLinkClass("/why-house-calls")}>
              Why House Calls
            </Link>
            <a 
              href="http://drphilmobilechiro.janeapp.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="default" size="sm">
                Schedule Now
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav 
            id="mobile-navigation"
            className="md:hidden pt-6 pb-4 flex flex-col gap-4 animate-fade-in" 
            aria-label="Mobile navigation"
          >
            <Link 
              to="/" 
              className={`${getLinkClass("/")} py-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`${getLinkClass("/about")} py-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/why-house-calls" 
              className={`${getLinkClass("/why-house-calls")} py-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              Why House Calls
            </Link>
            <a 
              href="http://drphilmobilechiro.janeapp.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full mt-2"
            >
              <Button variant="default" className="w-full">
                Schedule Now
              </Button>
            </a>
          </nav>
        )}
      </div>
    </header>
    </>
  );
};

export default Header;
