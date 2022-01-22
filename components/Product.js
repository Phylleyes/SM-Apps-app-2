import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';
export function Product({name, price, image, onPress}) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        style={styles.thumb}
        source={image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>$ {price}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#AFC3F9',
    borderRadius: 14,
    elevation: 40,
    marginVertical: 20,
  },
  thumb: {
    height: 370,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    width: '100%',
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    color: '#383B42',
    fontSize: 19,
    fontWeight: 'bold',
  },
  price: {
    color: '#383B42',
    fontSize: 30,
    fontWeight:'bold',
    marginBottom: 2,
  },
});