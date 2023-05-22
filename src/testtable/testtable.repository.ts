import { v4 as uuidv4 } from "uuid";
import pool from "../db";
import { logGetTestData, logPostTestData } from "../log/log";

uuidv4();

export async function getTestData() {
  const getTestDataQuery = `SELECT id,testdata FROM testtable;`;
  const { rows } = await pool.query(getTestDataQuery);
  logGetTestData(rows);
  const responseBody = { testArray: rows };
  return responseBody;
}

export async function postTestData(data: string) {
  const getTestDataQuery = `INSERT INTO testtable (id,testdata) VALUES ($1,$2);`;
  const queryUuid = uuidv4();
  logPostTestData(queryUuid, data);
  const { rows } = await pool.query(getTestDataQuery, [queryUuid, data]);
  return rows;
}
