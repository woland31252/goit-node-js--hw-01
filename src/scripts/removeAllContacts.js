import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
        try {
        await fs.writeFile(PATH_DB, '[]', 'utf-8');
        const data = await fs.readFile(PATH_DB, 'utf-8');
        let newData = JSON.parse(data);
        if (newData.length === 0) {
          console.log('All data has been deleted');
        } else {
          console.log('The data was not deleted');
        }      
    } catch (error) {
      console.error('Error: Unable to read file "db.json"', error);
    }
};

await removeAllContacts();
