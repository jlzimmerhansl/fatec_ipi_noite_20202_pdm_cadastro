import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import { useDispatch } from 'react-redux';

import Colors from '../constants/Colors';
import ContactInput from '../components/ContactInput';
import ContactItem from '../components/ContactItem';
import * as contactsActions from '../store/contacts-actions';

const NewContactScreen = (props) => {
  const dispatch = useDispatch();
  //const [contacts, setContacts] = useState([]);
  //const [count, setCount] = useState(10);
  //const [newContact, setNewContact] = useState('');
  //const [imageUri, setImageUri] = useState();
  const [contact, setContact] = useState({
    key: null,
    name: '',
    phone: '',
    imageUri: '',
    latitude: 0,
    longitude: 0,
  });

  const saveContact = (key, name, phone, imageUri, latitude, longitude) => {
    dispatch(
      contactsActions.addContact(
        null,
        name,
        phone,
        imageUri,
        latitude,
        longitude
      )
    );
    props.navigation.goBack();
  };

  //const addContact = (name, phone) => {
  //  let contact = { name: name, phone: phone };
  //  setContacts((contacts) => {
  //    setCount(count + 2);
  //    return [{ key: count.toString(), value: contact }, ...contacts];
  //  });
  //};

  //const photoTaked = (imageUri) => {
  //  setImageUri(imageUri);
  //};
  //
  //const removeContacts = (keyToBeRemove) => {
  //  setContacts((contacts) => {
  //    return contacts.filter((contact) => {
  //      return contact.key !== keyToBeRemove;
  //    });
  //  });
  //};

  return (
    <ScrollView>
      <View style={styles.container}>
        <ContactInput addContact={saveContact} contact={contact} />
      </View>
    </ScrollView>
  );
};

NewContactScreen.navigationOptions = (dataNav) => {
  return {
    headerTitle: 'Novo Contato',
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f7',
    alignItems: 'center',
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
  listArea: {
    marginTop: 20,
  },
  itemList: {
    height: 64,
    backgroundColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },
  itemHeader: {
    fontWeight: 'bold',
    color: '#32264d',
    fontSize: 20,
  },
  itemBody: {
    color: '#cdcdcd',
    fontSize: 16,
    marginTop: 5,
  },
});

export default NewContactScreen;
