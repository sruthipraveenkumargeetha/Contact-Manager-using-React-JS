import React from 'react';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import './App.css';
//
function App() {

  const contacts = [
    {id: "1", 
    name: "Aishwarya", 
    email: "rputchak@ucsd.edu"},

    {id: "2", 
    name: "Chitra", 
    email: "chitra@ucsd.edu"},

    {id: "3",
    name: "Sruthi",
    email: "spg003@ucsd.edu"},
  ];
  return (
    <div className="ui container"> 
      <Header />
      <AddContact />
      <ContactList contacts = {contacts} /> 
    </div>
  );
}

export default App;
