//check email and pass is valid
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
const validatePassword = (password) => {
  if (password.length >= 8) {
    return true;
  }
};

export function validateEmailAndPass(email, password) {
  if (validateEmail(email) && validatePassword(password)) {
    return true;
  } else return false;
}
