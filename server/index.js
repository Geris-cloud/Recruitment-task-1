require('dotenv').config();
const mysql = require('mysql');
const config = require('../next.config.js');
const db = mysql.createConnection(config.dbConfig);

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const appGet = (endpoint, table) => {
  app.get(endpoint, (req, res) => {
    db.query(`SELECT * FROM ${table}`,
      (err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.send(results)
        }
      }
    )
  })
}

appGet('/delegation', 'delegation');
appGet('/contractor', 'contractor');

app.post("/send", (req, res) => {
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
});

app.put("/send", (req, res) => {
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
});

app.delete("/del/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM contractor WHERE id = ?", id,
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.send(results);
      }
    });
});

app.listen(process.env.PORT || 3001, () => {
  console.log('running');
})