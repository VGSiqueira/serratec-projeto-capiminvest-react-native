import React from 'react';

// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Conta from '../screens/Conta/Conta';
import Home from '../screens/Home/Home';
import Procurar from '../screens/Procurar/Procurar';
import Carteira from '../screens/Carteira/Carteira';
import { styles } from './styles';
import { Text, View } from 'react-native';
import HomeIcon from 'react-native-vector-icons/Octicons'
import SearchIcon from 'react-native-vector-icons/FontAwesome5'
import WalletIcon from 'react-native-vector-icons/FontAwesome5'
import ProfileIcon from 'react-native-vector-icons/MaterialIcons'

const Tab = createBottomTabNavigator()

const TabNavigation = () => {

    return (
            <Tab.Navigator
                tabBarOptions={{
                    showLabel: false,
                    style: styles.navigator,                    
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <View style={styles.iboxIcon}>
                                <HomeIcon name="home" size={40} style={{color: focused ? "#276955" : "#89ada2"}} />
                                <Text style={[ styles.text,{color: focused ? "#276955" : "#89ada2" }]} >Início</Text>
                            </View>
                        )
                    }}/>
                <Tab.Screen
                    name="Procurar"
                    component={Procurar}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <View style={styles.iboxIcon}>
                                <SearchIcon name="search-dollar" size={40} style={{color: focused ? "#276955" : "#89ada2"}} />
                                <Text style={[ styles.text,{color: focused ? "#276955" : "#89ada2" }]} >Procurar</Text>
                            </View>
                        )
                    }}/>
                <Tab.Screen
                    name="Carteira"
                    component={Carteira}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <View style={styles.iboxIcon}>
                                <WalletIcon name="wallet" size={40} style={{color: focused ? "#276955" : "#89ada2"}} />
                                <Text style={[ styles.text,{color: focused ? "#276955" : "#89ada2" }]} >Carteira</Text>
                            </View>
                        )
                    }}/>
                <Tab.Screen
                    name="Conta"
                    component={Conta}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <View style={styles.iboxIcon}>
                                <ProfileIcon name="account-circle" size={40} style={{color: focused ? "#276955" : "#89ada2"}} />
                                <Text style={[ styles.text,{color: focused ? "#276955" : "#89ada2" }]} >Conta</Text>
                            </View>
                        )
                    }}/>
            </Tab.Navigator>
    )

}

export default TabNavigation