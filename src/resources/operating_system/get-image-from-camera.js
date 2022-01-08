import * as ImagePicker from "expo-image-picker";

export async function takeImage() {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: "Images",
    aspect: [4, 3],
    quality: 1,
  });

  return result.cancelled
    ? { cancelled: true, result: { uri: "no uri" } }
    : { cancelled: false, result: result };
}
