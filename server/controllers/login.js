import bcrypt from "bcrypt";
import { getToken, getUser } from "../models/registerUser.js";

const maxAge = 10 * 24 * 60 * 60;
export async function userLogin(req, res) {
  const { email: clientEmail, password: clientPassword } = await req.body;

  const user = await getUser(clientEmail);
  console.log(user);
  const { email, password } = user;

  const passWordMatch = await bcrypt.compare(clientPassword, password);
  if (passWordMatch) {
    const token = getToken(email);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.json({
      status: "password successfully matched",
    });
  } else {
    res.json({
      status: "password is incorrect",
    });
  }
}

export async function userLogout() {
  res.cookie("jwt", "", { httpOnly: true, maxAge: maxAge * 1000 });
}
