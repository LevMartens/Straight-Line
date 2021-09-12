import React from "react";
import MapView, { Polyline, Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { StyleSheet } from "react-native";
import {
  mapPressedForFirstPin,
  mapPressedForSecondPin,
} from "../../state-management/actions/actions";
import store from "../../state-management/store/store";
import MarkerSvgComponent from "../svg-components/marker-svg";

export default function MapViewCreateLine({ initialRegion, mapType }) {
  const { mapStyle, markerCenterOffset } = styles();

  const pinState = useSelector((state) => state.createLineStateHandler);
  const firstPinCoordinates = useSelector((state) => state.startMarkerHandler);
  const secondPinCoordinates = useSelector((state) => state.endMarkerHandler);

  const mapPressed = (coordinates) => {
    pinState == "Set starting point" &&
      store.dispatch(mapPressedForFirstPin(coordinates));
    pinState == "Set end point" &&
      store.dispatch(mapPressedForSecondPin(coordinates));
  };

  const startMarkerID = uuidv4();
  const finishMarkerID = uuidv4();

  return (
    <MapView
      onPress={(e) => mapPressed(e.nativeEvent.coordinate)}
      mapType={mapType}
      style={mapStyle}
      initialRegion={initialRegion}
    >
      <Marker
        draggable
        key={finishMarkerID}
        zIndex={1000}
        centerOffset={markerCenterOffset}
        coordinate={secondPinCoordinates}
        title={"Finish"}
        description={"The end point of your straight line"}
      >
        <MarkerSvgComponent></MarkerSvgComponent>
      </Marker>

      <Marker
        draggable
        key={startMarkerID}
        centerOffset={markerCenterOffset}
        zIndex={10000}
        coordinate={firstPinCoordinates}
        title={"Start"}
        description={"The starting point of your straight line"}
      >
        <MarkerSvgComponent></MarkerSvgComponent>
      </Marker>

      <Polyline
        strokeColor={"white"}
        strokeWidth={2}
        coordinates={[firstPinCoordinates, secondPinCoordinates]}
      />
    </MapView>
  );
}

const styles = () => {
  return {
    mapStyle: {
      ...StyleSheet.absoluteFillObject,
    },
    markerCenterOffset: { x: 0.5, y: -12 },
  };
};
