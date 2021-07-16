import React, { useContext, useState } from 'react';
import { SafeAreaView, TouchableWithoutFeedback, View, Text, TouchableOpacity, Alert } from 'react-native';
import Cabecalho from '../../components/Cabecalho/Cabecalho';
import InputText from '../../components/InputText/InputText';
import Titulo from '../../components/Titulo/Titulo';
import { style } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UsuarioLogado} from '../../contexts/contextUsuario'

import http from '../../services/Api/http';

const Login = ({ navigation: { goBack }, navigation }) => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const { usuario, username } = useContext(UsuarioLogado)

  const entrar = () => {

    let data = {
      user: login,
      pass: senha
    }

    http.post('/auth', data)
      .then(response => {
        AsyncStorage.setItem('token', response.data.token)
        AsyncStorage.setItem('user', response.data.user)
        AsyncStorage.setItem('idUsuario', response.data.idCliente)
        AsyncStorage.setItem('nome', response.data.nome)
        console.log(response.data)
        const cliente = {
          cliente: AsyncStorage.getItem('user'),
        }
        username(cliente)
        // navigation.navigate('Home')



      }).catch((erro) => {
        // Alert.alert("Usuário inválido!")
        console.log(erro)
      })



  }


  return (
    <SafeAreaView style={style.container}>
      <Cabecalho onPress={() => goBack()} />

      <View style={style.titulo}>
        <Titulo titulo='Vamos começar a ganhar dinheiro!' />
      </View>
      <View style={style.formulario}>
        <InputText value={login} onChangeText={setLogin} placeholder='Login' />
        <InputText
          value={senha}
          onChangeText={setSenha}
          placeholder='Senha'
          textContentType='password'
          secureTextEntry={true}
        />
      </View>
      <View>
        <TouchableWithoutFeedback>
          <Text style={style.text}>Esqueceu a sua senha ?</Text>
        </TouchableWithoutFeedback>
      </View>
      <View style={style.boxBotoes}>
        <TouchableOpacity activeOpacity={0.7} onPress={entrar}  style={style.botaoVerde}>
          <Text style={style.textoBranco}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
