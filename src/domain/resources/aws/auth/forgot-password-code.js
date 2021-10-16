import { Auth } from "aws-amplify";

export async function forgotPasswordCode(username) {
  try {
    await Auth.forgotPassword(username);

    return { error: false, successful: true, message: "successful" };
  } catch (err) {
    console.log("ERROR: error sending forgot password code: ", err);
    return { error: true, successful: false, message: err.message };
  }
}
