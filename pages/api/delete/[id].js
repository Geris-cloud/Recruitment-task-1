import { createConnection } from 'mysql';
import { dbConfig } from '../../../next.config.js';
const db = createConnection(dbConfig);

export default function del(req, res) {
  const id = req.params.id;

  db.query("DELETE FROM contractor WHERE id = ?", id,
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.send(results);
      }
    });
};