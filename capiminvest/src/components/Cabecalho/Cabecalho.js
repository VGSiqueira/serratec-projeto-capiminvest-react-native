import React from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';

const Cabecalho = (props) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={props.onPress} >
        <Icon name="arrow-back" size={30} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Cabecalho;
