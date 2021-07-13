import React from 'react';
import { TextInput, View } from 'react-native';
import { styles } from './styles';

const InputText = (props) => {

    return (
        <View style={styles.container}>
            <TextInput
            value={props.value}
            onChangeText={props.onChangeText}
            placeholder={props.placeholder}
            style={styles.textInput}
            textContentType={props.textContentType}
            secureTextEntry={props.secureTextEntry}/>
        </View>
    )

}

export default InputText