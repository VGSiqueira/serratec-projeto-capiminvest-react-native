import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Cadastro from "./../screens/Cadastro/Cadastro"
import SignUp from '../screens/SignUp/SignUp';

const Stack = createStackNavigator();

const RotaAutenticacao = () => {

    return (
        <Stack.Navigator headerMode="none" >  
            <Stack.Screen
            name="Sign Up"
            component={SignUp}/>
            <Stack.Screen name="Cadastro" component={Cadastro} />
        </Stack.Navigator>
    )

}

export default RotaAutenticacao;