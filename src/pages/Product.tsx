import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft, Star } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Product = () => {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const [showSizeChart, setShowSizeChart] = useState(false);

  // Same products array as in Catalog component
  const products = [
    // 2025/26
    {
      id: '2025-26-1',
      name: 'Camisa Cruzeiro I 2025/26 Azul Adidas Masculina - Torcedor',
      price: 'R$ 119,90',
      originalPrice: 'R$ 129,90',
      category: '2025/26',
      images: [
        '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
        '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
        '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
        '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
      ],
      isHighlight: true,
      description: 'Camisa oficial do Cruzeiro 2025/26. Qualidade premium com tecnologia de última geração para máximo conforto e durabilidade.',
      features: [
        'Tecnologia Dri-FIT para absorção do suor',
        'Tecido 100% poliéster de alta qualidade',
        'Bordados oficiais do Cruzeiro',
        'Gola em V confortável',
        'Disponível em todos os tamanhos'
      ]
    },
    {
      id: '2025-26-2',
      name: 'Camisa Cruzeiro I 2025/26 Azul Adidas Feminina - Torcedor',
      price: 'R$ 119,90',
      originalPrice: 'R$ 129,90',
      category: '2025/26',
      images: [
        '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
        '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
        '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
        '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
      ],
      isHighlight: false,
      description: 'Camisa oficial do Cruzeiro 2025/26. Qualidade premium com tecnologia de última geração para máximo conforto e durabilidade.',
      features: [
        'Tecnologia Dri-FIT para absorção do suor',
        'Tecido 100% poliéster de alta qualidade',
        'Bordados oficiais do Cruzeiro',
        'Gola em V confortável',
        'Disponível em todos os tamanhos'
      ]
    },
    {
      id: '2025-26-3',
      name: 'Kit Uniforme Cruzeiro I 2025/26 Azul e Branco Adidas Infantil',
      price: 'R$ 149,90',
      originalPrice: 'R$ 159,90',
      category: '2025/26',
      images: [
        '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
        '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
        '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
        '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
      ],
      isHighlight: false,
      description: 'Kit oficial do Cruzeiro 2025/26. Qualidade premium com tecnologia de última geração para máximo conforto e durabilidade.',
      features: [
        'Tecnologia Dri-FIT para absorção do suor',
        'Tecido 100% poliéster de alta qualidade',
        'Bordados oficiais do Cruzeiro',
        'Gola em V confortável',
        'Disponível em todos os tamanhos'
      ]
    },
    {
      id: '2025-26-4',
      name: 'Short Cruzeiro I 2025/26 Branco Adidas Masculino - Torcedor',
      price: 'R$ 99,90',
      originalPrice: 'R$ 109,90',
      category: '2025/26',
      images: [
        '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
        '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
        '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
        '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
      ],
      isHighlight: false,
      description: 'Short oficial do Cruzeiro 2025/26. Qualidade premium com tecnologia de última geração para máximo conforto e durabilidade.',
      features: [
        'Tecnologia Dri-FIT para absorção do suor',
        'Tecido 100% poliéster de alta qualidade',
        'Bordados oficiais do Cruzeiro',
        'Gola em V confortável',
        'Disponível em todos os tamanhos'
      ]
    },
    // 2024/25
    {
      id: '2024-25-1',
      name: 'Camisa Cruzeiro I 2024/25 Azul Adidas Masculina - Torcedor',
      price: 'R$ 119,90',
      originalPrice: 'R$ 129,90',
      category: '2024/25',
      images: [
        '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
        '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
        '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
        '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
      ],
      isHighlight: true,
      description: 'Camisa oficial do Cruzeiro 2024/25. Qualidade premium com tecnologia de última geração para máximo conforto e durabilidade.'
    },
    {
      id: '2024-25-2',
      name: 'Camisa Cruzeiro II 2024/25 Branca Adidas Masculina - Torcedor',
      price: 'R$ 119,90',
      originalPrice: 'R$ 129,90',
      category: '2024/25',
      images: [
        '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
        '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
        '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
        '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
      ],
      isHighlight: false,
      description: 'Camisa oficial do Cruzeiro 2024/25. Qualidade premium com tecnologia de última geração para máximo conforto e durabilidade.'
    },
    {
      id: '2024-25-3',
      name: 'Camisa Cruzeiro III 2024/25 Azul Adidas Masculina - Torcedor',
      price: 'R$ 119,90',
      originalPrice: 'R$ 129,90',
      category: '2024/25',
      images: [
        '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
        '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
        '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
        '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
      ],
      isHighlight: false,
      description: 'Camisa oficial do Cruzeiro 2024/25. Qualidade premium com tecnologia de última geração para máximo conforto e durabilidade.'
    },
    {
      id: '2024-25-4',
      name: 'Camisa Cruzeiro I 2024/25 Azul Adidas Feminina - Torcedor',
      price: 'R$ 119,90',
      originalPrice: 'R$ 129,90',
      category: '2024/25',
      images: [
        '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
        '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
        '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
        '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
      ],
      isHighlight: false,
      description: 'Camisa oficial do Cruzeiro 2024/25. Qualidade premium com tecnologia de última geração para máximo conforto e durabilidade.'
    },
    {
      id: '2024-25-5',
      name: 'Camisa Cruzeiro II 2024/25 Branca Adidas Feminina - Torcedor',
      price: 'R$ 119,90',
      originalPrice: 'R$ 129,90',
      category: '2024/25',
      images: [
        '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
        '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
        '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
        '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
      ],
      isHighlight: false,
      description: 'Camisa oficial do Cruzeiro 2024/25. Qualidade premium com tecnologia de última geração para máximo conforto e durabilidade.'
    },
    {
      id: '2024-25-6',
      name: 'Camisa Cruzeiro III 2024/25 Azul Adidas Feminina - Torcedor',
      price: 'R$ 119,90',
      originalPrice: 'R$ 129,90',
      category: '2024/25',
      images: [
        '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
        '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
        '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
        '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
      ],
      isHighlight: false,
      description: 'Camisa oficial do Cruzeiro 2024/25. Qualidade premium com tecnologia de última geração para máximo conforto e durabilidade.'
    },
    {
      id: '2024-25-7',
      name: 'Short Cruzeiro I 2024/25 Branco Adidas Masculino - Torcedor',
      price: 'R$ 99,90',
      originalPrice: 'R$ 109,90',
      category: '2024/25',
      images: [
        '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
        '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
        '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
        '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
      ],
      isHighlight: false,
      description: 'Short oficial do Cruzeiro 2024/25. Qualidade premium com tecnologia de última geração para máximo conforto e durabilidade.'
    },
    // 2023/24
    {
      id: '2023-24-1',
      name: 'Camisa Cruzeiro I 2023/24 Azul Adidas Masculina - Torcedor',
      price: 'R$ 119,90',
      originalPrice: 'R$ 129,90',
      category: '2023/24',
      images: [
        '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
        '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
        '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
        '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
      ],
      isHighlight: true,
      description: 'Camisa oficial do Cruzeiro 2023/24. Qualidade premium com tecnologia de última geração para máximo conforto e durabilidade.'
    },
    {
      id: '2023-24-2',
      name: 'Camisa Cruzeiro II 2023/24 Branca Adidas Masculina - Torcedor',
      price: 'R$ 119,90',
      originalPrice: 'R$ 129,90',
      category: '2023/24',
      images: [
        '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
        '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
        '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
        '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
      ],
      isHighlight: false,
      description: 'Camisa oficial do Cruzeiro 2023/24. Qualidade premium com tecnologia de última geração para máximo conforto e durabilidade.'
    },
    {
      id: '2023-24-3',
      name: 'Camisa Cruzeiro III 2023/24 Azul Turquesa Adidas Masculina - Torcedor',
      price: 'R$ 119,90',
      originalPrice: 'R$ 129,90',
      category: '2023/24',
      images: [
        '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
        '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
        '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
        '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
      ],
      isHighlight: false,
      description: 'Camisa oficial do Cruzeiro 2023/24. Qualidade premium com tecnologia de última geração para máximo conforto e durabilidade.'
    },
    {
      id: '2023-24-4',
      name: 'Camisa Cruzeiro Consciência Negra 2023/24 Adidas Masculina - Torcedor',
      price: 'R$ 109,90',
      originalPrice: 'R$ 119,90',
      category: '2023/24',
      images: [
        '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
        '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
        '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
        '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
      ],
      isHighlight: false,
      description: 'Camisa oficial do Cruzeiro 2023/24. Qualidade premium com tecnologia de última geração para máximo conforto e durabilidade.'
    },
    {
      id: '2023-24-5',
      name: 'Camisa Cruzeiro Goleiro 2023/24 Adidas Masculina - Torcedor',
      price: 'R$ 109,90',
      originalPrice: 'R$ 119,90',
      category: '2023/24',
      images: [
        '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
        '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
        '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
        '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
      ],
      isHighlight: false,
      description: 'Camisa oficial do Cruzeiro 2023/24. Qualidade premium com tecnologia de última geração para máximo conforto e durabilidade.'
    },
    {
      id: '2023-24-6',
      name: 'Camisa Cruzeiro I 2023/24 Azul Adidas Feminina - Torcedor',
      price: 'R$ 119,90',
      originalPrice: 'R$ 129,90',
      category: '2023/24',
      images: [
        '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
        '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
        '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
        '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
      ],
      isHighlight: false,
      description: 'Camisa oficial do Cruzeiro 2023/24. Qualidade premium com tecnologia de última geração para máximo conforto e durabilidade.'
    },
    {
      id: '2023-24-7',
      name: 'Camisa Cruzeiro II 2024/25 Branca Adidas Feminina - Torcedor',
      price: 'R$ 119,90',
      originalPrice: 'R$ 129,90',
      category: '2023/24',
      images: [
        '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
        '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
        '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
        '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
      ],
      isHighlight: false,
      description: 'Camisa oficial do Cruzeiro 2023/24. Qualidade premium com tecnologia de última geração para máximo conforto e durabilidade.'
    },
    {
      id: '2023-24-8',
      name: 'Camisa Cruzeiro III 2024/25 Azul Adidas Feminina - Torcedor',
      price: 'R$ 119,90',
      originalPrice: 'R$ 129,90',
      category: '2023/24',
      images: [
        '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
        '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
        '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
        '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
      ],
      isHighlight: false,
      description: 'Camisa oficial do Cruzeiro 2023/24. Qualidade premium com tecnologia de última geração para máximo conforto e durabilidade.'
    }
    // Additional products would continue here following the same pattern
  ];

  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="min-h-screen bg-[#F7F7F5]">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-xl font-bold text-[#012F60] mb-4">Produto não encontrado</h1>
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
      
      <div className="container mx-auto px-4 py-4">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center text-[#0038A8] hover:text-[#012F60] mb-4 font-montserrat font-bold text-sm"
        >
          <ArrowLeft size={16} className="mr-1" />
          Voltar ao catálogo
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Image Gallery */}
          <div className="space-y-3">
            <div className="relative h-64 sm:h-80 bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src={product.images[currentImage]} 
                alt={product.name}
                className="w-full h-full object-contain"
              />
              
              {product.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight size={16} />
                  </button>
                </>
              )}

              {/* Category badge */}
              <div className="absolute top-2 left-2 bg-[#0038A8] text-white px-2 py-1 rounded text-xs font-montserrat font-bold">
                {product.category}
              </div>

              {/* Highlight badge */}
              {product.isHighlight && (
                <div className="absolute top-2 right-2 bg-[#D9A642] text-[#012F60] px-2 py-1 rounded text-xs font-montserrat font-bold flex items-center">
                  <Star size={12} className="mr-1" fill="currentColor" />
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
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 ${
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
          <div className="space-y-4">
            <div>
              <h1 className="font-montserrat font-extrabold text-lg md:text-2xl text-[#012F60] mb-2">
                {product.name}
              </h1>
              <div className="flex items-center space-x-3 mb-3">
                {product.originalPrice && (
                  <span className="font-poppins text-lg text-gray-500 line-through">
                    {product.originalPrice}
                  </span>
                )}
                <p className="font-poppins text-2xl font-bold text-[#0038A8]">
                  {product.price}
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-montserrat font-bold text-base text-[#012F60] mb-2">
                Descrição
              </h3>
              <p className="font-poppins text-sm text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Personalization Info (more discreet) */}
            <div className="text-xs text-gray-600 border-l-4 border-[#D9A642] pl-2">
              <p>Personalização disponível por +R$ 25,00</p>
            </div>

            {/* No Exchange Policy */}
            <div className="bg-red-50 border border-red-200 p-2 rounded-lg">
              <p className="font-montserrat font-bold text-xs text-red-800 mb-1">
                ⚠️ Política de Trocas
              </p>
              <p className="font-poppins text-xs text-red-700">
                Não fazemos trocas. Consulte a tabela de tamanhos antes da compra.
              </p>
            </div>

            {/* Size Chart Button */}
            <button
              onClick={() => setShowSizeChart(!showSizeChart)}
              className="w-full bg-gray-100 text-[#012F60] py-2 rounded-lg font-montserrat font-bold text-sm hover:bg-gray-200 transition-colors"
            >
              {showSizeChart ? 'Ocultar' : 'Ver'} Tabela de Tamanhos
            </button>

            {/* Size Chart */}
            {showSizeChart && (
              <div className="bg-white p-2 rounded-lg shadow-lg">
                <h4 className="font-montserrat font-bold text-xs text-[#012F60] mb-2">
                  Tabela de Tamanhos
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="bg-[#0038A8] text-white">
                        <th className="p-1 text-left">Tamanho</th>
                        <th className="p-1 text-left">Comp. (cm)</th>
                        <th className="p-1 text-left">Larg. (cm)</th>
                        <th className="p-1 text-left">Altura (cm)</th>
                        <th className="p-1 text-left">Peso (kg)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sizeChart.map((row, index) => (
                        <tr key={index} className="border-b">
                          <td className="p-1 font-bold">{row.size}</td>
                          <td className="p-1">{row.chest}</td>
                          <td className="p-1">{row.width}</td>
                          <td className="p-1">{row.height}</td>
                          <td className="p-1">{row.weight}</td>
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
              className="w-full bg-[#0038A8] text-white py-3 rounded-lg font-montserrat font-bold text-base hover:bg-[#012F60] transition-colors duration-300 block text-center"
            >
              💬 Comprar no WhatsApp
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Product;
