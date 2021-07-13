import React from 'react';
import {TextInputMask} from 'react-native-masked-text';

const InputTextMasked = (props) => {
  return (
    <TextInputMask
      value={props.value}
      placeholder={props.placeholder}
      type={props.type}
      onChangeText={props.onChangeText}
      keyboardType={props.keyboardType}
      returnKeyType="none"
      options={props.options}
      placeholderTextColor="#89ada2"
      style={{borderBottomWidth: 1, borderColor: "#276955"}}
    />
  );
};

export default InputTextMasked;
