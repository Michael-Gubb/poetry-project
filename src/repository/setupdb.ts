import pool from "../db";

/**
 * Check if poem table exists
 */
export async function checkPoemExists() {
  const checkPoemTableQuery = `SELECT EXISTS (
        SELECT FROM 
            pg_tables
        WHERE 
            schemaname = 'public' AND 
            tablename  = 'poem'
        );`;

  const { rows } = await pool.query(checkPoemTableQuery);
  return rows[0] as boolean;
}

/**
 * Check if test table exists
 */
export async function checkTestTableExists() {
  const checkTestTableQuery = `SELECT EXISTS (
          SELECT FROM 
              pg_tables
          WHERE 
              schemaname = 'public' AND 
              tablename  = 'testtable'
          );`;

  const { rows } = await pool.query(checkTestTableQuery);
  return rows[0] as boolean;
}
/**
 * Creates the poem table in the db.
 */
export async function createPoemTable() {
  const createPoemTableQuery = `CREATE TABLE IF NOT EXISTS 
        poem (
            poem_id uuid PRIMARY KEY,
            poem_text text,
            poem_topics text[],
            poem_genre text,
            poem_img text,
            poem_date text,
            poem_hidden boolean DEFAULT false    
            )`;

  await pool.query(createPoemTableQuery);
}
