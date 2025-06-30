
import { useState } from 'react';
import { products } from '../data/products';
import CatalogFilters from './catalog/CatalogFilters';
import CatalogGrid from './catalog/CatalogGrid';
import CatalogPagination from './catalog/CatalogPagination';

const Catalog = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 8;

  const filters = ['Todos', '2025/26', '2024/25', '2023/24', '2022/23', '2021/22 Centenário', 'Retrô', 'Infantil', 'Treino'];

  const filteredProducts = activeFilter === 'Todos' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
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
            Encontre a camisa perfeita do seu Cruzeiro. Modelos novos, retrô e edições especiais.
          </p>
        </div>

        <CatalogFilters 
          filters={filters}
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
        />

        <CatalogGrid products={currentProducts} />

        <CatalogPagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />

        {/* CTA */}
        <div className="text-center mt-6">
          <a 
            href="https://wa.me/5531990884171?text=Quero%20ver%20mais%20produtos%20da%20Arquibancada%20Azul"
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
