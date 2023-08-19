import { addUser, checkUserexist } from "../models/registerUser.js";
import { generateHashPassword } from "../utils/hashpassword.js";
import { validateEmailAndPass } from "../utils/verifyemailandpass.js";

export async function registerUser(req, res) {
  const body = await req.body;
  const { email, password } = body;
  if (validateEmailAndPass(email, password)) {
    const hash = await generateHashPassword(password);
    const userNotExist = await checkUserexist(email);
    if (userNotExist) {
      addUser(email, hash, res);
      res.sendStatus(201);
    } else
      res.json([
        {
          status: "user already exists",
        },
      ]);
  } else res.sendStatus(400);
}
