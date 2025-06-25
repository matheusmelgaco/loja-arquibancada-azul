
import { Package, Clock, Shield, Truck } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Package,
      title: "Pronta Entrega",
      description: "Envio imediato para todo Brasil"
    },
    {
      icon: Clock,
      title: "Encomendas",
      description: "Produção até 25 dias úteis"
    },
    {
      icon: Shield,
      title: "Compra Segura",
      description: "Atendimento direto no WhatsApp"
    },
    {
      icon: Truck,
      title: "Envio Nacional",
      description: "Correios + transportadoras"
    }
  ];

  return (
    <section className="py-16 bg-[#F7F7F5]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0038A8] text-white rounded-full mb-4">
                <benefit.icon size={28} />
              </div>
              <h3 className="font-montserrat font-bold text-lg text-[#012F60] mb-2">
                {benefit.title}
              </h3>
              <p className="font-poppins text-gray-600">
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
