const path = require("path");
const fs = require("fs").promises;
const colors = require('colors');

//Создай переменную contactsPath и запиши в нее путь к файлу contacts.json
const contactsPath = path.resolve("db/contacts.json");

//получаем массив всех контактов
async function listContacts() {
  try {
    const response = await fs.readFile(contactsPath);
    const data = JSON.parse(response);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

listContacts();

//ищем контакт по id
async function getContactById(contactId) {
  try {
    const response = await fs.readFile(contactsPath);
    const data = JSON.parse(response);
    const findContactById = data.find((contact) => contactId === contact.id);
    console.log(findContactById);
    return findContactById;
  } catch (error) {
    console.error(error.message);
  }
}

getContactById(5);

//удаляем контакт
async function removeContact(contactId) {
  try {
    const response = await fs.readFile(contactsPath);
    const data = JSON.parse(response);
    const removeContactById = data.filter((contact) => contactId !== contact.id);
    console.log(removeContactById);
    // const newData =
    return removeContactById;
  } catch (error) {
    console.error(error.message);
  }
}

removeContact(2)

// function addContact(name, email, phone) {
//   // ...твой код
// }