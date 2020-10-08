export const ADD_CONTACT = 'ADD_CONTACT';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';
export const LIST_CONTACTS = 'LIST_CONTACTS';
import * as FileSystem from 'expo-file-system';
import { insertContact, seachContacts } from '../helpers/db';

export const addContact = (name, phone, imageUri) => {
  return async (dispatch) => {
    const fileName = imageUri.split('/').pop();
    const newPath = FileSystem.documentDirectory + fileName;
    try {
      await FileSystem.moveAsync({
        from: imageUri,
        to: newPath,
      });
      const resultDb = await insertContact(name, phone, newPath);
      console.log(resultDb);

      dispatch({
        type: ADD_CONTACT,
        dataContact: {
          key: resultDb.insertContact,
          name: name,
          phone: phone,
          imageUri: newPath,
        },
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

//export const addContact = (key, name, phone, imageUri) => {
//  return {
//    type: ADD_CONTACT,
//    dataContact: { key: key, name: name, phone: phone, imageUri: imageUri },
//  };
//};

export const removeContacts = (key) => {
  return {
    type: REMOVE_CONTACT,
    dataContact: {
      key: key,
    },
  };
};

export const listContacts = () => {
  return async (dispatch) => {
    try {
      const resultDB = await seachContacts();
      dispatch({ type: LIST_CONTACTS, contacts: resultDB.rows_array || [] });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};
