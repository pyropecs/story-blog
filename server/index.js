import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import { registerUser, userLogin } from "./controllers/index.js";

import { connectToDb } from "./db.js";
import { userLogout } from "./controllers/login.js";
dotenv.config();
const app = express();
const corsOptions = {
  origin: true,
  credentials: true,
};
app.use(cookieParser());
app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));
connectToDb();

app.get("/", (req, res) => {
  res.send("hello world");
});
app.post("/register", registerUser);
app.post("/login", userLogin);
app.get("/logout", userLogout);
// app.get("/blogs", getBlogs);
app.post("/blogs", postBlogs);
app.listen(process.env.PORT_NUMBER, () =>
  console.log(`currently running on port ${process.env.PORT_NUMBER} `)
);
