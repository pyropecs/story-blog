import jwt from "jsonwebtoken";

const maxAge = 70 * 24 * 60 * 60;
export const createToken = (email) => {
  return jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};
