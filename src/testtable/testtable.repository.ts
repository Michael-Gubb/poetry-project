import pool from "../db";

export async function getTestData() {
  const getTestDataQuery = `SELECT id,testdata FROM testtable`;
  const { rows } = await pool.query(getTestDataQuery);
  return rows[0] as Array<[string, string]>;
}
