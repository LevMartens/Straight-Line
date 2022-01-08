import Storage from "@aws-amplify/storage";

export async function downloadImage(uri) {
  Storage.get(uri)
    .then((result) => {
      return result;
    })
    .catch((err) => console.log(err));
}
