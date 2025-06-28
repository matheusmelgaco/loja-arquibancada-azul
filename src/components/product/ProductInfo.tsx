
import { useState } from 'react';
import { Star } from 'lucide-react';
import { Product } from '../../data/products';

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [showSizeChart, setShowSizeChart] = useState(false);

  const sizeChart = [
    { size: 'P', chest: '69-71', width: '53-55', height: '162-170', weight: '50-62' },
    { size: 'M', chest: '71-73', width: '55-57', height: '170-176', weight: '62-78' },
    { size: 'G', chest: '73-75', width: '57-58', height: '176-182', weight: '78-83' },
    { size: 'GG', chest: '75-78', width: '58-60', height: '182-190', weight: '83-90' },
    { size: 'XGG', chest: '78-81', width: '60-62', height: '190-195', weight: '90-97' },
    { size: 'XXG', chest: '81-83', width: '62-64', height: '192-197', weight: '97-104' }
  ];

  return (
    <div className="space-y-4">
      <div>
        <h1 className="font-montserrat font-extrabold text-lg md:text-2xl text-[#012F60] mb-2">
          {product.name}
        </h1>
        <div className="flex items-center space-x-3 mb-3">
          <span className="font-poppins text-lg text-gray-500 line-through">
            {product.originalPrice}
          </span>
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

      {/* Personalization Info */}
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
  );
};

export default ProductInfo;
