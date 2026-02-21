import { EMAIL_REGEX, PASSWORD_REGEX } from "./constants";

const formValidation = (userEmail, userPassword) => {
  const isEmailValid = EMAIL_REGEX.test(userEmail);
  const isPasswordValid = PASSWORD_REGEX.test(userPassword);

  if (!isEmailValid || !isPasswordValid) return "Invalid email or password";

  return null;
};

export default formValidation;
