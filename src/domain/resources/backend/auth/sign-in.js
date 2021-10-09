import { Auth } from "aws-amplify";

export async function signIn(username, password) {
  try {
    await Auth.signIn(username, password);

    return {
      error: false,
      successful: true,
      message: "successful",
      code: "undefined",
    };
  } catch (error) {
    console.log("ERROR: error signing in", error);
    return {
      error: true,
      successful: false,
      message: error.message,
      code: error.code,
    };
  }
}
