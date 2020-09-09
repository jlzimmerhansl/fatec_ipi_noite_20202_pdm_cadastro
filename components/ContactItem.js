import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

const ContactItem = (props) => {
  return (
    <TouchableOpacity onLongPress={() => props.onDelete(props.key)}>
        <View style={styles.itemList}>
            <Text style={styles.itemHeader}>Nome: {props.name}</Text>
            <Text style={styles.itemBody}>Telefone: {props.phone}</Text>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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

export default ContactItem;