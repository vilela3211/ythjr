import React from 'react';
import { ScrollView, Text, TextInput, Button } from 'react-native';

export default function Cadastro({ navigation }) {
  return (
    <ScrollView>
      <Text>Tela de Cadastro</Text>

      <Text>Nome:</Text>
      <TextInput placeholder="digite seu nome" />

      <Text>E-mail:</Text>
      <TextInput placeholder="digite seu e-mail" />

      <Text>Senha:</Text>
      <TextInput placeholder="digite sua senha" secureTextEntry={true} />

      <Button
        title="Cadastrar e Entrar"
        onPress={() => navigation.navigate('Home')}
      />
    </ScrollView>
  );
}