// import React, { useState } from 'react';

// const ContactItem = ({ contact, deleteContact, editContact }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [newName, setNewName] = useState(contact.name);
//   const [newEmail, setNewEmail] = useState(contact.email);
//   const [newPhone, setNewPhone] = useState(contact.phone);

//   const handleEdit = () => {
//     editContact(contact.id, { name: newName, email: newEmail, phone: newPhone });
//     setIsEditing(false);
//   };

//   return (
//     <div className="contact-item">
//       {isEditing ? (
//         <>
//           <input
//             type="text"
//             value={newName}
//             onChange={(e) => setNewName(e.target.value)}
//             placeholder="Name"
//           />
//           <input
//             type="email"
//             value={newEmail}
//             onChange={(e) => setNewEmail(e.target.value)}
//             placeholder="Email"
//           />
//           <input
//             type="tel"
//             value={newPhone}
//             onChange={(e) => setNewPhone(e.target.value)}
//             placeholder="Phone Number"
//           />
//           <button onClick={handleEdit}>Save</button>
//         </>
//       ) : (
//         <>
//           <h3>{contact.name}</h3>
//           <p>{contact.email}</p>
//           <p>{contact.phone}</p>
//           <button onClick={() => setIsEditing(true)}>Edit</button>
//           <button onClick={() => deleteContact(contact.id)}>Delete</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default ContactItem;
