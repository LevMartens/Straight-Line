import { Auth } from "aws-amplify";

export async function getUserDataFromAWS() {
  try {
    const userData = await Auth.currentAuthenticatedUser();
    return {
      error: false,
      message: "Successfully fetched user data",
      userData: userData,
    };
  } catch (e) {
    //setUserLoggedIn(false);
    return { error: true, message: e, userData: {} };
  }

  // return user;

  //const { username } = user;

  //getLineDraftsFor(username);
}
