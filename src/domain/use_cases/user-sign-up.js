import { signUp } from "../resources/aws/auth/sign-up";

export async function signUpUser(username, email, password) {
  const { error, message } = await signUp(username, email, password);

  if (!error) {
    console.log("LOG:", message);
    return { status: "successful" };
  } else {
    const messageLowerCase = message.toLowerCase();
    const emailType = messageLowerCase.includes("email");
    const usernameType = messageLowerCase.includes("username");
    const passwordType = messageLowerCase.includes("password");

    console.log("ERROR:", message);

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
