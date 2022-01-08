import { Auth } from "aws-amplify";

export async function confirmSignUp(username, code) {
  try {
    await Auth.confirmSignUp(username, code);
    return { error: false, message: "successful" };
  } catch (error) {
    console.log("ERROR: error confirming sign up", error);

    return { error: true, message: error.message };
  }
}
