import { API, graphqlOperation } from "aws-amplify";
import { createPath } from "../../../../../graphql/mutations";

export async function createGraphQLPathType(pointAID, pointBID, pathColor) {
  try {
    const response = await API.graphql(
      graphqlOperation(createPath, {
        input: {
          pathPointAId: pointAID,
          pathPointBId: pointBID,
          pathColor: pathColor,
        },
      })
    );

    const {
      data: {
        createPath: { id },
      },
    } = response;

    console.log("TEST: GraphQL Path type id: ", id);

    return id;
  } catch (err) {
    console.log("ERROR: creating GraphQL Path type:", err);
    return "No ID";
  }
}
