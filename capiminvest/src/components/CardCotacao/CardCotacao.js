import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';

const CardCotacao = props => {
  const formatter = num => {
    let numero = parseFloat(num);

    if (numero < 100) {
      let valor = numero.toFixed(2).replace('.', ',');
      return `R$ ${valor}`;
    } else {
      return `R$ ${numero.toFixed(3)}`;
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.columns}>
        <View>
          <Text>Máx.: {formatter(props.maxima)}</Text>
          <Text>Mín.: {formatter(props.minima)}</Text>
        </View>
        <View style={styles.colDireita}>
          <Text>C: {formatter(props.compra)}</Text>
          <Text>V: {formatter(props.venda)}</Text>
        </View>
      </View>
      <View style={styles.footerCard}>
        <Text style={styles.texto}>Variação: </Text>
        <Text
        style={props.variacao >= 0 ? {color: '#43bf5e'} : {color: '#e6241e'}}>{props.variacao} % </Text>
        <Image
          source={
            props.variacao >= 0
              ? require('../../assets/icons/cardCurrency/seta-cima.png')
              : require('../../assets/icons/cardCurrency/seta-baixo.png')
          }
          style={[
            styles.icon,
            props.variacao >= 0
              ? {tintColor: '#43bf5e'}
              : {tintColor: '#e6241e'},
          ]}
        />
      </View>
    </View>
  );
};

export default CardCotacao;
