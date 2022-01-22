import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import App from '../App.js';
import { Product } from '../components/Product.js';
import { getProducts } from '../services/ProductsService.js';



export function ProductsList ({navigation}) { // this is the homescreen of the app

function renderProduct({item: product}) {
  
  
    return (
      
      <Product {...product} 
      onPress={() => {
        navigation.navigate('ProductDetails', { // when a user clicks on a product, it takes them to the product details screen and shows 
          //information about the product
          productId: product.id,
        });
      }}
      />
    );
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  });

  return (
    
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={renderProduct}
    />
    
  );
}
const styles = StyleSheet.create({ // the stylesheet used for the homescreen
  productsList: {
    backgroundColor: '#eeeeee',
  },
  productsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  container:{
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});