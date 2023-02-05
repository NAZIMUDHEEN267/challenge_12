import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions as itemActions } from "../features/item/itemSlice"
import { ScrollView } from 'react-native-gesture-handler';

const Cart = () => {
  const cartCount = useSelector((state) => state.item.cartItems);
  const dispatch = useDispatch();

  return (
    (cartCount.length === 0) ?
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 20, color: "#444" }}>The cart is empty now :(</Text>
      </View>
      :
      <ScrollView>
        {
          cartCount.map((item, i) => {
            return (
              <View style={styles.productBox} key={String(i)}>
                <Image source={{ uri: item.image }} style={styles.img} resizeMode={"contain"} />
                <View style={styles.details}>
                  <Text style={styles.text}>{item.title}</Text>
                  <View style={{ justifyContent: "center" }}>
                    <Text
                      style={[styles.text, { color: "black" }]}
                    >${item.price}</Text>
                    <Text style={{ color: "orange", textAlign: 'center' }}>{item.rate}</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.9}
                    onPress={() => dispatch(itemActions.REMOVE_FROM_CART(item))}
                  >
                    <Text style={{ color: "white" }}>- Remove</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )
          })
        }
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  productBox: {
    padding: 10,
    backgroundColor: "#fff",
    marginVertical: 10,
    flexDirection: "row",
    marginLeft: 5
  },
  img: {
    width: "50%",
    height: 200
  },
  details: {
    width: "50%",
    padding: 5,
    justifyContent: "space-between"
  },
  button: {
    alignSelf: "center",
    width: "60%",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "crimson"
  },
  text: { fontWeight: "500", color: "grey", textAlign: 'center' }
})

export default Cart