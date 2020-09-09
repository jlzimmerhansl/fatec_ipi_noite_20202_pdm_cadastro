import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ContactInput from './components/ContactInput';
import ContactItem from './components/ContactItem';

export default function App() {

  
  const [contacts, setContacts] = useState([]);
  const [count, setCount] = useState(10);

  

  const addContact = (name, phone) => {
    let contact = { name: name, phone: phone };
    setContacts(contacts => {
      setCount(count + 2);
      return [ { key: count.toString(), value: contact },...contacts];
      
    });
  }

  const removeContacts = (keyToBeRemove) => {
    setContacts(contacts => {
      return contacts.filter((contact) => {
        return contact.key !== keyToBeRemove;
      });
    });
  }

  return (
    <View style={styles.container}>
      <ContactInput
        addContact={addContact}
      />

      <FlatList
        data={contacts}
        renderItem={
          (contact) =>
          <ContactItem
            key={contact.item.value.key}
            name={contact.item.value.name}
            phone={contact.item.value.phone}
            onDelete={removeContacts}
          />
        }
      />

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
