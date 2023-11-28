import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  try {
    console.log("Updated the database");

    // Create connection to DB with version to use
    const jateDB = await openDB("jate", 1);

    // Create transaction with specific DB and priviledges
    const tx = jateDB.transaction("jate", "readwrite");

    // Open the object store
    const store = tx.objectStore("jate");

    // Use put to update the database // one field to repeat retrieve and update
    const request = store.put({ id: 1, value: content });

    // request response for result
    const result = await request;
    console.log("Saved to the database", result);
  } catch (error) {
    console.error('putDb not implemented');
  }
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  try {
    console.log("Retrieve database");

    // Create connection to DB with version to use
    const jateDB = await openDB("jate", 1);

    // Create transaction with specific DB and priviledges
    const tx = jateDB.transaction("jate", "readwrite");

    // Open the object store
    const store = tx.objectStore("jate");

    // Use get to retrieve one entry from DB
    const request = store.get(1);

    // request response for result
    const result = await request;
    // IF statement for entry to return it
    result ? console.log("Retrieved from DB", result.value) : console.log("Not retrieved from DB");
    return result?.value;
  } catch (error) {
    console.error('getDb not implemented');
  }
};

initdb();
