import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';
import Colors from '../constants/Colors';

const ButtonHeader = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      IconSize={23}
      color={Platform.OS === 'android' ? 'black' : Colors.primary}
    />
  );
};

export default ButtonHeader;
