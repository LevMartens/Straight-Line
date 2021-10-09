import { forgotPasswordSubmit } from "../resources/backend/auth/forgot-password-submit";
import { signIn } from "../resources/backend/auth/sign-in";

export async function submitNewPassword(username, code, new_password) {
  const { error, successful, message } = await forgotPasswordSubmit(
    username,
    code,
    new_password
  );

  if (successful) {
    return { status: "successful" };
  }

  if (error) {
    const messageLowerCase = message.toLowerCase();
    const usernameType = messageLowerCase.includes("username");
    const passwordType = messageLowerCase.includes("password");
    const codeType = messageLowerCase.includes("code");

    return {
      status: "error",
      type: usernameType
        ? "username"
        : passwordType
        ? "password"
        : codeType
        ? "code"
        : "general",
      message: message,
    };
  }
}
