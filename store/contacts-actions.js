export const ADD_CONTACT = 'ADD_CONTACT';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';

export const addContact = (key, name, phone, image) => {
  return {
    type: ADD_CONTACT,
    dataContact: { key: key, name: name, phone: phone, image: image },
  };
};

export const removeContacts = (key) => {
  return {
    type: REMOVE_CONTACT,
    dataContact: {
      key: key,
    },
  };
};
