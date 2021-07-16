import React, { useState } from 'react';
import SignUp from './screens/SignUp/SignUp';
import {NavigationContainer} from '@react-navigation/native';
import RotaAutenticacao from './navigation/RotaAutenticacao';
import TabNavigation from './navigation/TabNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { GlobalConfig } from './global/GlobalConfig';
import { UsuarioLogadoProvider } from './contexts/contextUsuario';
import AuthRoutes from './Route/auth.routes';

const App = () => {

  return (
    <SafeAreaProvider >
      <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent  />
      <NavigationContainer>
        <UsuarioLogadoProvider>
          <AuthRoutes />
        </UsuarioLogadoProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
