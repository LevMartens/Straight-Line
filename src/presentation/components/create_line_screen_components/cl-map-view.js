import React from "react";
import MapView, { Polyline, Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { StyleSheet } from "react-native";
import {
  createLineMapViewRefUpdate,
  createMapHeadingUpdate,
  setMarkerStartingPoint,
  setMarkerEndPoint,
} from "../../state_management/actions/actions";
import store from "../../state_management/store/store";
import MarkerSvgComponent from "../_re-useables/svg_components/marker-svg";
import MarkerEndSvgComponent from "../_re-useables/svg_components/marker-end-svg";

export default function MapViewCreateLine() {
  const { mapStyle, markerCenterOffset } = styles();

  const { onSelected, coordinatesStartingPoint, coordinatesEndPoint } =
    useSelector((state) => state.markerPlacementHandler);

  const mapType = useSelector((state) => state.createLineMapTypeHandler);

  const { aSingleCurrentPosition } = useSelector(
    (state) => state.locationHandler
  );

  const mapPressed = (coordinates) => {
    onSelected === "READY_TO_SET_MARKER_STARTING_POINT" &&
      store.dispatch(setMarkerStartingPoint(coordinates));
    onSelected === "READY_TO_SET_MARKER_END_POINT" &&
      store.dispatch(setMarkerEndPoint(coordinates));
  };

  const startMarkerID = uuidv4();
  const finishMarkerID = uuidv4();

  let mapViewRef;

  const initialCamera = {
    center: aSingleCurrentPosition,
    pitch: 50,
    heading: 0.0,
    altitude: 15000,
    zoom: 40,
  };

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
      initialCamera={initialCamera}
    >
      <Marker
        key={finishMarkerID}
        zIndex={1000}
        centerOffset={markerCenterOffset}
        coordinate={coordinatesEndPoint}
        title={"Finish"}
        description={"The end point of your straight line"}
      >
        <MarkerEndSvgComponent height={30} width={30}></MarkerEndSvgComponent>
      </Marker>

      <Marker
        key={startMarkerID}
        centerOffset={markerCenterOffset}
        zIndex={10000}
        coordinate={coordinatesStartingPoint}
        title={"Start"}
        description={"The starting point of your straight line"}
      >
        <MarkerSvgComponent height={30} width={30}></MarkerSvgComponent>
      </Marker>

      <Polyline
        strokeColor={"white"}
        strokeWidth={2}
        coordinates={[coordinatesStartingPoint, coordinatesEndPoint]}
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
