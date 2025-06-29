
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  images: string[];
  category: string;
  isHighlight?: boolean;
}

const ProductCard = ({ id, name, price, originalPrice, images, category, isHighlight }: ProductCardProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group overflow-hidden cursor-pointer">
      {/* Image Gallery */}
      <div className="relative h-32 sm:h-40 overflow-hidden">
        <img 
          src={images[currentImage]} 
          alt={name}
          className="w-full h-full object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button 
              onClick={(e) => {
                e.preventDefault();
                prevImage();
              }}
              className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
            >
              <ChevronLeft size={12} />
            </button>
            <button 
              onClick={(e) => {
                e.preventDefault();
                nextImage();
              }}
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
            >
              <ChevronRight size={12} />
            </button>
          </>
        )}

        {/* Image indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex space-x-1">
            {images.map((_, index) => (
              <div 
                key={index}
                className={`w-1.5 h-1.5 rounded-full ${index === currentImage ? 'bg-[#D9A642]' : 'bg-white/50'}`}
              />
            ))}
          </div>
        )}

        {/* Category badge - smaller for mobile */}
        <div className="absolute top-1 left-1 bg-[#0038A8] text-white px-1 py-0.5 rounded text-[10px] sm:text-xs font-montserrat font-bold">
          {category}
        </div>

        {/* Pronta Entrega badge - smaller for mobile */}
        {isHighlight && (
          <div className="absolute top-1 right-1 bg-[#D9A642] text-[#012F60] px-1 py-0.5 rounded text-[10px] sm:text-xs font-montserrat font-bold flex items-center">
            <span className="mr-0.5 text-[8px] sm:text-[10px]">⚡</span>
            <span className="hidden sm:inline">Pronta Entrega</span>
            <span className="sm:hidden">Pronta</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-3">
        <h3 className="font-montserrat font-bold text-xs text-[#012F60] mb-1 line-clamp-2">
          {name}
        </h3>
        <div className="flex items-center space-x-2 mb-2">
          {originalPrice && (
            <span className="font-poppins text-xs text-gray-500 line-through">
              {originalPrice}
            </span>
          )}
          <p className="font-poppins text-sm font-bold text-[#0038A8]">
            {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
