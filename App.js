import 'react-native-gesture-handler'
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Inicio from './views/inicio';
import CreateClient from './views/clientes/create';
import ShowClient from './views/clientes/show';
import { DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import { TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    primary: '#1774F2',
    accent: '#0655BF'
  }
};

const closeKeyboard = ()=>{
  Keyboard.dismiss()
};
const App = () => {


  return (
    <PaperProvider>
    <TouchableWithoutFeedback onPress={closeKeyboard} >
    <NavigationContainer>
      <Stack.Navigator screenOptions={
        {
        headerStyle:{
          backgroundColor:theme.colors.primary,
        },
        headerTitleAlign:'center',
        headerTitleStyle:{
          fontWeight:'bold'
        },
        headerTintColor:theme.colors.surface,
      
      }} initialRouteName='Inicio'>
      <Stack.Screen name="Inicio" component={Inicio}/>

      <Stack.Screen name="client.create" component={CreateClient}/>

      <Stack.Screen name="client.show" component={ShowClient}/>
      
      </Stack.Navigator>   
    </NavigationContainer>
    </TouchableWithoutFeedback>
    </PaperProvider>
  );
}

export default App;
