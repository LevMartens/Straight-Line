import { API, graphqlOperation } from "aws-amplify";
import { pluscode2ByCompletePluscode } from "../../../../../graphql/queries";

//TODO: destructering test paused, waiting for lines to fetch

export async function getAllLvl3UnderLvl2(param) {
  try {
    const response = await API.graphql(
      graphqlOperation(pluscode2ByCompletePluscode, {
        completePluscode: param.withThisLvl2Pluscode,
      })
    );

    const items =
      response.data.pluscode2ByCompletePluscode.items[0].level3List.items;

    //TO REMOVE
    //  console.log(
    //   "TEST: DD ITEMS " +
    //     JSON.stringify(items) +
    //     "                RESPONSE:            " +
    //     JSON.stringify(response) +
    //     " source: get-all-lvl-3-under-lvl-2.js"
    // );

    return items; //=== undefined ? [] : items;
  } catch (err) {
    console.log("WARNING: No lvl 3 under lvl 2 ", err.message);
    return [];
  }
}
