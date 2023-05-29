import pool from "../db";

/** Returns current time in DB using SELECT NOW() */
export async function getTime() {
  const { rows } = await pool.query("SELECT NOW();");
  return rows[0].now as string;
}
