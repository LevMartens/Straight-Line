import React, { useEffect, useState } from "react";
import { userDataUpdate } from "../../presentation/state_management/actions/actions";
import { getUserDataFromAWS } from "../resources/aws/auth/get-user-data";
import store from "../../presentation/state_management/store/store";

export async function getUserData() {
  const { error, message, userData } = await getUserDataFromAWS();

  if (error) {
    console.log("ERROR:", message);
    return;
  }

  if (!error) {
    console.log("LOG:", message, "for", userData.username);
    store.dispatch(userDataUpdate({ userLoggedIn: true, userData: userData }));
  }

  // return user;

  //const { username } = user;

  //getLineDraftsFor(username);
}
