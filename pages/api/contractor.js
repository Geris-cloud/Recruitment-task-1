import db from '../../lib/db'

export default async function contractorGet(_, res) {
  try {
    const results = await db('SELECT * FROM contractor');
    return res.send(results);
  } catch (err) {
    return res.json({ message: err.message })
  }
}
