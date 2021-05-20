const path = require("path");
const fs = require("fs").promises;
require("colors");
const { nanoid } = require("nanoid");

//Создай переменную contactsPath и запиши в нее путь к файлу contacts.json
const contactsPath = path.resolve("db/contacts.json");

//получаем массив всех контактов
async function listContacts() {
  try {
    const response = await fs.readFile(contactsPath, "utf8");
    const data = JSON.parse(response);
    const currentContacts = data;
    console.table(currentContacts);
    return currentContacts;
  } catch (error) {
    console.error(error.message);
  }
}

//ищем контакт по id
async function getContactById(contactId) {
  try {
    const response = await fs.readFile(contactsPath, "utf8");
    const data = JSON.parse(response);
    const currentContacts = data;
    const findContactById = currentContacts.find((contact) => contactId === contact.id);
    if (!findContactById) {
      console.log(`Такого контакта c id ${contactId} не существует`.bgRed);
      return;
    }
    console.log(`Контакт с id ${contactId} найден`.bgYellow);
    console.table(findContactById);
    return findContactById;
  } catch (error) {
    console.error(error.message);
  }
}

//удаляем контакт
async function removeContact(contactId) {
  try {
    const response = await fs.readFile(contactsPath, "utf8");
    const data = JSON.parse(response);
    const currentContacts = data;
    const updateContacts = currentContacts.filter((contact) => contactId !== contact.id);
    console.log(`Контакт с id ${contactId} удален`.bgCyan);
    console.table(updateContacts);

    await fs.writeFile(contactsPath, JSON.stringify(updateContacts), "utf8");

    return updateContacts;
  } catch (error) {
    console.error(error.message);
  }
}

//добавляем контакт
async function addContact(name, email, phone) {
  try {
    const response = await fs.readFile(contactsPath, "utf8");
    const data = JSON.parse(response);
    const currentContacts = data;

    const id = nanoid(10);
    const newContact = { id, name, email, phone };
    const newContacts = [...currentContacts, newContact];
    await fs.writeFile(contactsPath, JSON.stringify(newContacts), "utf8");

    console.log(` Новый контакт ${name} добавлен в таблицу `.bgMagenta);
    console.table(newContacts);

    return newContacts;
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = { listContacts, getContactById, removeContact, addContact };
