import React from "react";
import MapView, { Polyline, Marker, Circle } from "react-native-maps";
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
      {/* <Circle
        //zIndex={1000}
        strokeWidth={3} //2
        strokeColor={"#fb8c04"} //{"#fc3e08"} //{"#2494f4"} //{"#fc3e08"} //{"#fb8c04"} //{"#313131"}
        fillColor={"#fff"} //{"#313131"} //{"#2494f4"} //{"#fff"} //{"#fc3c04"} //rgba(144, 202, 249, 0.2)rgba(252, 156, 4, 0.2)
        center={firstPinCoordinates}
        radius={240}
      ></Circle>
      <Circle
        //zIndex={1000}
        strokeWidth={3} //2
        strokeColor={"#fb8c04"} //{"#2494f4"} //{"#fc3e08"} //{"#fb8c04"} //"#313131"}
        fillColor={"#fff"} //{"#313131"} //{"#2494f4"} //{"#fff"} //{"#fc3c04"} //rgba(144, 202, 249, 0.2)rgba(252, 156, 4, 0.2)
        center={secondPinCoordinates}
        radius={240}
      ></Circle> */}
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
    markerCenterOffset: { x: 0.2, y: -11 }, //{ x: 0.5, y: -12 },
  };
};
