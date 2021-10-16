import { watchPosition } from "../resources/operating_system/watch-position";
import { v4 as uuidv4 } from "uuid";
import store from "../../presentation/state_management/store/store";
import {
  currentPositionUpdate,
  finishLineUpdate,
  updatePath,
} from "../../presentation/state_management/actions/actions";
import { getDistanceBetween } from "../generators/distance-generator";
import { meterFractionGenerator } from "../generators/meter-fraction-generator";
import { getCoordinatesBetween } from "../generators/coordinates-generator";
import { millisecondsToTime } from "../generators/milliseconds-to-time-generator";
import { calculateScore } from "../generators/score-generator";

export async function startProducingPath(startingPoint, endPoint, distance) {
  const startingTime = performance.now();
  let totalTime = 0;
  let allUserDistanceToLine = [];
  const pointA = startingPoint;
  const pointB = endPoint;
  const totalDistance = distance;
  const aMeter = await meterFractionGenerator(distance); // The fraction of the distance that represends a meter
  let persistentPathArray = [];

  const callback = async (location) => {
    var xa = performance.now();
    const {
      coords: { latitude, longitude },
    } = location;

    const currentPosition = {
      latitude: latitude,
      longitude: longitude,
    };

    const distanceToEndPoint = await getDistanceBetween(
      currentPosition,
      pointB
    );

    const measureRegion = totalDistance - distanceToEndPoint;

    let isWithin20m = false;
    let isPlatinum = false;
    let isGold = false;
    let isSilver = false;
    let isBronze = false;
    let isGameOver = false;
    let isFinished = false;

    let array = [];

    var xc = performance.now();

    for (
      let i = -15 + measureRegion;
      i < 15 + measureRegion; //&& isWithin20m === false
      i++
    ) {
      const measurePoint = await getCoordinatesBetween(
        pointA,
        pointB,
        aMeter * i
      );

      const distanceBetweenMeasurePointAndCursor = await getDistanceBetween(
        measurePoint,
        currentPosition
      );

      array.push(distanceBetweenMeasurePointAndCursor);
    }
    var xd = performance.now();
    console.log(`TIME: forloop took ${xd - xc} milliseconds`);

    const userDistanceToLine = Math.min(...array); //using the shortest distance between the user and the line

    console.log("TEST: userdistanceToLine " + userDistanceToLine);

    allUserDistanceToLine.push(userDistanceToLine);

    console.log("TEST: ALLuserdistanceToLine " + allUserDistanceToLine);

    let pathColor = "FFFFFF";
    let band = "Platinum";

    if (distanceToEndPoint <= 10) {
      const endTime = performance.now();
      totalTimeInMs = endTime - startingTime;
      const totalTime = await millisecondsToTime(totalTimeInMs);
      const largestDeviation = Math.max(...allUserDistanceToLine);
      const score = await calculateScore(allUserDistanceToLine, distance);
      isFinished = true;
      console.log(
        "LOG: user finished, totalTime: " +
          totalTime +
          ", largestDeviation: " +
          largestDeviation +
          ", score: " +
          JSON.stringify(score) +
          ", band: " +
          band
      );
      const userFinishedData = {
        userFinished: true,
        score: score,
        largestDeviation: largestDeviation,
        time: totalTime,
        band: band,
      };
      store.dispatch(finishLineUpdate(userFinishedData));
      pathColor = "#90caf9";
    }

    if (userDistanceToLine <= 25) {
      //isPlatinum = true;
      pathColor = "#90caf9";
    }

    if (userDistanceToLine > 25 && userDistanceToLine <= 50) {
      //isGold = true;
      if (band === "Platinum") {
        band = "Gold";
      }
      pathColor = "#fc9c04";
    }

    if (userDistanceToLine > 50 && userDistanceToLine <= 75) {
      //isSilver = true;
      if (band === "Gold") {
        band = "Silver";
      }
      pathColor = "#d3d3d3";
    }

    if (userDistanceToLine > 75 && userDistanceToLine <= 100) {
      //isBronze = true;
      if (band === "Silver") {
        band = "Bronze";
      }
      pathColor = "#cd8032";
    }

    if (userDistanceToLine > 100) {
      const endTime = performance.now();
      totalTime = endTime - startingTime;
      //isGameOver = true;
      if (band === "Bronze") {
        band = "Out of bounce";
      }
      pathColor = "#BE0000";
    }

    let pathArray = [];

    pathArray = persistentPathArray.slice();

    const lastPosition =
      pathArray.length != 0 ? pathArray[pathArray.length - 1].path[1] : pointA;

    pathArray = pathArray.concat([
      {
        id: uuidv4(),
        path: isFinished
          ? [lastPosition, pointB]
          : [lastPosition, currentPosition],
        pathColor: pathColor,
      },
    ]);

    persistentPathArray = pathArray.slice();

    store.dispatch(currentPositionUpdate(currentPosition));
    store.dispatch(updatePath(pathArray));

    var xb = performance.now();
    console.log(`TIME: Total callback took ${xb - xa} milliseconds`);
  };

  watchPosition(callback);
}
