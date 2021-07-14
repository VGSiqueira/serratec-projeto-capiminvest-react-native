import React from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import Titulo from '../../components/Titulo/Titulo';
import {styles} from './styles';

const SignUp = (props) => {
  
    return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/img/logo/capiminvest.png')}
        style={styles.logo}
      />

      <View style={styles.textos}>
        <Titulo titulo="Aqui você investe!" />
        <Text style={styles.subtitle}>
          Nós somos uma StartUp com a finalidade de trazer informações da bolsa
          de valores para você de forma muito mais prática!
        </Text>
      </View>

      <View style={styles.boxBotoes}>
        <TouchableOpacity style={styles.botaoVerde} onPress={() => props.navigation.navigate('Cadastro')} >
          <Text style={styles.textoBranco}>Criar conta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoTransparente} onPress={() => props.navigation.navigate('Login')}>
          <Text style={styles.textoVerde}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
