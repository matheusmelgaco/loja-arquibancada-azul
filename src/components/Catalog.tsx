
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Catalog = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 8;

  const filters = ['Todos', '2025/26', '2024/25', '2023/24', '2022/23', '2021/22 Centenário', 'Retrô', 'Infantil', 'Treino'];

  const products = [
    // 2025/26
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
      description: 'Camisa oficial do Cruzeiro 2025/26. Qualidade premium com tecnologia de última geração.'
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
      isHighlight: false,
      description: 'Camisa oficial do Cruzeiro 2025/26. Qualidade premium com tecnologia de última geração.'
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
      description: 'Kit oficial do Cruzeiro 2025/26. Qualidade premium com tecnologia de última geração.'
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
      description: 'Short oficial do Cruzeiro 2025/26. Qualidade premium com tecnologia de última geração.'
    },
    // 2024/25
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
      description: 'Camisa oficial do Cruzeiro 2024/25. Qualidade premium com tecnologia de última geração.'
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
      description: 'Camisa oficial do Cruzeiro 2024/25. Qualidade premium com tecnologia de última geração.'
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
      description: 'Camisa oficial do Cruzeiro 2024/25. Qualidade premium com tecnologia de última geração.'
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
      description: 'Camisa oficial do Cruzeiro 2024/25. Qualidade premium com tecnologia de última geração.'
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
      description: 'Camisa oficial do Cruzeiro 2024/25. Qualidade premium com tecnologia de última geração.'
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
      description: 'Camisa oficial do Cruzeiro 2024/25. Qualidade premium com tecnologia de última geração.'
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
      description: 'Short oficial do Cruzeiro 2024/25. Qualidade premium com tecnologia de última geração.'
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
      isHighlight: true,
      description: 'Camisa oficial do Cruzeiro 2023/24. Qualidade premium com tecnologia de última geração.'
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
      description: 'Camisa oficial do Cruzeiro 2023/24. Qualidade premium com tecnologia de última geração.'
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
      description: 'Camisa oficial do Cruzeiro 2023/24. Qualidade premium com tecnologia de última geração.'
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
      description: 'Camisa oficial do Cruzeiro 2023/24. Qualidade premium com tecnologia de última geração.'
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
      description: 'Camisa oficial do Cruzeiro 2023/24. Qualidade premium com tecnologia de última geração.'
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
      description: 'Camisa oficial do Cruzeiro 2023/24. Qualidade premium com tecnologia de última geração.'
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
      description: 'Camisa oficial do Cruzeiro 2023/24. Qualidade premium com tecnologia de última geração.'
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
      description: 'Camisa oficial do Cruzeiro 2023/24. Qualidade premium com tecnologia de última geração.'
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
      isHighlight: true,
      description: 'Camisa oficial do Cruzeiro 2022/23. Qualidade premium com tecnologia de última geração.'
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
      description: 'Camisa oficial do Cruzeiro 2022/23. Qualidade premium com tecnologia de última geração.'
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
      description: 'Camisa oficial do Cruzeiro 2022/23. Qualidade premium com tecnologia de última geração.'
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
      description: 'Camisa oficial do Cruzeiro 2022/23. Qualidade premium com tecnologia de última geração.'
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
      description: 'Camisa oficial do Cruzeiro 2022/23. Qualidade premium com tecnologia de última geração.'
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
      description: 'Camisa oficial do Cruzeiro 2022/23. Qualidade premium com tecnologia de última geração.'
    },
    // 2021/22 Centenário
    {
      id: '2021-22-centenario-1',
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
      isHighlight: true,
      description: 'Camisa oficial do Cruzeiro 2021/22 Centenário. Qualidade premium com tecnologia de última geração.'
    },
    {
      id: '2021-22-centenario-2',
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
      description: 'Camisa oficial do Cruzeiro 2021/22 Centenário. Qualidade premium com tecnologia de última geração.'
    },
    {
      id: '2021-22-centenario-3',
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
      description: 'Camisa oficial do Cruzeiro 2021/22 Centenário. Qualidade premium com tecnologia de última geração.'
    },
    {
      id: '2021-22-centenario-4',
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
      description: 'Camisa oficial do Cruzeiro 2021/22 Centenário. Qualidade premium com tecnologia de última geração.'
    },
    {
      id: '2021-22-centenario-5',
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
      description: 'Camisa oficial do Cruzeiro 2021/22 Centenário. Qualidade premium com tecnologia de última geração.'
    },
    {
      id: '2021-22-centenario-6',
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
      description: 'Camisa oficial do Cruzeiro 2021/22 Centenário. Qualidade premium com tecnologia de última geração.'
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
      isHighlight: true,
      description: 'Camisa retrô do Cruzeiro 1993/94. Qualidade premium com tecnologia de última geração.'
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
      description: 'Camisa retrô do Cruzeiro 2011. Qualidade premium com tecnologia de última geração.'
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
      description: 'Camisa retrô do Cruzeiro 1993/94. Qualidade premium com tecnologia de última geração.'
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
      description: 'Camisa retrô do Cruzeiro 2020/21. Qualidade premium com tecnologia de última geração.'
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
      description: 'Camisa retrô do Cruzeiro 2020/21. Qualidade premium com tecnologia de última geração.'
    },
    // Treino
    {
      id: 'treino-1',
      name: 'Conjunto Moletom Cruzeiro Treino 2025/26 Adidas Masculino',
      price: 'R$ 299,90',
      originalPrice: 'R$ 309,90',
      category: 'Treino',
      images: [
        '/lovable-uploads/adec6b18-4bf0-4160-b02f-4b37ad3e4154.png',
        '/lovable-uploads/af6dcee0-9dac-4ef1-9722-b12a7f4355f4.png',
        '/lovable-uploads/f97099a2-eab1-4c05-8b03-11b958df25c9.png',
        '/lovable-uploads/0f03725b-4473-495a-8539-de67cb2cffdb.png'
      ],
      isHighlight: true,
      description: 'Conjunto de treino oficial do Cruzeiro. Qualidade premium com tecnologia de última geração.'
    },
    {
      id: 'treino-2',
      name: 'Conjunto Moletom Cruzeiro Treino 2025/26 Azul Turquesa Adidas Masculino',
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
      description: 'Conjunto de treino oficial do Cruzeiro. Qualidade premium com tecnologia de última geração.'
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
      description: 'Camisa de treino oficial do Cruzeiro. Qualidade premium com tecnologia de última geração.'
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
      description: 'Camisa de treino oficial do Cruzeiro. Qualidade premium com tecnologia de última geração.'
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
      description: 'Regata de treino oficial do Cruzeiro. Qualidade premium com tecnologia de última geração.'
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
      description: 'Regata de treino oficial do Cruzeiro. Qualidade premium com tecnologia de última geração.'
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
      description: 'Short de treino oficial do Cruzeiro. Qualidade premium com tecnologia de última geração.'
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
      description: 'Kit de treino oficial do Cruzeiro. Qualidade premium com tecnologia de última geração.'
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
      description: 'Kit de treino oficial do Cruzeiro. Qualidade premium com tecnologia de última geração.'
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
      description: 'Camisa de treino oficial do Cruzeiro. Qualidade premium com tecnologia de última geração.'
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
      description: 'Short de treino oficial do Cruzeiro. Qualidade premium com tecnologia de última geração.'
    },
    {
      id: 'treino-12',
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
      description: 'Camisa de treino oficial do Cruzeiro. Qualidade premium com tecnologia de última geração.'
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
      isHighlight: true,
      description: 'Kit oficial do Cruzeiro infantil. Qualidade premium com tecnologia de última geração.'
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
      description: 'Kit de treino oficial do Cruzeiro infantil. Qualidade premium com tecnologia de última geração.'
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
      description: 'Kit de treino oficial do Cruzeiro infantil. Qualidade premium com tecnologia de última geração.'
    }
  ];

  const filteredProducts = activeFilter === 'Todos' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  // Reset to page 1 when filter changes
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of catalog section
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="catalogo" className="py-8 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="font-montserrat font-extrabold text-lg md:text-2xl text-[#012F60] mb-2">
            🦊 NOSSO CATÁLOGO
          </h2>
          <p className="font-poppins text-sm text-gray-600 max-w-2xl mx-auto">
            Encontre a camisa perfeita do seu Cruzeiro. Modelos oficiais, retrô e edições especiais.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`px-2 py-1 text-xs rounded-lg font-montserrat font-bold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[#0038A8] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-[#1E7ACB] hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Products Grid - 2x4 layout for mobile, 4x2 for larger screens */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {currentProducts.map((product) => (
            <Link key={product.id} to={`/produto/${product.id}`}>
              <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                images={product.images}
                category={product.category}
                isHighlight={product.isHighlight}
              />
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mb-6">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) handlePageChange(currentPage - 1);
                    }}
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                  />
                </PaginationItem>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  // Show first page, last page, current page, and pages around current page
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <PaginationItem key={page}>
                        <PaginationLink
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(page);
                          }}
                          isActive={currentPage === page}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  } else if (
                    page === currentPage - 2 ||
                    page === currentPage + 2
                  ) {
                    return (
                      <PaginationItem key={page}>
                        <PaginationEllipsis />
                      </PaginationItem>
                    );
                  }
                  return null;
                })}
                
                <PaginationItem>
                  <PaginationNext 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages) handlePageChange(currentPage + 1);
                    }}
                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-6">
          <a 
            href="https://wa.me/5531999999999?text=Quero%20ver%20mais%20produtos%20da%20Arquibancada%20Azul"
            className="inline-block bg-[#D9A642] text-[#012F60] px-4 py-2 rounded-lg font-montserrat font-bold text-sm hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            💬 Ver Mais no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
