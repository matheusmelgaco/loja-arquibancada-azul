
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const Catalog = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filters = ['Todos', '2025/26', '2024/25', '2023/24', '2022/21', '2021/22', 'Centenário', 'Retrô', 'Kids', 'Treino'];

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
      description: 'Nova camisa oficial do Cruzeiro para a temporada 2025/26. Produzida pela Adidas com tecnologia Climacool.'
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
      description: 'Camisa retrô comemorativa da conquista da Tríplice Coroa em 1997. Peça histórica para colecionadores.'
    },
    {
      id: 'camisa-cruzeiro-ii-2024-25',
      name: 'Camisa Cruzeiro II 2024/25 - Away',
      price: 'R$ 169,90',
      category: '2024/25',
      images: [
        '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
        '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
        '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
        '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
      ],
      description: 'Camisa reserva do Cruzeiro para jogos fora de casa. Design moderno e confortável.'
    },
    {
      id: 'kit-cruzeiro-2025',
      name: 'Kit Completo Cruzeiro 2025 (Camisa + Short)',
      price: 'R$ 249,90',
      category: '2025/26',
      images: [
        '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
        '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
        '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
        '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
      ],
      description: 'Kit completo com camisa e short oficiais do Cruzeiro 2025. Perfeito para jogos e treinos.'
    },
    {
      id: 'camisa-cruzeiro-retro-2003',
      name: 'Camisa Cruzeiro Retrô 2003 - Centenário',
      price: 'R$ 159,90',
      category: 'Centenário',
      images: [
        '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
        '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
        '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
        '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
      ],
      description: 'Camisa especial do centenário do Cruzeiro em 2003. Edição limitada para colecionadores.'
    },
    {
      id: 'camisa-cruzeiro-treino-2025',
      name: 'Camisa de Treino Cruzeiro 2025',
      price: 'R$ 119,90',
      category: 'Treino',
      images: [
        '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
        '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
        '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
        '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
      ],
      description: 'Camisa de treino oficial do Cruzeiro. Ideal para atividades físicas e uso casual.'
    }
  ];

  const filteredProducts = activeFilter === 'Todos' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <section id="catalogo" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="font-montserrat font-extrabold text-2xl md:text-3xl text-[#012F60] mb-3">
            🦊 NOSSO CATÁLOGO
          </h2>
          <p className="font-poppins text-base text-gray-600 max-w-2xl mx-auto">
            Encontre a camisa perfeita do seu Cruzeiro. Modelos oficiais, retrô e edições especiais.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm rounded-lg font-montserrat font-bold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[#0038A8] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-[#1E7ACB] hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Link key={product.id} to={`/produto/${product.id}`}>
              <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                images={product.images}
                category={product.category}
                isHighlight={product.isHighlight}
              />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a 
            href="https://wa.me/5531999999999?text=Quero%20ver%20mais%20produtos%20da%20Arquibancada%20Azul"
            className="inline-block bg-[#D9A642] text-[#012F60] px-6 py-3 rounded-lg font-montserrat font-bold text-base hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            💬 Ver Mais no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
