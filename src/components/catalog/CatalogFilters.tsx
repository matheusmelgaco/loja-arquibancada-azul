
interface CatalogFiltersProps {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const CatalogFilters = ({ filters, activeFilter, onFilterChange }: CatalogFiltersProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-6">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
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
  );
};

export default CatalogFilters;
