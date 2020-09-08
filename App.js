import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [contacts, setContacts] = useState([]);
  const [count, setCount] = useState(10);

  const captureName = (name) => {
    setName(name);
  }

  const capturePhone = (phone) => {
    setPhone(phone);
  }

  const addContact = () => {
    let contact = { name: name, phone: phone };
    setContacts(contacts => {
      setCount(count + 2);
      return [ { key: count.toString(), value: contact },...contacts];
      
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <Text style={styles.title}>Dados Cadastrais</Text>

        <TextInput
          placeholder="Nome"
          style={styles.Input}
          onChangeText={captureName}
          value={name}
        />

        <TextInput
          placeholder="Telefone"
          style={styles.Input}
          onChangeText={capturePhone}
          value={phone}
        />

        <Button 
          style={styles.submitButton}
          title="Cadastrar"
          onPress={addContact}
        />
      </View>

      <View style={styles.listArea}>
        <FlatList
          data={contacts}
          renderItem={
            contact =>
            <View key={contact.item.value.key} style={styles.itemList}>
              <Text style={styles.itemHeader}>Nome: {contact.item.value.name}</Text>
              <Text style={styles.itemBody}>Telefone: {contact.item.value.phone}</Text>
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
    alignItems: 'center'
  },
  title: {
    fontWeight: "bold",
    color: '#32264d',
    fontSize: 20,
    lineHeight: 30,
    paddingTop: 50
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
