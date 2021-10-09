import { signIn } from "../resources/backend/auth/sign-in";

export async function signInUser(username, password) {
  const { error, successful, message, code } = await signIn(username, password);

  if (successful) {
    return { status: "successful" };
  }

  if (code === "UserNotConfirmedException") {
    return { status: "not confirmed" };
  }

  if (error) {
    const messageLowerCase = message.toLowerCase();
    const usernameType = messageLowerCase.includes("username");
    const userType = messageLowerCase.includes("usern");
    const passwordType = messageLowerCase.includes("password");

    return {
      status: "error",
      type: userType
        ? "username"
        : usernameType
        ? "username"
        : passwordType
        ? "password"
        : "general",
      message: message,
    };
  }
}
