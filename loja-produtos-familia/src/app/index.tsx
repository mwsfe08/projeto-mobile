import { useRouter } from 'expo-router';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';

const imagemURL = {
  uri: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop',
};

export default function HomeHBG() {
  const router = useRouter();

  return (
    <ImageBackground
      source={imagemURL}
      style={styles.container}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />

      <View style={styles.conteudo}>
        <View style={styles.areaTexto}>
          <Text style={styles.titulo}>Herança & Memórias</Text>
          <Text style={styles.subtitulo}>
            Transforme seus momentos especiais em memórias inesquecíveis. Produtos exclusivos feitos com histórias de família!
          </Text>

          <View style={styles.pontos}>
            <View style={styles.ponto} />
            <View style={styles.ponto} />
            <View style={styles.pontoAtivo} />
          </View>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => router.push('/login')}
          >
            <Text style={styles.textoBotao}>Começar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3E2723',
  },

  conteudo: {
    flex: 1,
    backgroundColor: 'rgba(44, 24, 16, 0.55)',
    justifyContent: 'flex-end',
    paddingBottom: 40,
  },

  areaTexto: {
    paddingHorizontal: 20,
  },

  titulo: {
    color: '#FFF8F0',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },

  subtitulo: {
    color: '#EFEBE9',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
  },

  pontos: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 24,
  },

  ponto: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#D7CCC8',
    marginHorizontal: 3,
  },

  pontoAtivo: {
    width: 22,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#A1887F',
    marginHorizontal: 3,
  },

  botao: {
    backgroundColor: '#6D4C41',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#8D6E63',
  },

  textoBotao: {
    color: '#FFF8F0',
    fontSize: 16,
    fontWeight: 'bold',
  },
});