
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductImageGallery from '../components/product/ProductImageGallery';
import ProductInfo from '../components/product/ProductInfo';
import { products } from '../data/products';

const Product = () => {
  const { id } = useParams();
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
          <ProductImageGallery 
            images={product.images}
            name={product.name}
            category={product.category}
            isHighlight={product.isHighlight}
          />
          <ProductInfo product={product} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Product;
