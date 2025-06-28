
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== '/') {
      // Navigate to home page with section hash
      navigate(`/#${sectionId}`);
      // Small delay to ensure page loads before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-[#0038A8] text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/9119691e-5e48-46b0-a1cc-d31ab01f46a4.png" 
              alt="Arquibancada Azul" 
              className="h-10 w-10"
            />
            <span className="font-montserrat font-bold text-lg">Arquibancada Azul</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleNavClick('catalogo')} 
              className="hover:text-[#D9A642] transition-colors"
            >
              Catálogo
            </button>
            <Link to="/sobre" className="hover:text-[#D9A642] transition-colors">Sobre</Link>
            <button 
              onClick={() => handleNavClick('faq')} 
              className="hover:text-[#D9A642] transition-colors"
            >
              FAQ
            </button>
            <Link to="/contato" className="hover:text-[#D9A642] transition-colors">Contato</Link>
          </nav>

          {/* WhatsApp CTA */}
          <a 
            href="https://wa.me/5531999999999?text=Quero%20meu%20manto%20da%20Arquibancada%20Azul"
            className="hidden md:flex items-center bg-[#D9A642] text-[#012F60] px-4 py-2 rounded-lg font-montserrat font-bold hover:bg-yellow-400 transition-colors"
          >
            💬 WhatsApp
          </a>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-[#1E7ACB]">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavClick('catalogo')} 
                className="hover:text-[#D9A642] transition-colors text-left"
              >
                Catálogo
              </button>
              <Link to="/sobre" className="hover:text-[#D9A642] transition-colors" onClick={() => setIsMenuOpen(false)}>
                Sobre
              </Link>
              <button 
                onClick={() => handleNavClick('faq')} 
                className="hover:text-[#D9A642] transition-colors text-left"
              >
                FAQ
              </button>
              <Link to="/contato" className="hover:text-[#D9A642] transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contato
              </Link>
              <a 
                href="https://wa.me/5531999999999?text=Quero%20meu%20manto%20da%20Arquibancada%20Azul"
                className="bg-[#D9A642] text-[#012F60] px-4 py-2 rounded-lg font-montserrat font-bold text-center hover:bg-yellow-400 transition-colors"
              >
                💬 WhatsApp
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
