import { useState } from 'react';
import { Star } from 'lucide-react';
import { Product } from '../../data/products';

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [showSizeChart, setShowSizeChart] = useState(false);

  // Tabela masculina (padrão)
  const sizeChartMasculine = [
    { size: 'P', chest: '69-71', width: '53-55', height: '162-170', weight: '50-62' },
    { size: 'M', chest: '71-73', width: '55-57', height: '170-176', weight: '62-78' },
    { size: 'G', chest: '73-75', width: '57-58', height: '176-182', weight: '78-83' },
    { size: 'GG', chest: '75-78', width: '58-60', height: '182-190', weight: '83-90' },
    { size: 'XGG', chest: '78-81', width: '60-62', height: '190-195', weight: '90-97' },
    { size: 'XXG', chest: '81-83', width: '62-64', height: '192-197', weight: '97-104' }
  ];

  // Tabela feminina
  const sizeChartFeminine = [
    { size: 'P', chest: '61-63', width: '40-42', height: '150-160' },
    { size: 'M', chest: '63-66', width: '42-44', height: '160-165' },
    { size: 'G', chest: '66-69', width: '44-47', height: '165-170' },
    { size: 'GG', chest: '69-71', width: '47-49', height: '175-180' },
    { size: 'EGG', chest: '71-73', width: '49-51', height: '180-185' }
  ];

  // Tabela kit moletom
  const sizeChartKitMoletom = [
    { size: 'P', comp: '67', alt: '167-170', peso: '50-67', peito: '96', ombro: '74,5', calca: '98' },
    { size: 'M', comp: '70', alt: '171-176', peso: '62-75', peito: '100', ombro: '76', calca: '101' },
    { size: 'G', comp: '72', alt: '177-182', peso: '70-80', peito: '104', ombro: '77,5', calca: '104' },
    { size: 'GG', comp: '74', alt: '183-190', peso: '81-90', peito: '106', ombro: '79', calca: '107' },
    { size: 'EGG', comp: '76', alt: '188-195', peso: '91-100', peito: '110', ombro: '80,5', calca: '110' }
  ];

  // Tabela infantil
  const sizeChartKids = [
    { size: '14', idade: '2-3', altura: '85-95', comp: '41-44', larg: '33-35', cintura: '19-36' },
    { size: '16', idade: '3-4', altura: '95-105', comp: '44-47', larg: '35-37', cintura: '20-37' },
    { size: '18', idade: '4-5', altura: '105-115', comp: '47-50', larg: '37-39', cintura: '21-39' },
    { size: '20', idade: '5-6', altura: '115-125', comp: '50-53', larg: '39-41', cintura: '22-41' },
    { size: '22', idade: '6-7', altura: '125-135', comp: '53-56', larg: '41-43', cintura: '23-42' },
    { size: '24', idade: '8-9', altura: '135-145', comp: '56-59', larg: '43-45', cintura: '24-44' },
    { size: '26', idade: '10-11', altura: '145-155', comp: '59-62', larg: '45-47', cintura: '25-47' },
    { size: '28', idade: '12-13', altura: '155-165', comp: '62-65', larg: '47-49', cintura: '26-50' }
  ];

  // Determinar qual tabela usar baseado no nome do produto
  const getSizeChart = () => {
    const productName = product.name.toLowerCase();
    
    if (productName.includes('feminina')) {
      return { chart: sizeChartFeminine, type: 'feminine', title: 'Tabela de Tamanhos Feminina' };
    } else if (productName.includes('kit moletom') || productName.includes('conjunto moletom')) {
      return { chart: sizeChartKitMoletom, type: 'moletom', title: 'Tabela de Tamanhos Kit Moletom' };
    } else if (productName.includes('infantil') || productName.includes('kit')) {
      return { chart: sizeChartKids, type: 'kids', title: 'Tabela de Tamanhos Infantil' };
    } else {
      return { chart: sizeChartMasculine, type: 'masculine', title: 'Tabela de Tamanhos' };
    }
  };

  const { chart: sizeChart, type: chartType, title: chartTitle } = getSizeChart();

  const renderSizeTable = () => {
    switch (chartType) {
      case 'feminine':
        return (
          <div className="overflow-x-auto">
            <table className="w-full text-[10px] sm:text-xs border-collapse">
              <thead>
                <tr className="bg-[#0038A8] text-white">
                  <th className="p-1 sm:p-2 text-left border border-gray-300 whitespace-nowrap">Tam.</th>
                  <th className="p-1 sm:p-2 text-left border border-gray-300 whitespace-nowrap">Comp.</th>
                  <th className="p-1 sm:p-2 text-left border border-gray-300 whitespace-nowrap">Larg.</th>
                  <th className="p-1 sm:p-2 text-left border border-gray-300 whitespace-nowrap">Alt.</th>
                </tr>
              </thead>
              <tbody>
                {sizeChart.map((row: any, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-1 sm:p-2 font-bold border border-gray-300 whitespace-nowrap">{row.size}</td>
                    <td className="p-1 sm:p-2 border border-gray-300 whitespace-nowrap">{row.chest}</td>
                    <td className="p-1 sm:p-2 border border-gray-300 whitespace-nowrap">{row.width}</td>
                    <td className="p-1 sm:p-2 border border-gray-300 whitespace-nowrap">{row.height}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'moletom':
        return (
          <div className="overflow-x-auto">
            <table className="w-full text-[9px] sm:text-xs border-collapse">
              <thead>
                <tr className="bg-[#0038A8] text-white">
                  <th className="p-1 text-left border border-gray-300 whitespace-nowrap">Tam.</th>
                  <th className="p-1 text-left border border-gray-300 whitespace-nowrap">Comp.</th>
                  <th className="p-1 text-left border border-gray-300 whitespace-nowrap">Alt.</th>
                  <th className="p-1 text-left border border-gray-300 whitespace-nowrap">Peso</th>
                  <th className="p-1 text-left border border-gray-300 whitespace-nowrap">Peito</th>
                  <th className="p-1 text-left border border-gray-300 whitespace-nowrap">Ombro</th>
                  <th className="p-1 text-left border border-gray-300 whitespace-nowrap">Calça</th>
                </tr>
              </thead>
              <tbody>
                {sizeChart.map((row: any, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-1 font-bold border border-gray-300 whitespace-nowrap">{row.size}</td>
                    <td className="p-1 border border-gray-300 whitespace-nowrap">{row.comp}</td>
                    <td className="p-1 border border-gray-300 whitespace-nowrap">{row.alt}</td>
                    <td className="p-1 border border-gray-300 whitespace-nowrap">{row.peso}</td>
                    <td className="p-1 border border-gray-300 whitespace-nowrap">{row.peito}</td>
                    <td className="p-1 border border-gray-300 whitespace-nowrap">{row.ombro}</td>
                    <td className="p-1 border border-gray-300 whitespace-nowrap">{row.calca}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'kids':
        return (
          <div className="overflow-x-auto">
            <table className="w-full text-[9px] sm:text-xs border-collapse">
              <thead>
                <tr className="bg-[#0038A8] text-white">
                  <th className="p-1 text-left border border-gray-300 whitespace-nowrap">Tam.</th>
                  <th className="p-1 text-left border border-gray-300 whitespace-nowrap">Idade</th>
                  <th className="p-1 text-left border border-gray-300 whitespace-nowrap">Alt.</th>
                  <th className="p-1 text-left border border-gray-300 whitespace-nowrap">Comp.</th>
                  <th className="p-1 text-left border border-gray-300 whitespace-nowrap">Larg.</th>
                  <th className="p-1 text-left border border-gray-300 whitespace-nowrap">Cintura</th>
                </tr>
              </thead>
              <tbody>
                {sizeChart.map((row: any, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-1 font-bold border border-gray-300 whitespace-nowrap">{row.size}</td>
                    <td className="p-1 border border-gray-300 whitespace-nowrap">{row.idade}</td>
                    <td className="p-1 border border-gray-300 whitespace-nowrap">{row.altura}</td>
                    <td className="p-1 border border-gray-300 whitespace-nowrap">{row.comp}</td>
                    <td className="p-1 border border-gray-300 whitespace-nowrap">{row.larg}</td>
                    <td className="p-1 border border-gray-300 whitespace-nowrap">{row.cintura}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      default:
        return (
          <div className="overflow-x-auto">
            <table className="w-full text-[10px] sm:text-xs border-collapse">
              <thead>
                <tr className="bg-[#0038A8] text-white">
                  <th className="p-1 sm:p-2 text-left border border-gray-300 whitespace-nowrap">Tam.</th>
                  <th className="p-1 sm:p-2 text-left border border-gray-300 whitespace-nowrap">Comp.</th>
                  <th className="p-1 sm:p-2 text-left border border-gray-300 whitespace-nowrap">Larg.</th>
                  <th className="p-1 sm:p-2 text-left border border-gray-300 whitespace-nowrap">Alt.</th>
                  <th className="p-1 sm:p-2 text-left border border-gray-300 whitespace-nowrap">Peso</th>
                </tr>
              </thead>
              <tbody>
                {sizeChart.map((row: any, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-1 sm:p-2 font-bold border border-gray-300 whitespace-nowrap">{row.size}</td>
                    <td className="p-1 sm:p-2 border border-gray-300 whitespace-nowrap">{row.chest}</td>
                    <td className="p-1 sm:p-2 border border-gray-300 whitespace-nowrap">{row.width}</td>
                    <td className="p-1 sm:p-2 border border-gray-300 whitespace-nowrap">{row.height}</td>
                    <td className="p-1 sm:p-2 border border-gray-300 whitespace-nowrap">{row.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
    }
  };

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
        <p>Personalização disponível por +R$ 20,00</p>
      </div>

      {/* Promo Banner */}
      <div className="bg-yellow-50 border border-yellow-200 p-2 rounded-lg">
        <p className="font-montserrat font-bold text-xs text-yellow-800 mb-1">
          🎉 Promoção Especial
        </p>
        <p className="font-poppins text-xs text-yellow-700">
          Leve 3 camisas e ganhe R$ 50,00 de desconto!
        </p>
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
        {showSizeChart ? 'Ocultar' : 'Ver'} {chartTitle}
      </button>

      {/* Size Chart */}
      {showSizeChart && (
        <div className="bg-white p-2 sm:p-3 rounded-lg shadow-lg">
          <h4 className="font-montserrat font-bold text-sm text-[#012F60] mb-2">
            {chartTitle}
          </h4>
          {renderSizeTable()}
          <p className="font-poppins text-xs text-gray-600 mt-2 italic">
            Considerar a margem de erro de 1 a 3 cm em cada medida
          </p>
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
