// import File System
const fs = require("fs");

// read
const fileData = fs.readFileSync("contacts.json", "utf-8");

// parse
const contacts = JSON.parse(fileData);

// log every contact in neat format
let displayContacts = () => {
    contacts.forEach(contact => {
        console.log(`Name: ${contact.name} \nPhone: ${contact.phone}\nEmail: ${contact.email}\n`);
        }
    );
}

console.log("\n---------------------------------\n")

// function for adding contacts

let addContact = (name, phone, email) => {
    contacts.push({
        name: name,
        phone: phone,
        email: email
    })
}

addContact('Jane Doe', '0823218831', 'janedoe@gmail.com');
addContact('John Doe', '0648494663', 'johndoe@gmail.com');

displayContacts();

// stringify 
const updatedJson = JSON.stringify(contacts, null, 2);

// write
fs.writeFileSync("contacts.json", updatedJson);
