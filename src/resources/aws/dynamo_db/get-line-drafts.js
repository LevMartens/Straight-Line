import { API, graphqlOperation } from "aws-amplify";
import { listLineDrafts } from "../../../../graphql/queries";

export async function getLineDraftsFromDynamoFor(owner) {
  try {
    const response = await API.graphql(
      graphqlOperation(listLineDrafts, {
        input: {
          owner: owner,
        },
      })
    );

    const {
      data: {
        listLineDrafts: { items },
      },
    } = response;

    return items.length === 0
      ? { error: true, message: "No items found in dynamodb", items: items }
      : {
          error: false,
          message: "Line drafts successfully fetched",
          items: items,
        };
  } catch (err) {
    return { error: true, message: err, items: [] };
  }
}
