import {
  recentSearchesUpdate,
  searchResultsUpdate,
} from "../../presentation/state-management/actions/actions";
import store from "../../presentation/state-management/store/store";
import { packPublicLineData } from "../helpers/packers";
import { getSearchResultsGraphql } from "../resources/backend/get-search-results-graphql";

export async function getSearchResults(text) {
  console.log("TEST: text: " + text);
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
