
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Catalog = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 9;

  const filters = ['Todos', '2025/26', '2024/25', '2023/24', '2022/23', '2021/22 Centenário', 'Retrô', 'Infantil', 'Treino'];

  // Criando produtos com as quantidades solicitadas
  const createProducts = (category: string, count: number, basePrice: string) => {
    const products = [];
    for (let i = 1; i <= count; i++) {
      products.push({
        id: `${category.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${i}`,
        name: `Camisa Cruzeiro ${category} - Modelo ${i}`,
        price: basePrice,
        category: category,
        images: [
          '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
          '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
          '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
          '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
        ],
        isHighlight: i === 1,
        description: `Camisa oficial do Cruzeiro ${category}. Qualidade premium com tecnologia de última geração.`
      });
    }
    return products;
  };

  const products = [
    ...createProducts('2025/26', 4, 'R$ 189,90'),
    ...createProducts('2024/25', 7, 'R$ 169,90'),
    ...createProducts('2023/24', 8, 'R$ 159,90'),
    ...createProducts('2022/23', 6, 'R$ 149,90'),
    ...createProducts('2021/22 Centenário', 6, 'R$ 179,90'),
    ...createProducts('Retrô', 6, 'R$ 139,90'),
    ...createProducts('Infantil', 3, 'R$ 89,90'),
    ...createProducts('Treino', 12, 'R$ 119,90')
  ];

  const filteredProducts = activeFilter === 'Todos' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  // Reset to page 1 when filter changes
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of catalog section
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="catalogo" className="py-8 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="font-montserrat font-extrabold text-lg md:text-2xl text-[#012F60] mb-2">
            🦊 NOSSO CATÁLOGO
          </h2>
          <p className="font-poppins text-sm text-gray-600 max-w-2xl mx-auto">
            Encontre a camisa perfeita do seu Cruzeiro. Modelos oficiais, retrô e edições especiais.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`px-2 py-1 text-xs rounded-lg font-montserrat font-bold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[#0038A8] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-[#1E7ACB] hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Products Grid - 3x3 layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          {currentProducts.map((product) => (
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mb-6">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) handlePageChange(currentPage - 1);
                    }}
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                  />
                </PaginationItem>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  // Show first page, last page, current page, and pages around current page
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <PaginationItem key={page}>
                        <PaginationLink
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(page);
                          }}
                          isActive={currentPage === page}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  } else if (
                    page === currentPage - 2 ||
                    page === currentPage + 2
                  ) {
                    return (
                      <PaginationItem key={page}>
                        <PaginationEllipsis />
                      </PaginationItem>
                    );
                  }
                  return null;
                })}
                
                <PaginationItem>
                  <PaginationNext 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages) handlePageChange(currentPage + 1);
                    }}
                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-6">
          <a 
            href="https://wa.me/5531999999999?text=Quero%20ver%20mais%20produtos%20da%20Arquibancada%20Azul"
            className="inline-block bg-[#D9A642] text-[#012F60] px-4 py-2 rounded-lg font-montserrat font-bold text-sm hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            💬 Ver Mais no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
