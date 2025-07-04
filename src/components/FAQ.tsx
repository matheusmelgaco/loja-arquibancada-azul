
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: 'Como funcionam os prazos de entrega?',
      answer: 'Para produtos em pronta-entrega, enviamos em até 24h úteis. Para produtos sob encomenda, o prazo é de até 25 dias úteis.'
    },
    {
      question: 'Quais são as formas de pagamento aceitas?',
      answer: 'Aceitamos PIX (5% de desconto) e cartão (até 12x com acréscimo).'
    },
    {
      question: 'Como funciona a tabela de tamanhos?',
      answer: 'Trabalhamos com numeração brasileira padrão (P, M, G, GG, 2GG). Enviamos tabela detalhada de medidas pelo WhatsApp para garantir o tamanho perfeito.'
    },
    {
      question: 'É possível trocar ou devolver produtos?',
      answer: 'Não! Fique atento a tabela de tamanhos antes de realizar a compra.'
    },
    {
      question: 'Qual a qualidade das camisas?',
      answer: 'Todas as nossas camisas são tailandesas com qualidade premium 1:1.'
    },
    {
      question: 'Vocês entregam em todo o Brasil?',
      answer: 'Sim! Enviamos para todo território nacional via Correios e transportadoras parceiras. Frete calculado automaticamente conforme CEP de destino.'
    },
    {
      question: 'Como funciona a personalização?',
      answer: 'Personalizamos com nome e número por + R$ 20,00. Prazo adicional de 3-5 dias úteis.'
    },
    {
      question: 'Posso acompanhar meu pedido?',
      answer: 'Claro! Após o pagamento, você recebe o código de rastreamento pelo WhatsApp para acompanhar sua encomenda em tempo real.'
    }
  ];

  return (
    <section id="faq" className="py-8 bg-[#F7F7F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-montserrat font-extrabold text-xl md:text-2xl text-[#012F60] mb-2">
            ❓ PERGUNTAS FREQUENTES
          </h2>
          <p className="font-poppins text-sm text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas sobre produtos, prazos, pagamentos e muito mais
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-montserrat font-bold text-[#012F60] text-sm md:text-base">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="text-[#0038A8] flex-shrink-0 w-4 h-4" />
                ) : (
                  <ChevronDown className="text-[#0038A8] flex-shrink-0 w-4 h-4" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-4 pb-3 animate-fade-in">
                  <p className="font-poppins text-gray-700 leading-relaxed text-sm">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-8">
          <p className="font-poppins text-gray-600 mb-3 text-sm">
            Não encontrou sua resposta?
          </p>
          <a 
            href="https://wa.me/5531990884171?text=Tenho%20uma%20dúvida%20sobre%20os%20produtos"
            className="inline-block bg-[#0038A8] text-white px-6 py-3 rounded-lg font-montserrat font-bold text-sm hover:bg-[#012F60] transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            💬 Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
