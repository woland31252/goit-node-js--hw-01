import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const countContacts = async () => {
    try {
      const data = await fs.readFile(PATH_DB, 'utf-8');
        const dbContacts = JSON.parse(data);
        return dbContacts;
    } catch (error) {
        console.error('Error: Unable to read file "db.json"', error);
    }
};

console.log(await countContacts());
