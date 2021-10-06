export async function calculateScore(allUserDistanceToLine, distance) {
  let score = 100;

  const penaltyArray = await Promise.all(
    allUserDistanceToLine.map((deviation) => {
      const penaltyPoints = 100 * Math.pow(deviation / 150, Math.log(distance));
      //score = score - penaltyPoints;

      return penaltyPoints;
    })
  );

  await Promise.all(
    penaltyArray.map((penalty) => {
      score = score - penalty;
      console.log("TEST: penalty: " + penalty + " score: " + score);
    })
  );

  //const totalPenaltyPoints = penaltyArray.reduce((a, b) => a + b, 0);

  //const score = 100 - totalPenaltyPoints;

  return score.toFixed(2);
}
