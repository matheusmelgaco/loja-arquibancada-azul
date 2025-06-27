
const InstagramFeed = () => {
  // Mock Instagram posts
  const mockPosts = [
    {
      id: 1,
      image: '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      caption: 'Nova camisa 2025 chegou! 🦊💙'
    },
    {
      id: 2,
      image: '/lovable-uploads/9119691e-5e48-46b0-a1cc-d31ab01f46a4.png',
      caption: 'Arquibancada Azul - Sua loja oficial'
    },
    {
      id: 3,
      image: '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      caption: 'Personalização disponível!'
    },
    {
      id: 4,
      image: '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      caption: 'Qualidade Adidas original'
    },
    {
      id: 5,
      image: '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png',
      caption: 'Detalhes que fazem a diferença'
    },
    {
      id: 6,
      image: '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      caption: 'Vista o manto com orgulho!'
    }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-montserrat font-extrabold text-xl md:text-2xl text-[#012F60] mb-2">
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

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {mockPosts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com/arquibancada.azul"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <img 
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-2">
                  <div className="text-xl mb-1">📸</div>
                  <p className="text-xs font-poppins">{post.caption}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
