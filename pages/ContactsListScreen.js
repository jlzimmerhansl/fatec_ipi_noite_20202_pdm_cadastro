import React from 'react';
import { View, StyleSheet, FlatList, Platform, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import ButtonHeader from '../components/ButtonHeader';
import ContactItem from '../components/ContactItem';
import * as contactActions from '../store/contacts-actions';

const ContactsListScreen = (props) => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const removeContacts = (key) => {
    dispatch(contactActions.removeContacts(key));
  };
  return (
    <FlatList
      data={contacts}
      keyExtractor={(contact) => contact.key}
      renderItem={(contact) => (
        <ContactItem
          //key={contact.item.key}
          //contactName={contact.item.contactName}
          //phone={contact.item.phone}
          contact={contact.item}
          onSelect={() => {
            props.navigation.navigate('ContactDetail', {
              contact: contact.item,
            });
          }}
          image={contact.item.imageUri}
          onDelete={removeContacts}
        />
      )}
    />
  );
};

ContactsListScreen.navigationOptions = (dataNavigation) => {
  return {
    headerTitle: 'Contatos',
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={ButtonHeader}>
          <Item
            title="Adicionar"
            iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
            onPress={() => {
              dataNavigation.navigation.navigate('NewContact');
            }}
          />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({});

export default ContactsListScreen;
