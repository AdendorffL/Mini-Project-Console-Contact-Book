const contacts = require('./model.js');

// function for adding contacts
let addContact = (name, phone, email) => {
    contacts.push({
        name: name,
        phone: phone,
        email: email
    })
}

// stringify 
const updatedJson = JSON.stringify(contacts, null, 2);

// write
fs.writeFileSync("contacts.json", updatedJson);