import React, {useState} from 'react';
import {View} from 'react-native';
import InputText from '../InputText/InputText';
import InputTextMasked from '../InputTextMasked/InputTextMasked';
import {TextInputMask} from 'react-native-masked-text';
import {styles} from './styles';

const FormCadastro = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

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
        options={{format: 'YYYY-MM-DD'}}
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
        textContentType='password'
        secureTextEntry={true}
      />
    </View>
  );
};

export default FormCadastro;
