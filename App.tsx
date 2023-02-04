import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from './src/navigator/stack';
import store from "./src/store";
import { actions } from "./src/features/item/itemSlice";
import { fetchProducts } from "./src/features/product/productSlice";

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchProducts());

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

export default App