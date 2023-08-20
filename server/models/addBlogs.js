//aaa the blog in database
import { client } from "../db.js";
export const addBlogs = async (username, content, rating) => {
  try {
    const results = await client.query(
      "INSERT INTO blogs(username,content,rating) VALUES($1,$2,$3)",
      [username, content, rating]
    );
    return "added sucessfully";
  } catch (err) {
    console.log(error);
  }
};

export const updateBlogs = async (content, rating) => {
  const results = await client.query("UPDATE blogs SET content=$1", [content]);
};

export const deleteBlogs = async (content, username, rating) => {
  const result = await client.query("DELETE from blogs WHERE id=$1", [
    username,
  ]);
};
