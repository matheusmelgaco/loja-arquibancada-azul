
const PromoBanner = () => {
  return (
    <section className="relative py-12 bg-gradient-to-r from-[#D9A642] to-[#F4C542] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 left-10 text-4xl">⭐</div>
        <div className="absolute top-8 right-20 text-3xl">⭐</div>
        <div className="absolute bottom-6 left-20 text-5xl">⭐</div>
        <div className="absolute bottom-4 right-10 text-3xl">⭐</div>
        <div className="absolute top-12 left-1/2 text-4xl">⭐</div>
        <div className="absolute bottom-8 left-1/3 text-3xl">⭐</div>
        <div className="absolute top-6 right-1/3 text-4xl">⭐</div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="font-montserrat font-extrabold text-2xl md:text-3xl text-[#012F60] mb-4">
          🔥 PERSONALIZE SUA CAMISA!
        </h2>
        <p className="font-poppins text-base md:text-lg text-[#012F60] mb-6 max-w-2xl mx-auto">
          Adicione seu nome e número favorito na camisa dos seus sonhos. 
          Personalizações exclusivas com qualidade profissional!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://wa.me/553190884171?text=Quero%20personalizar%20minha%20camisa%20do%20Cruzeiro%20com%20nome%20e%20número"
            className="bg-[#012F60] text-white px-6 py-3 rounded-lg font-montserrat font-bold text-lg hover:bg-[#0038A8] transform hover:scale-105 transition-all duration-300 shadow-lg"
            rel="noopener noreferrer"
          >
            ✨ Personalizar no WhatsApp
          </a>
          <div className="text-[#012F60] font-poppins text-sm md:text-base">
            <span className="font-bold">Nome + Número</span> por apenas <span className="text-lg font-bold">+R$ 25,00</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
