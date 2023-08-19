import pkg from "pg";
const { Client } = pkg;
export const client = new Client({
  host: "localhost",
  port: "5432",
  user: "postgres",
  database: "storyblog2",
  password: "12345",
});
export async function connectToDb() {
  try {
    const connect = await client.connect();
    console.log("connected to db sucessfully");
  } catch (error) {
    console.log(error);
  }
}
