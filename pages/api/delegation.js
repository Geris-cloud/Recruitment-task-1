import db from '../../lib/db'

export default async function delegationGet(_, res) {
  try {
    const results = await db('SELECT * FROM delegation');
    return res.send(results);
  } catch (err) {
    return res.json({ message: err.message })
  }
}