import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GifSplash from './src/telas/splash';
import Home from './src/telas/home';

const Stack = createStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name= "Splash" component={GifSplash}>
        </Stack.Screen>
        <Stack.Screen name= "Home" component={Home}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
};
export default App;