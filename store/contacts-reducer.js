import { ADD_CONTACT, REMOVE_CONTACT } from './contacts-actions';
import Contact from '../models/Contact';

const initialState = {
  contacts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      const contact = new Contact(
        new Date().toString(),
        action.dataContact.name,
        action.dataContact.phone,
        action.dataContact.image
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
    default:
      return state;
  }
};
