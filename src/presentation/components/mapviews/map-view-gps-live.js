import React, { useEffect } from "react";
import MapView, { Polyline, Marker, Circle } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import { watchHeading } from "../../../domain/resources/environment/watch-heading";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { followUserPosition } from "../../../domain/use_cases/follow-user-position";
import { getPositionOnce } from "../../../domain/resources/environment/get-position-once";
import UserSvgComponent from "../svg-components/user-svg";
import PinSvgComponent from "../svg-components/map-pin-svg";

//TODO create button to start directions
//TODO screen doesn't follow curser
//TODO show something that indicates recording is going on

export default function MapViewGPSLive() {
  const { mapStyle } = styles();

  const path = useSelector((state) => state.pathHandler);

  const {
    rawLineData: {
      startingCoordinates: { lat: pointALat, lng: pointALng },
      finishCoordinates: { lat: pointBLat, lng: pointBLng },
    },
  } = useSelector((state) => state.selectedLineDraftHandler);
  const liveCurrentPosition = useSelector(
    (state) => state.watchCurrentPosition
  );
  const pointA = {
    latitude: pointALat,
    longitude: pointALng,
  };

  const pointB = {
    latitude: pointBLat,
    longitude: pointBLng,
  };
  const liveDirection = useSelector((state) => state.watchDirection);

  const {
    latitude: aSingleCurrentPositionLatitude,
    longitude: aSingleCurrentPositionLongitude,
  } = useSelector((state) => state.aSingleCurrentPosition);

  useEffect(() => {
    followUserPosition(pointA);
    getPositionOnce(); //TODO this function bypasses use_cases
    watchHeading(); //TODO this function bypasses use_cases
  }, []);

  return (
    <MapView
      onPress={(e) => {}}
      style={mapStyle}
      mapType={"mutedStandard"}
      liteMode={true}
      initialRegion={{
        latitude: aSingleCurrentPositionLatitude,
        longitude: aSingleCurrentPositionLongitude,
        latitudeDelta: 0.0002,
        longitudeDelta: 0.001,
      }}
    >
      <Marker
        key={90342}
        coordinate={pointB}
        title={"End point"}
        centerOffset={{ x: 0.5, y: -17 }}
      >
        <PinSvgComponent></PinSvgComponent>
      </Marker>
      <Marker
        key={647573}
        flat={true}
        tracksViewChanges={false}
        tracksInfoWindowChanges={false}
        coordinate={liveCurrentPosition}
        title={"You"}
      >
        <View
          style={{
            transform: [
              {
                rotate: `${liveDirection}deg`,
              },
            ],
          }}
        >
          <UserSvgComponent></UserSvgComponent>
        </View>
      </Marker>
      <Circle
        zIndex={0}
        strokeWidth={0.00001}
        fillColor={"rgba(144, 202, 249, 0.2)"}
        center={liveCurrentPosition}
        radius={25}
      ></Circle>
      <Polyline
        style={{
          elevation: 5,
          position: "absolute",
          zIndex: 5,
        }}
        strokeWidth={3}
        coordinates={[pointA, pointB]}
        strokeColor={"white"}
      />

      {path.map((x) => {
        const { id, path, pathColor } = x;

        return (
          <Polyline
            key={id}
            style={{
              position: "absolute",
            }}
            strokeWidth={3}
            coordinates={path}
            strokeColor={pathColor}
          />
        );
      })}
      <Marker
        key={9034232}
        coordinate={pointA}
        title={"Starting point"}
        centerOffset={{ x: 0.5, y: -16 }}
      >
        <PinSvgComponent></PinSvgComponent>
      </Marker>
    </MapView>
  );
}

const styles = () => {
  return StyleSheet.create({
    mapStyle: {
      ...StyleSheet.absoluteFillObject,
    },
  });
};
