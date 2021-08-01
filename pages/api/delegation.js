// import { createConnection } from 'mysql';
// import { dbConfig } from '../../next.config.js';
// const db = createConnection(dbConfig);
import db from '../../lib/db'

export default async function appGet(_, res) {
  try {
    const results = await db('SELECT * FROM delegation');
    return res.send(results);

  } catch (err) {
    return res.json({ message: err.message })
  }
}