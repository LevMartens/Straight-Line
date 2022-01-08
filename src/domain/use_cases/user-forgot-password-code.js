import { forgotPasswordCode } from "../../resources/aws/auth/forgot-password-code";

export async function sendForgotPasswordCode(username) {
  const { error, successful, message } = await forgotPasswordCode(username);

  if (successful) {
    return { status: "successful" };
  }

  if (error) {
    return {
      status: "error",
      message: message,
    };
  }
}
