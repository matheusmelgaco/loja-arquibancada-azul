
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <Link to="/#catalogo" className="hover:text-[#D9A642] transition-colors">Catálogo</Link>
            <Link to="/#sobre" className="hover:text-[#D9A642] transition-colors">Sobre</Link>
            <Link to="/#faq" className="hover:text-[#D9A642] transition-colors">FAQ</Link>
            <Link to="/#contato" className="hover:text-[#D9A642] transition-colors">Contato</Link>
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
              <Link to="/#catalogo" className="hover:text-[#D9A642] transition-colors">Catálogo</Link>
              <Link to="/#sobre" className="hover:text-[#D9A642] transition-colors">Sobre</Link>
              <Link to="/#faq" className="hover:text-[#D9A642] transition-colors">FAQ</Link>
              <Link to="/#contato" className="hover:text-[#D9A642] transition-colors">Contato</Link>
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
