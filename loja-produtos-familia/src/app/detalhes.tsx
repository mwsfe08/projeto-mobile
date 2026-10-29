
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

import { useLocalSearchParams, Stack } from 'expo-router';
import { produtos } from '../components/produtosDados';

export default function Detalhes() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const produto = produtos.find((item) => item.id === id);

  if (!produto) {
    return (
      <View style={styles.container}>
        <Text>Produto não encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{ title: produto.nome }}
      />

      <Image
        source={produto.imagem}
        style={styles.imagem}
        resizeMode="cover"
      />

      <Text style={styles.nome}>
        {produto.nome}
      </Text>

      <Text style={styles.preco}>
        {produto.preco}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1d7bd',
    padding: 20,
  },

  imagem: {
    width: '100%',
    height: 300,
    borderRadius: 12,
  },

  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#292727',
  },

  preco: {
    fontSize: 22,
    color: '#ff4000',
    marginTop: 10,
  },
});
