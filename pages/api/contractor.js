import { createConnection } from 'mysql';
import { dbConfig } from '../../next.config.js';
const db = createConnection(dbConfig);

export default function appGet(req, res) {
  db.query(`SELECT * FROM contractor`,
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.send(results)
      }
    }
  )
}
