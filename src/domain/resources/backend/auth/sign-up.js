import { Auth } from "aws-amplify";

export async function signUp(username, email, password) {
  console.log("TEST: signup ", username + " " + email + " " + password);
  try {
    await Auth.signUp({
      username,
      password,
      attributes: {
        email,
      },
    });
    return { error: false, message: "successful" };
  } catch (error) {
    console.log("ERROR: error signing up:", error);
    return { error: true, message: error.message };
  }
}
