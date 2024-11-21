import React from 'react';

function ContactList({ contacts, setSelectedContact }) {
  return (
    <div className="contact-list">
      <h2>Contact List</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id} onClick={() => setSelectedContact(contact)}>
            {contact.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
