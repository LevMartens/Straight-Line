import React from "react";
import MapView, { Polyline } from "react-native-maps";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export default function MapViewLineReview({ initialRegion }) {
  const { mapStyle } = styles();

  const path = useSelector((state) => state.pathHandler);

  const {
    selectedLineDraft: {
      rawLineData: {
        startingCoordinates: { lat: pointALat, lng: pointALng },
        finishCoordinates: { lat: pointBLat, lng: pointBLng },
      },
    },
  } = useSelector((state) => state.lineDataHandler);

  const pointA = {
    latitude: pointALat,
    longitude: pointALng,
  };

  const pointB = {
    latitude: pointBLat,
    longitude: pointBLng,
  };

  return (
    <MapView
      onPress={(e) => {}}
      style={mapStyle}
      mapType={"satellite"}
      liteMode={true}
      initialRegion={initialRegion}
    >
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
