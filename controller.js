// imports
const { contacts, updateFile } = require('./model');
const { displayContacts, displayUpdate, displayDelete, displayMenu, displayAdd, contactIndex } = require('./view');

// add contact
let addContact = (name, phone, email) => {
    contacts.push({
        name: name,
        phone: phone,
        email: email
    })
    updateFile()
}

// delete contact
let deleteContact = () => {
    contacts.splice(contactIndex, 1);
    //updateFile()
}

// update contact
let updateContact = (name, phone, email) => {
    contacts[contactIndex] = {
        name: name,
        phone: phone,
        email: email
    }
}

displayMenu();
displayContacts();
displayAdd();
displayUpdate();
displayDelete();

module.exports = {addContact, deleteContact, updateContact}