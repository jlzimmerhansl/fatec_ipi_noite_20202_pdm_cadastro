import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import ContactNavigator from './navigation/ContactNavigator';
import contactsReducer from './store/contacts-reducer';
import { init } from './helpers/db';

init()
  .then(() => {
    console.log('Criação da base ocorreu com sucesso.');
  })
  .catch((err) => {
    console.log('Criação da base falhou.');
    console.log(err);
  });

//mapping the reducer to the indetifier "contacts"
const rootReducer = combineReducers({
  contacts: contactsReducer,
});

//create a center state
const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <ContactNavigator />;
    </Provider>
  );
}
