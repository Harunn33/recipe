import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Categories from './pages/categories';
import Meals from './pages/meals';
import Details from './pages/details';
import CONSTANTS from './constants';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            color: CONSTANTS.COLORS.MAIN,
            fontWeight: 'bold',
          },
          headerTintColor: CONSTANTS.COLORS.MAIN,
        }}>
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Meals" component={Meals} />
        <Stack.Screen name="Detail" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
