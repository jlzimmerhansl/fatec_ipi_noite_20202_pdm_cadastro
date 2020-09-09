import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


const ContactInput = (props) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const captureName = (name) => {
    setName(name);
  }

  const capturePhone = (phone) => {
    setPhone(phone);
  }

  return (
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
          onPress={() => props.addContact(name, phone)}
        />
      </View>  
  );
}

const styles = StyleSheet.create({
  inputArea: {
    marginBottom: 20
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
  }
});

export default ContactInput;