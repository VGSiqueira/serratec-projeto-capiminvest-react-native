import React from 'react';
import SignUp from './screens/SignUp/SignUp';
import {NavigationContainer} from '@react-navigation/native';
import RotaAutenticacao from './navigation/RotaAutenticacao';
import TabNavigation from './navigation/TabNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { GlobalConfig } from './global/GlobalConfig';

const App = () => {
  return (
    // style={{paddingBottom: GlobalConfig.dimension.height / 11.5}}
    <SafeAreaProvider >
      <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent />
      <NavigationContainer>
        {/* <RotaAutenticacao /> */}
        <TabNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
