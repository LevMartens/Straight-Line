import { useColorScheme } from "react-native";

export function getTheme() {
  const themeMode = useColorScheme();
  return themeMode == "light" ? lightTheme : darkTheme;
}

export const lightTheme = {
  primaryColor: "#1f1f1f", //"#284538",
  buttonColor: "#fc9c04", //"#fb8c04", //"#c84b31",
  secondaryColor: "#313131", //"#284538",
  backgroundColor: "#284538",
  tertiaryColor: "#64834c", //"#323232",
  polylineColor: "#fff5eb",
  textColor: "#fff5eb",
  textColorTerms: "#CDCDCD",
  textColorError: "red",
  fontFamily: "Urbanist-SemiBold",
  fontThin: "Urbanist-Medium",
  secFontFamily: "Urbanist-Light",
  bannerTextColor: "#ffffff",
  bannerBackgroundColor: "#1f1f1f", //"black",
  containerBackgroundColor: "#2C394B",
  colorFocused: "#fb8c04", //"white",
  colorUnFocused: "white",
};

export const darkTheme = {
  primaryColor: "#1f1f1f", //"#284538",
  buttonColor: "#fc9c04", //"#fb8c04", //"#fc9c04", //"#fb8c04", //"#c84b31",//"#548c33",
  secondaryColor: "#313131", //"#284538",
  backgroundColor: "#284538",
  tertiaryColor: "#64834c", //"#323232",
  polylineColor: "#fff5eb",
  textColor: "#fff5eb",
  textColorTerms: "#CDCDCD",
  textColorError: "red",
  fontFamily: "Urbanist-SemiBold",
  fontThin: "Urbanist-Medium",
  secFontFamily: "Urbanist-Light",
  bannerTextColor: "#ffffff",
  bannerBackgroundColor: "#1f1f1f", //"black",
  containerBackgroundColor: "#1f1f1f", //"#2C394B",
  colorFocused: "#fc9c04", //"#fb8c04", //"white", //"#548c33",
  colorUnFocused: "white",
};
