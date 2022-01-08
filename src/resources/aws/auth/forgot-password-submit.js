import { Auth } from "aws-amplify";

export async function forgotPasswordSubmit(username, code, new_password) {
  try {
    await Auth.forgotPasswordSubmit(username, code, new_password);

    return { error: false, successful: true, message: "successful" };
  } catch (err) {
    console.log("ERROR: error sending forgot password code: ", err);
    return { error: true, successful: false, message: err.message };
  }
}
