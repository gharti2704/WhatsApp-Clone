import React, { useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const ContactsContesxt = React.createContext();

export function useContacts() {
  return useContext(ContactsContesxt);
}

export function ContactsProvider({ children }) {
  const [contacts, setContacts] = useLocalStorage('contacts', []);

  function createContact(id, name) {
    setContacts((prevContacts) => {
      return [...prevContacts, { id, name }];
    });
  }

  return (
    <ContactsContesxt.Provider value={{ contacts, createContact }}>
      {children}
    </ContactsContesxt.Provider>
  );
}
