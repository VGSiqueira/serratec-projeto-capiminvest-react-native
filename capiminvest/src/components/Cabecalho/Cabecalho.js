import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';

const Cabecalho = () => {

    return (
        <View style={styles.container}>
            <Icon name="arrow-back" size={30}/>
        </View>
    )

}

export default Cabecalho