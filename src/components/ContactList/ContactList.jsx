import { Component } from 'react';

class ContactList extends Component {
  render() {
    const filteredContacts = this.props.contactsList();
    return (
      <>
        <ul>
          {filteredContacts.map(contact => {
            return (
              <li key={contact.id}>
                {contact.name}: {contact.number}{' '}
                <button onClick={() => this.props.deleteContact(contact.id)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default ContactList;
