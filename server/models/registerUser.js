import { client } from "../db.js";

export async function addUser(email, hash) {
  try {
    await client.query("INSERT INTO users(email,password) values($1,$2)", [
      email,
      hash,
    ]);
  } catch (error) {
    console.log(error);
  }
}

export async function checkUserexist(email) {
  const results = await client.query("select * from users WHERE email = $1 ", [
    email,
  ]);

  if (results.rows[0]) {
    return false;
  } else {
    return true;
  }
}
export async function getUser(email) {
  const results = await client.query("select * from users WHERE email = $1 ", [
    email,
  ]);
  return results.rows[0];
}
