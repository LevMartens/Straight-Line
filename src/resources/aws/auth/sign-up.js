import { Auth } from "aws-amplify";

export async function signUp(username, email, password) {
  try {
    await Auth.signUp({
      username,
      password,
      attributes: {
        email,
      },
    });
    return { error: false, message: "User successfully signed up" };
  } catch (error) {
    return { error: true, message: error.message };
  }
}
