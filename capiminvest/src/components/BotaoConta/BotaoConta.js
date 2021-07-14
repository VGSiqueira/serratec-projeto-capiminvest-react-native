import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { styles } from './styles';

const BotaoConta = (props) => {

    return(
        <TouchableOpacity style={styles.container}>
            <Image source={props.source} style={styles.icones} />
            <Text style={styles.titulo}>{props.titulo}</Text>
        </TouchableOpacity>
    )

}

export default BotaoConta