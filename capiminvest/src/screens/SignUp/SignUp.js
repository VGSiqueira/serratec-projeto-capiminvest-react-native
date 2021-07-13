import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Titulo from '../../components/Titulo/Titulo';
import {styles} from './styles';

const SignUp = (props) => {
  
    return (
    <View style={styles.container}>
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

        <TouchableOpacity style={styles.botaoTransparente}>
          <Text style={styles.textoVerde}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
