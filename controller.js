// imports
const readline = require('readline');
const { contacts, updateFile } = require('./model');

// user input interface start
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ask question function
let askQuestion = (query) => {
    return new Promise(resolve => rl.question(query, resolve));
}

// navigate menu
let navigate = async (all, add, del, upd, men) => {
    let num = await askQuestion("Enter(1-5): ");
    if (num == 1) {
        console.clear();
        await all();
    } else if (num == 2) {
        console.clear();
        await add();
    } else if (num == 3) {
        console.clear();
        await del();
    } else if (num == 4) {
        console.clear();
        await upd();
    }else if (num == 5) {
        rl.close();
    } else {
        console.log('Invalid Input: Please enter a number between 1 and 4\n');
        await men();
    }
}

let back = async (men) => {
    let enter = await askQuestion("Press 'ENTER' to go back to MENU: ");
    console.clear();
    men();
}

// add contact
let addContact = async () => {
    let userName = await askQuestion("Input User Name: ");
    let userPhone = await askQuestion("Input User Phone: ");
    let userEmail = await askQuestion("Input User Email: ");
    contacts.push({
        name: userName,
        phone: userPhone,
        email: userEmail
    })
    updateFile();
}

// update contact
let updateContact = async () => {
    let userIndex = await askQuestion("Input User Index Number: ");
    userIndex --

    // check if index is in list range
    if (userIndex < 0 || userIndex >= contacts.length) {
        console.log('Invalid: number is not in list')
    } else {
        // user input
        let userName = await askQuestion("Input User Name: ");
        let userPhone = await askQuestion("Input User Phone: ");
        let userEmail = await askQuestion("Input User Email: ");
        // update
        contacts[userIndex] = {
            name: userName,
            phone: userPhone,
            email: userEmail
        }
        updateFile();
    }
};

// delete contact
let deleteContact = async () => {
    let userIndex = await askQuestion("Input User Index Number: ");
    userIndex --
    if (userIndex < 0 || userIndex >= contacts.length) {
        console.log('Invalid: number is not in list')
    } else {
        contacts.splice(userIndex, 1);
        updateFile();
    }
}

module.exports = { back, navigate, addContact, deleteContact, updateContact }