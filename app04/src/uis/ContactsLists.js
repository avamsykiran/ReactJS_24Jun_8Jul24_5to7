import { useState } from 'react';
import ContactsHeader from './ContactsHeader';
import ContactRow from './ContactRow';
import Contactform from './ContactForm';

const ContactsList = () => {

    let [contacts, setContacts] = useState([
        { id: 1, fullName: "Vamsy Kiran Aripaka", mobile: "9999999999", mailId: "vamsy@gmail.com" },
        { id: 2, fullName: "K G N Murthy", mobile: "8888888888", mailId: "murthy@gmail.com" },
        { id: 3, fullName: "Suresh Pedireddy", mobile: "1234512345", mailId: "suresh@gmail.com" },
        { id: 4, fullName: "Ramesh Pekala", mobile: "5432112345", mailId: "ramesh@gmail.com" },
        { id: 5, fullName: "Swaroopa Kiran", mobile: "5432154321", mailId: "swaroopa@gmail.com" }
    ]);

    let [nextContactId, setNextContactId] = useState(6);

    const add = contact => {
        contact.id = nextContactId;
        setContacts([...contacts, contact]);
        setNextContactId(nextContactId + 1);
    };

    const deleteById = id => {
        setContacts(contacts.filter(c => c.id !== id));
    }

    const update = contact => {
        setContacts(contacts.map(c => c.id !== contact.id ? c : { ...contact, isEditing: undefined }));
    }

    const markEditable = id => {
        setContacts(contacts.map(c => c.id !== id ? c : { ...c, isEditing: true }));
    }

    const unmarkEditable = id => {
        setContacts(contacts.map(c => c.id !== id ? c : { ...c, isEditing: undefined }));
    }

    return (
        <section className='container-fluid p-4'>
            <h4>Contacts List</h4>

            <ContactsHeader />

            <Contactform save={add} />

            {
                contacts.map(c => (
                    c.isEditing ?
                        <Contactform key={c.id} c={c} save={update} cancel={unmarkEditable} /> :
                        <ContactRow key={c.id} c={c} del={deleteById} edit={markEditable} />
                ))
            }
        </section>
    );
}

export default ContactsList;