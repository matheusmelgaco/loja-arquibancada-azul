import { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      image: `${import.meta.env.BASE_URL}lovable-uploads/055ad840-426a-4f62-93a8-ae89ee2b2000.png`,
      alt: 'Print do WhatsApp - Feedback do cliente João Silva'
    }
    // Quando quiser adicionar mais, é só descomentar ou adicionar:
    // {
    //   image: `${import.meta.env.BASE_URL}lovable-uploads/outro-feedback.png`,
    //   alt: 'Print do WhatsApp - Feedback do cliente Maria Santos'
    // }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Só inicia o efeito se houver mais de 1 depoimento
  // Isso evita o looping desnecessário
  // Pode reativar automaticamente quando houver mais
  useEffect(() => {
    if (testimonials.length > 1) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [testimonials.length]);

  return (
    <section className="py-8 bg-[#1E7ACB]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="font-montserrat font-extrabold text-xl md:text-2xl text-white mb-3">
            💙 O QUE NOSSOS CLIENTES DIZEM
          </h2>
          <p className="font-poppins text-sm text-white/90 max-w-2xl mx-auto">
            Centenas de cruzeirenses satisfeitos já vestiram nossos mantos
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg p-4 shadow-lg relative">
            <div className="text-center">
              <img 
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].alt}
                className="w-full max-w-sm mx-auto rounded-lg shadow-sm"
              />
            </div>
          </div>

          {/* Só exibe os indicadores se houver mais de 1 depoimento */}
          {testimonials.length > 1 && (
            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-[#D9A642]' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
