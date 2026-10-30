import React from 'react';
import { Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const ROTA_PRODUTO = '/sobre';

const CORES = {
  creme: '#FFF8F0',
  cafe: '#654735',
  terracota: '#C77952',
  bege: '#F0E3D4',
  branco: '#FFFEFC',
  cinza: '#81766D',
};

const CATEGORIAS = ['Todos', 'Canecas', 'Quadros', 'Camisetas', 'Álbuns', 'Almofadas', 'Presentes para família', 'Datas especiais'];

const PRODUTOS = [
  {
    id: '1',
    nome: 'Caneca com Foto da Família',
    descricao: 'Um abraço em forma de presente.',
    preco: 'R$ 39,90',
    nota: '4.9',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScMubZeqnJLnoeKrAh-iOrINduiN6R6haWtfGTiwpbfg&s=10',
  },
  {
    id: '2',
    nome: 'Quadro com Árvore Genealógica',
    descricao: 'As raízes da sua história.',
    preco: 'R$ 89,90',
    nota: '4.8',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0YlS0vlfwThoFANR3MWW7aXOfpgfw2MABHc1BjRw3Bw&s=10',
  },
  {
    id: '3',
    nome: 'Camiseta com Desenho dos Filhos',
    descricao: 'Os traços que você guarda no coração.',
    preco: 'R$ 59,90',
    nota: '4.7',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQifBGf_KOs9ul6EkiuBpC_ojVguXcyRQy0tkdlhnQ5_A&s=10',
  },
  {
    id: '4',
    nome: 'Almofada com Mensagem Especial',
    descricao: 'Personalizado com os momentos que importam.',
    preco: 'R$ 49,90',
    nota: '4.6',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBNnTZ241DctmL69KQ8zxpY_JdH81Ep3q66HH2xRTUnA&s=10',
  },
  {
    id: '5',
    nome: 'Álbum de Memórias Personalizado',
    descricao: 'Uma lembrança para guardar para sempre.',
    preco: 'R$ 119,90',
    nota: '5.0',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxZIvZBLRXzl5NqsI96w7XkjbPG0TSowctsIj7TTA4xA&s=10',
  },
  {
    id: '6',
    nome: 'Porta-retrato com Data Especial',
    descricao: 'Aquele dia, sempre à vista.',
    preco: 'R$ 44,90',
    nota: '4.5',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz3zTROCteIOGw70rrblGE_qp6Mc-v1-F-Jd5CEG0Ljg&s',
  },
  {
    id: '7',
    nome: 'Chaveiro com Nomes da Família',
    descricao: 'Quem você ama, sempre por perto.',
    preco: 'R$ 24,90',
    nota: '4.4',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8KkuLrooEoHcypCKylaK_4zu_jo5Y_cPYDyMtx2K9Nw&s=10',
  },
  {
    id: '8',
    nome: 'Caixa de Recordações',
    descricao: 'Um cantinho para as suas histórias.',
    preco: 'R$ 79,90',
    nota: '4.8',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbcCiJsCshDDQIR18dKbZmtUTWpebTwo7mb93fhkuMqQ&s=10',
  },
];

export default function Inicio() {
  const router = useRouter();

  return (
    <View style={estilos.tela}>
      <StatusBar barStyle="light-content" />

      <View style={estilos.cabecalho}>
        <View style={{ flex: 1 }}>
          <Text style={estilos.cabecalhoPequeno}>Presentes cheios de significado</Text>
          <Text style={estilos.cabecalhoTitulo}>Feito com amor, para sua família</Text>
        </View>
        <View style={estilos.avatar}>
          <Ionicons name="person" size={22} color={CORES.cafe} />
        </View>
      </View>

      <View style={estilos.busca}>
        <Ionicons name="search-outline" size={22} color={CORES.cafe} />
        <TextInput style={estilos.buscaTexto} placeholder="Busque presentes com significado..." placeholderTextColor={CORES.cinza} />
        <View style={estilos.botaoFiltro}>
          <Ionicons name="options-outline" size={22} color="#fff" />
        </View>
      </View>

      <View style={{ height: 58, marginTop: 18 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20, gap: 10 }}>
          {CATEGORIAS.map((categoria, i) => (
            <View key={categoria} style={[estilos.chip, i === 0 && estilos.chipAtivo]}>
              <Text style={[estilos.chipTexto, i === 0 && estilos.chipTextoAtivo]}>{categoria}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={estilos.grade}>
        {PRODUTOS.map((produto) => (
          <Pressable
            key={produto.id}
            style={estilos.card}
            onPress={() => router.push({ pathname: ROTA_PRODUTO, params: produto } as never)}
          >
            <View style={estilos.foto}>
              <Image source={{ uri: produto.imagem }} style={{ flex: 1 }} resizeMode="cover" />
              <View style={estilos.selo}>
                <Ionicons name="star" size={11} color="#F2B84B" />
                <Text style={estilos.seloTexto}>{produto.nota}</Text>
              </View>
            </View>
            <Text style={estilos.nome} numberOfLines={2}>{produto.nome}</Text>
            <Text style={estilos.descricao} numberOfLines={2}>{produto.descricao}</Text>
            <View style={estilos.rodape}>
              <Text style={estilos.preco}>{produto.preco}</Text>
              <View style={estilos.botaoAdd}>
                <Ionicons name="add" size={20} color="#FFFFFF" />
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>

      <View style={estilos.menu}>
        <Ionicons name="home" size={26} color={CORES.terracota} />
        <Ionicons name="heart-outline" size={26} color="#B5ABA1" />
        <Ionicons name="bag-outline" size={26} color="#B5ABA1" />
        <Ionicons name="person-outline" size={26} color="#B5ABA1" />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: { flex: 1, backgroundColor: CORES.creme },

  cabecalho: { backgroundColor: CORES.cafe, flexDirection: 'row', alignItems: 'center', paddingTop: 56, paddingBottom: 56, paddingHorizontal: 20 },
  cabecalhoPequeno: { color: '#D9C9BA', fontSize: 12, marginBottom: 4 },
  cabecalhoTitulo: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
  avatar: { width: 44, height: 44, borderRadius: 12, backgroundColor: CORES.bege, alignItems: 'center', justifyContent: 'center' },

  busca: { flexDirection: 'row', alignItems: 'center', gap: 10, height: 60, marginHorizontal: 20, marginTop: -28, paddingLeft: 16, paddingRight: 8, borderRadius: 18, backgroundColor: CORES.branco, elevation: 5, shadowColor: '#3B2A1F', shadowOpacity: 0.14, shadowRadius: 12, shadowOffset: { width: 0, height: 5 } },
  buscaTexto: { flex: 1, fontSize: 14, color: CORES.cafe, paddingVertical: 0 },
  botaoFiltro: { width: 44, height: 44, borderRadius: 12, backgroundColor: CORES.terracota, alignItems: 'center', justifyContent: 'center' },

  chip: { height: 40, paddingHorizontal: 18, borderRadius: 12, backgroundColor: CORES.bege, justifyContent: 'center' },
  chipAtivo: { backgroundColor: CORES.terracota },
  chipTexto: { color: CORES.cafe, fontSize: 14, fontWeight: '500' },
  chipTextoAtivo: { color: '#FFFFFF', fontWeight: '700' },

  grade: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', rowGap: 22, paddingHorizontal: 20, paddingBottom: 24 },
  card: { width: '47.5%' },
  foto: { aspectRatio: 1, borderRadius: 18, overflow: 'hidden', backgroundColor: CORES.bege },
  selo: { position: 'absolute', top: 8, left: 8, flexDirection: 'row', alignItems: 'center', gap: 3, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 10, backgroundColor: 'rgba(78,53,39,0.78)' },
  seloTexto: { color: '#FFFFFF', fontSize: 11, fontWeight: '700' },
  nome: { marginTop: 10, minHeight: 38, fontSize: 15, fontWeight: '700', color: CORES.cafe },
  descricao: { marginTop: 2, minHeight: 30, fontSize: 12, color: CORES.cinza },
  rodape: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 },
  preco: { fontSize: 17, fontWeight: '800', color: CORES.cafe },
  botaoAdd: { width: 34, height: 34, borderRadius: 10, backgroundColor: CORES.terracota, alignItems: 'center', justifyContent: 'center' },

  menu: { flexDirection: 'row', justifyContent: 'space-around', paddingTop: 14, paddingBottom: 28, borderTopLeftRadius: 22, borderTopRightRadius: 22, backgroundColor: CORES.branco, elevation: 12, shadowColor: '#3B2A1F', shadowOpacity: 0.1, shadowRadius: 10, shadowOffset: { width: 0, height: -3 } },
})