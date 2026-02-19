// imports
const { contacts } = require('./model');
const { updateFile } = require('./model');
const { displayContacts } = require('./view');

// contact variables
let contactName = ''
let contactPhone = ''
let contactEmail = ''

// add contacts
let addContact = (name, phone, email) => {
    contacts.push({
        name: name,
        phone: phone,
        email: email
    })
    updateFile()
}

let deleteContact = (name) => {

}

displayContacts();