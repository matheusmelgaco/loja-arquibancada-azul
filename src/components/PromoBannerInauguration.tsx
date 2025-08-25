
const PromoBannerInauguration = () => {
  return (
    <section className="bg-[#E1F0FF] text-[#094BAC] py-1.5 px-4 shadow-sm border-b border-blue-100">
      <div className="container mx-auto text-center max-w-6xl">
        <a 
          href="https://wa.me/553190884171?text=Quero%20aproveitar%20a%20promoção%20-%20Leve%203%20camisas%20e%20ganhe%20frete%20grátis"
          className="flex items-center justify-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer"
          rel="noopener noreferrer"
        >
          <span className="text-[#094BAC] text-sm">🎉</span>
          <p className="font-montserrat font-bold text-xs">
            Leve 3 camisas e ganhe <span className="text-[#094BAC]">frete grátis</span>.
          </p>
        </a>
      </div>
    </section>
  );
};

export default PromoBannerInauguration;
