
import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'João Silva',
      city: 'Belo Horizonte - MG',
      message: 'Comprei a camisa retrô de 97 e ficou perfeita! Qualidade excepcional e entrega super rápida. Recomendo!',
      rating: 5
    },
    {
      name: 'Maria Santos',
      city: 'São Paulo - SP',
      message: 'Atendimento nota 10! Personalizaram minha camisa com meu nome e ficou incrível. Voltarei a comprar com certeza.',
      rating: 5
    },
    {
      name: 'Carlos Oliveira',
      city: 'Rio de Janeiro - RJ',
      message: 'Melhor loja de camisas do Cruzeiro! Produtos originais, preço justo e entrega rápida para todo Brasil.',
      rating: 5
    },
    {
      name: 'Ana Costa',
      city: 'Brasília - DF',
      message: 'Comprei o kit completo para meu filho e ele amou! Tecido de ótima qualidade e caimento perfeito.',
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-16 bg-[#1E7ACB]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl text-white mb-4">
            💙 O QUE NOSSOS CLIENTES DIZEM
          </h2>
          <p className="font-poppins text-lg text-white/90 max-w-2xl mx-auto">
            Centenas de cruzeirenses satisfeitos já vestiram nossos mantos
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-lg relative">
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#D9A642] fill-current" />
                ))}
              </div>

              {/* Message */}
              <p className="font-poppins text-lg text-gray-700 mb-6 italic">
                "{testimonials[currentTestimonial].message}"
              </p>

              {/* Author */}
              <div>
                <h4 className="font-montserrat font-bold text-[#012F60] text-lg">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="font-poppins text-gray-600">
                  {testimonials[currentTestimonial].city}
                </p>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-[#D9A642]' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
