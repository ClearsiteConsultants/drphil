import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { IMAGES } from "@/constants/images";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center group">
            <img 
              src={IMAGES.logoSimple.src} 
              alt={IMAGES.logoSimple.alt}
              className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="/about" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="/why-house-calls" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Why House Calls
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
            <a href="#contact">
              <Button variant="outline" size="sm">
                Schedule Now
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-6 pb-4 flex flex-col gap-4 animate-fade-in">
            <a href="/" className="text-muted-foreground hover:text-primary transition-colors font-medium py-2">
              Home
            </a>
            <a href="/about" className="text-muted-foreground hover:text-primary transition-colors font-medium py-2">
              About
            </a>
            <a href="/why-house-calls" className="text-muted-foreground hover:text-primary transition-colors font-medium py-2">
              Why House Calls
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors font-medium py-2">
              Contact
            </a>
            <a href="#contact" className="w-full mt-2">
              <Button variant="outline" className="w-full">
                Schedule Now
              </Button>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
