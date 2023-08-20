import { client } from "../db";
//get the some blogs from database and send it to the client.as requested mentioned constraint
//get the all blogs from database and send it to the client

export const getAllBlogs = async () => {
  const results = await client.query("SELECT * from blogs LIMIT 20");
  return results.rows;
};

export const getBlogs = async (searchContent) => {
  const results = await client.query(
    "SELECT * FROM blogs WHERE content LIKE $1% ",
    [searchContent]
  );
  return results.rows;
};
