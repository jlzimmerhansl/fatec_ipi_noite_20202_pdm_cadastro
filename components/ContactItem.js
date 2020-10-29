import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Colors from '../constants/Colors';

const ContactItem = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onSelect}
      onLongPress={() => props.onDelete(props.contact.key)}
    >
      <Image style={styles.image} source={{ uri: props.image }} />
      <View style={styles.itemList}>
        <Text style={styles.itemHeader}>Nome:{props.contact.name}</Text>
        <Text style={styles.itemBody}>Telefone:{props.contact.phone}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#ccc',
    borderColor: Colors.primary,
    borderWidth: 1,
  },
});

export default ContactItem;
