import { resendConfirmationCode } from "../resources/backend/auth/resend-code";

export async function resendVerificationCode(username) {
  const response = await resendConfirmationCode(username);

  return response;
}
