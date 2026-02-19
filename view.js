const { contacts } = require('./model');

// log every contact in neat format
let displayContacts = () => {
    console.log("DEBUG: Function works")
    contacts.forEach(contact => {
        console.log(`Name: ${contact.name} \nPhone: ${contact.phone}\nEmail: ${contact.email}\n`);
        }
    );
}

module.exports = {displayContacts}