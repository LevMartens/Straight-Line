import { signUp } from "../resources/backend/auth/sign-up";

export async function signUpUser(username, email, password) {
  const { error, message } = await signUp(username, email, password);

  if (!error) {
    return { status: "successful" };
  } else {
    const messageLowerCase = message.toLowerCase();
    const emailType = messageLowerCase.includes("email");
    const usernameType = messageLowerCase.includes("username");
    const passwordType = messageLowerCase.includes("password");

    return {
      status: "error",
      type: emailType
        ? "email"
        : usernameType
        ? "username"
        : passwordType
        ? "password"
        : "general",
      message: message,
    };
  }
}
