import pool from "../db";
import { v4 as uuidv4 } from "uuid";
uuidv4();

export async function getTestData() {
  const getTestDataQuery = `SELECT id,testdata FROM testtable;`;
  const { rows } = await pool.query(getTestDataQuery);
  return rows[0] as Array<[string, string]>;
}

export async function postTestData(data: string) {
  const getTestDataQuery = `INSERT INTO testtable (id,testdata) VALUES ($1,$2);`;
  const queryUuid = uuidv4();
  const results = await pool.query(getTestDataQuery, [queryUuid, data]);
  console.log(results.rows);
}
