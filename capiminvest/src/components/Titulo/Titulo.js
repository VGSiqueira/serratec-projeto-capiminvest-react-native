import React from 'react';
import { Text } from "react-native"
import { styles } from './styles';

const Titulo = (props) => {

    return (
        <Text style={styles.title}>{props.titulo}</Text>
    )

}

export default Titulo;