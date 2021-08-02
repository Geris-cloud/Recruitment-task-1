import db from '../../lib/db';

export default async function send(req, res) {
  const id = req.body.id; const nip = req.body.NIP; const regon = req.body.REGON; const name = req.body.NAME; const vat = req.body.VAT; const street = req.body.STREET; const house = req.body.HOUSE; const flat = req.body.FLAT;

  if (req.method === 'POST') {
    try {
      await db('INSERT INTO contractor (NIP, REGON, NAME, VAT, STREET, HOUSE, FLAT) VALUES (?,?,?,?,?,?,?)',
        [nip, regon, name, vat, street, house, flat]);
      return res.json({ message: 'success' });
    } catch (err) {
      return res.json({ message: err.message })
    }
  } else if (req.method === 'PUT') {
    try {
      await db('UPDATE contractor SET NIP = ?, REGON = ?, NAME = ?, VAT = ?, STREET = ?, HOUSE = ?, FLAT = ? WHERE id = ?',
        [nip, regon, name, vat, street, house, flat, id]);
      return res.json({ message: 'success' });
    } catch (err) {
      return res.json({ message: err.message })
    }
  } else {
    return res.json({ message: 'nothing has been uploaded at the moment' })
  }
};