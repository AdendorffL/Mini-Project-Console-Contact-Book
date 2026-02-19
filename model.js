// import File System
const fs = require("fs");

// read
const fileData = fs.readFileSync("contacts.json", "utf-8");

// parse
const contacts = JSON.parse(fileData);

// update JSON file with new content
const updateFile = () => {
    // stringify 
    const updatedJson = JSON.stringify(contacts, null, 2);
    // write
    fs.writeFileSync("contacts.json", updatedJson);
}

module.exports = {contacts, updateFile};