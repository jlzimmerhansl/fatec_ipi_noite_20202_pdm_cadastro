import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

const ContactDetailsScreen = () => {
  return <View>{ContactDetailsScreen}</View>;
};

ContactDetailsScreen.navigationOptions = (dataNav) => {
  return {
    headerTitle: dataNav.navigation.getParam('contactName'),
  };
};

export default ContactDetailsScreen;
