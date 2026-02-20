// imports
const readline = require('readline');
const { contacts } = require('./model');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// contact variables
let contactName = 'Johan'
let contactPhone = ''
let contactEmail = ''
let contactIndex = contacts.findIndex(c => c.name === contactName);

// start menu
let displayMenu = () => {
    console.log('====================');
    console.log('CONSOLE CONTACT BOOK');
    console.log('====================\n');
    console.log('Please select:\n');
    console.log('1. View Contacts');
    console.log('2. Add Contact');
    console.log('3. Delete Contact');
    console.log('4. Edit Contact');
    console.log('====================\n');
}

// add contact
let displayAdd = () => {
    console.log('====================');
    console.log('ADD CONTACT');
    console.log('====================\n');
    
}

// all contacts
let displayContacts = () => {
    console.log('====================');
    console.log('ALL CONTACTS');
    console.log('====================\n');
    contacts.forEach(contact => {
        console.log(`Name: ${contact.name} \nPhone: ${contact.phone}\nEmail: ${contact.email}`);
        console.log('-----')
        }
    );
    console.log('====================\n');
}

// update contact details
let displayUpdate = () => {
    console.log('====================');
    console.log('UPDATE CONTACT');
    console.log('====================\n');
    contactCount = 0
    contacts.forEach(contact => {
        contactCount ++;
        console.log(`${contactCount}. ${contact.name}`);
        console.log('-----')
    })
    console.log('====================\n'); 
}

// delete contact
let displayDelete = () => {
    console.log('====================');
    console.log('DELETE CONTACT');
    console.log('====================\n');
    contactCount = 0
    contacts.forEach(contact => {
        contactCount ++;
        console.log(`${contactCount}. ${contact.name}`);
        console.log('-----')
    })
    console.log('====================\n'); 
};

// exports
module.exports = {displayMenu, displayAdd, displayContacts, displayUpdate, displayDelete, contactIndex}