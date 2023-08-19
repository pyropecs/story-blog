import bcrypt from "bcrypt";
export function generateHashPassword(password) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      try {
        resolve(hash);
      } catch (error) {
        reject(err);
      }
    });
  });
}
