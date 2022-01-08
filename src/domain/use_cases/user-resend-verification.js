import { resendConfirmationCode } from "../../resources/aws/auth/resend-code";

export async function resendVerificationCode(username) {
  const response = await resendConfirmationCode(username);

  return response;
}
