import React, {useState, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import CardCotacao from '../CardCotacao/CardCotacao';
import cotacoes from '../../services/Api/cotacoes';

const ListaCotacoes = () => {
  const [usd, setUsd] = useState({});
  const [eur, setEur] = useState({});
  const [btc, setBtc] = useState({});

  useEffect(() => {
    cotacoes.get('USD').then(response => {
      setUsd(response.data.USDBRL);
    });

    cotacoes.get('EUR').then(response => {
      setEur(response.data.EURBRL);
    });

    cotacoes.get('BTC').then(response => {
      setBtc(response.data.BTCBRL);
    });
  }, []);

  const dados = [
    {
      id: 1,
      nome: usd.code,
      maxima: usd.high,
      minima: usd.low,
      variacao: usd.pctChange,
      compra: usd.bid,
      venda: usd.ask,
    },
    {
      id: 2,
      nome: eur.code,
      maxima: eur.high,
      minima: eur.low,
      variacao: eur.pctChange,
      compra: eur.bid,
      venda: eur.ask,
    },
    {
      id: 3,
      nome: btc.code,
      maxima: btc.high,
      minima: btc.low,
      variacao: btc.pctChange,
      compra: btc.bid,
      venda: btc.ask,
    },
  ];

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      data={dados}
      renderItem={({item}) => (
        <CardCotacao
          title={item.nome}
          maxima={item.maxima}
          minima={item.minima}
          variacao={item.variacao}
          compra={item.compra}
          venda={item.venda}
        />
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default ListaCotacoes;
