function isValidEmail(email) {
  const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexEmail.test(String(email).toLowerCase());
}

function isValidPassword(pass) {
  if (pass.length < 6) return false;
  const regexLetter = /[A-Z]/;
  const regexNumber = /[0-9]/;
  const result = regexLetter.test(pass) && regexNumber.test(pass);
  return result;
}

export { isValidEmail, isValidPassword };
