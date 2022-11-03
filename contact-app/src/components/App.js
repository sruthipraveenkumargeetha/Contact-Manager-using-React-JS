import React, { useEffect, useState } from 'react';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import './App.css';

function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  const addContactHandler = (contact) =>{
    setContacts([...contacts, contact]);
  }
  const [contacts, setContacts] = useState(() => {
    // getting stored value
    const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    return retrievedContacts || [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);


  return (
    <div className="ui container"> 
      <Header />
      <AddContact addContactHandler = {addContactHandler}/> 
      <ContactList contacts = {contacts} /> 
    </div>
  );
}

export default App;
