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
