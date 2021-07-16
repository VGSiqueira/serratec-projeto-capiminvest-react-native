import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from './../screens/Cadastro/Cadastro';
import SignUp from '../screens/SignUp/SignUp';
import Login from '../screens/Login/Login';
import Home from '../screens/Home/Home'
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

const RotaAutenticacao = () => {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='Sign Up' component={SignUp} />
      <Stack.Screen name='Cadastro' component={Cadastro} />
      <Stack.Screen name='Login' component={Login} />
      {/* <Stack.Screen name='Home' component={Home} /> */}
      {/* <Stack.Screen name='Home' component={TabNavigation} /> */}
    </Stack.Navigator>
  );
};

export default RotaAutenticacao;
