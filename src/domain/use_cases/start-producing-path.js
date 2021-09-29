import { watchPosition } from "../resources/environment/watch-position";
import { v4 as uuidv4 } from "uuid";
import store from "../../presentation/state-management/store/store";
import {
  currentPositionUpdate,
  finishLineUpdate,
  updatePath,
} from "../../presentation/state-management/actions/actions";
import { getDistanceBetween } from "../generators/distance-generator";
import { meterFractionGenerator } from "../generators/meter-fraction-generator";
import { getCoordinatesBetween } from "../generators/coordinates-generator";

export async function startProducingPath(startingPoint, endPoint, distance) {
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
      //console.log("TEST: array before push " + JSON.stringify(array));
      array.push(distanceBetweenMeasurePointAndCursor);
      //console.log("TEST: array after push " + JSON.stringify(array));

      // if (distanceBetweenMeasurePointAndCursor <= 25) {
      //   isPlatinum = true;
      // }

      // if (distanceBetweenMeasurePointAndCursor > 25 && distanceBetweenMeasurePointAndCursor <= 50) {
      //   isGold = true;
      // }

      // if (distanceBetweenMeasurePointAndCursor > 50 && distanceBetweenMeasurePointAndCursor <= 75) {
      //   isSilver = true;
      // }

      // if (distanceBetweenMeasurePointAndCursor > 75 && distanceBetweenMeasurePointAndCursor <= 100) {
      //   isBronze = true;
      // }

      // if (distanceBetweenMeasurePointAndCursor > 100) {
      //   isGameOver = true;
      // }
    }
    var xd = performance.now();
    console.log(`TIME: forloop took ${xd - xc} milliseconds`);

    const userDistanceToLine = Math.min(...array); //using the shortest distance between the user and the line

    console.log("TEST: userdistanceToLine " + userDistanceToLine);

    let pathColor = "FFFFFF";

    if (distanceToEndPoint <= 10) {
      isFinished = true;
      console.log("TEST: user finished ");
      store.dispatch(finishLineUpdate(true));
      pathColor = "#90caf9";
    }

    if (userDistanceToLine <= 25) {
      isPlatinum = true;
      pathColor = "#90caf9";
    }

    if (userDistanceToLine > 25 && userDistanceToLine <= 50) {
      isGold = true;
      pathColor = "#fc9c04";
    }

    if (userDistanceToLine > 50 && userDistanceToLine <= 75) {
      isSilver = true;
      pathColor = "#d3d3d3";
    }

    if (userDistanceToLine > 75 && userDistanceToLine <= 100) {
      isBronze = true;
      pathColor = "#cd8032";
    }

    if (userDistanceToLine > 100) {
      isGameOver = true;
      pathColor = "#BE0000";
    }

    // if (isPlatinum === true) {
    //   pathColor = "#BE0000"; // Red
    // }

    // if (isWithin20m === true) {
    //   pathColor = "#29BB89"; // Green
    // }
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
