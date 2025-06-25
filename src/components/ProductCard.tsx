
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  images: string[];
  category: string;
  isHighlight?: boolean;
}

const ProductCard = ({ id, name, price, images, category, isHighlight }: ProductCardProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden cursor-pointer">
      {/* Image Gallery */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={images[currentImage]} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button 
              onClick={(e) => {
                e.preventDefault();
                prevImage();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              onClick={(e) => {
                e.preventDefault();
                nextImage();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}

        {/* Image indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
            {images.map((_, index) => (
              <div 
                key={index}
                className={`w-2 h-2 rounded-full ${index === currentImage ? 'bg-[#D9A642]' : 'bg-white/50'}`}
              />
            ))}
          </div>
        )}

        {/* Category badge */}
        <div className="absolute top-2 left-2 bg-[#0038A8] text-white px-2 py-1 rounded text-xs font-montserrat font-bold">
          {category}
        </div>

        {/* Highlight badge */}
        {isHighlight && (
          <div className="absolute top-2 right-2 bg-[#D9A642] text-[#012F60] px-2 py-1 rounded text-xs font-montserrat font-bold flex items-center">
            <Star size={12} className="mr-1" fill="currentColor" />
            Destaque
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-montserrat font-bold text-base text-[#012F60] mb-2 line-clamp-2">
          {name}
        </h3>
        <p className="font-poppins text-xl font-bold text-[#0038A8] mb-3">
          a partir de {price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
