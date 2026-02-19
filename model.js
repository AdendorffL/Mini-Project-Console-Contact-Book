// import File System
const fs = require("fs");

// read
const fileData = fs.readFileSync("contacts.json", "utf-8");

// parse
const contacts = JSON.parse(fileData);

module.exports = {contacts};