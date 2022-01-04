import { getLineDraftsFromDynamoFor } from "../resources/aws/dynamo_db/get-line-drafts";

export async function getLineDraftsFor(owner) {
  const { error, message, items } = await getLineDraftsFromDynamoFor(owner);

  if (error) {
    console.log(
      "ERROR: Error fetching line drafts for owner",
      message,
      "source: get-line-drafts-for-owner.js"
    );
    return { successfull: false, items: [] };
  }

  if (!error) {
    console.log("LOG:", message, "source: get-line-drafts-for-owner.js");
    return { successful: true, items: items };
  }
}
