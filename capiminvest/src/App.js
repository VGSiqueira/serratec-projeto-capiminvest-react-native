import React from 'react';
import SignUp from './screens/SignUp/SignUp';
import {NavigationContainer} from '@react-navigation/native';
import RotaAutenticacao from './navigation/RotaAutenticacao';

const App = () => {
  return (
    <NavigationContainer>
      <RotaAutenticacao />
    </NavigationContainer>
  );
};

export default App;
