import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactList from './components/ContactList';
import ContactDetail from './components/ContactDetail';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); // State for the search query

  useEffect(() => {
    // Fetch contacts from JSONPlaceholder API
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setContacts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the contacts:", error);
      });
  }, []);

  // Filter contacts based on search query
  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Contacts</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search contacts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="container">
        <ContactList contacts={filteredContacts} setSelectedContact={setSelectedContact} />
        {selectedContact && <ContactDetail contact={selectedContact} />}
      </div>
    </div>
  );
}

export default App;




