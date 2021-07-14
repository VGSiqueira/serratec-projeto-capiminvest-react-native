import React from 'react';
import { View, Text } from 'react-native'
import { styles } from './styles';

const CardCotacao = (props) => {

    return (
        <View style={styles.card}>
            <Text>{props.title}</Text>
            <Text>{props.maxima}</Text>
            <Text>{props.minima}</Text>
            <Text>{props.variacao}</Text>
            <Text>{props.compra}</Text>
            <Text>{props.venda}</Text>
        </View>
    )

}

export default CardCotacao