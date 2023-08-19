import { client } from "../db.js";

export async function addUser(email, hash, token, username) {
  try {
    await client.query(
      "INSERT INTO users(email, username, password, token) values($1,$2,$3,$4)",
      [email, username, hash, token]
    );
  } catch (error) {
    console.log(error);
  }
}

export async function removeUser(email, hash, username) {
  try {
    await client.query("DELETE FROM users WHERE email=$1", [email]);
  } catch (error) {
    console.log(error);
  }
}

export async function checkUserexist(email) {
  const results = await client.query("select * from users WHERE email = $1", [
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

export async function getToken(email) {
  const results = await client.query(
    "select token from users where email = $1",
    [email]
  );
  return results.rows[0];
}
