import { createStackNavigator } from "@react-navigation/stack";
import { Image, Text, Pressable } from "react-native";
import Products from "../screens/Products";
import Cart from "../screens/Cart";
import cartImg from "../assets/shopping-cart.png";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

export default function StackNavigator() {
    const cartItemCount = useSelector((state) => state.item.cartItems);

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
                            padding: 2,
                            borderRadius: 7,
                            fontWeight: "600"
                        }}>{cartItemCount.length}</Text>
                    </Pressable>
                )
            })} />
            <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
    )
}