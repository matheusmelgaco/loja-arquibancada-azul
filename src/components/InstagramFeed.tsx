
const InstagramFeed = () => {
  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-montserrat font-extrabold text-lg md:text-xl text-[#012F60] mb-3">
            📸 NOS SIGA NO INSTAGRAM
          </h2>
          <p className="font-poppins text-sm text-gray-600 max-w-2xl mx-auto mb-4">
            Veja nossos lançamentos em primeira mão e acompanhe novidades exclusivas
          </p>
          <a 
            href="https://instagram.com/arquibancada.azul"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-montserrat font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-sm"
          >
            @arquibancada.azul
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
