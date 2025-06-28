export interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice: string;
  category: string;
  images: string[];
  isHighlight: boolean;
  description: string;
  features?: string[];
}

export const products: Product[] = [
  // 2025/26 - Todos com pronta entrega nos 3 primeiros
  {
    id: '2025-26-1',
    name: 'Camisa Cruzeiro I 2025/26 Azul Adidas Masculina - Torcedor',
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
    description: 'Camisa Cruzeiro I 2025/26 Azul Adidas Masculina - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Tamanhos M e G à pronta entrega. Demais tamanhos sob encomenda com entrega em até 25 dias úteis.',
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
    name: 'Regata Cruzeiro I 2025/26 Azul Adidas Masculina - Torcedor',
    price: 'R$ 99,90',
    originalPrice: 'R$ 109,90',
    category: '2025/26',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Regata Cruzeiro I 2025/26 Azul Adidas Masculina - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.',
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
    name: 'Camisa Cruzeiro I 2025/26 Azul Adidas Feminina - Torcedor',
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
    description: 'Camisa Cruzeiro I 2025/26 Azul Adidas Feminina - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Tamanhos M e G à pronta entrega. Demais tamanhos sob encomenda com entrega em até 25 dias úteis.',
    features: [
      'Tecnologia Dri-FIT para absorção do suor',
      'Tecido 100% poliéster de alta qualidade',
      'Bordados oficiais do Cruzeiro',
      'Corte feminino ajustado',
      'Disponível em todos os tamanhos'
    ]
  },
  {
    id: '2025-26-3',
    name: 'Kit Uniforme Cruzeiro I 2025/26 Azul e Branco Adidas Infantil',
    price: 'R$ 149,90',
    originalPrice: 'R$ 159,90',
    category: '2025/26',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Kit Uniforme Cruzeiro I 2025/26 Azul e Branco Adidas Infantil. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.',
    features: [
      'Tecnologia Dri-FIT para absorção do suor',
      'Tecido 100% poliéster de alta qualidade',
      'Bordados oficiais do Cruzeiro',
      'Kit completo camisa + short',
      'Disponível em todos os tamanhos'
    ]
  },
  {
    id: '2025-26-4',
    name: 'Short Cruzeiro I 2025/26 Branco Adidas Masculino - Torcedor',
    price: 'R$ 99,90',
    originalPrice: 'R$ 109,90',
    category: '2025/26',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Short Cruzeiro I 2025/26 Branco Adidas Masculino - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.',
    features: [
      'Tecnologia Dri-FIT para absorção do suor',
      'Tecido 100% poliéster de alta qualidade',
      'Bordados oficiais do Cruzeiro',
      'Corte masculino confortável',
      'Disponível em todos os tamanhos'
    ]
  },
  // 2024/25 - Apenas o primeiro com pronta entrega
  {
    id: '2024-25-1',
    name: 'Camisa Cruzeiro I 2024/25 Azul Adidas Masculina - Torcedor',
    price: 'R$ 119,90',
    originalPrice: 'R$ 129,90',
    category: '2024/25',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: true,
    description: 'Camisa Cruzeiro I 2024/25 Azul Adidas Masculina - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Tamanhos M e G à pronta entrega. Demais tamanhos sob encomenda com entrega em até 25 dias úteis.'
  },
  {
    id: '2024-25-2',
    name: 'Camisa Cruzeiro II 2024/25 Branca Adidas Masculina - Torcedor',
    price: 'R$ 119,90',
    originalPrice: 'R$ 129,90',
    category: '2024/25',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Camisa Cruzeiro II 2024/25 Branca Adidas Masculina - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2024-25-3',
    name: 'Camisa Cruzeiro III 2024/25 Azul Adidas Masculina - Torcedor',
    price: 'R$ 119,90',
    originalPrice: 'R$ 129,90',
    category: '2024/25',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Camisa Cruzeiro III 2024/25 Azul Adidas Masculina - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2024-25-3-regata',
    name: 'Regata Cruzeiro I 2024/25 Azul Adidas Masculina - Torcedor',
    price: 'R$ 99,90',
    originalPrice: 'R$ 109,90',
    category: '2024/25',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Regata Cruzeiro I 2024/25 Azul Adidas Masculina - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2024-25-2-branca',
    name: 'Camisa Cruzeiro II 2024/25 Branca Adidas Masculina - Torcedor',
    price: 'R$ 119,90',
    originalPrice: 'R$ 129,90',
    category: '2024/25',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Camisa Cruzeiro II 2024/25 Branca Adidas Masculina - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  // Continue with remaining products...
  {
    id: '2024-25-4',
    name: 'Camisa Cruzeiro I 2024/25 Azul Adidas Feminina - Torcedor',
    price: 'R$ 119,90',
    originalPrice: 'R$ 129,90',
    category: '2024/25',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Camisa Cruzeiro I 2024/25 Azul Adidas Feminina - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2024-25-5',
    name: 'Camisa Cruzeiro II 2024/25 Branca Adidas Feminina - Torcedor',
    price: 'R$ 119,90',
    originalPrice: 'R$ 129,90',
    category: '2024/25',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Camisa Cruzeiro II 2024/25 Branca Adidas Feminina - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2024-25-6',
    name: 'Camisa Cruzeiro III 2024/25 Azul Adidas Feminina - Torcedor',
    price: 'R$ 119,90',
    originalPrice: 'R$ 129,90',
    category: '2024/25',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Camisa Cruzeiro III 2024/25 Azul Adidas Feminina - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2024-25-7',
    name: 'Short Cruzeiro I 2024/25 Branco Adidas Masculino - Torcedor',
    price: 'R$ 99,90',
    originalPrice: 'R$ 109,90',
    category: '2024/25',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Short Cruzeiro I 2024/25 Branco Adidas Masculino - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  // Continue with other collections without highlights...
  // 2023/24
  {
    id: '2023-24-1',
    name: 'Camisa Cruzeiro I 2023/24 Azul Adidas Masculina - Torcedor',
    price: 'R$ 119,90',
    originalPrice: 'R$ 129,90',
    category: '2023/24',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Camisa oficial do Cruzeiro 2023/24. Qualidade premium com tecnologia de última geração para máximo conforto e durabilidade.'
  },
  {
    id: '2023-24-2',
    name: 'Camisa Cruzeiro II 2023/24 Branca Adidas Masculina - Torcedor',
    price: 'R$ 119,90',
    originalPrice: 'R$ 129,90',
    category: '2023/24',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Camisa oficial do Cruzeiro 2023/24. Qualidade premium com tecnologia de última geração para máximo conforto e durabilidade.'
  },
  // Continue with remaining products from 2023/24, 2022/23, etc. without highlights
];
