
export interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice: string;
  category: string | string[]; 
  images: string[];
  isHighlight: boolean;
  description: string;
  features?: string[];
}

export const products: Product[] = [
  // 2025/26 - Todos com pronta entrega nos 3 primeiros
  {
    id: '2025-26-1',
    name: 'Camisa Masculina I 2025/26 Azul Adidas - Torcedor',
    price: 'R$ 119,90',
    originalPrice: 'R$ 129,90',
    category: '2025/26',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: true,
    description: 'Camisa Masculina I 2025/26 Azul Adidas - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Tamanhos M e G à pronta entrega. Demais tamanhos sob encomenda com entrega em até 25 dias úteis.',
    features: [
      'Tecnologia Dri-FIT para absorção do suor',
      'Tecido 100% poliéster de alta qualidade',
      'Bordados oficiais do Cruzeiro',
      'Gola em V confortável',
      'Disponível em todos os tamanhos'
    ]
  },
  {
    id: '2025-26-1-regata',
    name: 'Regata Masculina I 2025/26 Azul Adidas - Torcedor',
    price: 'R$ 99,90',
    originalPrice: 'R$ 109,90',
    category: '2025/26',
    images: [
      '/lovable-uploads/2025-26/regata-foto-1.png',
      '/lovable-uploads/2025-26/regata-foto-2 (2).png'
    ],
    isHighlight: false,
    description: 'Regata Masculina I 2025/26 Azul Adidas - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.',
    features: [
      'Tecnologia Dri-FIT para absorção do suor',
      'Tecido 100% poliéster de alta qualidade',
      'Bordados oficiais do Cruzeiro',
      'Corte regata confortável',
      'Disponível em todos os tamanhos'
    ]
  },
  {
    id: '2025-26-2',
    name: 'Camisa Feminina I 2025/26 Azul Adidas - Torcedor',
    price: 'R$ 119,90',
    originalPrice: 'R$ 129,90',
    category: '2025/26',
    images: [
      '/lovable-uploads/2025-26/Camisa-feminina-foto1.png',
      '/lovable-uploads/2025-26/Camisa-feminina-foto2.png',
      '/lovable-uploads/2025-26/Camisa-masculina-foto-3.jpg',
      '/lovable-uploads/2025-26/Camisa-masculina-foto-4.jpg'
    ],
    isHighlight: true,
    description: 'Camisa Feminina I 2025/26 Azul Adidas - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Tamanhos M e G à pronta entrega. Demais tamanhos sob encomenda com entrega em até 25 dias úteis.',
    features: [
      'Tecnologia Dri-FIT para absorção do suor',
      'Tecido 100% poliéster de alta qualidade',
      'Bordados oficiais do Cruzeiro',
      'Corte feminino ajustado',
      'Disponível em todos os tamanhos'
    ]
  },
  {
    id: '2025-26-4',
    name: 'Short Masculino I 2025/26 Branco Adidas - Torcedor',
    price: 'R$ 99,90',
    originalPrice: 'R$ 109,90',
    category: '2025/26',
    images: [
      '/lovable-uploads/2025-26/short foto 1.webp',
      '/lovable-uploads/2025-26/short foto 2.webp'
    ],
    isHighlight: false,
    description: 'Short Masculino I 2025/26 Branco Adidas - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.',
    features: [
      'Tecnologia Dri-FIT para absorção do suor',
      'Tecido 100% poliéster de alta qualidade',
      'Bordados oficiais do Cruzeiro',
      'Corte masculino confortável',
      'Disponível em todos os tamanhos'
    ]
  },
     {
    id: '2025-26-3',
    name: 'Kit Uniforme Infantil I 2025/26 Azul e Branco Adidas',
    price: 'R$ 149,90',
    originalPrice: 'R$ 159,90',
    category: ['2025/26', 'Infantil'],
    images: [
      '/lovable-uploads/2025-26/cruzeiro infantil 1.png',
      '/lovable-uploads/2025-26/cruzeiro infantil 2.png',
      '/lovable-uploads/2025-26/cruzeiro infantil 3.png',
      '/lovable-uploads/2025-26/cruzeiro infantil 4.png'
    ],
    isHighlight: false,
    description: 'Kit Uniforme Infantil I 2025/26 Azul e Branco Adidas. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.',
    features: [
      'Tecnologia Dri-FIT para absorção do suor',
      'Tecido 100% poliéster de alta qualidade',
      'Bordados oficiais do Cruzeiro',
      'Kit completo camisa + short',
      'Disponível em todos os tamanhos'
    ]
  },
  // 2024/25 - Apenas o primeiro com pronta entrega
  {
    id: '2024-25-1',
    name: 'Camisa Masculina I 2024/25 Azul Adidas - Torcedor',
    price: 'R$ 119,90',
    originalPrice: 'R$ 129,90',
    category: '2024/25',
    images: [
      '/lovable-uploads/2024-25/Cruzeiro - foto 1.jpg',
      '/lovable-uploads/2024-25/Cruzeiro - foto 2.jpg',
      '/lovable-uploads/2024-25/Cruzeiro - foto 3.jpg',
      '/lovable-uploads/2024-25/Cruzeiro - foto 4.jpg'
    ],
    isHighlight: true,
    description: 'Camisa Masculina I 2024/25 Azul Adidas - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Tamanhos M e G à pronta entrega. Demais tamanhos sob encomenda com entrega em até 25 dias úteis.'
  },
  {
    id: '2024-25-2',
    name: 'Camisa Masculina II 2024/25 Branca Adidas - Torcedor',
    price: 'R$ 119,90',
    originalPrice: 'R$ 129,90',
    category: '2024/25',
    images: [
      '/lovable-uploads/2024-25/Cruzeiro camisa 2 - foto 1.jpg',
      '/lovable-uploads/2024-25/Cruzeiro camisa 2 - foto 2.jpg'
    ],
    isHighlight: false,
    description: 'Camisa Masculina II 2024/25 Branca Adidas - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2024-25-3',
    name: 'Camisa Masculina III 2024/25 Azul Adidas - Torcedor',
    price: 'R$ 119,90',
    originalPrice: 'R$ 129,90',
    category: '2024/25',
    images: [
      '/lovable-uploads/2024-25/Cruzeiro camisa 3 - foto 1.jpg',
      '/lovable-uploads/2024-25/camisa 3 masculina foto 22.png',
      '/lovable-uploads/2024-25/Cruzeiro camisa 3 - foto 2.jpeg',
      '/lovable-uploads/2024-25/Cruzeiro camisa 3 - foto 3.jpeg'
    ],
    isHighlight: false,
    description: 'Camisa Masculina III 2024/25 Azul Adidas - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2024-25-3-regata',
    name: 'Regata Masculina I 2024/25 Azul Adidas - Torcedor',
    price: 'R$ 99,90',
    originalPrice: 'R$ 109,90',
    category: '2024/25',
    images: [
      '/lovable-uploads/2024-25/Cruzeiro_regata_foto_1-removebg-preview.png',
      '/lovable-uploads/2024-25/Cruzeiro_regata_foto_2-removebg-preview.png',
    ],
    isHighlight: false,
    description: 'Regata Masculina I 2024/25 Azul Adidas - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2024-25-2-branca',
    name: 'Regata Masculina II 2024/25 Branca Adidas - Torcedor',
    price: 'R$ 119,90',
    originalPrice: 'R$ 129,90',
    category: '2024/25',
    images: [
      '/lovable-uploads/2024-25/Cruzeiro_2_regata_foto_1-removebg-preview.png',
      '/lovable-uploads/2024-25/Cruzeiro_2_regata_foto_2-removebg-preview.png'
    ],
    isHighlight: false,
    description: 'Camisa Masculina II 2024/25 Branca Adidas - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2024-25-4',
    name: 'Camisa Feminina I 2024/25 Azul Adidas - Torcedor',
    price: 'R$ 119,90',
    originalPrice: 'R$ 129,90',
    category: '2024/25',
    images: [
      '/lovable-uploads/2024-25/camisa feminina 1.png',
      '/lovable-uploads/2024-25/camisa feminina 2.png'
    ],
    isHighlight: false,
    description: 'Camisa Feminina I 2024/25 Azul Adidas - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2024-25-5',
    name: 'Camisa Feminina II 2024/25 Branca Adidas - Torcedor',
    price: 'R$ 119,90',
    originalPrice: 'R$ 129,90',
    category: '2024/25',
    images: [
      '/lovable-uploads/2024-25/2 camisa feminina 1.png',
      '/lovable-uploads/2024-25/2 camisa feminina 2.png'
    ],
    isHighlight: false,
    description: 'Camisa Feminina II 2024/25 Branca Adidas - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2024-25-6',
    name: 'Camisa Feminina III 2024/25 Azul Adidas - Torcedor',
    price: 'R$ 119,90',
    originalPrice: 'R$ 129,90',
    category: '2024/25',
    images: [
      '/lovable-uploads/2024-25/3 camisa feminina 1.png',
      '/lovable-uploads/2024-25/3 camisa feminina 2.png'
    ],
    isHighlight: false,
    description: 'Camisa Feminina III 2024/25 Azul Adidas - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2024-25-7',
    name: 'Short Masculino I 2024/25 Branco Adidas - Torcedor',
    price: 'R$ 99,90',
    originalPrice: 'R$ 109,90',
    category: '2024/25',
    images: [
      '/lovable-uploads/2024-25/short 2425 foto 1.png',
      '/lovable-uploads/2024-25/short foto 2.png',
      '/lovable-uploads/2024-25/short foto 3 2425.png'
    ],
    isHighlight: false,
    description: 'Short Masculino I 2024/25 Branco Adidas - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  // 2023/24
  {
    id: '2023-24-1',
    name: 'Camisa Masculina I 2023/24 Azul Adidas - Torcedor',
    price: 'R$ 119,90',
    originalPrice: 'R$ 129,90',
    category: '2023/24',
    images: [
    '/lovable-uploads/2023-24/camisa-1-foto-1-masc.png',
     '/lovable-uploads/2023-24/camisa-1-foto-2-masc.png',
     '/lovable-uploads/2023-24/camisa1-foto-3.png',
     '/lovable-uploads/2023-24/camisa1-foto-4.png'
    ],
    isHighlight: false,
    description: 'Camisa Masculina I 2023/24 Azul Adidas - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2023-24-2',
    name: 'Camisa Masculina II 2023/24 Branca Adidas - Torcedor',
    price: 'R$ 119,90',
    originalPrice: 'R$ 129,90',
    category: '2023/24',
    images: [
    '/lovable-uploads/2023-24/camisa2-foto1-masc.png',
     '/lovable-uploads/2023-24/camisa-2-foto-2-masc.png',
     '/lovable-uploads/2023-24/camisa-2-foto-3.png'
    ],
    isHighlight: false,
    description: 'Camisa Masculina II 2023/24 Branca Adidas - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2023-24-3',
    name: 'Camisa Masculina III 2023/24 Azul Turquesa Adidas - Torcedor',
    price: 'R$ 119,90',
    originalPrice: 'R$ 129,90',
    category: '2023/24',
    images: [
    '/lovable-uploads/2023-24/camisa-3-foto1-masc.png',
     '/lovable-uploads/2023-24/camisa-3-foto2-masc.png',
     '/lovable-uploads/2023-24/camisa-3-foto3-masc.png'
    ],
    isHighlight: false,
    description: 'Camisa Masculina III 2023/24 Azul Turquesa Adidas - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2023-24-4',
    name: 'Camisa Masculina Consciência Negra 2023/24 Adidas - Torcedor',
    price: 'R$ 109,90',
    originalPrice: 'R$ 119,90',
    category: '2023/24',
    images: [
    '/lovable-uploads/2023-24/foto cn 1.png',
     '/lovable-uploads/2023-24/foto cn 2.png',
     '/lovable-uploads/2023-24/foto cn 3.png',
     '/lovable-uploads/2023-24/foto cn 4.png'
    ],
    isHighlight: false,
    description: 'Camisa Masculina Consciência Negra 2023/24 Adidas - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2023-24-5',
    name: 'Camisa Masculina Goleiro 2023/24 AdidasTorcedor',
    price: 'R$ 109,90',
    originalPrice: 'R$ 119,90',
    category: '2023/24',
    images: [
      '/lovable-uploads/2023-24/camisa goleiro foto 1.png',
     '/lovable-uploads/2023-24/camisa goleiro foto 2.png'
    ],
    isHighlight: false,
    description: 'Camisa Masculina Goleiro 2023/24 Adidas - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2023-24-6',
    name: 'Camisa Feminina I 2023/24 Azul Adidas - Torcedor',
    price: 'R$ 119,90',
    originalPrice: 'R$ 129,90',
    category: '2023/24',
    images: [
    '/lovable-uploads/2023-24/camisa-1-foto-1-fem.png',
     '/lovable-uploads/2023-24/camisa-1-foto-2-fem.png',
     '/lovable-uploads/2023-24/camisa1-foto-3.png',
     '/lovable-uploads/2023-24/camisa1-foto-4.png'
    ],
    isHighlight: false,
    description: 'Camisa Feminina I 2023/24 Azul Adidas - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2023-24-7',
    name: 'Camisa Feminina II 2024/25 Branca Adidas - Torcedor',
    price: 'R$ 119,90',
    originalPrice: 'R$ 129,90',
    category: '2023/24',
    images: [
    '/lovable-uploads/2023-24/camisa2-foto1-fem.png',
     '/lovable-uploads/2023-24/camisa-2-foto-3.png'
    ],
    isHighlight: false,
    description: 'Camisa Feminina II 2024/25 Branca Adidas - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2023-24-8',
    name: 'Camisa Feminina III 2024/25 Azul Adidas - Torcedor',
    price: 'R$ 119,90',
    originalPrice: 'R$ 129,90',
    category: '2023/24',
    images: [
    '/lovable-uploads/2023-24/camisa-3-foto1-fem.png',
    '/lovable-uploads/2023-24/camisa-3-foto2-fem.png',
    '/lovable-uploads/2023-24/camisa-3-foto3-fem.png'
    ],
    isHighlight: false,
    description: 'Camisa Feminina III 2024/25 Azul Adidas - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  // 2022/23
  {
    id: '2022-23-1',
    name: 'Camisa Masculina I 2022/23 Azul Adidas - Torcedor',
    price: 'R$ 129,90',
    originalPrice: 'R$ 139,90',
    category: '2022/23',
    images: [
    '/lovable-uploads/2022-23/camisa1-foto1-masc.png',
    '/lovable-uploads/2022-23/camisa1-foto2-masc.png'
    ],
    isHighlight: false,
    description: 'Camisa Masculina I 2022/23 Azul Adidas - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2022-23-2',
    name: 'Camisa Masculina II 2022/23 Branca Adidas - Torcedor',
    price: 'R$ 129,90',
    originalPrice: 'R$ 139,90',
    category: '2022/23',
    images: [
    '/lovable-uploads/2022-23/camisa2-foto1-masc.png',
    '/lovable-uploads/2022-23/camisa2-foto2-masc.png',
    '/lovable-uploads/2022-23/camisa2-foto-3.png'
    ],
    isHighlight: false,
    description: 'Camisa Masculina II 2022/23 Branca Adidas - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2022-23-3',
    name: 'Camisa Masculina III 2022/23 Amarela Adidas - Torcedor',
    price: 'R$ 129,90',
    originalPrice: 'R$ 139,90',
    category: '2022/23',
    images: [
    '/lovable-uploads/2022-23/camisa3-foto1-masc.png',
    '/lovable-uploads/2022-23/camisa3-foto2-masc.png',
    '/lovable-uploads/2022-23/camisa3-foto3-masc.png',
    ],
    isHighlight: false,
    description: 'Camisa Masculina III 2022/23 Amarela Adidas - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2022-23-4',
    name: 'Camisa Feminina I 2022/23 Azul Adidas - Torcedor',
    price: 'R$ 129,90',
    originalPrice: 'R$ 139,90',
    category: '2022/23',
    images: [
    '/lovable-uploads/2022-23/camisa1-foto1-fem.png'
      ],
    isHighlight: false,
    description: 'Camisa Feminina I 2022/23 Azul Adidas - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2022-23-5',
    name: 'Camisa Feminina II 2022/23 Branca Adidas - Torcedor',
    price: 'R$ 129,90',
    originalPrice: 'R$ 139,90',
    category: '2022/23',
    images: [
    '/lovable-uploads/2022-23/camisa2-foto1-fem.png',
    '/lovable-uploads/2022-23/camisa2-foto2-fem.png',
    '/lovable-uploads/2022-23/camisa2-foto-3.png'
    ],
    isHighlight: false,
    description: 'Camisa Feminina II 2022/23 Branca Adidas - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2022-23-6',
    name: 'Camisa Feminina III 2022/23 Amarela Adidas - Torcedor',
    price: 'R$ 129,90',
    originalPrice: 'R$ 139,90',
    category: '2022/23',
    images: [
    '/lovable-uploads/2022-23/camisa3-foto1-fem.png',
    '/lovable-uploads/2022-23/camisa3-foto2-fem.png',
    '/lovable-uploads/2022-23/camisa3-foto3-fem.png'
    ],
    isHighlight: false,
    description: 'Camisa Feminina III 2022/23 Amarela Adidas - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  // 2021/22 Centenário
  {
    id: '2021-22-1',
    name: 'Camisa Masculina I 2021/22 Centenário Azul Adidas - Torcedor',
    price: 'R$ 129,90',
    originalPrice: 'R$ 139,90',
    category: '2021/22 Centenário',
    images: [
      '/lovable-uploads/2021-20/camisa 1 foto 1.webp',
      '/lovable-uploads/2021-20/camisa 1 foto 2.webp',
      '/lovable-uploads/2021-20/camisa 1 foto 3.jpg',
      '/lovable-uploads/2021-20/camisa 1 foto 4.avif',
     '/lovable-uploads/2021-20/camisa 1 foto 5.jpg',
    ],
    isHighlight: false,
    description: 'Camisa Masculina I 2021/22 Centenário Azul Adidas - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2021-22-2',
    name: 'Camisa Masculina II 2021/22 Centenário Branca Adidas - Torcedor',
    price: 'R$ 129,90',
    originalPrice: 'R$ 139,90',
    category: '2021/22 Centenário',
    images: [
      '/lovable-uploads/2021-20/camisa 2 foto 1.webp',
      '/lovable-uploads/2021-20/camisa 2 foto 2.webp',
    ],
    isHighlight: false,
    description: 'Camisa Masculina II 2021/22 Centenário Branca Adidas - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2021-22-3',
    name: 'Camisa Masculina III 2021/22 Centenário Verde Adidas - Torcedor',
    price: 'R$ 129,90',
    originalPrice: 'R$ 139,90',
    category: '2021/22 Centenário',
    images: [
      '/lovable-uploads/2021-20/camisa 3 foto 1.avif',
      '/lovable-uploads/2021-20/camisa 3 foto 2.avif',
      '/lovable-uploads/2021-20/camisa 3 foto 3.avif',
      '/lovable-uploads/2021-20/camisa 3 foto 4.webp',
    ],
    isHighlight: false,
    description: 'Camisa Masculina III 2021/22 Centenário Verde Adidas - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2021-22-4',
    name: 'Camisa Feminina I 2021/22 Centenário Azul Adidas - Torcedor',
    price: 'R$ 129,90',
    originalPrice: 'R$ 139,90',
    category: '2021/22 Centenário',
    images: [
      '/lovable-uploads/2021-20/camisa feminina 1 foto 1.webp',
      '/lovable-uploads/2021-20/camisa feminina 1 foto 2.webp',
      '/lovable-uploads/2021-20/camisa feminina 1 foto 3.webp',
      '/lovable-uploads/2021-20/camisa feminina 1 foto 4.webp',
    ],
    isHighlight: false,
    description: 'Camisa Feminina I 2021/22 Centenário Azul Adidas - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2021-22-5',
    name: 'Camisa Feminina II 2021/22 Centenário Branca Adidas - Torcedor',
    price: 'R$ 129,90',
    originalPrice: 'R$ 139,90',
    category: '2021/22 Centenário',
    images: [
      '/lovable-uploads/2021-20/camisa feminina 2 foto 1.webp',
      '/lovable-uploads/2021-20/camisa feminina 2 foto 2.webp',
    ],
    isHighlight: false,
    description: 'Camisa Feminina II 2021/22 Centenário Branca Adidas - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2021-22-6',
    name: 'Camisa Feminina III 2021/22 Centenário Verde Adidas - Torcedor',
    price: 'R$ 129,90',
    originalPrice: 'R$ 139,90',
    category: '2021/22 Centenário',
    images: [
      '/lovable-uploads/2021-20/camisa feminina 3 foto 1.webp',
      '/lovable-uploads/2021-20/camisa feminina 3 foto 2.webp',
      '/lovable-uploads/2021-20/camisa feminina 3 foto 3.webp',
      '/lovable-uploads/2021-20/camisa feminina 3 foto 4.webp',
    ],
    isHighlight: false,
    description: 'Camisa Feminina III 2021/22 Centenário Verde Adidas - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  // Retrô
  {
    id: 'retro-1',
    name: 'Camisa Masculina I Retrô 1993/94 Azul Finta',
    price: 'R$ 169,90',
    originalPrice: 'R$ 179,90',
    category: 'Retrô',
    images: [
      '/lovable-uploads/Retrô/retro 93 1.png',
      '/lovable-uploads/Retrô/retro 93 2.png',
      '/lovable-uploads/Retrô/retro 93 3.png',
      '/lovable-uploads/Retrô/retro 93 4.png'
    ],
    isHighlight: false,
    description: 'Camisa Masculina I Retrô 1993/94 Azul Finta. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
    {
    id: 'retro-3',
    name: 'Camisa Masculina II Retrô 1993/94 Branca Finta',
    price: 'R$ 169,90',
    originalPrice: 'R$ 179,90',
    category: 'Retrô',
    images: [
      '/lovable-uploads/Retrô/retro 93 branca 1.png',
      '/lovable-uploads/Retrô/retro 93 branca 3.webp',
      '/lovable-uploads/Retrô/retro 93 branca 2.jpg',
      '/lovable-uploads/Retrô/retro 93 branca 4.jpg'
    ],
    isHighlight: false,
    description: 'Camisa Masculina II Retrô 1993/94 Branca Finta. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: 'retro-2',
    name: 'Cruzeiro Masculina III Retrô 2011 Verde Reebok',
    price: 'R$ 169,90',
    originalPrice: 'R$ 179,90',
    category: 'Retrô',
    images: [
      '/lovable-uploads/Retrô/retro 2011 1.png',
      '/lovable-uploads/Retrô/retro 2011 2.png',
      '/lovable-uploads/Retrô/retro 2011 3.png',
      '/lovable-uploads/Retrô/retro 2011 4.jpg'
    ],
    isHighlight: false,
    description: 'Cruzeiro Masculina III Retrô 2011 Verde Reebok. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: 'retro-5',
    name: 'Camisa Masculina I 2020/21 Azul Adidas - Torcedor',
    price: 'R$ 169,90',
    originalPrice: 'R$ 179,90',
    category: 'Retrô',
    images: [
      '/lovable-uploads/Retrô/camisa retro 2020 foto 1-azul.png',
      '/lovable-uploads/Retrô/camisa retro 2020 foto 2-azul.png',
    ],
    isHighlight: false,
    description: 'Camisa Masculina I 2020/21 Azul Adidas - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: 'retro-4',
    name: 'Camisa Masculina II 2020/21 Branca Adidas - Torcedor',
    price: 'R$ 169,90',
    originalPrice: 'R$ 179,90',
    category: 'Retrô',
    images: [
       '/lovable-uploads/Retrô/camisa retro 2020 foto 1-branca.png',
      '/lovable-uploads/Retrô/camisa retro 2020 foto 2-branca.png',
    ],
    isHighlight: false,
    description: 'Camisa Masculina II 2020/21 Branca Adidas - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },

  // Treino
  {
    id: 'treino-1',
    name: 'Kit Moletom Masculino Treino 2025/26 Adidas',
    price: 'R$ 299,90',
    originalPrice: 'R$ 309,90',
    category: 'Treino',
    images: [
      '/lovable-uploads/Treino/Conjunto Treino 2025.png',
      '/lovable-uploads/Treino/Conjunto treino 2025 foto 2 .png'
    ],
    isHighlight: false,
    description: 'Kit Moletom Masculino Treino 2025/26 Adidas. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: 'treino-2',
    name: 'Kit Moletom Masculino Treino 2025/26 Azul Turquesa Adidas',
    price: 'R$ 299,90',
    originalPrice: 'R$ 309,90',
    category: 'Treino',
    images: [
      '/lovable-uploads/Treino/Conjunto Treino 2025 Azul turquesa foto 1.png',
      '/lovable-uploads/Treino/Conjunto Treino 2025 Azul turquesa foto 2.png'
    ],
    isHighlight: false,
    description: 'Kit Moletom Masculino Treino 2025/26 Azul Turquesa Adidas. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: 'treino-3',
    name: 'Camisa Masculina Treino 2025/26 Adidas',
    price: 'R$ 109,90',
    originalPrice: 'R$ 119,90',
    category: 'Treino',
    images: [
      '/lovable-uploads/Treino/cruzeiro treino normal foto 1.png',
      '/lovable-uploads/Treino/cruzeiro treino normal foto 2.png',
    ],
    isHighlight: false,
    description: 'Camisa Cruzeiro Treino 2025/26 AdidasMasculina. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: 'treino-4',
    name: 'Camisa Cruzeiro Treino 2025/26 Azul Turquesa Adidas Masculina',
    price: 'R$ 109,90',
    originalPrice: 'R$ 119,90',
    category: 'Treino',
    images: [
      '/lovable-uploads/Treino/cruzeiro treino azul turquesa foto 1.png',
      '/lovable-uploads/Treino/cruzeiro treino azul turquesa foto 2.png',
    ],
    isHighlight: false,
    description: 'Camisa Masculina Treino 2025/26 Azul Turquesa Adidas. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: 'treino-5',
    name: 'Regata Masculina Treino 2025/26 Adidas',
    price: 'R$ 99,90',
    originalPrice: 'R$ 109,90',
    category: 'Treino',
    images: [
      '/lovable-uploads/Treino/camisa treino foto 1.png',
    ],
    isHighlight: false,
    description: 'Regata Masculina Treino 2025/26 Adidas. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: 'treino-6',
    name: 'Regata Masculina Treino 2025/26 Azul Turquesa Adidas',
    price: 'R$ 99,90',
    originalPrice: 'R$ 109,90',
    category: 'Treino',
    images: [
      '/lovable-uploads/Treino/cruzeiro treino turquesa foto 1 regata.png',
      '/lovable-uploads/Treino/cruzeiro treino turquesa foto 2 regata.png',
    ],
    isHighlight: false,
    description: 'Regata Masculina Treino 2025/26 Azul Turquesa Adidas. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: 'treino-7',
    name: 'Short Masculino Treino 2025/26 Adidas',
    price: 'R$ 99,90',
    originalPrice: 'R$ 109,90',
    category: 'Treino',
    images: [
      '/lovable-uploads/Treino/short-treino-2025.png',
    ],
    isHighlight: false,
    description: 'Short Masculino Treino 2025/26 Adidas. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: 'treino-10',
    name: 'Camisa Masculina Treino 2024/25 Adidas',
    price: 'R$ 109,90',
    originalPrice: 'R$ 119,90',
    category: 'Treino',
    images: [
      '/lovable-uploads/Treino/camisa treino 2024 foto 1.png',
      '/lovable-uploads/Treino/camisa treino 2024 foto 2.png',
    ],
    isHighlight: false,
    description: 'Camisa Masculina Treino 2024/25 Adidas. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: 'treino-11',
    name: 'Short Masculino Treino 2024/25 Adidas',
    price: 'R$ 99,90',
    originalPrice: 'R$ 109,90',
    category: 'Treino',
    images: [
      '/lovable-uploads/Treino/short treino 2024 foto 1.png',
      '/lovable-uploads/Treino/short treino 2024 foto 2.png',
    ],
    isHighlight: false,
    description: 'Short Masculino Treino 2024/25 Adidas. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: 'treino-13',
    name: 'Camisa Masculina Treino 2024/25 Laranja Adidas',
    price: 'R$ 109,90',
    originalPrice: 'R$ 119,90',
    category: 'Treino',
    images: [
      '/lovable-uploads/Treino/camisa treino 2024 foto 1 laranja.png',
      '/lovable-uploads/Treino/cruzeiro treino 2024 laranja foto 2.png',
    ],
    isHighlight: false,
    description: 'Camisa Masculina Treino 2024/25 Laranja Adidas. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  // Infantil
  {
    id: 'infantil-2',
    name: 'Kit Uniforme Infantil Treino 2025/26 Adidas',
    price: 'R$ 149,90',
    originalPrice: 'R$ 159,90',
    category: ['Treino', 'Infantil'],
    images: [
      '/lovable-uploads/Infantil/kit treino infantil foto 1.png',
      '/lovable-uploads/Infantil/kit treino infantil foto 2.png',
      '/lovable-uploads/Infantil/kit treino infantil foto 3.png'
    ],
    isHighlight: false,
    description: 'Kit Uniforme Infantil Treino 2025/26 Adidas. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: 'infantil-3',
    name: 'Kit Uniforme Infantil Treino 2025/26 Azul Turquesa Adidas',
    price: 'R$ 149,90',
    originalPrice: 'R$ 159,90',
    category: ['Treino', 'Infantil'],
    images: [
      '/lovable-uploads/Infantil/kit treino infantil azul turquesa foto 1.png',
      '/lovable-uploads/Infantil/kit treino infantil azul turquesa foto 2.png',
      '/lovable-uploads/Infantil/kit treino infantil azul turquesa foto 3.png'
    ],
    isHighlight: false,
    description: 'Kit Uniforme Infantil Treino 2025/26 Azul Turquesa Adidas. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  }
];
