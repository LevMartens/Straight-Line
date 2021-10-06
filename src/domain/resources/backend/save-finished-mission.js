import { API, graphqlOperation } from "aws-amplify";
import { createFinishedMission } from "../../../../graphql/mutations";

export async function saveFinishedMission(input) {
  try {
    const response = await API.graphql(
      graphqlOperation(createFinishedMission, {
        input: input,
      })
    );

    const {
      data: {
        createFinishedMission: { id },
      },
    } = response;

    console.log("TEST: Finished Mission id: ", id);

    return { isNOTSaved: false, id: id };
  } catch (err) {
    console.log("ERROR: Error creating Finished Mission:", err);
    return { isNOTSaved: true };
  }
}
