import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import {styles} from './styles';
import Titulo from '../../components/Titulo/Titulo';
import Subtitulo from '../../components/Subtitulo/Subtitulo';
import ListaCotacoes from '../../components/ListaCotacoes/ListaCotacoes';
import ListaNoticias from '../../components/ListaNoticias/ListaNoticias';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollView}>
        <View style={styles.header}>
          <Titulo titulo="Olá, Vinicius!" />
        </View>

        <View style={styles.card}>
          <View style={styles.headerCard}>
            <Image
              source={require('../../assets/icons/home/cash-home.png')}
              style={styles.icon}
            />
            <Text style={styles.titleCard}>Total investido</Text>
          </View>
          <View style={styles.valorInvestido}>
            <Text style={styles.valor}>R$ 200.000,00</Text>
          </View>
        </View>

        <View style={styles.cotacoes}>
          <View style={styles.subtitulo}>
            <Subtitulo subtitulo="Cotações" />
          </View>
          <View style={styles.cardCotacoes}>
            <ListaCotacoes />
          </View>
        </View>

        <View style={styles.noticias} >
          <View style={styles.subtitulo}>
            <Subtitulo subtitulo="Notícias Recentes" />
          </View>
          <View style={styles.boxNoticias}>
            <ListaNoticias />
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default Home;
