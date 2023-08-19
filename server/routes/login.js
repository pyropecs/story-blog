import bcrypt from "bcrypt";
import { getUser } from "../models/registerUser.js";

export async function userLogin(req, res) {
  const { email: clientEmail, password: clientPassword } = req.body;
  const user = await getUser(clientEmail);
  const { email, password } = user;

  const passWordMatch = await bcrypt.compare(clientPassword, password);
  if (passWordMatch) {
    res.sendStatus(200).json({
      status: "password successfully matched",
    });
  } else {
    res.sendStatus(400).json({
      status: "password is incorrect",
    });
  }
}
