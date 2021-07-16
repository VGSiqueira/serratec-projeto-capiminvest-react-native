import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const CardDados = (props) => {

    console.log(props.title)

    return(
        <View style={styles.card}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.value} >{props.value}</Text>
            <Text>{props.details}</Text>
        </View>
    )

}

export default CardDados