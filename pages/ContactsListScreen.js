import React from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import ButotnHeader from '../components/ButtonHeader';

const ContactsListScreen = () => {
  return <View>{ContactsListScreen}</View>;
};

ContactsListScreen.navigationOptions = (dataNav) => {
  return {
    headerTitle: 'Contatos',
    headerRight: (
      <HeaderButtons HeaderButtonComponent={ButotnHeader}>
        <Item
          title="Adicionar"
          iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
          onPress={() => {
            dataNav.navigation.navigate('NewContact');
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({});

export default ContactsListScreen;
