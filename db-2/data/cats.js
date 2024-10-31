import { pool } from '../config/database.js';

const getCats = async () => {
    const results = await pool.query('SELECT * FROM cats');
    console.log(results.rows);
    return results.rows;
};

const getCat = async (id) => {
    const results = await pool.query(
        'SELECT * FROM cats WHERE id=$1', [id]
    );
    return results.rows[0];
};

const createCat = async (data) => {
    const { name, color, human, photo } = data;

    // Log to check the incoming data
    console.log('Received data:', { name, color, human, photo });

    try {
        const results = await pool.query(
            'INSERT INTO cats (name, color, human, photo) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, color, human, photo]
        );
        return results.rows[0];
    } catch (error) {
        console.error('Error inserting cat:', error);
        throw error;
    }
};


const updateCat = async (id, data) => {
    const { name, color, human, photo } = data;

    try {
        const results = await pool.query(
            'UPDATE cats SET name=$1, color=$2, human=$3, photo=$4 WHERE id=$5 RETURNING *',
            [name, color, human, photo, id]
        );
        return results.rows[0];
    } catch (error) {
        console.error('Error updating cat:', error);
        throw error;
    }
};

const deleteCat = async (id) => {
    try {
        const results = await pool.query(
            'DELETE FROM cats WHERE id=$1 RETURNING *',
            [id]
        );
        return results.rows[0];
    } catch (error) {
        console.error('Error deleting cat:', error);
        throw error;
    }
};

export { getCats, getCat, createCat, updateCat, deleteCat };
