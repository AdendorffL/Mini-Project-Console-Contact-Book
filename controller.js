// imports
const { contacts, updateFile } = require('./model');
const { displayContacts, displayUpdate, displayDelete, displayMenu, displayAdd,} = require('./view');

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
let deleteContact = (index) => {
    contacts.splice(index, 1);
    //updateFile()
}

// update contact
let updateContact = (index, name, phone, email) => {
    contacts[index] = {
        name: name,
        phone: phone,
        email: email
    }
}

displayMenu();

module.exports = {addContact, deleteContact, updateContact}