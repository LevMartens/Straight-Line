import { API, graphqlOperation } from "aws-amplify";
import { updatePlusCodeLevel2 } from "../../../../../graphql/mutations";

export async function increaseNumberOfLinesInPluscodeLvl2By(
  count,
  id,
  currentNumberOfLines
) {
  try {
    await API.graphql(
      graphqlOperation(updatePlusCodeLevel2, {
        input: {
          id: id,
          numberOfLines: currentNumberOfLines + count,
        },
      })
    );
  } catch (err) {
    console.log("ERROR: Error updating numberOfLines in pluscode lvl 2 ");
  }
}
