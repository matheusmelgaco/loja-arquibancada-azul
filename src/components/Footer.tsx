
import { Instagram, MessageCircle, Clock, CreditCard } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#012F60] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/9119691e-5e48-46b0-a1cc-d31ab01f46a4.png" 
                alt="Arquibancada Azul" 
                className="h-12 w-12"
              />
              <div>
                <h3 className="font-montserrat font-bold text-xl">Arquibancada Azul</h3>
                <p className="font-poppins text-sm text-blue-200">A loja do cruzeirense</p>
              </div>
            </div>
            <p className="font-poppins text-sm text-blue-200 leading-relaxed">
              Sua loja oficial de camisas e produtos do Cruzeiro. 
              Qualidade premium, atendimento personalizado e paixão pelo Cabuloso.
            </p>
          </div>

          {/* Atendimento */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4 text-[#D9A642]">
              Atendimento
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-[#D9A642]" />
                <div>
                  <p className="font-poppins text-sm">Segunda a Sexta</p>
                  <p className="font-poppins text-xs text-blue-200">10:00 às 18:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle size={16} className="text-[#D9A642]" />
                <div>
                  <p className="font-poppins text-sm">WhatsApp</p>
                  <p className="font-poppins text-xs text-blue-200">Resposta em até 2h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4 text-[#D9A642]">
              Links Rápidos
            </h4>
            <div className="space-y-2">
              <a href="#catalogo" className="block font-poppins text-sm hover:text-[#D9A642] transition-colors">
                Catálogo
              </a>
              <a href="#faq" className="block font-poppins text-sm hover:text-[#D9A642] transition-colors">
                FAQ
              </a>
              <p className="font-poppins text-sm text-blue-200">
                Não fazemos trocas
              </p>
            </div>
          </div>

          {/* Redes Sociais & Pagamento */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4 text-[#D9A642]">
              Conecte-se
            </h4>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <a 
                  href="https://wa.me/5531999999999"
                  className="bg-green-500 p-3 rounded-lg hover:bg-green-600 transition-colors"
                  title="WhatsApp"
                >
                  <MessageCircle size={20} />
                </a>
                <a 
                  href="https://instagram.com/arquibancada.azul"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors"
                  title="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>

              {/* Payment Methods */}
              <div>
                <p className="font-poppins text-sm mb-2 text-[#D9A642]">Formas de Pagamento:</p>
                <div className="flex items-center space-x-2">
                  <div className="bg-white text-blue-600 px-2 py-1 rounded text-xs font-bold">PIX</div>
                  <div className="bg-white text-blue-600 px-2 py-1 rounded text-xs font-bold">VISA</div>
                  <div className="bg-white text-red-600 px-2 py-1 rounded text-xs font-bold">MASTER</div>
                </div>
                <p className="font-poppins text-xs text-blue-200 mt-1">PIX: 5% de desconto</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-poppins text-sm text-blue-200">
            © {currentYear} Arquibancada Azul. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <p className="font-poppins text-xs text-blue-300">
              Site criado com 
              <a 
                href="https://lovable.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#D9A642] transition-colors ml-1"
              >
                Lovable
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
