import React from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';
import {styles} from './styles';
import Titulo from '../../components/Titulo/Titulo';
import BotaoConta from '../../components/BotaoConta/BotaoConta';

const Conta = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Titulo titulo="Conta" />
      </View>

      <View style={styles.boxPerfil}>
          <Image source={require('../../assets/img/perfil/perfil.png')} style={styles.imagem} />
          <View style={styles.informacoes}>
          <Text style={styles.infoUsuario}>Vinicius Gaspar Siqueira</Text>
          <Text style={styles.infoUsuario}>vgsiqueira94@gmail.com</Text>
          </View>
      </View>

      <View style={styles.botoes}>
        <BotaoConta source={require('../../assets/icons/conta/info-conta.png')} titulo='Informações da Conta' />
        <BotaoConta source={require('../../assets/icons/conta/perfil-conta.png')} titulo='Perfil do Investidor' />
        <BotaoConta source={require('../../assets/icons/conta/notif-conta.png')} titulo='Notificações' />
        <BotaoConta source={require('../../assets/icons/conta/config-conta.png')} titulo='Configurações da Conta' />
        <BotaoConta source={require('../../assets/icons/conta/logout-conta.png')} titulo='Logout' />
      </View>
    </SafeAreaView>
  );
};

export default Conta;
