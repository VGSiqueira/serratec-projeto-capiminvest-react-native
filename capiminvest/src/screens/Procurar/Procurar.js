import React, {useState, useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import {styles} from './styles';
import Subtitulo from '../../components/Subtitulo/Subtitulo';
import acoes from '../../services/Api/acoes';
import CardDados from '../../components/CardDados/CardDados';
import Sugestao from '../../components/Sugestao/Sugestao';

const Procurar = () => {
  const [search, setSearch] = useState('');

  const [dados, setDados] = useState([]);

  const [ticker, setTicker] = useState('');

  const handleSearch = () => {
    acoes
      .get(`analisefundamentalista/${search}`)
      .then(response => {
        setDados(response.data);
      })
      .catch(e => console.log(e));
  };

  // const handleSugestao = (ticker) => {
  //   useEffect(() => {
  //     acoes.get(`analisefundamentalista/${ticker}`).then(response => {
  //       setTicker(response.data);
  //       console.log(ticker);
  //     });
  //   }, []);
  // };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          value={search}
          onChangeText={setSearch}
          style={styles.inputSearch}
          placeholder="Digite um Ticker..."
        />
        <View style={styles.searchButton}>
          <TouchableOpacity onPress={handleSearch}>
            <Image
              source={require('../../assets/icons/search/lupa.png')}
              style={styles.searchIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.subtitulo}>
        <Subtitulo subtitulo="Sugestões" />
      </View>

      <View style={styles.boxSugestoes}>
        <Sugestao title="MGLU3" />
        <Sugestao title="WEGE3"/>
        <Sugestao title="PETR4" />
      </View>

      <View style={styles.subtitulo}>
        <Subtitulo subtitulo="Indicadores" />
      </View>

      <View style={styles.boxIndicadores}>
        <FlatList
          numColumns={2}
          data={dados}
          keyExtractor={(item, index) => index}
          renderItem={({item, index}) => (
            <View key={index}>
              <CardDados
                title={item.title}
                value={item.value}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Procurar;
