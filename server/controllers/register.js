import { addUser, checkUserexist } from "../models/registerUser.js";
import {
  generateHashPassword,
  createToken,
  validateEmailAndPass,
} from "../utils/index.js";

export async function registerUser(req, res) {
  const body = await req.body;
  const { username, email, password } = body;
  const maxAge = 70 * 24 * 60 * 60;
  if (validateEmailAndPass(email, password)) {
    const hash = await generateHashPassword(password);
    const userNotExist = await checkUserexist(email);
    console.log(userNotExist);
    if (userNotExist) {
      const token = createToken(email);
      addUser(email, hash, token, username);
      res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.status(201).json({
        status: "user created sucessfully",
      });
    } else
      res.json([
        {
          status: "user already exists",
        },
      ]);
  } else
    res.status(400).json({
      status: "please enter the valid email",
    });
}
