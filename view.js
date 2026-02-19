// log every contact in neat format
let displayContacts = () => {
    contacts.forEach(contact => {
        console.log(`Name: ${contact.name} \nPhone: ${contact.phone}\nEmail: ${contact.email}\n`);
        }
    );
}