// imports
const { contacts } = require('./model');
const { back, navigate, addContact, deleteContact, updateContact } = require('./controller');

// -------------------------------------
// start menu
// -------------------------------------
 const displayMenu = async () => {
    console.clear();
    console.log('====================');
    console.log('CONSOLE CONTACT BOOK');
    console.log('====================');
    console.log('Please select:');
    console.log('1. View Contacts');
    console.log('2. Add Contact');
    console.log('3. Delete Contact');
    console.log('4. Edit Contact');
    console.log('5. Close Program')
    console.log('====================\n');

    // logic
    navigate(displayContacts, displayAdd, displayDelete, displayUpdate, displayMenu);
}

// -------------------------------------
// add contact
// -------------------------------------
const displayAdd = async () => {
    console.clear();
    console.log('====================');
    console.log('ADD CONTACT');
    console.log('====================\n');

    // logic
    await addContact();
    displayMenu();
}

// -------------------------------------
// all contacts
// -------------------------------------
const displayContacts = () => {
    console.clear();
    console.log('====================');
    console.log('ALL CONTACTS');
    console.log('====================\n');
    contacts.forEach(contact => {
        console.log(`Name: ${contact.name} \nPhone: ${contact.phone}\nEmail: ${contact.email}`);
        console.log('-----')
        }
    );
    console.log('====================\n');

    // user input and logic
    back(displayMenu);
}

// -------------------------------------
// update contact details
// -------------------------------------
const displayUpdate = async () => {
    console.clear();
    console.log('====================');
    console.log('EDIT CONTACT');
    console.log('====================\n');
    let contactCount = 0
    contacts.forEach(contact => {
        contactCount ++;
        console.log(`${contactCount}. ${contact.name}`);
        console.log('-----')
    });
    console.log('====================\n'); 

    // logic
    await updateContact();
    displayMenu();
    }

// -------------------------------------
// delete contact
// -------------------------------------
const displayDelete = async () => {
    console.clear();
    console.log('====================');
    console.log('DELETE CONTACT');
    console.log('====================\n');
    let contactCount = 0
    contacts.forEach(contact => {
        contactCount ++;
        console.log(`${contactCount}. ${contact.name}`);
        console.log('-----')
    });
    console.log('====================\n'); 

    // logic 
    await deleteContact();
    displayMenu();
};

// exports
module.exports = { displayMenu }