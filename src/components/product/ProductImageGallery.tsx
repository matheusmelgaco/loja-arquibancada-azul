
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductImageGalleryProps {
  images: string[];
  name: string;
  category: string;
  isHighlight: boolean;
}

const ProductImageGallery = ({ images, name, category, isHighlight }: ProductImageGalleryProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-3">
      <div className="relative h-64 sm:h-80 bg-white rounded-lg overflow-hidden shadow-lg">
        <img 
          src={images[currentImage]} 
          alt={name}
          className="w-full h-full object-contain"
        />
        
        {images.length > 1 && (
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

        {/* Category badge - smaller */}
        <div className="absolute top-2 left-2 bg-[#0038A8] text-white px-2 py-1 rounded text-xs font-montserrat font-bold">
          {category}
        </div>

        {/* Imediato badge - smaller */}
        {isHighlight && (
          <div className="absolute top-2 right-2 bg-[#D9A642] text-[#012F60] px-2 py-1 rounded text-xs font-montserrat font-bold">
            📦 Imediato
          </div>
        )}
      </div>

      {/* Image Thumbnails */}
      {images.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 bg-white ${
                currentImage === index ? 'border-[#D9A642]' : 'border-gray-200'
              }`}
            >
              <img 
                src={image} 
                alt={`${name} - ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImageGallery;
