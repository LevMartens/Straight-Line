import { confirmSignUp } from "../resources/aws/auth/confirm-sign-up";

export async function verifyUser(username, code) {
  const { error, message } = await confirmSignUp(username, code);

  if (!error) {
    console.log("TEST: EEEEE");
    return { status: "successful" };
  } else {
    console.log("TEST: TTTTTTT ", message);
    return {
      status: "error",
      message: message,
    };
  }
}
