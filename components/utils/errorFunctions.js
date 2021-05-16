const isEmail = (text) => {
  let error = "";
  const regExEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!regExEmail.exec(text)) {
    error = "Invalid email";
  }
  return { error };
};

const isNumber = (text) => {
  let error = "";
  const regExNumber = /^[0-9+]+$/i;
  if (!regExNumber.exec(text)) {
    error = "Invalid number";
  }
  return { error };
};

module.exports = { isEmail, isNumber };
