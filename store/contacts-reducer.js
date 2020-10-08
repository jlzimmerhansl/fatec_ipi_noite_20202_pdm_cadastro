import { ADD_CONTACT, REMOVE_CONTACT, LIST_CONTACTS } from './contacts-actions';
import Contact from '../models/Contact';

const initialState = {
  contacts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      const contact = new Contact(
        action.dataContact.id.toString(),
        action.dataContact.name,
        action.dataContact.phone,
        action.dataContact.imageUri
      );
      return {
        contacts: state.contacts
          .filter((contact) => {
            return contact.key != action.dataContact.key;
          })
          .concat(contact),
      };
    case REMOVE_CONTACT:
      return {
        contacts: state.contacts.filter((contact) => {
          return contact.key != action.dataContact.key;
        }),
      };
    case LIST_CONTACTS:
      return {
        contacts: action.contacts.map(
          (cad) =>
            new Contact(cad.id.toString(), cad.name, cad.phone, cad.imageUri)
        ),
      };
    default:
      return state;
  }
};
