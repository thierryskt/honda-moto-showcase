export interface ColorOption {
  name: string;
  image: string;
  colorCode: string;
}

export interface Bike {
  id: string;
  name: string;
  price: string;
  priceNumber: number;
  category: 'street' | 'sport' | 'adventure' | 'touring' | 'offroad';
  image: string;
  colors?: ColorOption[];
  description: string;
  specs?: {
    motor?: string;
    cilindrada?: string;
    potencia?: string;
    transmissao?: string;
    combustivel?: string;
    partida?: string;
    peso?: string;
    capacidade?: string;
  };
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface ConsorcioData {
  parcelas: {
    quantidade: number;
    valor: string;
  }[];
}

export interface FinanciamentoForm {
  valorEntrada: string;
  dataNascimento: string;
  cpf: string;
  nome: string;
  telefone: string;
  possuiHabilitacao: string;
  possuiRestricao: string;
  rendaComprovada: string;
  profissao: string;
}