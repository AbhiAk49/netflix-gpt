export const checkLoginData = (email, password) => {
  if (!email || email.length === 0) return "Email is required";
  if (!password || password.length === 0) return "Password is required";
  const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );
  //https://uibakery.io/regex-library/password
  if (!isEmailValid) return "Invalid email address";
  if (!isPasswordValid) return "Please provide a stronger password";
  return null;
};

export const checkSignUpData = (fullname, email, password) => {
  if (!fullname || fullname.length === 0) return "Please enter your full name";
  if (fullname.length < 5 || fullname.length > 50)
    return "Full name should be 5 - 50 characters long";
  return checkLoginData(email, password);
};
