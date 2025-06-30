
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#F7F7F5]">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-montserrat font-extrabold text-2xl md:text-3xl text-[#012F60] text-center mb-6">
            📞 Entre em Contato
          </h1>
          
          <p className="font-poppins text-base text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Estamos aqui para ajudar você a encontrar a camisa perfeita do Cruzeiro. 
            Entre em contato conosco!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-3">
                  <MessageCircle className="text-[#0038A8] mr-3" size={20} />
                  <h3 className="font-montserrat font-bold text-lg text-[#012F60]">
                    WhatsApp (Preferencial)
                  </h3>
                </div>
                <p className="font-poppins text-sm text-gray-700 mb-3">
                  Nossa principal forma de atendimento. Resposta rápida e atendimento personalizado.
                </p>
                <a 
                  href="https://wa.me/5531908841719"
                  className="bg-[#25D366] text-white px-4 py-2 rounded-lg font-montserrat font-bold text-sm hover:bg-[#20B858] transition-colors inline-block"
                  rel="noopener noreferrer"
                >
                  💬 (31) 9 0884-1719
                </a>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-3">
                  <Phone className="text-[#0038A8] mr-3" size={20} />
                  <h3 className="font-montserrat font-bold text-lg text-[#012F60]">
                    Telefone
                  </h3>
                </div>
                <p className="font-poppins text-sm text-gray-700 mb-2">
                  <strong>(31) 9 0884-1719</strong>
                </p>
                <p className="font-poppins text-xs text-gray-600">
                  Ligações e mensagens SMS
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-3">
                  <Mail className="text-[#0038A8] mr-3" size={20} />
                  <h3 className="font-montserrat font-bold text-lg text-[#012F60]">
                    E-mail
                  </h3>
                </div>
                <p className="font-poppins text-sm text-gray-700 mb-2">
                  <strong>lojaarquibancadaazul@gmail.com</strong>
                </p>
                <p className="font-poppins text-xs text-gray-600">
                  Para dúvidas e suporte geral
                </p>
              </div>
            </div>

            {/* Business Hours and Location */}
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-3">
                  <Clock className="text-[#0038A8] mr-3" size={20} />
                  <h3 className="font-montserrat font-bold text-lg text-[#012F60]">
                    Horário de Atendimento
                  </h3>
                </div>
                <div className="space-y-1 font-poppins text-sm text-gray-700">
                  <p><strong>Segunda a Sexta:</strong> 8h às 18h</p>
                  <p><strong>Sábado:</strong> 8h às 14h</p>
                  <p><strong>Domingo:</strong> 9h às 12h</p>
                  <p className="text-xs text-gray-600 mt-2">
                    * Atendimento via WhatsApp
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-3">
                  <MapPin className="text-[#0038A8] mr-3" size={20} />
                  <h3 className="font-montserrat font-bold text-lg text-[#012F60]">
                    Localização
                  </h3>
                </div>
                <p className="font-poppins text-sm text-gray-700 mb-2">
                  <strong>Belo Horizonte - MG</strong>
                </p>
                <p className="font-poppins text-xs text-gray-600">
                  Atendemos todo o Brasil via e-commerce
                </p>
              </div>

              <div className="bg-[#0038A8] p-4 rounded-lg text-white">
                <h3 className="font-montserrat font-bold text-lg mb-3">
                  🚀 Resposta Rápida
                </h3>
                <p className="font-poppins text-sm mb-3">
                  Respondemos seu WhatsApp em até 30 minutos durante nosso horário de funcionamento!
                </p>
                <a 
                  href="https://wa.me/5531908841719?text=Olá!%20Tenho%20interesse%20nos%20produtos%20da%20Arquibancada%20Azul"
                  className="bg-[#D9A642] text-[#012F60] px-4 py-2 rounded-lg font-montserrat font-bold text-sm hover:bg-yellow-400 transition-colors inline-block"
                  rel="noopener noreferrer"
                >
                  Começar Conversa
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-montserrat font-bold text-xl text-[#012F60] mb-3">
              📱 Nos Siga nas Redes Sociais
            </h3>
            <p className="font-poppins text-sm text-gray-600 mb-4">
              Fique por dentro das novidades, promoções e lançamentos
            </p>
            <a 
              href="https://instagram.com/arquibancada.azul"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-montserrat font-bold text-base hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg inline-block"
            >
              📸 @arquibancada.azul
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
