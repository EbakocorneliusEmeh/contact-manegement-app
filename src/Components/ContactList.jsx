// import React from 'react';
// import ContactItem from './ContactItem';

// const ContactList = ({ contacts, searchQuery, deleteContact, editContact }) => {
//   const filteredContacts = contacts.filter(
//     (contact) =>
//       contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       contact.phone.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="contact-list">
//       {filteredContacts.map((contact) => (
//         <ContactItem
//           key={contact.id}
//           contact={contact}
//           deleteContact={deleteContact}
//           editContact={editContact}
//         />
//       ))}
//     </div>
//   );
// };

// export default ContactList;
