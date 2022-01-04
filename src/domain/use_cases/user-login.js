import { signIn } from "../resources/aws/auth/sign-in";

export async function signInUser(username, password) {
  const { error, successful, message, code } = await signIn(username, password);

  if (successful) {
    console.log("LOG:", message);
    return { status: "successful" };
  }

  if (code === "UserNotConfirmedException") {
    console.log("ERROR:", code, message);
    return { status: "not confirmed" };
  }

  if (error) {
    console.log("ERROR:", message);

    const messageLowerCase = message.toLowerCase();
    const usernameType = messageLowerCase.includes("username");
    const userType = messageLowerCase.includes("user");
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
