import { uploadImage } from "../resources/aws/s3_bucket/upload-image";
import store from "../../presentation/state_management/store/store";
import { imagesUpdate } from "../../presentation/state_management/actions/actions";

export async function uploadImageToLine(imagesArray) {
  const {
    cancelled,
    result: { uri },
  } = await takeImage();

  if (cancelled) {
    return;
  }

  const image = await fetch(uri);
  const binaryImage = await image.blob();
  const { error, message, uploadUrl } = await uploadImage(
    "line-image.jpg",
    binaryImage
  );

  if (error) {
    console.log("ERROR: Uploading image to s3 bucket, ", message);
    return;
  }

  imagesArray.push(uploadUrl);

  store.dispatch(imagesUpdate(imagesArray));
  //Image urls get saved with "FinishedLineMissions" when line is finished.
}
