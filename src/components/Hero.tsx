
const Hero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#0038A8] to-[#1E7ACB] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-6xl">⭐</div>
        <div className="absolute top-32 right-20 text-4xl">⭐</div>
        <div className="absolute bottom-20 left-20 text-5xl">⭐</div>
        <div className="absolute bottom-16 right-10 text-4xl">⭐</div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 py-8">
        {/* Logo */}
        <div className="mb-6">
          <img 
            src="/lovable-uploads/9119691e-5e48-46b0-a1cc-d31ab01f46a4.png" 
            alt="Arquibancada Azul Logo"
            className="w-20 h-20 md:w-28 md:h-28 mx-auto mb-4 animate-pulse"
          />
        </div>

        {/* Main Headlines */}
        <h1 className="font-montserrat font-extrabold text-2xl md:text-4xl mb-4 leading-tight">
          💙 ARQUIBANCADA AZUL
        </h1>
        <p className="font-montserrat font-bold text-lg md:text-xl mb-3 text-[#D9A642]">
          A melhor loja pra quem vive o Cruzeiro!
        </p>
        <p className="font-poppins text-sm md:text-base mb-6 max-w-2xl mx-auto opacity-90">
          Camisas novas, retrô e edições especiais com pronta entrega ou encomenda personalizada
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://wa.me/5531999999999?text=Quero%20meu%20manto%20da%20Arquibancada%20Azul"
            className="bg-[#D9A642] text-[#012F60] px-6 py-3 rounded-lg font-montserrat font-bold text-base hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            🛒 Comprar no WhatsApp
          </a>
          <a 
            href="https://instagram.com/arquibancada.azul"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-6 py-3 rounded-lg font-montserrat font-bold text-base hover:bg-white hover:text-[#0038A8] transition-all duration-300"
          >
            📸 Ver Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
