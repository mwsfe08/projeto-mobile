import { useState } from 'react';
import { View, StyleSheet, TextInput, FlatList, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import { produtos } from '../components/produtosDados';

import Cabecalho from '../components/Cabecalho';
import CardItemLoja from '../components/CardItemLoja';

export default function Produtos() {
  const [pesquisa, setPesquisa] = useState('');
  const router = useRouter();

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
          <CardItemLoja
            imagem={item.imagem}
            nome={item.nome}
            preco={item.preco}
            onPress={() =>
            router.push({ pathname: '/detalhes', params: { id: item.id },})
          }
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
    backgroundColor: '#f1d7bd',
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
    marginBottom: 16,
  },

  
});