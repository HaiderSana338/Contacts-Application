import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactList from './components/ContactList';
import ContactDetail from './components/ContactDetail';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Fetch contacts from JSONPlaceholder API
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setContacts(response.data))
      .catch((error) => console.error("Error fetching contacts:", error));

    // Listen for window resize to update the `isMobile` state
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filter contacts based on the search query
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBack = () => setSelectedContact(null);

  return (
    <div className="App">
      <h1>Contacts</h1>
      {!isMobile || !selectedContact ? (
        <div className="search-container">
          <input
            type="text"
            placeholder="Search contacts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
      ) : null}

      <div className="container">
        {(!isMobile || !selectedContact) && (
          <ContactList contacts={filteredContacts} setSelectedContact={setSelectedContact} />
        )}
        {selectedContact && (
          <div>
            {isMobile && (
              <button onClick={handleBack} className="back-button">
                &larr; Back
              </button>
            )}
            <ContactDetail contact={selectedContact} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;





