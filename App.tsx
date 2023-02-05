import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import StackNavigator from './src/navigator/stack';
import store from './src/store';

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
