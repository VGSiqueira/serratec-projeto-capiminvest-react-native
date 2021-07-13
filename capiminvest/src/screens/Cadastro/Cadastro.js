import React from 'react';
import { View, SafeAreaView } from 'react-native';
import Cabecalho from '../../components/Cabecalho/Cabecalho';
import { styles } from './styles';

const Cadastro = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Cabecalho />
        </SafeAreaView>
    )

}

export default Cadastro;