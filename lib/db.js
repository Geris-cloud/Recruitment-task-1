import mysql from 'serverless-mysql';

const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    dateStrings: process.env.dateStrings,
  }
})

export default async function sqlQuery(queryString, values = []) {
  try {
    const results = await db.query(queryString, values);
    await db.end();
    return results
  } catch (err) {
    throw Error(err.message)
  }
}

