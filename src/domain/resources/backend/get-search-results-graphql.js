import { API, graphqlOperation } from "aws-amplify";
import { searchLines } from "../../../../graphql/queries";

export async function getSearchResultsGraphql(text) {
  try {
    const response = await API.graphql(
      graphqlOperation(searchLines, {
        filter: {
          title: { matchPhrasePrefix: text },
        },
      })
    );

    const result = response.data.searchLines.items;
    return result.length === 0
      ? {
          error: true,
          successful: false,
          message: "No results for this input",
          data: [],
        }
      : {
          error: false,
          successful: true,
          message: "successful",
          data: response.data.searchLines.items,
        };
  } catch (err) {
    console.log(
      "WARNING: No lines found with searchLines " +
        " Err: " +
        JSON.stringify(err)
    );
    return {
      error: true,
      successful: false,
      message: err.data.message,
      data: [],
    };
  }
}
