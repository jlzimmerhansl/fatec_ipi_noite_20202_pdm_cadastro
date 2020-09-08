import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { bold } from 'ansi-colors';

export default function App() {

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cadastros, setCadastros] = useState([]);
  const [contador, setContador] = useState(10);

  const capturarNome = (nome) => {
    setNome(nome);
  }

  const capturaTelefone = (telefone) => {
    setTelefone(telefone);
  }

  const adicionarCadastro = () => {
    let cadastro = { nome: nome, telefone: telefone };
    setCadastros(cadastros => {
      setContador(contador + 2);
      return [ { key: contador.toString(), value: cadastro },...cadastros];
      
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <Text style={styles.title}>Dados Cadastrais</Text>

        <TextInput
          placeholder="Nome"
          style={styles.Input}
          onChangeText={capturarNome}
          value={nome}
        />

        <TextInput
          placeholder="Telefone"
          style={styles.Input}
          onChangeText={capturaTelefone}
          value={telefone}
        />

        <Button 
          style={styles.submitButton}
          title="Cadastrar"
          onPress={adicionarCadastro}
        />
      </View>

      <View style={styles.listArea}>
        <FlatList
          data={cadastros}
          renderItem={
            cadastro =>
            <View key={cadastro.item.value.key} style={styles.itemList}>
              <Text style={styles.itemHeader}>Nome: {cadastro.item.value.nome}</Text>
              <Text style={styles.itemBody}>Telefone: {cadastro.item.value.telefone}</Text>
            </View>
          }
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: "bold",
    color: '#32264d',
    fontSize: 20,
    lineHeight: 30,
    marginBottom: 30,
  },
  Input:{
    height: 54,
    backgroundColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16
  },
  submitButton: {
    backgroundColor: '#e3a052',
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listArea: {
    marginTop: 20
  },
  itemList: {
    height: 64,
    backgroundColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16
  },
  itemHeader: {
    fontWeight: "bold",
    color: '#32264d',
    fontSize: 20,
  },
  itemBody: {
    color: '#cdcdcd',
    fontSize: 16,
    marginTop: 5
  }
});
