import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const CardNoticias = (props) => {

    return(
        <TouchableOpacity style={styles.card}>
            <Text style={styles.fonte}>{props.fonte}</Text>
            <Text style={styles.title}>{props.titulo}</Text>
        </TouchableOpacity>
    )

}

export default CardNoticias