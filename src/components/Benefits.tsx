
import { Package, Clock, Shield, Truck } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Package,
      title: "Pronta Entrega",
      description: "Envio imediato"
    },
    {
      icon: Clock,
      title: "Encomendas",
      description: "Até 25 dias úteis"
    },
    {
      icon: Shield,
      title: "Compra Segura",
      description: "WhatsApp direto"
    },
    {
      icon: Truck,
      title: "Envio Nacional",
      description: "Todo o Brasil"
    }
  ];

  return (
    <section className="py-8 bg-[#F7F7F5]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#0038A8] text-white rounded-full mb-3">
                <benefit.icon size={20} />
              </div>
              <h3 className="font-montserrat font-bold text-sm text-[#012F60] mb-1">
                {benefit.title}
              </h3>
              <p className="font-poppins text-xs text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
