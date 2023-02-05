import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const Product = ({ img, name, price, rate }) => {

    return (
        <View style={styles.productBox}>
            <Image source={{ uri: img }} style={styles.img} resizeMode={"contain"} />
            <View style={styles.details}>
                <Text style={styles.text}>{name}</Text>
                <View style={{ justifyContent: "center"}}>
                    <Text
                        style={[styles.text, {color: "black"}]}
                    >${price}</Text>
                    <Text style={{ color: "orange", textAlign: 'center' }}>{rate}</Text>
                </View>
                <TouchableOpacity style={styles.button} activeOpacity={0.9}>
                    <Text style={{ color: "white" }}>+ Add to cart</Text>
                </TouchableOpacity>
            </View>
        </View>
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

export default Product;