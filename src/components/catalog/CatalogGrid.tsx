
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard';
import { Product } from '../../data/products';

interface CatalogGridProps {
  products: Product[];
}

const CatalogGrid = ({ products }: CatalogGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
      {products.map((product) => (
        <Link key={product.id} to={`/produto/${product.id}`}>
          <ProductCard
            id={product.id}
            name={product.name}
            price={product.price}
            originalPrice={product.originalPrice}
            images={product.images}
            category={product.category}
            isHighlight={product.isHighlight}
          />
        </Link>
      ))}
    </div>
  );
};

export default CatalogGrid;
