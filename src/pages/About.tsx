
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-[#F7F7F5]">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-montserrat font-extrabold text-3xl md:text-4xl text-[#012F60] text-center mb-8">
            💙 Sobre a Arquibancada Azul
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div>
                <h2 className="font-montserrat font-bold text-xl text-[#0038A8] mb-4">
                  Nossa História
                </h2>
                <p className="font-poppins text-base text-gray-700 leading-relaxed mb-4">
                  A Arquibancada Azul nasceu da paixão genuína pelo Cruzeiro Esporte Clube. 
                  Somos mais que uma loja - somos cruzeirenses de coração que entendemos 
                  o amor pela camisa celeste.
                </p>
                <p className="font-poppins text-base text-gray-700 leading-relaxed">
                  Nossa missão é levar o manto sagrado do Cruzeiro para todos os torcedores, 
                  desde os modelos mais recentes até as camisas retrô que marcaram nossa história.
                </p>
              </div>

              <div>
                <h2 className="font-montserrat font-bold text-xl text-[#0038A8] mb-4">
                  Por que escolher a Arquibancada Azul?
                </h2>
                <ul className="space-y-3">
                  <li className="font-poppins text-base text-gray-700 flex items-center">
                    <span className="w-3 h-3 bg-[#D9A642] rounded-full mr-4"></span>
                    Produtos 1:1 e de qualidade premium
                  </li>
                  <li className="font-poppins text-base text-gray-700 flex items-center">
                    <span className="w-3 h-3 bg-[#D9A642] rounded-full mr-4"></span>
                    Atendimento personalizado via WhatsApp
                  </li>
                  <li className="font-poppins text-base text-gray-700 flex items-center">
                    <span className="w-3 h-3 bg-[#D9A642] rounded-full mr-4"></span>
                    Entrega rápida para todo o Brasil
                  </li>
                  <li className="font-poppins text-base text-gray-700 flex items-center">
                    <span className="w-3 h-3 bg-[#D9A642] rounded-full mr-4"></span>
                    Personalização com nome e número
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={`${import.meta.env.BASE_URL}lovable-uploads/3cb38e33-70ba-4ac7-9cab-5d8666319fa7.png`}
                  alt="Torcida do Cruzeiro - Arquibancada Azul"
                  className="w-full h-64 object-cover"
                />
                <div className="bg-white p-4">
                  <p className="font-poppins text-sm text-gray-600 text-center">
                    A paixão da nossa torcida nos inspira todos os dias
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-montserrat font-bold text-lg text-[#012F60] mb-3">
                  🎯 Nosso Compromisso
                </h3>
                <p className="font-poppins text-base text-gray-700 leading-relaxed">
                  Garantimos produtos de qualidade e a emoção 
                  de vestir as cores do maior de Minas. Cada compra é uma demonstração 
                  de amor ao Cruzeiro.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="https://wa.me/5531990884171?text=Quero%20conhecer%20mais%20sobre%20a%20Arquibancada%20Azul"
              className="bg-[#0038A8] text-white px-8 py-4 rounded-lg font-montserrat font-bold text-lg hover:bg-[#012F60] transform hover:scale-105 transition-all duration-300 shadow-lg inline-block"
            >
              💬 Falar Conosco no WhatsApp
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
