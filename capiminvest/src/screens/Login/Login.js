import React, {useState}from 'react';
import { SafeAreaView, View } from 'react-native';
import Cabecalho from '../../components/Cabecalho/Cabecalho';
import InputText from '../../components/InputText/InputText';
import Titulo from '../../components/Titulo/Titulo';
import { styles } from './styles'


const Login = ({ navigation: { goBack } }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <SafeAreaView style={styles.container} >
            <Cabecalho onPress={() => goBack()} />
            
                <View style={styles.titulo}>
                    <Titulo titulo="Vamos começar a ganhar dinheiro!" />
                </View>
                <View style={styles.formulario}>
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
            




        </SafeAreaView>
    )
}

export default Login;