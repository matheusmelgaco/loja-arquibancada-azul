
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

  // Tabela conjunto treino
  const sizeChartTraining = [
    { size: 'P', comp: '67', alt: '1.67-1.70', peso: '50-67', peito: '96', ombro: '74.5', calca: '98' },
    { size: 'M', comp: '70', alt: '1.71-1.76', peso: '62-75', peito: '100', ombro: '76', calca: '101' },
    { size: 'G', comp: '72', alt: '1.77-1.82', peso: '70-80', peito: '104', ombro: '77.5', calca: '104' },
    { size: 'GG', comp: '74', alt: '1.83-1.90', peso: '81-90', peito: '106', ombro: '79', calca: '107' },
    { size: 'EGG', comp: '76', alt: '1.88-1.95', peso: '91-100', peito: '110', ombro: '80.5', calca: '110' }
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
      return { chart: sizeChartFeminine, type: 'feminine' };
    } else if (productName.includes('conjunto') && productName.includes('treino')) {
      return { chart: sizeChartTraining, type: 'training' };
    } else if (productName.includes('infantil') || productName.includes('kit')) {
      return { chart: sizeChartKids, type: 'kids' };
    } else {
      return { chart: sizeChartMasculine, type: 'masculine' };
    }
  };

  const { chart: sizeChart, type: chartType } = getSizeChart();

  const renderSizeTable = () => {
    switch (chartType) {
      case 'feminine':
        return (
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-[#0038A8] text-white">
                <th className="p-1 text-left">Tamanho</th>
                <th className="p-1 text-left">Comprimento (cm)</th>
                <th className="p-1 text-left">Largura (cm)</th>
                <th className="p-1 text-left">Sua Altura (cm)</th>
              </tr>
            </thead>
            <tbody>
              {sizeChart.map((row: any, index) => (
                <tr key={index} className="border-b">
                  <td className="p-1 font-bold">{row.size}</td>
                  <td className="p-1">{row.chest}</td>
                  <td className="p-1">{row.width}</td>
                  <td className="p-1">{row.height}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );

      case 'training':
        return (
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-[#0038A8] text-white">
                <th className="p-1 text-left">Tam.</th>
                <th className="p-1 text-left">Comp.(cm)</th>
                <th className="p-1 text-left">Alt.(m)</th>
                <th className="p-1 text-left">Peso(Kg)</th>
                <th className="p-1 text-left">Peito(cm)</th>
                <th className="p-1 text-left">Ombro(cm)</th>
                <th className="p-1 text-left">Calça(cm)</th>
              </tr>
            </thead>
            <tbody>
              {sizeChart.map((row: any, index) => (
                <tr key={index} className="border-b">
                  <td className="p-1 font-bold">{row.size}</td>
                  <td className="p-1">{row.comp}</td>
                  <td className="p-1">{row.alt}</td>
                  <td className="p-1">{row.peso}</td>
                  <td className="p-1">{row.peito}</td>
                  <td className="p-1">{row.ombro}</td>
                  <td className="p-1">{row.calca}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );

      case 'kids':
        return (
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-[#0038A8] text-white">
                <th className="p-1 text-left">Tam.</th>
                <th className="p-1 text-left">Idade</th>
                <th className="p-1 text-left">Altura</th>
                <th className="p-1 text-left">Comprimento</th>
                <th className="p-1 text-left">Largura</th>
                <th className="p-1 text-left">Cintura</th>
              </tr>
            </thead>
            <tbody>
              {sizeChart.map((row: any, index) => (
                <tr key={index} className="border-b">
                  <td className="p-1 font-bold">{row.size}</td>
                  <td className="p-1">{row.idade}</td>
                  <td className="p-1">{row.altura}</td>
                  <td className="p-1">{row.comp}</td>
                  <td className="p-1">{row.larg}</td>
                  <td className="p-1">{row.cintura}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );

      default:
        return (
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
              {sizeChart.map((row: any, index) => (
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
        {showSizeChart ? 'Ocultar' : 'Ver'} Tabela de Tamanhos
      </button>

      {/* Size Chart */}
      {showSizeChart && (
        <div className="bg-white p-2 rounded-lg shadow-lg">
          <h4 className="font-montserrat font-bold text-xs text-[#012F60] mb-2">
            Tabela de Tamanhos
          </h4>
          <div className="overflow-x-auto">
            {renderSizeTable()}
          </div>
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
