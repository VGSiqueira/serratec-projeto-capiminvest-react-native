import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import InputText from '../InputText/InputText';
import InputTextMasked from '../InputTextMasked/InputTextMasked';
import { styles } from './styles';
import http from '../../services/Api/http';
import axios from 'axios';

const FormCadastro = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');


  const cadastrar = () => {
    const usuario = {
      nome: nome,
      cpf: cpf,
      dataNascimento: dataNascimento,
      telefone: telefone,
      email: email,
      login: login,
      senha: senha
    }
    http.post('usuario', usuario)
      .then(response => (response.data))
      .catch(erro => {
        console.log(erro)
    })

    setCpf('')
    setDataNascimento('')
    setEmail('')
    setLogin('')
    setNome('')
    setSenha('')
    setTelefone('')
  }

  return (
    <View style={styles.container}>
      <InputText
        value={nome}
        onChangeText={setNome}
        placeholder="Nome"
        textContentType="name"
      />

      <InputTextMasked
        value={cpf}
        placeholder="CPF"
        type={'cpf'}
        onChangeText={setCpf}
        keyboardType="number-pad"
      />
      <InputTextMasked
        value={dataNascimento}
        placeholder="Data de Nascimento"
        type={'datetime'}
        onChangeText={setDataNascimento}
        keyboardType="number-pad"
        options={{ format: 'YYYY-MM-DD' }}
      />
      <InputTextMasked
        value={telefone}
        placeholder="Telefone"
        type={'cel-phone'}
        onChangeText={setTelefone}
        keyboardType="number-pad"
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(99)',
        }}
      />
      <InputText
        value={email}
        onChangeText={setEmail}
        placeholder="E-mail"
        textContentType="emailAddress"
      />
      <InputText
        value={login}
        onChangeText={setLogin}
        placeholder="Usuário"
        textContentType="username"
      />
      <InputText
        value={senha}
        onChangeText={setSenha}
        placeholder="Senha"
        textContentType="password"
        secureTextEntry={true}
      />
      <View style={styles.footer}>
        <TouchableOpacity onPress={cadastrar} style={styles.botao}>
          <Text style={styles.texto}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FormCadastro;
