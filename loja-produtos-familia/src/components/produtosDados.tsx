import { ImageSourcePropType } from 'react-native';

export type Produto = {
  id: string;
  imagem: ImageSourcePropType;
  nome: string;
  preco: string;
};

export const produtos: Produto[] = [
  {
    id: '1',
    imagem: require('../../assets/caixa-recordacoes.jpeg'),
    nome: 'Caixa de recordações',
    preco: 'R$ 79,90',
  },
  {
    id: '2',
    imagem: require('../../assets/quebra_cabeca.jpeg'),
    nome: 'Quebra-cabeça',
    preco: 'R$ 59,90',
  },
  {
    id: '3',
    imagem: require('../../assets/calendario.jpeg'),
    nome: 'Calendário Familiar',
    preco: 'R$ 39,90',
  },
  {
    id: '4',
    imagem: require('../../assets/album.jpeg'),
    nome: 'Álbum de fotografias',
    preco: 'R$ 89,90',
  },
  {
    id: '5',
    imagem: require('../../assets/arvore-genealogica.jpeg'),
    nome: 'Árvore genealógica',
    preco: 'R$ 49,90',
  },
  {
    id: '6',
    imagem: require('../../assets/caixa-memorias.jpeg'),
    nome: 'Caixa de memórias',
    preco: 'R$ 99,90',
  },
];