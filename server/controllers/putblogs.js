//update the required blog in database
//delete the required blog in database

import { addBlogs } from "../models/addBlogs";

export const postBlogs = async (req, res) => {
  const { username, content, rating } = await req.body;

  const result = await addBlogs(username, content, rating);
  if (result == "added sucessfully") {
    res.json({
      status: "blog added sucessfully",
    });
  }
};

export const putBlogs = async (content, username, rating) => {
  const results = await updateBlogs(content, username, rating);
};

export const deleteBlogs = async (content, username, title) => {
  const results = await deleteBlogs(content, username, rating);
};
