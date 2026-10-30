
import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity, ImageSourcePropType, } from 'react-native';
import { useFonts, Poppins_400Regular, } from '@expo-google-fonts/poppins';

type PropsCard = {
  imagem: ImageSourcePropType;
  nome: string;
  preco: string;
  onPress?: () => void;
};

export default function CardProduto({ imagem, nome, preco, onPress }: PropsCard) {
  
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <Image
        source={imagem}
        style={styles.imagemCard}
        resizeMode="cover"
      />

      <Text style={styles.textoCard}>
        {nome}
      </Text>

      <Text style={styles.preco}>
        {preco}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '48%',
    height: 250,
    backgroundColor: '#fff',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 10,
  },

  imagemCard: {
    width: '100%',
    height: 135,
    borderRadius: 8,
  },

  textoCard: {
    flex: 1,
    paddingHorizontal: 6,
    paddingTop: 8,
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    color: '#000',
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  preco: {
    padding: 10,
    fontSize: 20,
    fontFamily: 'Poppins_400Regular',
    color: '#ff4000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
