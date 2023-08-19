import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import { registerUser, userLogin } from "./routes/index.js";

import { connectToDb } from "./db.js";
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

app.listen(process.env.PORT_NUMBER, () =>
  console.log(`currently running on port ${process.env.PORT_NUMBER} `)
);
