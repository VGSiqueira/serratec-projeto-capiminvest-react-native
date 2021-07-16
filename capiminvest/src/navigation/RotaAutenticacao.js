import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from './../screens/Cadastro/Cadastro';
import SignUp from '../screens/SignUp/SignUp';
import Login from '../screens/Login/Login';

const Stack = createStackNavigator();

const RotaAutenticacao = () => {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='Sign Up' component={SignUp} />
      <Stack.Screen name='Cadastro' component={Cadastro} />
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  );
};

export default RotaAutenticacao;
