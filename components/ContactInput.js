import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import TakePhoto from '../components/TakePhoto';
import * as contactsActions from '../store/contacts-actions';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CaptureLocation from '../components/CaptureLocation';

const ContactInput = (props) => {
  const [name, setName] = useState(props.contact.name);
  const [phone, setPhone] = useState(props.contact.phone);
  const [imageUri, setImageUri] = useState(props.contact.imageUri);

  //const captureName = (name) => {
  //  setName(name);
  //};
  //
  //const capturePhone = (phone) => {
  //  setPhone(phone);
  //};

  const photoTaked = (imageUri) => {
    setImageUri(imageUri);
  };

  return (
    <View style={styles.inputArea}>
      <Text style={styles.title}>Dados Cadastrais</Text>

      <TextInput
        placeholder="Nome"
        style={styles.Input}
        onChangeText={(text) => setName(text)}
        value={name}
      />

      <TextInput
        placeholder="Telefone"
        style={styles.Input}
        onChangeText={(text) => setPhone(text)}
        value={phone}
      />
      <TakePhoto onPhotoTaked={photoTaked} contact={props.contact} />
      <CaptureLocation />
      <Button
        style={styles.submitButton}
        title="Cadastrar"
        onPress={() =>
          props.addContact(props.contact.key, name, phone, imageUri)
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputArea: {
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    color: '#32264d',
    fontSize: 20,
    lineHeight: 30,
    paddingTop: 50,
  },
  Input: {
    height: 54,
    backgroundColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },
  submitButton: {
    backgroundColor: '#e3a052',
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ContactInput;
