import React from 'react';
import {View, SafeAreaView, Text,TouchableOpacity} from 'react-native';
import Cabecalho from '../../components/Cabecalho/Cabecalho';
import FormCadastro from '../../components/FormCadastro/FormCadastro';
import Titulo from '../../components/Titulo/Titulo';
import {styles} from './styles';

const Cadastro = ( {navigation:{ goBack}, navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Cabecalho onPress={() => goBack()}  />
      <View style={styles.header}>
        <View style={styles.titulo}>
          <Titulo titulo="Criar conta" />
        </View>
        <View style={styles.subtitulo}>
          <Text>Invista e ganhe o dobro a partir de agora!</Text>
        </View>
      </View>

      <View style={styles.formulario}>
          <FormCadastro />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity  style={styles.botao}>
          <Text style={styles.texto}>Cadastrar</Text>
        </TouchableOpacity>
        <View style={styles.boxTextos}>
          <Text>Já possui uma conta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')} >
            <Text style={styles.login}>Faça o login!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Cadastro;
