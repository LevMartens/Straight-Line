import { Auth } from "aws-amplify";

export async function resendConfirmationCode(username) {
  try {
    await Auth.resendSignUp(username);
    return { error: false, successful: true, message: "successful" };
  } catch (err) {
    console.log("ERROR: error resending code: ", err);
    return { error: true, successful: false, message: err.message };
  }
}
