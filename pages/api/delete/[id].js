import db from '../../../lib/db'

export default async function del(req, res) {
  const id = req.params.id;
  try {
    await db('DELETE FROM contractor WHERE id = ?', id);
    return res.json({ message: 'success' });
  } catch (err) {
    return res.json({ message: err.message })
  }
};