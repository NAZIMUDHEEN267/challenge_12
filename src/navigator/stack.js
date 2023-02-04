import { createStackNavigator } from "@react-navigation/stack";
import { Image, Text, Pressable } from "react-native";
import Products from "../screens/Products";
import Cart from "../screens/Cart";
import cartImg from "../assets/shopping-cart.png";
import store from "../store";

// const itemCount = store.getState().reducer.cartItems.length;

const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Products" component={Products} options={({navigation}) => ({
                headerRight: () => (
                    <Pressable style={{ margin: 10 }} onPress={() => navigation.navigate("Cart")}>
                        <Image source={cartImg} />
                        <Text style={{
                            position: "absolute",
                            top: -5,
                            right: 0,
                            color: "#fff",
                            backgroundColor: "orange",
                            padding: 1
                        }}>{0}</Text>
                    </Pressable>
                )
            })} />
            <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
    )
}