import React from 'react';
import { ScrollView, Text, TextInput, Button, Image } from 'react-native';

export default function Login({ navigation }) {
  return (
    <ScrollView>
      <Image
        source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }}
        style={{ width: 150, height: 150 }}
      />

      <Text>E-mail:</Text>
      <TextInput placeholder="digite seu e-mail" />

      <Text>Senha:</Text>
      <TextInput placeholder="digite sua senha" secureTextEntry={true} />

      <Button
        title="Entrar"
        onPress={() => navigation.navigate('Home')}
      />

      <Button
        title="Ir para Cadastro"
        onPress={() => navigation.navigate('Cadastro')}
      />
    </ScrollView>
  );
}