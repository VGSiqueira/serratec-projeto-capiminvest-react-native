import React, { useState } from 'react';
import { 
    SafeAreaView,
    TouchableWithoutFeedback,
    View,
    Text,
    TouchableOpacity
     } from 'react-native';
import Cabecalho from '../../components/Cabecalho/Cabecalho';
import InputText from '../../components/InputText/InputText';
import Titulo from '../../components/Titulo/Titulo';
import { style } from './styles'


const Login = ({ navigation: { goBack } }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <SafeAreaView style={style.container} >
            <Cabecalho onPress={() => goBack()} />

            <View style={style.titulo}>
                <Titulo titulo="Vamos começar a ganhar dinheiro!" />
            </View>
            <View style={style.formulario}>
                <InputText
                    value={email}
                    onChangeText={setEmail}
                    placeholder="E-mail"
                    textContentType="emailAddress"
                />
                <InputText
                    value={senha}
                    onChangeText={setSenha}
                    placeholder="Senha"
                    textContentType="password"
                    secureTextEntry={true}
                />
            </View>
            <View>
                <TouchableWithoutFeedback>
                    <Text style={style.text}>Esqueceu a sua senha ?</Text>
                </TouchableWithoutFeedback>
            </View>
            <View style={style.boxBotoes}>
                <TouchableOpacity activeOpacity={0.7} style={style.botaoVerde} >
                    <Text style={style.textoBranco}>Entrar</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default Login;