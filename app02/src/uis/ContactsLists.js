import { Component } from 'react';
import ContactsHeader from './ContactsHeader';
import ContactRow from './ContactRow';
import Contactform from './ContactForm';

class ContactsList extends Component {
    constructor() {
        super();
        this.state = {
            contacts: [
                { id: 1, fullName: "Vamsy Kiran Aripaka", mobile: "9999999999", mailId: "vamsy@gmail.com" },
                { id: 2, fullName: "K G N Murthy", mobile: "8888888888", mailId: "murthy@gmail.com" },
                { id: 3, fullName: "Suresh Pedireddy", mobile: "1234512345", mailId: "suresh@gmail.com" },
                { id: 4, fullName: "Ramesh Pekala", mobile: "5432112345", mailId: "ramesh@gmail.com" },
                { id: 5, fullName: "Swaroopa Kiran", mobile: "5432154321", mailId: "swaroopa@gmail.com" }
            ],
            nextContactId: 6
        };
    }

    add = contact => {
        contact.id = this.state.nextContactId;
        this.setState({ contacts: [...this.state.contacts, contact], nextContactId: this.state.nextContactId + 1 });
    };

    deleteById = id => {
        this.setState({ contacts: this.state.contacts.filter(c => c.id !== id) });
    }

    update = contact => {
        this.setState({ contacts: this.state.contacts.map(c => c.id !== contact.id ? c : {...contact,isEditing:undefined}) });
    }

    markEditable = id => {
        this.setState({ contacts: this.state.contacts.map(c => c.id !== id ? c : {...c,isEditing:true} ) });
    }

    unmarkEditable = id => {
        this.setState({ contacts: this.state.contacts.map(c => c.id !== id ? c : {...c,isEditing:undefined} ) });
    }

    render() {
        return (
            <section className='container-fluid p-4'>
                <h4>Contacts List</h4>

                <ContactsHeader />

                <Contactform save={this.add} />

                {
                    this.state.contacts.map(c => (
                        c.isEditing ?
                            <Contactform key={c.id} c={c} save={this.update} cancel={this.unmarkEditable} /> :
                            <ContactRow key={c.id} c={c} del={this.deleteById} edit={this.markEditable} />
                    ))
                }
            </section>
        );
    }
}

export default ContactsList;