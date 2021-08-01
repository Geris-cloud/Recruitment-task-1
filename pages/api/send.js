import { createConnection } from 'mysql';
import { dbConfig } from '../../next.config.js';
const db = createConnection(dbConfig);

export default function post(req, res) {
  const nip = req.body.NIP; const regon = req.body.REGON; const name = req.body.NAME; const vat = req.body.VAT; const street = req.body.STREET; const house = req.body.HOUSE; const flat = req.body.FLAT;

  db.query("INSERT INTO contractor (NIP, REGON, NAME, VAT, STREET, HOUSE, FLAT) VALUES (?,?,?,?,?,?,?)",
    [nip, regon, name, vat, street, house, flat],
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.send('success');
      }
    }
  );
};

export function put(req, res) {
  const id = req.body.id; const nip = req.body.NIP; const regon = req.body.REGON; const name = req.body.NAME; const vat = req.body.VAT; const street = req.body.STREET; const house = req.body.HOUSE; const flat = req.body.FLAT;

  db.query("UPDATE contractor SET NIP = ?, REGON = ?, NAME = ?, VAT = ?, STREET = ?, HOUSE = ?, FLAT = ? WHERE id = ?",
    [nip, regon, name, vat, street, house, flat, id],
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.send(results);
      }
    }
  );
};