import pg from "pg";

/** Pool used throughout server code */
const pool = new pg.Pool();

export default pool;
