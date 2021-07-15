import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import CardNoticias from '../CardNoticias/CardNoticias';
import noticias from '../../services/Api/noticias';
import {styles} from './styles';

const ListaNoticias = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    noticias.get().then(response => {
      setNews(response.data.articles);
    });
  }, []);

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={styles.lista}
      data={news}
      renderItem={({item, index}) => (
        <CardNoticias
          key={index}
          fonte={item.source.name}
          titulo={item.title}
        />
      )}
      keyExtractor={(item, index) => index}
    />
  );
};

export default ListaNoticias;
