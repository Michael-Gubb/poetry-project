import { v4 as uuidv4 } from "uuid";
import pool from "../db";

/**
 * Returns the contents of poem table
 */
export async function getPoems() {
  const getPoemsQuery = `SELECT * FROM poem;`;
  const { rows } = await pool.query(getPoemsQuery);
  return rows as Poem[];
}
/**
 * Inserts into testtable the provided data with a newly generated UUID primary key
 * @param data {string} data to insert into new row
 */
export async function postPoem(
  poemText: string,
  poemTopics: string[],
  poemGenre: string
) {
  const getTestDataQuery = `INSERT INTO poem (poem_id,poem_text,poem_topics,poem_date,poem_genre) VALUES ($1,$2,$3,$4,$5);`;
  const queryUuid = uuidv4();
  const currentDate = new Date();
  const currentDateString = currentDate.toLocaleString("en-GB", {
    timeZone: `Pacific/Auckland`,
  });
  //logPostTestData(queryUuid, data);
  const { rows } = await pool.query(getTestDataQuery, [
    queryUuid,
    poemText,
    poemTopics,
    currentDateString,
    poemGenre,
  ]);
  return rows;
}
