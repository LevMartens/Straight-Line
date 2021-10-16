import { API, graphqlOperation } from "aws-amplify";
import { createLineDrafts } from "../../../../../graphql/mutations";

export async function saveLineDraft(input) {
  try {
    const response = await API.graphql(
      graphqlOperation(createLineDrafts, {
        input: input,
      })
    );

    const {
      data: {
        createLineDrafts: { id },
      },
    } = response;

    const {
      data: { createLineDrafts: lineDrafts },
    } = response;

    return id !== null
      ? {
          isNOTSaved: false,
          data: lineDrafts,
        }
      : {
          isNOTSaved: true,
          data: lineDrafts,
        };
  } catch (err) {
    console.log("ERROR: Error creating Line Draft:", err);
    return { isNOTSaved: true };
  }
}
