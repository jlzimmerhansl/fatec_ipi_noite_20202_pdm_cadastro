import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ContactDetailsScreen from '../pages/ContactDetailsScreen';
import ConstactListScreen from '../pages/ContactsListScreen';
import NewContactScreen from '../pages/NewContactScreen';

const ContactNavigator = createStackNavigator({
  Contacts: ConstactListScreen,
  ContactDetail: ContactDetailsScreen,
  NewContact: NewContactScreen,
});

export default createAppContainer(ContactNavigator);
