// imports
const readline = require('readline');
const { contacts } = require('./model');
const { addContact, deleteContact, updateContact } = require('./controller');

// user input interface start
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ask question function
let askQuestion = (query) => {
    return new Promise(resolve => rl.question(query, resolve));
}

// back to menu function
const back = async () => {
    let backToMenu = await askQuestion("Press 'b' for Back: ");
    if (backToMenu = 'b') {
        console.clear();
        displayMenu();
    }
}

// -------------------------------------
// start menu
// -------------------------------------
 const displayMenu = async () => {
    console.log('====================');
    console.log('CONSOLE CONTACT BOOK');
    console.log('====================');
    console.log('Please select:');
    console.log('1. View Contacts');
    console.log('2. Add Contact');
    console.log('3. Delete Contact');
    console.log('4. Edit Contact');

    // user input and logic
    let num = await askQuestion("Enter(1-4): ");
    console.log('====================\n');
        if (num == 1) {
            console.clear();
            displayContacts();
        } else if (num == 2) {
            console.clear();
            displayAdd();
        } else if (num == 3) {
            console.clear();
            displayDelete();
        } else if (num == 4) {
            console.clear();
            displayUpdate();
        } else {
            console.log('Invalid Input: Please enter a number between 1 and 4');
            displayMenu();
        }
}

// -------------------------------------
// add contact
// -------------------------------------
const displayAdd = async () => {
    console.log('====================');
    console.log('ADD CONTACT');
    console.log('====================\n');

    // user input and logic
    let userName = await askQuestion("Input User Name: ");
    let userPhone = await askQuestion("Input User Phone: ");
    let userEmail = await askQuestion("Input User Email: ");
    addContact(userName, userPhone, userEmail);
    displayMenu();
}

// -------------------------------------
// all contacts
// -------------------------------------
const displayContacts = () => {
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
    back();
}

// -------------------------------------
// update contact details
// -------------------------------------
const displayUpdate = async () => {
    console.log('====================');
    console.log('EDIT CONTACT');
    console.log('====================\n');
    contactCount = 0
    contacts.forEach(contact => {
        contactCount ++;
        console.log(`${contactCount}. ${contact.name}`);
        console.log('-----')
    });
    console.log('====================\n'); 

    // user input and logic
    userIndex = await askQuestion("Input User Index Number: ");
    userIndex --
    if (userIndex < 0 || userIndex >= contacts.length) {
        console.log('Invalid: number is not in list')
    } else {
        let userName = await askQuestion("Input User Name: ");
        let userPhone = await askQuestion("Input User Phone: ");
        let userEmail = await askQuestion("Input User Email: ");
        updateContact(userIndex, userName, userPhone, userEmail);
        displayMenu();
    }
}

// -------------------------------------
// delete contact
// -------------------------------------
const displayDelete = async () => {
    console.log('====================');
    console.log('DELETE CONTACT');
    console.log('====================\n');
    contactCount = 0
    contacts.forEach(contact => {
        contactCount ++;
        console.log(`${contactCount}. ${contact.name}`);
        console.log('-----')
    });
    console.log('====================\n'); 

    // user input and logic
    userIndex = await askQuestion("Input User Index Number: ");
    userIndex --
    if (userIndex < 0 || userIndex >= contacts.length) {
        console.log('Invalid: number is not in list')
    } else {
        deleteContact(userIndex);
    }
    displayMenu();
};

// exports
module.exports = {displayMenu, displayAdd, displayContacts, displayUpdate, displayDelete}