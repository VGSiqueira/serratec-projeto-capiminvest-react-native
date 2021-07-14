import React from 'react';
import { Text } from 'react-native';
import { styles } from './styles';

const Subtitulo = (props) => {

    return(
        <Text style={styles.subtitulo}>{props.subtitulo}</Text>
    )

}

export default Subtitulo