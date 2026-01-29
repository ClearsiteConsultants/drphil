import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { IMAGES } from "@/constants/images";

const Footer = () => {
  return (
    <footer className="py-12 bg-slate-900 text-white border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <a href="/" className="flex items-center group mb-4">
              <img 
                src={IMAGES.logoWhite.src} 
                alt={IMAGES.logoWhite.alt}
                className="h-12 w-auto"
              />
            </a>
            <p className="text-sm text-slate-400 font-topbar">
              Adaptive mobile chiropractic care bringing wellness to your home or office.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-2">
            <h3 className="font-heading text-sm text-white mb-2">Quick Links</h3>
            <a href="/" className="text-sm text-slate-400 hover:text-green-400 transition-colors">
              Home
            </a>
            <a href="/about" className="text-sm text-slate-400 hover:text-green-400 transition-colors">
              About Dr. Phil
            </a>
            <a href="/why-house-calls" className="text-sm text-slate-400 hover:text-green-400 transition-colors">
              Why House Calls
            </a>
            <a href="#contact" className="text-sm text-slate-400 hover:text-green-400 transition-colors">
              Contact
            </a>
          </nav>

          {/* Contact & Social */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-xs text-slate-400 mb-1 font-topbar">PHONE</p>
              <a href="tel:+18013693122" className="text-sm text-white hover:text-green-400 transition-colors flex items-center gap-2 font-topbar">
                <Phone className="w-4 h-4" />
                (801) 369-3122
              </a>
            </div>
            <div>
              <p className="text-xs text-slate-400 mb-1 font-topbar">EMAIL</p>
              <a href="mailto:doctorphilchiro@gmail.com" className="text-sm text-white hover:text-green-400 transition-colors flex items-center gap-2 font-topbar">
                <Mail className="w-4 h-4" />
                doctorphilchiro@gmail.com
              </a>
            </div>
            <div className="flex gap-3 pt-2">
              <a href="https://www.facebook.com/drphilmobilechiro" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center hover:bg-green-500/30 transition-colors">
                <Facebook className="w-4 h-4 text-green-400" />
              </a>
              <a href="https://www.instagram.com/p/B7l9oGzJkiA" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center hover:bg-green-500/30 transition-colors">
                <Instagram className="w-4 h-4 text-green-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <p className="text-sm text-slate-400 text-center font-topbar">
            © 2026 Dr. Phil Mobile Chiropractic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
