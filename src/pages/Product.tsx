
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft, Star } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Product = () => {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const [showSizeChart, setShowSizeChart] = useState(false);

  // Mock data - em produção isso viria de uma API ou banco de dados
  const products = [
    {
      id: 'camisa-cruzeiro-i-2025-26',
      name: 'Camisa Cruzeiro I 2025/26 - Adidas',
      price: 'R$ 189,90',
      category: '2025/26',
      images: [
        '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
        '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
        '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
        '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
      ],
      isHighlight: true,
      description: 'Nova camisa oficial do Cruzeiro para a temporada 2025/26. Produzida pela Adidas com tecnologia Climacool que oferece máximo conforto e respirabilidade. Tecido de alta qualidade com bordados oficiais do clube.',
      features: [
        'Tecnologia Climacool da Adidas',
        'Tecido 100% poliéster',
        'Bordados oficiais do Cruzeiro',
        'Gola em V tradicional',
        'Disponível em todos os tamanhos'
      ]
    },
    {
      id: 'camisa-cruzeiro-retro-1997',
      name: 'Camisa Cruzeiro Retrô 1997 - Tríplice Coroa',
      price: 'R$ 149,90',
      category: 'Retrô',
      images: [
        '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
        '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
        '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
        '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
      ],
      isHighlight: true,
      description: 'Camisa retrô comemorativa da conquista histórica da Tríplice Coroa em 1997. Uma peça única para colecionadores e torcedores que viveram esse momento histórico.',
      features: [
        'Edição comemorativa Tríplice Coroa',
        'Tecido premium vintage',
        'Patch especial bordado',
        'Numeração e nomes disponíveis',
        'Peça de colecionador'
      ]
    }
  ];

  const product = products.find(p => p.id === id);
  const currentIndex = products.findIndex(p => p.id === id);
  
  if (!product) {
    return (
      <div className="min-h-screen bg-[#F7F7F5]">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-[#012F60] mb-4">Produto não encontrado</h1>
          <Link to="/" className="text-[#0038A8] hover:underline">
            Voltar para a página inicial
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const nextProduct = () => {
    const nextIndex = (currentIndex + 1) % products.length;
    return products[nextIndex];
  };

  const prevProduct = () => {
    const prevIndex = (currentIndex - 1 + products.length) % products.length;
    return products[prevIndex];
  };

  const sizeChart = [
    { size: 'P', chest: '69-71', width: '53-55', height: '162-170', weight: '50-62' },
    { size: 'M', chest: '71-73', width: '55-57', height: '170-176', weight: '62-78' },
    { size: 'G', chest: '73-75', width: '57-58', height: '176-182', weight: '78-83' },
    { size: 'GG', chest: '75-78', width: '58-60', height: '182-190', weight: '83-90' },
    { size: 'XGG', chest: '78-81', width: '60-62', height: '190-195', weight: '90-97' },
    { size: 'XXG', chest: '81-83', width: '62-64', height: '192-197', weight: '97-104' }
  ];

  return (
    <div className="min-h-screen bg-[#F7F7F5]">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center text-[#0038A8] hover:text-[#012F60] mb-6 font-montserrat font-bold"
        >
          <ArrowLeft size={20} className="mr-2" />
          Voltar ao catálogo
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative h-96 bg-white rounded-xl overflow-hidden shadow-lg">
              <img 
                src={product.images[currentImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {product.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              {/* Category badge */}
              <div className="absolute top-4 left-4 bg-[#0038A8] text-white px-3 py-1 rounded text-sm font-montserrat font-bold">
                {product.category}
              </div>

              {/* Highlight badge */}
              {product.isHighlight && (
                <div className="absolute top-4 right-4 bg-[#D9A642] text-[#012F60] px-3 py-1 rounded text-sm font-montserrat font-bold flex items-center">
                  <Star size={14} className="mr-1" fill="currentColor" />
                  Destaque
                </div>
              )}
            </div>

            {/* Image Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      currentImage === index ? 'border-[#D9A642]' : 'border-gray-200'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="font-montserrat font-extrabold text-2xl md:text-3xl text-[#012F60] mb-2">
                {product.name}
              </h1>
              <p className="font-poppins text-3xl font-bold text-[#0038A8] mb-4">
                {product.price}
              </p>
            </div>

            <div>
              <h3 className="font-montserrat font-bold text-lg text-[#012F60] mb-3">
                Descrição
              </h3>
              <p className="font-poppins text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div>
              <h3 className="font-montserrat font-bold text-lg text-[#012F60] mb-3">
                Características
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="font-poppins text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-[#D9A642] rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Size Chart Button */}
            <button
              onClick={() => setShowSizeChart(!showSizeChart)}
              className="w-full bg-gray-100 text-[#012F60] py-3 rounded-lg font-montserrat font-bold hover:bg-gray-200 transition-colors"
            >
              {showSizeChart ? 'Ocultar' : 'Ver'} Tabela de Tamanhos
            </button>

            {/* Size Chart */}
            {showSizeChart && (
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <h4 className="font-montserrat font-bold text-lg text-[#012F60] mb-4">
                  Tabela de Tamanhos
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#0038A8] text-white">
                        <th className="p-2 text-left">Tamanho</th>
                        <th className="p-2 text-left">Comprimento (cm)</th>
                        <th className="p-2 text-left">Largura (cm)</th>
                        <th className="p-2 text-left">Altura (cm)</th>
                        <th className="p-2 text-left">Peso (kg)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sizeChart.map((row, index) => (
                        <tr key={index} className="border-b">
                          <td className="p-2 font-bold">{row.size}</td>
                          <td className="p-2">{row.chest}</td>
                          <td className="p-2">{row.width}</td>
                          <td className="p-2">{row.height}</td>
                          <td className="p-2">{row.weight}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* WhatsApp CTA */}
            <a 
              href={`https://wa.me/5531999999999?text=Olá! Tenho interesse na ${product.name}`}
              className="w-full bg-[#0038A8] text-white py-4 rounded-lg font-montserrat font-bold text-lg hover:bg-[#012F60] transition-colors duration-300 block text-center"
            >
              💬 Comprar no WhatsApp
            </a>

            {/* Product Navigation */}
            <div className="flex space-x-4">
              <Link 
                to={`/produto/${prevProduct().id}`}
                className="flex-1 bg-gray-100 text-[#012F60] py-3 rounded-lg font-montserrat font-bold text-center hover:bg-gray-200 transition-colors"
              >
                ← Produto Anterior
              </Link>
              <Link 
                to={`/produto/${nextProduct().id}`}
                className="flex-1 bg-gray-100 text-[#012F60] py-3 rounded-lg font-montserrat font-bold text-center hover:bg-gray-200 transition-colors"
              >
                Próximo Produto →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Product;
