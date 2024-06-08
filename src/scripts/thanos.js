import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const thanos = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    let dbContacts = JSON.parse(data);
    dbContacts = dbContacts.filter(() => Math.random() < 0.5);
    await fs.writeFile(PATH_DB, JSON.stringify(dbContacts, null, 4), 'utf-8');
  } catch (error) {
    console.error('Error handling db.json:', error);
  }
};

await thanos();
