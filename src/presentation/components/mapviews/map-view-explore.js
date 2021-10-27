import React, { useEffect } from "react";
import MapView, { Marker, Polyline } from "react-native-maps";
import { getTheme } from "../../theme/themes";
import { ActivityIndicator } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { getPositionOnce } from "../../../domain/resources/operating_system/get-position-once";
import { getLineMarkers } from "../../../domain/use_cases/get-line-markers";
import { useSelector } from "react-redux";
import {
  selectMarker,
  resetMarker,
  mapIsLoadedUpdate,
  exploreMapViewRefUpdate,
  exploreMapHeadingUpdate,
} from "../../state_management/actions/actions";
import store from "../../state_management/store/store";
import MarkerSvgComponent from "../svg_components/marker-svg";

export default function MapViewExplore() {
  const { mapView, activityIndicator, activityIndicatorView } = styles();

  useEffect(() => {
    store.dispatch(resetMarker());
    getPositionOnce(); //TODO this function bypasses use_cases
  }, []);

  const mapType = useSelector((state) => state.exploreMapTypeHandler);
  const lineMarkers = useSelector((state) => state.lineMarkersHandler);
  const aSingleCurrentPosition = useSelector(
    (state) => state.aSingleCurrentPosition
  );
  const markerCurrentlySelected = useSelector(
    (state) => state.selectedMarkerHandler
  );

  const initialCamera = {
    center: aSingleCurrentPosition,
    pitch: 2,
    heading: 0.0,
    altitude: 200000,
    zoom: 40,
  };

  let mapViewRef;

  const positionHasChanged = async function (currentRegion) {
    getLineMarkers(currentRegion);
  };

  return aSingleCurrentPosition.isLoaded === true ? (
    <MapView
      ref={async (ref) => {
        mapViewRef = ref;
        store.dispatch(exploreMapViewRefUpdate(mapViewRef));
      }}
      onRegionChange={async () => {
        const mapHeading = await mapViewRef.getCamera();
        store.dispatch(exploreMapHeadingUpdate(mapHeading.heading));
      }}
      showsUserLocation={true}
      onMapReady={() => {
        store.dispatch(mapIsLoadedUpdate(true));
      }}
      mapType={mapType}
      liteMode={true}
      showsCompass={false}
      style={mapView}
      onRegionChangeComplete={(region) => {
        positionHasChanged(region);
      }}
      initialCamera={initialCamera}
    >
      {lineMarkers.map((marker) => {
        const { id, isLoaded, markerCoordinates, markerRegion } = marker;

        if (isLoaded === true) {
          return (
            <Marker
              key={id}
              coordinate={markerCoordinates}
              centerOffset={
                id === markerCurrentlySelected.id
                  ? { x: 0.2, y: -15 }
                  : { x: 0, y: 0 }
              }
              onPress={() => {
                mapViewRef.animateToRegion(markerRegion, 1000);
                store.dispatch(selectMarker(marker));
              }}
            >
              <MarkerSvgComponent
                height={id === markerCurrentlySelected.id ? 40 : 30}
                width={id === markerCurrentlySelected.id ? 40 : 30}
              ></MarkerSvgComponent>
            </Marker>
          );
        }
      })}
      {markerCurrentlySelected.isLoaded && (
        <Polyline
          strokeColor={"white"}
          strokeWidth={4}
          coordinates={[
            {
              latitude:
                markerCurrentlySelected.rawLineData.startingCoordinates.lat,
              longitude:
                markerCurrentlySelected.rawLineData.startingCoordinates.lng,
            },
            {
              latitude:
                markerCurrentlySelected.rawLineData.finishCoordinates.lat,
              longitude:
                markerCurrentlySelected.rawLineData.finishCoordinates.lng,
            },
          ]}
        />
      )}
    </MapView>
  ) : (
    <View style={activityIndicatorView}>
      <ActivityIndicator
        animating={true}
        color={activityIndicator}
        size={"large"}
      />
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    activityIndicator: {
      color: theme.buttonColor,
    },
    activityIndicatorView: {
      height: "100%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.primaryColor,
    },
    mapView: {
      zIndex: 3,
      ...StyleSheet.absoluteFillObject,
    },
  });
};
