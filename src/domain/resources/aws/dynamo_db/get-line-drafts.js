import { API, graphqlOperation } from "aws-amplify";
import { listLineDrafts } from "../../../../../graphql/queries";

export async function getLineDraftsFor(owner) {
  try {
    const response = await API.graphql(
      graphqlOperation(listLineDrafts, {
        input: {
          owner: owner,
        },
      })
    );

    //const {data: {pluscodeByDigits: {items: [{level2List:{items}}]}}}

    console.log("TEST: response linedrafts " + JSON.stringify(response));

    //return items;
  } catch (err) {
    console.log(
      "WARNING: No lineDrafts found for " +
        owner +
        " Err: " +
        JSON.stringify(err)
    );
    //return [];
  }
}
