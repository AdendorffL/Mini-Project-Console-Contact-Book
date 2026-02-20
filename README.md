# 📒 Console Contact Book

A lightweight command-line contact management application built with Node.js. Manage your contacts directly from the terminal — no UI, no fluff.

---

## Features

- View all saved contacts
- Add a new contact
- Edit an existing contact
- Delete a contact
- Persistent storage via a local JSON file

---

## Tech Stack

- **Runtime** — Node.js
- **Storage** — JSON flat file
- **Architecture** — MVC (Model / View / Controller)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v14 or higher

### Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/console-contact-book.git
cd console-contact-book
```

2. Install dependencies

```bash
npm install
```

3. Start the application

```bash
npm start
```

---

## Usage

Once running, you will be presented with a menu:

```
====================
CONSOLE CONTACT BOOK
====================
Please select:
1. View Contacts
2. Add Contact
3. Delete Contact
4. Edit Contact
5. Close Program
====================
```

Navigate by entering the number of your desired action and following the prompts.

---

## Project Structure

```
console-contact-book/
├── app.js            # Entry point
├── model.js          # Data layer — reads and writes contacts.json
├── view.js           # Presentation layer — console UI and menus
├── controller.js     # Logic layer — handles user input and actions
├── contacts.json     # Persistent contact storage
└── package.json
```

---

## Data Format

Contacts are stored in `contacts.json` in the following format:

```json
[
  {
    "name": "Jane Doe",
    "phone": "10111",
    "email": "jane@example.com"
  }
]
```

---

## License

This project is open source and available under the [ISC License](https://opensource.org/licenses/ISC).