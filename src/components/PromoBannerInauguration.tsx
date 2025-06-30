
const PromoBannerInauguration = () => {
  return (
    <section className="bg-gradient-to-r from-red-600 to-red-500 text-white py-1.5 px-4 shadow-lg">
      <div className="container mx-auto text-center max-w-6xl">
        <div className="flex items-center justify-center space-x-2">
          <span className="text-yellow-300 text-sm">🎉</span>
          <p className="font-montserrat font-bold text-xs">
            <span className="text-yellow-300">Promoção de Inauguração!</span> 
            {' '}Leve 3 camisas e ganhe R$ 50 de desconto + frete grátis.
          </p>
          <a 
            href="https://wa.me/5531908841719?text=Quero%20aproveitar%20a%20promoção%20de%20inauguração%20-%20Leve%203%20camisas%20e%20ganhe%20R$50%20de%20desconto"
            className="bg-yellow-400 text-red-600 px-2 py-1 rounded-full font-montserrat font-bold text-xs hover:bg-yellow-300 transition-colors"
            rel="noopener noreferrer"
          >
            Clique aqui
          </a>
        </div>
      </div>
    </section>
  );
};

export default PromoBannerInauguration;
