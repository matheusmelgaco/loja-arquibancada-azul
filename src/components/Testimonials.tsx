
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      image: '/lovable-uploads/055ad840-426a-4f62-93a8-ae89ee2b2000.png',
      alt: 'Print do WhatsApp - Feedback do cliente João Silva'
    },
    {
      image: '/lovable-uploads/055ad840-426a-4f62-93a8-ae89ee2b2000.png',
      alt: 'Print do WhatsApp - Feedback do cliente Maria Santos'
    },
    {
      image: '/lovable-uploads/055ad840-426a-4f62-93a8-ae89ee2b2000.png',
      alt: 'Print do WhatsApp - Feedback do cliente Carlos Oliveira'
    },
    {
      image: '/lovable-uploads/055ad840-426a-4f62-93a8-ae89ee2b2000.png',
      alt: 'Print do WhatsApp - Feedback do cliente Ana Costa'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
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

        {/* Testimonial Carousel */}
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg p-4 shadow-lg relative">
            <div className="text-center">
              {/* WhatsApp Screenshot */}
              <img 
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].alt}
                className="w-full max-w-sm mx-auto rounded-lg shadow-sm"
              />
            </div>
          </div>

          {/* Indicators */}
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
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
