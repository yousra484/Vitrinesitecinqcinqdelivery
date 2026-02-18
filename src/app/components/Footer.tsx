import { Phone, Mail, Instagram } from 'lucide-react';
import logo from 'figma:asset/5b1a80c87236233cbad534426cd31542a2dfe703.png';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-green-500/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="CinQ CinQ" className="h-10 w-10" />
              <span className="font-bold text-xl">CinQ CinQ Delivery</span>
            </div>
            <p className="text-gray-400 max-w-md">
              La plateforme algérienne de livraison multi-services. Tout ce dont vous avez besoin, livré à tout moment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('accueil')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-green-400 transition"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('a-propos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-green-400 transition"
                >
                  À Propos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-green-400 transition"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('applications')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-green-400 transition"
                >
                  Applications
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Phone size={16} className="mr-2 text-green-500" />
                <a href="tel:0549000866" className="hover:text-green-400 transition">
                  0549 000 866
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone size={16} className="mr-2 text-green-500" />
                <a href="tel:0771351845" className="hover:text-green-400 transition">
                  0771 351 845
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2 text-green-500" />
                <a href="mailto:contact.cinqcinqexpress@gmail.com" className="hover:text-green-400 transition text-sm">
                  contact.cinqcinqexpress@gmail.com
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Instagram size={16} className="mr-2 text-green-500" />
                <a 
                  href="https://www.instagram.com/cinqcinq_livraison" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition"
                >
                  @cinqcinq_livraison
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} CinQ CinQ Delivery. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <span>Fondé par Fethallah Bensaiah</span>
              <span>•</span>
              <span>Algérie</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}