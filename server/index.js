import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();
const corsOptions = {
  origin: true,
  credentials: true,
};
app.use(express.json());
app.use(cors(corsOptions));
app.use(urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("hello world");
  a;
});

app.listen(process.env.PORT_NUMBER, () =>
  console.log(`currently running on port ${process.env.PORT_NUMBER} `)
);
