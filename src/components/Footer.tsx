
import { Instagram, MessageCircle, Clock, CreditCard } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#012F60] text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Logo & Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-2">
              <img 
                src={`${import.meta.env.BASE_URL}lovable-uploads/9119691e-5e48-46b0-a1cc-d31ab01f46a4.png`} 
                alt="Arquibancada Azul" 
                className="h-6 w-6"
                loading="lazy"
              />
              <div>
                <h3 className="font-montserrat font-bold text-base">Arquibancada Azul</h3>
                <p className="font-poppins text-xs text-blue-200">A loja do cruzeirense</p>
              </div>
            </div>
            <p className="font-poppins text-xs text-blue-200 leading-relaxed">
              A loja pra quem vive o Cruzeiro. 
              Qualidade premium 1:1, atendimento personalizado e paixão pelo Cabuloso.
            </p>
          </div>

          {/* Atendimento */}
          <div>
            <h4 className="font-montserrat font-bold text-sm mb-2 text-[#D9A642]">
              Atendimento
            </h4>
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <Clock size={12} className="text-[#D9A642]" />
                <div>
                  <p className="font-poppins text-xs">Segunda a Sábado</p>
                  <p className="font-poppins text-xs text-blue-200">08:00 às 18:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle size={12} className="text-[#D9A642]" />
                <div>
                  <p className="font-poppins text-xs">WhatsApp</p>
                  <p className="font-poppins text-xs text-blue-200">Resposta em até 2h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-montserrat font-bold text-sm mb-2 text-[#D9A642]">
              Links Rápidos
            </h4>
            <div className="space-y-1">
              <a href="#catalogo" className="block font-poppins text-xs hover:text-[#D9A642] transition-colors">
                Catálogo
              </a>
              <a href="#faq" className="block font-poppins text-xs hover:text-[#D9A642] transition-colors">
                FAQ
              </a>
            </div>
          </div>

          {/* Redes Sociais & Pagamento */}
          <div>
            <h4 className="font-montserrat font-bold text-sm mb-2 text-[#D9A642]">
              Conecte-se
            </h4>
            <div className="space-y-2">
              <div className="flex space-x-2">
                <a 
                  href="https://wa.me/5531908841719"
                  className="bg-green-500 p-1 rounded-lg hover:bg-green-600 transition-colors"
                  title="WhatsApp"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={14} />
                </a>
                <a 
                  href="https://instagram.com/arquibancada.azul"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 p-1 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors"
                  title="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={14} />
                </a>
              </div>

              {/* Payment Methods */}
              <div>
                <p className="font-poppins text-xs mb-1 text-[#D9A642]">Formas de Pagamento:</p>
                <div className="flex items-center space-x-1">
                  <div className="bg-white text-blue-600 px-1 py-0.5 rounded text-xs font-bold">PIX</div>
                  <div className="bg-white text-blue-600 px-1 py-0.5 rounded text-xs font-bold">VISA</div>
                  <div className="bg-white text-red-600 px-1 py-0.5 rounded text-xs font-bold">MASTER</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-700 mt-3 pt-3 flex flex-col md:flex-row justify-between items-center">
          <p className="font-poppins text-xs text-blue-200">
            © {currentYear} Arquibancada Azul. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
