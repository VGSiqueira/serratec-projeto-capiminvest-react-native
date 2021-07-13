import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Conta from '../screens/Conta/Conta';
import Home from '../screens/Home/Home';
import Procurar from '../screens/Procurar/Procurar';
import Carteira from '../screens/Carteira/Carteira';

const Tab = createBottomTabNavigator()

const TabNavigation = () => {

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Procurar" component={Procurar} />
                <Tab.Screen name="Carteira" component={Carteira} />
                <Tab.Screen name="Conta" component={Conta} />
            </Tab.Navigator>
        </NavigationContainer>
    )

}

export default TabNavigation