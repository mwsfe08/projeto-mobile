import { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Image, ImageBackground, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';

const imagemFundoURL = 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop'
export default function Login() {
  const router = useRouter();

  const [emailCadastrado] = useState('email@gmail.com');
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
    router.replace('/produtos');
  }

  return (
    <View style={styles.containerLMS}>
      <Text style={styles.titulo}>
        Faça o seu login
      </Text>
      
        <View style={styles.containerPesquisa}>
          <Entypo style={styles.icone} name="lock" size={24}/>

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
          <Entypo style={styles.icone} name="mail" size={24}/>

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
  );
}

const styles = StyleSheet.create({
  containerLMS: {
    flex: 1,
    backgroundImage: `url(${imagemFundoURL})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    justifyContent: 'center',
  },

  titulo: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF8F0',
  },

  containerPesquisa: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 14,
    gap: 10,
    backgroundColor: '#FFF8F0',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D7CCC8',
    paddingHorizontal: 14,
  },

  inputPesquisa: {
    flex: 1,
    outlineWidth: 0,
    outlineStyle: 'dotted',
    height: 46,
    fontSize: 16,
    color: '#4A2E1B',
    paddingLeft: 8,
  },

  icone: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#6D4C41',
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