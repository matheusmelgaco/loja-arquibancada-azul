
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0038A8] to-[#1E7ACB] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-8xl">⭐</div>
        <div className="absolute top-40 right-20 text-6xl">⭐</div>
        <div className="absolute bottom-32 left-20 text-7xl">⭐</div>
        <div className="absolute bottom-20 right-10 text-5xl">⭐</div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/lovable-uploads/9119691e-5e48-46b0-a1cc-d31ab01f46a4.png" 
            alt="Arquibancada Azul Logo"
            className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 animate-pulse"
          />
        </div>

        {/* Main Headlines */}
        <h1 className="font-montserrat font-extrabold text-4xl md:text-6xl mb-6 leading-tight">
          💙 ARQUIBANCADA AZUL
        </h1>
        <p className="font-montserrat font-bold text-xl md:text-3xl mb-4 text-[#D9A642]">
          A melhor loja pra quem vive o Cruzeiro!
        </p>
        <p className="font-poppins text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90">
          Camisas novas, retrô e edições especiais com pronta entrega ou encomenda personalizada
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://wa.me/5531999999999?text=Quero%20meu%20manto%20da%20Arquibancada%20Azul"
            className="bg-[#D9A642] text-[#012F60] px-8 py-4 rounded-lg font-montserrat font-bold text-lg hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            🛒 Comprar no WhatsApp
          </a>
          <a 
            href="https://instagram.com/arquibancada.azul"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-montserrat font-bold text-lg hover:bg-white hover:text-[#0038A8] transition-all duration-300"
          >
            📸 Ver Instagram
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
