import React from "react";
import MapView, { Polyline, Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { StyleSheet } from "react-native";
import {
  createLineMapViewRefUpdate,
  mapPressedForFirstPin,
  mapPressedForSecondPin,
  createMapHeadingUpdate,
} from "../../state_management/actions/actions";
import store from "../../state_management/store/store";
import MarkerSvgComponent from "../_re-useables/svg_components/marker-svg";
import MarkerEndSvgComponent from "../_re-useables/svg_components/marker-end-svg";

export default function MapViewDetailScreen({ initialRegion }) {
  const { mapStyle, markerCenterOffset } = styles();

  const pinState = useSelector((state) => state.createLineStateHandler);
  const firstPinCoordinates = useSelector((state) => state.startMarkerHandler);
  const secondPinCoordinates = useSelector((state) => state.endMarkerHandler);
  const mapType = useSelector((state) => state.createLineMapTypeHandler);

  const mapPressed = (coordinates) => {
    pinState == "Set starting point" &&
      store.dispatch(mapPressedForFirstPin(coordinates));
    pinState == "Set end point" &&
      store.dispatch(mapPressedForSecondPin(coordinates));
  };

  const startMarkerID = uuidv4();
  const finishMarkerID = uuidv4();

  let mapViewRef;

  return (
    <MapView
      onPress={(e) => mapPressed(e.nativeEvent.coordinate)}
      mapType={mapType}
      ref={(ref) => {
        mapViewRef = ref;

        store.dispatch(createLineMapViewRefUpdate(mapViewRef));
      }}
      onRegionChange={async () => {
        const mapHeading = await mapViewRef.getCamera();
        store.dispatch(createMapHeadingUpdate(mapHeading.heading));
      }}
      style={mapStyle}
      showsCompass={false}
      initialRegion={initialRegion}
    >
      <Marker
        key={finishMarkerID}
        zIndex={1000}
        centerOffset={markerCenterOffset}
        coordinate={secondPinCoordinates}
        title={"Finish"}
        description={"The end point of your straight line"}
      >
        <MarkerEndSvgComponent height={30} width={30}></MarkerEndSvgComponent>
      </Marker>

      <Marker
        key={startMarkerID}
        centerOffset={markerCenterOffset}
        zIndex={10000}
        coordinate={firstPinCoordinates}
        title={"Start"}
        description={"The starting point of your straight line"}
      >
        <MarkerSvgComponent height={30} width={30}></MarkerSvgComponent>
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
    markerCenterOffset: { x: 0.2, y: -11 },
  };
};
