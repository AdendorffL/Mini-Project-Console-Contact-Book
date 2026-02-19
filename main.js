// import File System
const fs = require("fs");

// starting contact object
const contacts = [
    {
        name: "Lourens Adendorff",
        phone: "0823382284",
        email: "lou.adendorff@gmail.com"
    },
    {
        name: "Johan Pieterse",
        phone: "0826241383",
        email: "johanp@gmail.com"
    }

];

// convert object to string
const jsonString = JSON.stringify(contacts, null, 2);

// write to json file
fs.writeFileSync("contacts.json", jsonString);
