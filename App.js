import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import ContactNavigator from './navigation/ContactNavigator';
import contactsReducer from './store/contacts-reducer';

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
