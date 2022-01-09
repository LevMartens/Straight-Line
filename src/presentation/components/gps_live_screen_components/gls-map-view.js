import React, { useEffect } from "react";
import MapView, { Polyline, Marker, Circle } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { followUserPosition } from "../../../domain/use_cases/follow-user-position";
import { getPositionOnce } from "../../../resources/operating_system/get-position-once";
import UserSvgComponent from "../_re-useables/svg_components/user-svg";
import PinSvgComponent from "../_re-useables/svg_components/map-pin-svg";
import { getTheme } from "../../theme/themes";
import { SCREEN_WIDTH } from "../../../resources/operating_system/dimensions";
import store from "../../state_management/store/store";
import { gpsLiveMapViewRefUpdate } from "../../state_management/actions/actions";

//TODO show something that indicates recording is going on

export default function MapViewGPSLive() {
  const { mapStyle } = styles();

  const path = useSelector((state) => state.pathHandler);

  // const {
  //   rawLineData: {
  //     startingCoordinates: { lat: pointALat, lng: pointALng },
  //     finishCoordinates: { lat: pointBLat, lng: pointBLng },
  //   },
  // } = useSelector((state) => state.selectedLineDraftHandler);

  const {
    selectedLineDraft: {
      rawLineData: {
        startingCoordinates: { lat: pointALat, lng: pointALng },
        finishCoordinates: { lat: pointBLat, lng: pointBLng },
      },
    },
  } = useSelector((state) => state.lineDataHandler);

  const { watchCurrentPosition, aSingleCurrentPosition } = useSelector(
    (state) => state.locationHandler
  );

  const pointA = {
    latitude: pointALat,
    longitude: pointALng,
  };

  const pointB = {
    latitude: pointBLat,
    longitude: pointBLng,
  };

  const mapType = useSelector((state) => state.gpsLiveMapTypeHandler);

  const { radiusForBounds, circleColor } = useSelector(
    (state) => state.radiusForBoundsHandler
  );

  let mapViewRef;

  const initialCamera = {
    center: aSingleCurrentPosition,
    pitch: 50,
    heading: 0.0,
    altitude: 5000,
    zoom: 40,
  };

  useEffect(() => {
    getPositionOnce(); //TODO this function bypasses use_cases

    if (mapViewRef) {
      followUserPosition(pointA, mapViewRef);
    }
  }, [mapViewRef]);

  return (
    <MapView
      onPress={(e) => {}}
      ref={async (ref) => {
        mapViewRef = ref;
        //To control the map with the map menu component
        store.dispatch(gpsLiveMapViewRefUpdate(mapViewRef));
      }}
      style={mapStyle}
      mapType={mapType}
      showsCompass={false}
      initialCamera={initialCamera}
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
        coordinate={watchCurrentPosition}
        title={"You"}
      >
        <View
          style={{
            transform: [
              {
                rotate: `${0.0}deg`,
              },
            ],
          }}
        >
          <UserSvgComponent></UserSvgComponent>
        </View>
      </Marker>
      <Circle
        zIndex={3}
        strokeWidth={0.00001}
        fillColor={circleColor}
        center={watchCurrentPosition}
        radius={radiusForBounds}
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
      <Circle
        zIndex={0}
        strokeWidth={0.00001}
        fillColor={"rgba(252, 62, 8, 0.2)"}
        center={pointA}
        radius={10}
      ></Circle>
    </MapView>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    buttonStyle: {
      paddingTop: 12,
      position: "relative",
      marginTop: 120,
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      backgroundColor: theme.buttonColor,
      width: SCREEN_WIDTH - 155,
      height: 50,
      borderRadius: 16,
    },
    textStyleB: {
      fontSize: 20,
      color: theme.textColor,
      textAlign: "center",
      fontFamily: theme.fontFamily,
    },
    mapStyle: {
      ...StyleSheet.absoluteFillObject,
    },
  });
};
