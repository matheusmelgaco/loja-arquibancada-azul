
const PromoBannerInauguration = () => {
  return (
    <section className="bg-gradient-to-r from-red-600 to-red-500 text-white py-3 px-4 shadow-lg">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center space-x-2">
          <span className="text-yellow-300 text-lg">🎉</span>
          <p className="font-montserrat font-bold text-sm md:text-base">
            <span className="text-yellow-300">Promoção de Inauguração!</span> 
            {' '}Leve 3 camisas e ganhe R$ 20 de desconto em cada.
          </p>
          <a 
            href="https://wa.me/5531999999999?text=Quero%20aproveitar%20a%20promoção%20de%20inauguração%20-%20Leve%203%20camisas%20e%20ganhe%20R$20%20de%20desconto%20em%20cada"
            className="bg-yellow-400 text-red-600 px-3 py-1 rounded-full font-montserrat font-bold text-xs md:text-sm hover:bg-yellow-300 transition-colors ml-2"
          >
            Clique aqui
          </a>
        </div>
      </div>
    </section>
  );
};

export default PromoBannerInauguration;
