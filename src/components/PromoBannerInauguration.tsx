
const PromoBannerInauguration = () => {
  return (
    <section className="bg-[#E1F0FF] text-[#094BAC] py-1.5 px-4 shadow-sm border-b border-blue-100">
      <div className="container mx-auto text-center max-w-6xl">
        <a 
          href="https://wa.me/5531908841719?text=Quero%20aproveitar%20a%20promoção%20de%20inauguração%20-%20Leve%203%20camisas%20e%20ganhe%20R$50%20de%20desconto"
          className="flex items-center justify-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer"
          rel="noopener noreferrer"
        >
          <span className="text-[#094BAC] text-sm">🎉</span>
          <p className="font-montserrat font-bold text-xs">
            <span className="text-[#094BAC]">Promoção de Inauguração!</span> 
            {' '}Leve 3 camisas e ganhe R$ 50 de desconto + frete grátis.
          </p>
        </a>
      </div>
    </section>
  );
};

export default PromoBannerInauguration;
