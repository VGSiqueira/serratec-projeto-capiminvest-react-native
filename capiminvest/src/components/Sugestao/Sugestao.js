import React from 'react';
import { TouchableOpacity, Text } from 'react-native'
import { styles } from './styles';

const Sugestao = (props) => {

    return (
        <TouchableOpacity style={styles.sugestao} onPress={props.onPress} >
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    )

}
export default Sugestao