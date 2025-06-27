
const FinalCTA = () => {
  return (
    <section className="py-8 bg-gradient-to-br from-[#0038A8] to-[#1E7ACB] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 text-3xl">🦊</div>
        <div className="absolute top-8 right-8 text-2xl">💙</div>
        <div className="absolute bottom-8 left-8 text-3xl">⚽</div>
        <div className="absolute bottom-4 right-4 text-2xl">👑</div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl opacity-5">⭐</div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-montserrat font-extrabold text-xl md:text-2xl mb-3 leading-tight">
            👇 VEM VESTIR SEU MANTO CABULOSO! 👇
          </h2>
          
          <p className="font-poppins text-base md:text-lg mb-4 opacity-90">
            Não perca mais tempo! Seja mais um cruzeirense satisfeito da Arquibancada Azul.
          </p>

          <div className="space-y-1 mb-4">
            <p className="font-poppins text-xs md:text-sm">
              ✅ <strong>Produtos originais</strong> e de qualidade premium
            </p>
            <p className="font-poppins text-xs md:text-sm">
              ✅ <strong>Pronta entrega</strong> ou encomenda personalizada
            </p>
            <p className="font-poppins text-xs md:text-sm">
              ✅ <strong>Atendimento exclusivo</strong> via WhatsApp
            </p>
            <p className="font-poppins text-xs md:text-sm">
              ✅ <strong>Envio seguro</strong> para todo o Brasil
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a 
              href="https://wa.me/5531999999999?text=Quero%20meu%20manto%20da%20Arquibancada%20Azul%20agora!"
              className="bg-[#D9A642] text-[#012F60] px-6 py-3 rounded-xl font-montserrat font-extrabold text-base hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              🛒 COMPRAR AGORA NO WHATSAPP
            </a>
            
            <div className="text-center">
              <p className="font-poppins text-xs opacity-80 mb-1">
                Ou siga nosso Instagram
              </p>
              <a 
                href="https://instagram.com/arquibancada.azul"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white/20 backdrop-blur-sm border-2 border-white text-white px-4 py-2 rounded-xl font-montserrat font-bold text-sm hover:bg-white hover:text-[#0038A8] transition-all duration-300"
              >
                📸 @arquibancada.azul
              </a>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-6 flex flex-wrap justify-center items-center gap-4 opacity-80">
            <div className="flex items-center space-x-1">
              <span className="text-sm">🔒</span>
              <span className="font-poppins text-xs">Compra Segura</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-sm">🚚</span>
              <span className="font-poppins text-xs">Frete Rápido</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-sm">💎</span>
              <span className="font-poppins text-xs">Qualidade Premium</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-sm">🏆</span>
              <span className="font-poppins text-xs">Satisfação Garantida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
