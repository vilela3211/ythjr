import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './Estilo';

export default function App() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  function mostrarMensagem() {
    if (nome.trim() !== '') {
      setMensagem('Olá, ' + nome + '!');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu Aplicativo</Text>

      <TextInput
        style={styles.entrada}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={mostrarMensagem}
      >
        <Text style={styles.textoBotao}>Enviar</Text>
      </TouchableOpacity>

      <Text style={styles.resultado}>{mensagem}</Text>
    </View>
  );
}