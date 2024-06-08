import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const dbContacts = JSON.parse(data);

    for (let i = 0; i < number; i += 1) {
        dbContacts.push(createFakeContact());
    }
    await fs.writeFile(PATH_DB, JSON.stringify(dbContacts, null, 4), 'utf-8');
    console.log('length dbContacts: ', dbContacts.length);
  } catch (error) {
    console.error('Error handling db.json:', error);
  }
};

await generateContacts(5);
