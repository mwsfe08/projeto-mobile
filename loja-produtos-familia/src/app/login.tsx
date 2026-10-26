import { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';
import { useRouter } from 'expo-router';

const imagemFundoURL = {
  uri: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop',
};

function Cabecalho({ fotoPerfil }: { fotoPerfil?: string }) {
  return (
    <View style={stylesCabecalho.container}>
      <View style={stylesCabecalho.textoContainer}>
        <Text style={stylesCabecalho.titulo}>Bem-vindo de volta</Text>
        <Text style={stylesCabecalho.subtitulo}>
          Eternize suas histórias de família
        </Text>
      </View>

      <Image
        source={{
          uri:
            fotoPerfil ||
            'https://voxnews.com.br/wp-content/uploads/2017/04/unnamed-300x300.png',
        }}
        style={stylesCabecalho.fotoPerfil}
      />
    </View>
  );
}

export default function Login() {
  const router = useRouter();

  const [emailCadastrado] = useState('');
  const [senhaCadastrada] = useState('123456');

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  function verificarLogin() {
    if (email.trim() === '' || senha.trim() === '') {
      setErro('Preencha o e-mail e/ou senha para continuar.');
      return;
    }
    if (email.trim() !== emailCadastrado || senha !== senhaCadastrada) {
      setErro('E-mail e/ou senha incorretos.');
      return;
    }

    setErro('');
    router.replace('/cardapio');
  }

  return (
    <ImageBackground
      source={imagemFundoURL}
      style={styles.container}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />

      <View style={styles.conteudo}>
        <Cabecalho
          fotoPerfil="https://voxnews.com.br/wp-content/uploads/2017/04/unnamed-300x300.png"
        />

        <View style={styles.areaFormulario}>
          <View style={styles.containerPesquisa}>
            <Image
              style={styles.icone}
              source={require('../../assets/images/Vector.png')}
              resizeMode="cover"
            />
            <TextInput
              style={styles.inputPesquisa}
              placeholder="Email"
              placeholderTextColor="#8C6D58"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              clearButtonMode="while-editing"
            />
          </View>

          <View style={styles.containerPesquisa}>
            <Image
              style={styles.icone}
              source={require('../../assets/images/Lock.png')}
              resizeMode="cover"
            />
            <TextInput
              style={styles.inputPesquisa}
              placeholder="Senha"
              placeholderTextColor="#8C6D58"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
              clearButtonMode="while-editing"
            />
          </View>

          {erro !== '' && <Text style={styles.erro}>{erro}</Text>}

          <TouchableOpacity style={styles.botao} onPress={verificarLogin}>
            <Text style={styles.textoBotao}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const stylesCabecalho = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: 'transparent',
  },

  textoContainer: {
    flex: 1,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF8F0',
  },

  subtitulo: {
    fontSize: 14,
    color: '#D7CCC8',
    marginTop: 2,
  },

  fotoPerfil: {
    width: 46,
    height: 46,
    borderRadius: 23,
    borderWidth: 2,
    borderColor: '#FFF8F0',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3E2723',
  },

  conteudo: {
    flex: 1,
    backgroundColor: 'rgba(44, 24, 16, 0.55)',
  },

  areaFormulario: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 40,
  },

  containerPesquisa: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 14,
    backgroundColor: '#FFF8F0',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D7CCC8',
    paddingHorizontal: 14,
  },

  inputPesquisa: {
    flex: 1,
    height: 46,
    fontSize: 16,
    color: '#4A2E1B',
    paddingLeft: 8,
  },

  icone: {
    width: 20,
    height: 20,
    tintColor: '#6D4C41',
  },

  erro: {
    color: '#FF6B6B',
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 16,
    marginBottom: 12,
    fontWeight: 'bold',
  },

  botao: {
    marginHorizontal: 16,
    marginTop: 8,
    backgroundColor: '#6D4C41',
    borderRadius: 12,
    height: 46,
    justifyContent: 'center',
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