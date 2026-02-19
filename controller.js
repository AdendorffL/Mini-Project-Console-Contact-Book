// imports
const { contacts } = require('./model');
const { updateFile } = require('./model');
const { displayContacts } = require('./view');

// contact variables
let contactName = 'Johan'
let contactPhone = ''
let contactEmail = ''
let contactIndex = contacts.findIndex(c => c.name === contactName);

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


displayContacts();

module.exports = {addContact, deleteContact, updateContact}