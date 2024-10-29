import { pool } from './database.js';

const dropTables = async () => {
    try {
        console.log('dropping tables...');
        const dropTablesQuery = `
        DROP TABLE IF EXISTS cats
        `;
        await pool.query(dropTablesQuery);
    } catch (error) {
        console.log(error)
    }
}

const createTables = async () => {
    try {
        console.log('creating cats...');
        const createQuery = `
            CREATE TABLE IF NOT EXISTS cats (
                id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                name TEXT NOT NULL,
                color TEXT NOT NULL,
                human TEXT NOT NULL,
                image TEXT
                 
            );
        `;
        await pool.query(createQuery);
        console.log('created cats');

    } catch (error) {
        console.log(error)
    }
}

const insertData = async () => {
    try {
        console.log('adding initial data...');
        const insertQuery = `
            INSERT INTO cats (name, color, human, image) 
            VALUES 
            ('Whiskers', 'Gray', 'Alice', 'http://example.com/whiskers.jpg'),
            ('Karen', 'Brown', 'John', 'http://example.com/karen.jpg'),
            ('Karen', 'Brown', 'John', 'http://example.com/karen.jpg')
            RETURNING *;
        `;

       

        // Insert the data
        const res = await pool.query(insertQuery);
        console.log('Inserted Cat:', res.rows[0]);
    } catch (error) {
        console.error('Error inserting data:', error);
    }}

const setup = async () => {
    await dropTables();
    await createTables();
    await insertData();
}

setup();
