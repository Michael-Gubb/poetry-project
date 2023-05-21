import pool from "../db";

export async function getTime() {
  const { rows } = await pool.query("SELECT NOW()");
  return rows[0].now as string;
}
