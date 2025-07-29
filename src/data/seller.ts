import { Seller, Post, Testimonial, Story, WorkGallery } from '@/types/seller';

export const seller: Seller = {
  id: '1',
  name: 'João Silva',
  avatar: '/lovable-uploads/92fd1cb5-e36a-4dae-8d75-02c49954d94d.png',
  position: 'Consultor de Vendas Honda',
  rating: 4.8,
  totalSales: 847,
  experience: 8,
  bio: 'Especialista em motos Honda há 8 anos. Ajudo você a encontrar a moto perfeita para seu estilo de vida e orçamento. Atendimento personalizado e as melhores condições do mercado!',
  specialties: ['Expert em Aventura', 'Financiamento Especializado', 'Primeira Habilitação'],
  certifications: ['Certificado Honda Master', 'Especialista em Crédito', 'Consultor Técnico'],
  phone: '5531996853838',
  responseTime: '15 min',
  monthlyStats: {
    clientsServed: 89,
    bikesSold: 23,
    avgRating: 4.9
  }
};

export const posts: Post[] = [
  {
    id: '1',
    sellerId: '1',
    content: '🎉 Mais uma entrega especial! A Maria realizou o sonho da primeira moto com esta linda Elite 125. Obrigado pela confiança! #PrimeiraHabilitacao #Honda',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 horas atrás
    likes: 24,
    comments: [],
    type: 'delivery'
  },
  {
    id: '2',
    sellerId: '1',
    content: '💡 DICA DO ESPECIALISTA: Sabiam que a CG 160 faz até 40km/l? É a escolha perfeita para quem busca economia no dia a dia! Vem conversar comigo! 🏍️',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 horas atrás
    likes: 18,
    comments: [],
    type: 'tip'
  },
  {
    id: '3',
    sellerId: '1',
    content: '🏆 CONQUISTA DESBLOQUEADA! 20 motos vendidas este mês! Muito obrigado a todos os clientes que confiaram no meu trabalho. Vocês são incríveis! ❤️',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 dia atrás
    likes: 45,
    comments: [],
    type: 'achievement'
  },
  {
    id: '4',
    sellerId: '1',
    content: '🎯 PROMOÇÃO ESPECIAL: Condições imperdíveis para a linha CG! Entrada facilitada e parcelas que cabem no seu bolso. Chama no zap! 📱',
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 dias atrás
    likes: 31,
    comments: [],
    type: 'promotion'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    clientName: 'Maria Silva',
    clientAvatar: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=60&h=60&fit=crop&crop=face',
    rating: 5,
    date: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
    bikeModel: 'Honda PCX',
    comment: 'Atendimento excepcional! O João me ajudou a escolher a moto perfeita e conseguiu as melhores condições de financiamento. Super recomendo!',
    sellerResponse: 'Obrigado Maria! Foi um prazer te ajudar. Aproveite sua nova PCX! 🏍️'
  },
  {
    id: '2',
    clientName: 'Carlos Oliveira',
    clientAvatar: 'https://images.unsplash.com/photo-1535268647677-300dbf307b71?w=60&h=60&fit=crop&crop=face',
    rating: 5,
    date: new Date(Date.now() - 22 * 24 * 60 * 60 * 1000),
    bikeModel: 'Honda CB 650R',
    comment: 'Profissional competente e muito atencioso. Tirou todas as minhas dúvidas e me deu a melhor proposta. Minha CB é um sonho!',
    sellerResponse: 'Muito obrigado Carlos! Fico feliz que esteja satisfeito. A CB 650R é realmente incrível! 🏍️'
  },
  {
    id: '3',
    clientName: 'Ana Santos',
    clientAvatar: 'https://images.unsplash.com/photo-1487058792275-0ad46a0f4730?w=60&h=60&fit=crop&crop=face',
    rating: 4,
    date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    bikeModel: 'Honda CG 160 Titan',
    comment: 'Primeira moto e o João teve muita paciência para explicar tudo. Recomendo para quem está começando!',
    sellerResponse: 'Foi um prazer te ajudar Ana! Qualquer dúvida, pode me chamar. Boa pilotagem! 🏍️'
  }
];

export const stories: Story[] = [
  {
    id: '1',
    sellerId: '1',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=80&h=80&fit=crop',
    title: 'Entrega do dia',
    type: 'delivery',
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000)
  },
  {
    id: '2',
    sellerId: '1',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=80&h=80&fit=crop',
    title: 'Dica técnica',
    type: 'tip',
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000)
  },
  {
    id: '3',
    sellerId: '1',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=80&h=80&fit=crop',
    title: 'Promoção especial',
    type: 'promotion',
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000)
  }
];

export const workGallery: WorkGallery[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop',
    client: 'Maria Silva',
    bikeModel: 'Honda Elite 125',
    description: 'Primeira habilitação - Um momento especial!',
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=300&h=200&fit=crop',
    client: 'Carlos Oliveira',
    bikeModel: 'Honda CB 650R',
    description: 'Upgrade dos sonhos realizado!',
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=300&h=200&fit=crop',
    client: 'Ana Santos',
    bikeModel: 'Honda CG 160 Titan',
    description: 'Economia e confiabilidade em uma só moto!',
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad46a0f4730?w=300&h=200&fit=crop',
    client: 'Roberto Lima',
    bikeModel: 'Honda PCX',
    description: 'Perfeita para o dia a dia na cidade!',
    date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000)
  }
];