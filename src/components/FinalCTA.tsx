
const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0038A8] to-[#1E7ACB] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-9xl">🦊</div>
        <div className="absolute top-20 right-20 text-7xl">💙</div>
        <div className="absolute bottom-20 left-20 text-8xl">⚽</div>
        <div className="absolute bottom-10 right-10 text-6xl">👑</div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[15rem] opacity-5">⭐</div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-montserrat font-extrabold text-4xl md:text-6xl mb-6 leading-tight">
            👇 VEM VESTIR SEU MANTO CABULOSO! 👇
          </h2>
          
          <p className="font-poppins text-xl md:text-2xl mb-8 opacity-90">
            Não perca mais tempo! Seja mais um cruzeirense satisfeito da Arquibancada Azul.
          </p>

          <div className="space-y-4 mb-8">
            <p className="font-poppins text-lg">
              ✅ <strong>Produtos originais</strong> e de qualidade premium
            </p>
            <p className="font-poppins text-lg">
              ✅ <strong>Pronta entrega</strong> ou encomenda personalizada
            </p>
            <p className="font-poppins text-lg">
              ✅ <strong>Atendimento exclusivo</strong> via WhatsApp
            </p>
            <p className="font-poppins text-lg">
              ✅ <strong>Envio seguro</strong> para todo o Brasil
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="https://wa.me/5531999999999?text=Quero%20meu%20manto%20da%20Arquibancada%20Azul%20agora!"
              className="bg-[#D9A642] text-[#012F60] px-12 py-6 rounded-xl font-montserrat font-extrabold text-xl hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-2xl animate-pulse"
            >
              🛒 COMPRAR AGORA NO WHATSAPP
            </a>
            
            <div className="text-center">
              <p className="font-poppins text-lg opacity-80">
                Ou siga nosso Instagram
              </p>
              <a 
                href="https://instagram.com/arquibancada.azul"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-xl font-montserrat font-bold text-lg hover:bg-white hover:text-[#0038A8] transition-all duration-300 mt-2"
              >
                📸 @arquibancada.azul
              </a>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-80">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🔒</span>
              <span className="font-poppins">Compra Segura</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🚚</span>
              <span className="font-poppins">Frete Rápido</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">💎</span>
              <span className="font-poppins">Qualidade Premium</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🏆</span>
              <span className="font-poppins">Satisfação Garantida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
