
import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity, ImageSourcePropType, } from 'react-native';

type PropsCard = {
  imagem: ImageSourcePropType;
  nome: string;
  preco: string;
  onPress?: () => void;
};

export default function CardItemLoja({
  imagem,
  nome,
  preco,
  onPress,
}: PropsCard) {
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

      <Text style={styles.textoCard} numberOfLines={1}>
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
    gap: 6,
    //justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  imagemCard: {
    width: '100%',
    height: '50%',
    borderRadius: 8,
  },

  textoCard: {
    height: '35%',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  preco: {
    height: '15%',
    fontSize: 14,
    color: '#1a1919',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
