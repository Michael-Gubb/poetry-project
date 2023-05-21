import pg from "pg";

const pool = new pg.Pool();

export async function getTime() {
  const { rows } = await pool.query("SELECT NOW()");
  return rows[0].now as string;
}
