import { apiKey } from "../../../api-key";

export async function getPlace(textInput, myLocation) {
  const Melbourne = {
    latitude: -37.840935,
    longitude: 144.946457,
  };
  const { latitude, longitude } = Melbourne; //myLocation
  const response = await fetch(
    //`https://maps.googleapis.com/maps/api/place/queryautocomplete/json?input=${textInput}&location=${latitude}%${longitude}&key=${apiKey}`,
    //`https://maps.googleapis.com/maps/api/place/queryautocomplete/json?input=pizza%20near%20par&key=${apiKey}`,
    //`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=amoeba&types=establishment&location=37.76999%2C-122.44696&radius=500&key=${apiKey}`,
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Paris&types=geocode&key=${apiKey}`,
    {}
  );

  const data = await response.json();

  console.log("TEST: place response ", data);
  // const {
  //   plus_code: { global_code },
  // } = await response.json();

  // if (global_code == null) {
  //   console.log(
  //     "ERROR: Something went wrong fetching pluscodes with coordinates. source: get-pluscode.js"
  //   );
  // }
  //return global_code;
}
