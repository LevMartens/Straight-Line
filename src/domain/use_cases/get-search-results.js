import {
  recentSearchesUpdate,
  searchResultsUpdate,
} from "../../presentation/state_management/actions/actions";
import store from "../../presentation/state_management/store/store";
import { packPublicLineData } from "../helpers/packers";
import { getSearchResultsGraphql } from "../../resources/aws/dynamo_db/get-search-results-graphql";
import { getPlace } from "../../resources/rest_api/get-place";

export async function getSearchResults(text, locationOnly = false) {
  if (text === "") {
    const searchResults = {
      noTextInput: true,
      resultsFound: false,
      noResults: false,
      data: [],
    };
    store.dispatch(searchResultsUpdate(searchResults));
    return;
  }

  if (locationOnly) {
    const response = await getPlace(text);
    return;
  }

  const { error, successful, message, data } = await getSearchResultsGraphql(
    text
  );

  console.log("res " + error, successful, message);

  if (successful) {
    const lineMarkers = await Promise.all(
      data.map(async (rawData) => {
        const lineMarkerData = await packPublicLineData(rawData);
        return lineMarkerData;
      })
    );
    const searchResults = {
      noTextInput: false,
      resultsFound: true,
      noResults: false,
      data: lineMarkers,
    };

    store.dispatch(recentSearchesUpdate(lineMarkers));
    store.dispatch(searchResultsUpdate(searchResults));
  }

  if (error) {
    const searchResults = {
      noTextInput: false,
      resultsFound: false,
      noResult: true,
      data: data,
    };
    store.dispatch(searchResultsUpdate(searchResults));
    console.log("LOG: No results found in search, message: " + message);
  }
}
