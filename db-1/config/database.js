import pg from 'pg';
import dotenv from 'dotenv'
const { Pool } = pg; 

dotenv.config()

// Configuration for the pool
const config = {
  connectionString : process.env.CONNECTION_STRING
};

// Create a new pool instance
const pool = new Pool(config); // pg.pool


export { pool };
