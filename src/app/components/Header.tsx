import { useState } from 'react';
import { Menu, X, Phone, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import logo from 'figma:asset/5b1a80c87236233cbad534426cd31542a2dfe703.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-green-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="CinQ CinQ" className="h-12 w-12" />
            <span className="text-white font-bold text-xl">CinQ CinQ Delivery</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('accueil')} className="text-gray-300 hover:text-green-400 transition">
              Accueil
            </button>
            <button onClick={() => scrollToSection('a-propos')} className="text-gray-300 hover:text-green-400 transition">
              À Propos
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-green-400 transition">
              Services
            </button>
            <button onClick={() => scrollToSection('applications')} className="text-gray-300 hover:text-green-400 transition">
              Applications
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-green-400 transition">
              Contact
            </button>
          </nav>

          {/* Contact Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:0549000866" className="text-gray-300 hover:text-green-400 transition">
              <Phone size={20} />
            </a>
            <a 
              href="https://www.instagram.com/cinqcinq_livraison" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-green-400 transition"
            >
              <Instagram size={20} />
            </a>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-green-500 hover:bg-green-400 text-black font-semibold"
            >
              Contactez-nous
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('accueil')} className="text-gray-300 hover:text-green-400 transition text-left">
                Accueil
              </button>
              <button onClick={() => scrollToSection('a-propos')} className="text-gray-300 hover:text-green-400 transition text-left">
                À Propos
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-green-400 transition text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('applications')} className="text-gray-300 hover:text-green-400 transition text-left">
                Applications
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-green-400 transition text-left">
                Contact
              </button>
              <div className="flex items-center space-x-4 pt-4">
                <a href="tel:0549000866" className="text-gray-300 hover:text-green-400 transition">
                  <Phone size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/cinqcinq_livraison" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green-400 transition"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}