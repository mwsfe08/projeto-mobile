import { useState } from 'react';
import { View, StyleSheet, TextInput, FlatList, ImageBackground } from 'react-native';

import Cabecalho from '../components/Cabecalho';
import CardItemLoja from '../components/CardItemLoja';

const produtos = [
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

export default function Produtos() {
  const [pesquisa, setPesquisa] = useState('');

  const produtosFiltrados = produtos.filter((item) =>
    item.nome.toLowerCase().includes(pesquisa.trim().toLowerCase())
  );

  return (
    <View style={styles.conteudo}>
      <Cabecalho
        fotoPerfil="https://voxnews.com.br/wp-content/uploads/2017/04/unnamed-300x300.png"
      />

      <View style={styles.containerPesquisa}>
        <TextInput
          style={styles.inputPesquisa}
          placeholder="Pesquisar produtos..."
          placeholderTextColor="#292727cb"
          value={pesquisa}
          onChangeText={setPesquisa}
          autoCapitalize="none"
          clearButtonMode="while-editing"
        />
      </View>

      <FlatList
        data={produtosFiltrados}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.linha}
        contentContainerStyle={styles.lista}
        keyboardShouldPersistTaps="handled"
        renderItem={({ item }) => (
          <CardItemLoja style={styles.card}
            imagem={item.imagem}
            nome={item.nome}
            preco={item.preco}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F4E9C',
  },

  conteudo: {
    flex: 1,
    backgroundColor: '#e8c39e',
  },

  containerPesquisa: {
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 14,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ffffff',
    paddingHorizontal: 14,
    justifyContent: 'center',
  },

  inputPesquisa: {
    height: 46,
    fontSize: 16,
    color: '#610000',
  },

  lista: {
    paddingHorizontal: 10,
    paddingBottom: 20,
    gap: 12,
  },

  linha: {
    justifyContent: 'space-between',
  },

  
});