import React, {useState, useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import Subtitulo from '../../components/Subtitulo/Subtitulo';
import acoes from '../../services/Api/acoes';

const Procurar = () => {
  const [search, setSearch] = useState([]);

    

  const handleSearch = () => {
    acoes.get(`analisefundamentalista/${search}`)
        .then(response => {
            setSearch(response.data);
        });
        console.log(search);
  };

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

      <View style={styles.sugestoes}>
        <Subtitulo subtitulo="Sugestões" />
      </View>

      <View style={styles.boxSugestoes}>
        <TouchableOpacity>
          <Text>MGLU3</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>PETR4</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>WEGE3</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Procurar;
