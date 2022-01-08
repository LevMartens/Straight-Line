import Auth from "@aws-amplify/auth";
import Storage from "@aws-amplify/storage";

export async function uploadImage(filename, img) {
  Auth.currentCredentials();
  return Storage.put(filename, img, {
    level: "public",
    contentType: "image/jpeg",
  })
    .then((response) => {
      return {
        error: false,
        message: "successful",
        uploadUrl: response.key,
      };
    })
    .catch((error) => {
      return {
        error: true,
        message: error.message,
        uploadUrl: "No url, see error message",
      };
    });
}
