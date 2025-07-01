
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
      '/lovable-uploads/2025-26/regata-foto-1.png',
      '/lovable-uploads/2025-26/regata-foto-2.png'
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
      '/lovable-uploads/2025-26/Camisa-feminina-foto1.webp',
      '/lovable-uploads/2025-26/Camisa-feminina-foto2.webp',
      '/lovable-uploads/2025-26/Camisa-feminina-foto3.webp',
      '/lovable-uploads/2025-26/Camisa-feminina-foto4.webp'
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
      '/lovable-uploads/2025-26/cruzeiro infantil 1.png',
      '/lovable-uploads/2025-26/cruzeiro infantil 2.png',
      '/lovable-uploads/2025-26/cruzeiro infantil 3.png',
      '/lovable-uploads/2025-26/cruzeiro infantil 4.png'
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
    description: 'Camisa Cruzeiro I 2023/24 Azul Adidas Masculina - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
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
    description: 'Camisa Cruzeiro II 2023/24 Branca Adidas Masculina - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2023-24-3',
    name: 'Camisa Cruzeiro III 2023/24 Azul Turquesa Adidas Masculina - Torcedor',
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
    description: 'Camisa Cruzeiro III 2023/24 Azul Turquesa Adidas Masculina - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2023-24-4',
    name: 'Camisa Cruzeiro Consciência Negra 2023/24 Adidas Masculina - Torcedor',
    price: 'R$ 109,90',
    originalPrice: 'R$ 119,90',
    category: '2023/24',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Camisa Cruzeiro Consciência Negra 2023/24 Adidas Masculina - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2023-24-5',
    name: 'Camisa Cruzeiro Goleiro 2023/24 Adidas Masculina - Torcedor',
    price: 'R$ 109,90',
    originalPrice: 'R$ 119,90',
    category: '2023/24',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Camisa Cruzeiro Goleiro 2023/24 Adidas Masculina - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2023-24-6',
    name: 'Camisa Cruzeiro I 2023/24 Azul Adidas Feminina - Torcedor',
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
    description: 'Camisa Cruzeiro I 2023/24 Azul Adidas Feminina - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2023-24-7',
    name: 'Camisa Cruzeiro II 2024/25 Branca Adidas Feminina - Torcedor',
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
    description: 'Camisa Cruzeiro II 2024/25 Branca Adidas Feminina - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2023-24-8',
    name: 'Camisa Cruzeiro III 2024/25 Azul Adidas Feminina - Torcedor',
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
    description: 'Camisa Cruzeiro III 2024/25 Azul Adidas Feminina - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  // 2022/23
  {
    id: '2022-23-1',
    name: 'Camisa Cruzeiro I 2022/23 Azul Adidas Masculina - Torcedor',
    price: 'R$ 129,90',
    originalPrice: 'R$ 139,90',
    category: '2022/23',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Camisa Cruzeiro I 2022/23 Azul Adidas Masculina - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2022-23-2',
    name: 'Camisa Cruzeiro II 2022/23 Branca Adidas Masculina - Torcedor',
    price: 'R$ 129,90',
    originalPrice: 'R$ 139,90',
    category: '2022/23',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Camisa Cruzeiro II 2022/23 Branca Adidas Masculina - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2022-23-3',
    name: 'Camisa Cruzeiro III 2022/23 Amarela Adidas Masculina - Torcedor',
    price: 'R$ 129,90',
    originalPrice: 'R$ 139,90',
    category: '2022/23',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Camisa Cruzeiro III 2022/23 Amarela Adidas Masculina - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2022-23-4',
    name: 'Camisa Cruzeiro I 2022/23 Azul Adidas Feminina - Torcedor',
    price: 'R$ 129,90',
    originalPrice: 'R$ 139,90',
    category: '2022/23',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Camisa Cruzeiro I 2022/23 Azul Adidas Feminina - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2022-23-5',
    name: 'Camisa Cruzeiro II 2022/23 Branca Adidas Feminina - Torcedor',
    price: 'R$ 129,90',
    originalPrice: 'R$ 139,90',
    category: '2022/23',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Camisa Cruzeiro II 2022/23 Branca Adidas Feminina - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2022-23-6',
    name: 'Camisa Cruzeiro III 2022/23 Amarela Adidas Feminina - Torcedor',
    price: 'R$ 129,90',
    originalPrice: 'R$ 139,90',
    category: '2022/23',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Camisa Cruzeiro III 2022/23 Amarela Adidas Feminina - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  // 2021/22 Centenário
  {
    id: '2021-22-1',
    name: 'Camisa Cruzeiro I 2021/22 Centenário Azul Adidas Masculina - Torcedor',
    price: 'R$ 129,90',
    originalPrice: 'R$ 139,90',
    category: '2021/22 Centenário',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Camisa Cruzeiro I 2021/22 Centenário Azul Adidas Masculina - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2021-22-2',
    name: 'Camisa Cruzeiro II 2021/22 Centenário Branca Adidas Masculina - Torcedor',
    price: 'R$ 129,90',
    originalPrice: 'R$ 139,90',
    category: '2021/22 Centenário',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Camisa Cruzeiro II 2021/22 Centenário Branca Adidas Masculina - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2021-22-3',
    name: 'Camisa Cruzeiro III 2021/22 Centenário Verde Adidas Masculina - Torcedor',
    price: 'R$ 129,90',
    originalPrice: 'R$ 139,90',
    category: '2021/22 Centenário',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Camisa Cruzeiro III 2021/22 Centenário Verde Adidas Masculina - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2021-22-4',
    name: 'Camisa Cruzeiro I 2021/22 Centenário Azul Adidas Feminina - Torcedor',
    price: 'R$ 129,90',
    originalPrice: 'R$ 139,90',
    category: '2021/22 Centenário',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Camisa Cruzeiro I 2021/22 Centenário Azul Adidas Feminina - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2021-22-5',
    name: 'Camisa Cruzeiro II 2021/22 Centenário Branca Adidas Feminina - Torcedor',
    price: 'R$ 129,90',
    originalPrice: 'R$ 139,90',
    category: '2021/22 Centenário',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Camisa Cruzeiro II 2021/22 Centenário Branca Adidas Feminina - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: '2021-22-6',
    name: 'Camisa Cruzeiro III 2021/22 Centenário Verde Adidas Feminina - Torcedor',
    price: 'R$ 129,90',
    originalPrice: 'R$ 139,90',
    category: '2021/22 Centenário',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Camisa Cruzeiro III 2021/22 Centenário Verde Adidas Feminina - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  // Retrô
  {
    id: 'retro-1',
    name: 'Camisa Cruzeiro I Retrô 1993/94 Azul Finta Masculina',
    price: 'R$ 169,90',
    originalPrice: 'R$ 179,90',
    category: 'Retrô',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Camisa Cruzeiro I Retrô 1993/94 Azul Finta Masculina. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: 'retro-2',
    name: 'Cruzeiro Camisa III Retrô 2011 Verde Reebok Masculina',
    price: 'R$ 169,90',
    originalPrice: 'R$ 179,90',
    category: 'Retrô',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Cruzeiro Camisa III Retrô 2011 Verde Reebok Masculina. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: 'retro-3',
    name: 'Camisa Cruzeiro II Retrô 1993/94 Branca Finta Masculina',
    price: 'R$ 169,90',
    originalPrice: 'R$ 179,90',
    category: 'Retrô',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Camisa Cruzeiro II Retrô 1993/94 Branca Finta Masculina. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: 'retro-4',
    name: 'Camisa Cruzeiro II 2020/21 Branca Adidas Masculina - Torcedor',
    price: 'R$ 169,90',
    originalPrice: 'R$ 179,90',
    category: 'Retrô',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Camisa Cruzeiro II 2020/21 Branca Adidas Masculina - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: 'retro-5',
    name: 'Camisa Cruzeiro I 2020/21 Azul Adidas Masculina - Torcedor',
    price: 'R$ 169,90',
    originalPrice: 'R$ 179,90',
    category: 'Retrô',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Camisa Cruzeiro I 2020/21 Azul Adidas Masculina - Torcedor. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  // Treino
  {
    id: 'treino-1',
    name: 'Kit Moletom Cruzeiro Treino 2025/26 Adidas Masculino',
    price: 'R$ 299,90',
    originalPrice: 'R$ 309,90',
    category: 'Treino',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Kit Moletom Cruzeiro Treino 2025/26 Adidas Masculino. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: 'treino-2',
    name: 'Kit Moletom Cruzeiro Treino 2025/26 Azul Turquesa Adidas Masculino',
    price: 'R$ 299,90',
    originalPrice: 'R$ 309,90',
    category: 'Treino',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Kit Moletom Cruzeiro Treino 2025/26 Azul Turquesa Adidas Masculino. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: 'treino-3',
    name: 'Camisa Cruzeiro Treino 2025/26 Adidas Masculina',
    price: 'R$ 109,90',
    originalPrice: 'R$ 119,90',
    category: 'Treino',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Camisa Cruzeiro Treino 2025/26 Adidas Masculina. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: 'treino-4',
    name: 'Camisa Cruzeiro Treino 2025/26 Azul Turquesa Adidas Masculina',
    price: 'R$ 109,90',
    originalPrice: 'R$ 119,90',
    category: 'Treino',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Camisa Cruzeiro Treino 2025/26 Azul Turquesa Adidas Masculina. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: 'treino-5',
    name: 'Regata Cruzeiro Treino 2025/26 Adidas Masculina',
    price: 'R$ 99,90',
    originalPrice: 'R$ 109,90',
    category: 'Treino',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Regata Cruzeiro Treino 2025/26 Adidas Masculina. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: 'treino-6',
    name: 'Regata Cruzeiro Treino 2025/26 Azul Turquesa Adidas Masculina',
    price: 'R$ 99,90',
    originalPrice: 'R$ 109,90',
    category: 'Treino',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Regata Cruzeiro Treino 2025/26 Azul Turquesa Adidas Masculina. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: 'treino-7',
    name: 'Short Cruzeiro Treino 2025/26 Adidas Masculino',
    price: 'R$ 99,90',
    originalPrice: 'R$ 109,90',
    category: 'Treino',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Short Cruzeiro Treino 2025/26 Adidas Masculino. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: 'treino-8',
    name: 'Kit Uniforme Cruzeiro Treino 2025/26 Adidas Infantil',
    price: 'R$ 149,90',
    originalPrice: 'R$ 159,90',
    category: 'Treino',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Kit Uniforme Cruzeiro Treino 2025/26 Adidas Infantil. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: 'treino-9',
    name: 'Kit Uniforme Cruzeiro Treino 2025/26 Azul Turquesa Adidas Infantil',
    price: 'R$ 149,90',
    originalPrice: 'R$ 159,90',
    category: 'Treino',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Kit Uniforme Cruzeiro Treino 2025/26 Azul Turquesa Adidas Infantil. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: 'treino-10',
    name: 'Camisa Cruzeiro Treino 2024/25 Adidas Masculina',
    price: 'R$ 109,90',
    originalPrice: 'R$ 119,90',
    category: 'Treino',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Camisa Cruzeiro Treino 2024/25 Adidas Masculina. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: 'treino-11',
    name: 'Short Cruzeiro Treino 2024/25 Adidas Masculino',
    price: 'R$ 99,90',
    originalPrice: 'R$ 109,90',
    category: 'Treino',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Short Cruzeiro Treino 2024/25 Adidas Masculino. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: 'treino-12',
    name: 'Camisa Cruzeiro Treino 2024/25 Adidas Masculina',
    price: 'R$ 109,90',
    originalPrice: 'R$ 119,90',
    category: 'Treino',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Camisa Cruzeiro Treino 2024/25 Adidas Masculina. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: 'treino-13',
    name: 'Camisa Cruzeiro Treino 2024/25 Laranja Adidas Masculina',
    price: 'R$ 109,90',
    originalPrice: 'R$ 119,90',
    category: 'Treino',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Camisa Cruzeiro Treino 2024/25 Laranja Adidas Masculina. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  // Infantil
  {
    id: 'infantil-1',
    name: 'Kit Uniforme Cruzeiro I 2025/26 Azul e Branco Adidas Infantil',
    price: 'R$ 149,90',
    originalPrice: 'R$ 159,90',
    category: 'Infantil',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Kit Uniforme Cruzeiro I 2025/26 Azul e Branco Adidas Infantil. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: 'infantil-2',
    name: 'Kit Uniforme Cruzeiro Treino 2025/26 Adidas Infantil',
    price: 'R$ 149,90',
    originalPrice: 'R$ 159,90',
    category: 'Infantil',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Kit Uniforme Cruzeiro Treino 2025/26 Adidas Infantil. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  },
  {
    id: 'infantil-3',
    name: 'Kit Uniforme Cruzeiro Treino 2025/26 Azul Turquesa Adidas Infantil',
    price: 'R$ 149,90',
    originalPrice: 'R$ 159,90',
    category: 'Infantil',
    images: [
      '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
      '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
      '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
      '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
    ],
    isHighlight: false,
    description: 'Kit Uniforme Cruzeiro Treino 2025/26 Azul Turquesa Adidas Infantil. Qualidade premium 1:1 com material de alta qualidade. Todos os tamanhos disponíveis por encomenda, com prazo de entrega de até 25 dias úteis.'
  }
];
