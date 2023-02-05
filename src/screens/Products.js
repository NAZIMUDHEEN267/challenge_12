import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import Product from './Product';
import { fetchProducts } from '../features/product/productSlice';
import { ScrollView } from 'react-native-gesture-handler';

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  }, []);

  const { loading, data } = useSelector((state) => state.product);

  return (
    (loading) ?
    <ActivityIndicator size={30} color={"blue"}/>
    :
    <View style={styles.container}>
       <ScrollView>
          {
            data.map(item => {
              if(item.id === 1) {
                console.log(item)
              }
              return (
                <Product 
                name={item.title} 
                img={item.image} 
                price={item.price}
                rate={item.rating.rate}
                key={Math.random() * Date.now()} />
              )
            })
          }
       </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,.1)"
  }
})

export default Products