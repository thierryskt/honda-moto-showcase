import { Bike, Category } from '../types/bike';

export const categories: Category[] = [
  {
    id: 'street',
    name: 'Street',
    icon: 'Bike',
    description: 'Motocicletas para uso urbano e dia a dia'
  },
  {
    id: 'sport',
    name: 'Sport',
    icon: 'Gauge',
    description: 'Motos esportivas de alta performance'
  },
  {
    id: 'adventure',
    name: 'Adventure',
    icon: 'Mountain',
    description: 'Para aventuras e terrenos variados'
  },
  {
    id: 'touring',
    name: 'Touring',
    icon: 'MapPin',
    description: 'Conforto para longas viagens'
  },
  {
    id: 'offroad',
    name: 'Off Road',
    icon: 'TreePine',
    description: 'Para trilhas e terrenos extremos'
  }
];

export const bikes: Bike[] = [
  // Street Category
  {
    id: 'cg-160-start',
    name: 'CG 160 Start',
    price: 'R$ 16.440,00',
    priceNumber: 16440,
    category: 'street',
    image: '/placeholder.svg',
    description: 'A CG 160 Start combina economia, durabilidade e performance para o seu dia a dia.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, OHC',
      cilindrada: '162,7 cm³',
      potencia: '14,5 cv @ 8.500 rpm',
      transmissao: '5 velocidades',
      combustivel: 'Flex',
      partida: 'Pedal'
    }
  },
  {
    id: 'cg-160-fan',
    name: 'CG 160 Fan',
    price: 'R$ 17.990,00',
    priceNumber: 17990,
    category: 'street',
    image: '/placeholder.svg',
    description: 'A CG 160 Fan oferece mais conforto e tecnologia para o seu trajeto diário.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, OHC',
      cilindrada: '162,7 cm³',
      potencia: '14,5 cv @ 8.500 rpm',
      transmissao: '5 velocidades',
      combustivel: 'Flex',
      partida: 'Elétrica'
    }
  },
  {
    id: 'cg-160-titan',
    name: 'CG 160 Titan',
    price: 'R$ 19.520,00',
    priceNumber: 19520,
    category: 'street',
    image: '/placeholder.svg',
    description: 'A CG 160 Titan é sinônimo de resistência e performance superior.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, OHC',
      cilindrada: '162,7 cm³',
      potencia: '14,5 cv @ 8.500 rpm',
      transmissao: '5 velocidades',
      combustivel: 'Flex',
      partida: 'Elétrica'
    }
  },
  {
    id: 'cg-160-cargo',
    name: 'CG 160 Cargo',
    price: 'R$ 17.430,00',
    priceNumber: 17430,
    category: 'street',
    image: '/placeholder.svg',
    description: 'Desenvolvida especialmente para trabalho e transporte de cargas.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, OHC',
      cilindrada: '162,7 cm³',
      potencia: '14,5 cv @ 8.500 rpm',
      transmissao: '5 velocidades',
      combustivel: 'Flex',
      capacidade: 'Porta-objetos 15L'
    }
  },
  {
    id: 'pop-110i-es',
    name: 'Pop 110i ES',
    price: 'R$ 10.080,00',
    priceNumber: 10080,
    category: 'street',
    image: '/placeholder.svg',
    description: 'Economia e praticidade para quem busca mobilidade urbana eficiente.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, OHV',
      cilindrada: '109,2 cm³',
      potencia: '8,5 cv @ 8.000 rpm',
      transmissao: 'CVT',
      combustivel: 'Flex',
      partida: 'Elétrica'
    }
  },
  {
    id: 'biz-125',
    name: 'Biz 125',
    price: 'R$ 12.600,00',
    priceNumber: 12600,
    category: 'street',
    image: '/placeholder.svg',
    description: 'O scooter ideal para agilidade no trânsito urbano.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, OHV',
      cilindrada: '124,9 cm³',
      potencia: '9,2 cv @ 7.500 rpm',
      transmissao: 'CVT',
      combustivel: 'Flex',
      partida: 'Elétrica'
    }
  },
  {
    id: 'elite-125',
    name: 'Elite 125',
    price: 'R$ 13.880,00',
    priceNumber: 13880,
    category: 'street',
    image: '/placeholder.svg',
    description: 'Scooter moderno com design sofisticado e tecnologia avançada.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, OHV',
      cilindrada: '124,9 cm³',
      potencia: '9,2 cv @ 7.500 rpm',
      transmissao: 'CVT',
      combustivel: 'Flex',
      partida: 'Elétrica'
    }
  },
  {
    id: 'pcx',
    name: 'PCX',
    price: 'R$ 17.976,00',
    priceNumber: 17976,
    category: 'street',
    image: '/placeholder.svg',
    description: 'O scooter premium com tecnologia Honda SMART Key.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, eSP',
      cilindrada: '149,3 cm³',
      potencia: '12,6 cv @ 8.500 rpm',
      transmissao: 'CVT',
      combustivel: 'Flex',
      partida: 'SMART Key'
    }
  },
  {
    id: 'honda-adv',
    name: 'Honda ADV',
    price: 'R$ 24.534,00',
    priceNumber: 24534,
    category: 'street',
    image: '/placeholder.svg',
    description: 'Scooter adventure com design robusto e versatilidade.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, eSP',
      cilindrada: '149,3 cm³',
      potencia: '12,6 cv @ 8.500 rpm',
      transmissao: 'CVT',
      combustivel: 'Flex',
      partida: 'Elétrica'
    }
  },
  {
    id: 'x-adv',
    name: 'X-ADV',
    price: 'R$ 93.500,00',
    priceNumber: 93500,
    category: 'street',
    image: '/placeholder.svg',
    description: 'O maxi-scooter adventure mais avançado da Honda.',
    specs: {
      motor: 'Bicilíndrico, 4 tempos, OHC',
      cilindrada: '745 cm³',
      potencia: '54,2 cv @ 6.250 rpm',
      transmissao: 'DCT',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  },
  {
    id: 'cb-300f-twister',
    name: 'CB 300F Twister',
    price: 'R$ 24.657,00',
    priceNumber: 24657,
    category: 'street',
    image: '/placeholder.svg',
    description: 'Naked com design agressivo e performance equilibrada.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, DOHC',
      cilindrada: '286,5 cm³',
      potencia: '25,4 cv @ 8.500 rpm',
      transmissao: '6 velocidades',
      combustivel: 'Flex',
      partida: 'Elétrica'
    }
  },
  {
    id: 'hornet-500',
    name: 'Hornet 500',
    price: 'R$ 43.040,00',
    priceNumber: 43040,
    category: 'street',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop',
    colors: [
      { name: 'Amarela', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop', colorCode: '#eab308' },
      { name: 'Vermelha', image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&h=400&fit=crop', colorCode: '#dc2626' },
      { name: 'Preta', image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop', colorCode: '#1f2937' }
    ],
    description: 'A naked de média cilindrada mais desejada.',
    specs: {
      motor: 'Bicilíndrico, 4 tempos, DOHC',
      cilindrada: '471 cm³',
      potencia: '47,6 cv @ 8.500 rpm',
      transmissao: '6 velocidades',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  },
  {
    id: 'cb-650r',
    name: 'CB 650R',
    price: 'R$ 52.590,00',
    priceNumber: 52590,
    category: 'street',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop',
    colors: [
      { name: 'Vermelha', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop', colorCode: '#dc2626' },
      { name: 'Branca', image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&h=400&fit=crop', colorCode: '#f8fafc' },
      { name: 'Preta', image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop', colorCode: '#1f2937' }
    ],
    description: 'Naked de alta cilindrada com performance e tecnologia.',
    specs: {
      motor: '4 cilindros, 4 tempos, DOHC',
      cilindrada: '648,7 cm³',
      potencia: '94 cv @ 12.000 rpm',
      transmissao: '6 velocidades',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  },
  {
    id: 'cb-1000r',
    name: 'CB 1000R',
    price: 'R$ 78.870,00',
    priceNumber: 78870,
    category: 'street',
    image: '/placeholder.svg',
    description: 'Super naked com potência e tecnologia de ponta.',
    specs: {
      motor: '4 cilindros, 4 tempos, DOHC',
      cilindrada: '998 cm³',
      potencia: '145 cv @ 10.500 rpm',
      transmissao: '6 velocidades',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  },
  {
    id: 'cb-1000r-black',
    name: 'CB 1000R Black Edition',
    price: 'R$ 87.730,00',
    priceNumber: 87730,
    category: 'street',
    image: '/placeholder.svg',
    description: 'Versão exclusiva da CB 1000R com acabamento premium.',
    specs: {
      motor: '4 cilindros, 4 tempos, DOHC',
      cilindrada: '998 cm³',
      potencia: '145 cv @ 10.500 rpm',
      transmissao: '6 velocidades',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  },

  // Sport Category
  {
    id: 'cbr-650r',
    name: 'CBR 650R',
    price: 'R$ 55.360,00',
    priceNumber: 55360,
    category: 'sport',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop',
    colors: [
      { name: 'Vermelha', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop', colorCode: '#dc2626' },
      { name: 'Azul Metálico', image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&h=400&fit=crop', colorCode: '#2563eb' },
      { name: 'Preta', image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop', colorCode: '#1f2937' }
    ],
    description: 'Supersportiva com design agressivo e performance superior.',
    specs: {
      motor: '4 cilindros, 4 tempos, DOHC',
      cilindrada: '648,7 cm³',
      potencia: '94 cv @ 12.000 rpm',
      transmissao: '6 velocidades',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  },
  {
    id: 'cbr-1000rr-r-fireblade-sp',
    name: 'CBR 1000RR-R FIREBLADE SP',
    price: 'R$ 189.174,00',
    priceNumber: 189174,
    category: 'sport',
    image: '/placeholder.svg',
    description: 'A supersportiva mais avançada da Honda, inspirada na MotoGP.',
    specs: {
      motor: '4 cilindros, 4 tempos, DOHC',
      cilindrada: '999,8 cm³',
      potencia: '217 cv @ 14.500 rpm',
      transmissao: '6 velocidades',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  },

  // Adventure Category
  {
    id: 'xr-300l-tornado',
    name: 'XR 300L Tornado',
    price: 'R$ 30.840,00',
    priceNumber: 30840,
    category: 'adventure',
    image: '/placeholder.svg',
    description: 'Trail leve e versátil para qualquer terreno.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, DOHC',
      cilindrada: '292,4 cm³',
      potencia: '25,5 cv @ 8.500 rpm',
      transmissao: '6 velocidades',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  },
  {
    id: 'nxr-160-bros',
    name: 'NXR 160 Bros',
    price: 'R$ 20.900,00',
    priceNumber: 20900,
    category: 'adventure',
    image: '/placeholder.svg',
    description: 'A trail mais querida do Brasil, robusta e confiável.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, OHC',
      cilindrada: '162,7 cm³',
      potencia: '14,9 cv @ 8.500 rpm',
      transmissao: '5 velocidades',
      combustivel: 'Flex',
      partida: 'Elétrica'
    }
  },
  {
    id: 'sahara-300',
    name: 'Sahara 300',
    price: 'R$ 29.580,00',
    priceNumber: 29580,
    category: 'adventure',
    image: '/placeholder.svg',
    description: 'Adventure de média cilindrada com design moderno.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, SOHC',
      cilindrada: '292,4 cm³',
      potencia: '25,5 cv @ 8.500 rpm',
      transmissao: '6 velocidades',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  },
  {
    id: 'xre-190',
    name: 'XRE 190',
    price: 'R$ 23.120,00',
    priceNumber: 23120,
    category: 'adventure',
    image: '/placeholder.svg',
    description: 'Adventure de entrada com ótimo custo-benefício.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, OHV',
      cilindrada: '184,4 cm³',
      potencia: '16,7 cv @ 8.000 rpm',
      transmissao: '5 velocidades',
      combustivel: 'Flex',
      partida: 'Elétrica'
    }
  },
  {
    id: 'nx-500',
    name: 'NX 500',
    price: 'R$ 45.800,00',
    priceNumber: 45800,
    category: 'adventure',
    image: '/placeholder.svg',
    description: 'Adventure de média cilindrada com tecnologia avançada.',
    specs: {
      motor: 'Bicilíndrico, 4 tempos, DOHC',
      cilindrada: '471 cm³',
      potencia: '47,6 cv @ 8.500 rpm',
      transmissao: '6 velocidades',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  },
  {
    id: 'nc-750x',
    name: 'NC 750X',
    price: 'R$ 53.730,00',
    priceNumber: 53730,
    category: 'adventure',
    image: '/placeholder.svg',
    description: 'Adventure touring com câmbio DCT e design único.',
    specs: {
      motor: 'Bicilíndrico, 4 tempos, OHC',
      cilindrada: '745 cm³',
      potencia: '54,2 cv @ 6.250 rpm',
      transmissao: 'DCT (opcional)',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  },
  {
    id: 'crf-1100l-africa-twin',
    name: 'CRF 1100L Africa Twin',
    price: 'R$ 81.100,00',
    priceNumber: 81100,
    category: 'adventure',
    image: '/placeholder.svg',
    description: 'A lendária Africa Twin com tecnologia de ponta.',
    specs: {
      motor: 'Bicilíndrico, 4 tempos, OHC',
      cilindrada: '1.084 cm³',
      potencia: '101 cv @ 7.500 rpm',
      transmissao: '6 velocidades',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  },
  {
    id: 'crf-1100l-africa-twin-adventure-sports',
    name: 'CRF 1100L Africa Twin Adventure Sports',
    price: 'R$ 102.130,00',
    priceNumber: 102130,
    category: 'adventure',
    image: '/placeholder.svg',
    description: 'Versão Adventure Sports com suspensões eletrônicas.',
    specs: {
      motor: 'Bicilíndrico, 4 tempos, OHC',
      cilindrada: '1.084 cm³',
      potencia: '101 cv @ 7.500 rpm',
      transmissao: '6 velocidades',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  },

  // Touring Category
  {
    id: 'gl-1800-gold-wing-tour',
    name: 'GL 1800 Gold Wing Tour',
    price: 'R$ 304.450,00',
    priceNumber: 304450,
    category: 'touring',
    image: '/placeholder.svg',
    description: 'A touring de luxo mais avançada do mundo.',
    specs: {
      motor: '6 cilindros, 4 tempos, OHC',
      cilindrada: '1.833 cm³',
      potencia: '125 cv @ 5.500 rpm',
      transmissao: 'DCT',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  },

  // Off Road Category
  {
    id: 'crf-250f',
    name: 'CRF 250F',
    price: 'R$ 23.390,00',
    priceNumber: 23390,
    category: 'offroad',
    image: '/placeholder.svg',
    description: 'Off-road de entrada para trilhas e diversão.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, DOHC',
      cilindrada: '249,4 cm³',
      potencia: '22,8 cv @ 8.500 rpm',
      transmissao: '5 velocidades',
      combustivel: 'Gasolina',
      partida: 'Pedal'
    }
  },
  {
    id: 'linha-crf-250',
    name: 'Linha CRF 250',
    price: 'R$ 71.163,00',
    priceNumber: 71163,
    category: 'offroad',
    image: '/placeholder.svg',
    description: 'Off-road de competição com tecnologia de ponta.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, DOHC',
      cilindrada: '249,4 cm³',
      potencia: '40 cv @ 12.000 rpm',
      transmissao: '5 velocidades',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  },
  {
    id: 'linha-crf-450',
    name: 'Linha CRF 450',
    price: 'R$ 74.878,00',
    priceNumber: 74878,
    category: 'offroad',
    image: '/placeholder.svg',
    description: 'Off-road de alta performance para profissionais.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, DOHC',
      cilindrada: '449,7 cm³',
      potencia: '53 cv @ 9.000 rpm',
      transmissao: '5 velocidades',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  },
  {
    id: 'trx-420-fourtrax',
    name: 'TRX 420 FourTrax',
    price: 'R$ 53.550,00',
    priceNumber: 53550,
    category: 'offroad',
    image: '/placeholder.svg',
    description: 'Quadriciclo 4x4 para trabalho e lazer.',
    specs: {
      motor: 'Monocilíndrico, 4 tempos, OHV',
      cilindrada: '420 cm³',
      potencia: '31 cv @ 7.000 rpm',
      transmissao: 'CVT',
      combustivel: 'Gasolina',
      partida: 'Elétrica'
    }
  }
];